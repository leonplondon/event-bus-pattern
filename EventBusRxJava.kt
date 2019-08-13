// https://android.jlelse.eu/super-simple-event-bus-with-rxjava-and-kotlin-f1f969b21003

import io.reactivex.Observable
import io.reactivex.subjects.PublishSubject

// A nivel de aplicación, se crea una sola instancia del Event Bus.
object RxBus {

  private val publisher = PublishSubject.create<Any>()
    
  // Un Event Source envía un mensaje/evento de cualquier tipo
  fun publish(event: Any) {
      publisher.onNext(event)
  }

  // Agregar un Event Listener para mensajes de tipo T
  fun <T> subscribe(eventType: Class<T>): Observable<T> = publisher.ofType(eventType)
}

class EventSource() {
  fun generateEventOrMessage(data: String) {
    RxBus.publish(data)
  }
}

class EventListener() {
  init {
    RxBus
      .subscribe(String::class.java)
      .subscribe { data ->
        println("Received data $data")
      }
  }
}

fun main() {
  val eventSource = EventSource()
  val eventListener = EventListener()
  
  eventSource.generateEventOrMessage("1")
  eventSource.generateEventOrMessage("2")
  eventSource.generateEventOrMessage("End")
}
