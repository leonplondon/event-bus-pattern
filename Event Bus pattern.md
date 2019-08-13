# Patrones de Arquitectura

## Event Bus
Es un patrón de arquitectura que permite la comunicación entre componentes de un sistema, mediante el envio indirecto de 
mensajes entre ellos, es decir, se utiliza un tercer actor que se encarga de recibir la información y de notificar a los 
componentes que se han subscito a esta.

En este patrón los **eventos** tambien se conocen como **mensajes**.

### Componentes
* **Event source**: Encargado de generar los mensajes/eventos que son de interés para los **Event Listeners** en un **Channel** determinado
* **Event listener**: Objeto que recibirá los mensajes emitidos por un **Event Source**(fuente de eventos) en un **Channel** al que previamente se subscribió 
* **Channel**: Elemento que actúa como filtro, permitiendo entregar a cada **Event Listener** únicamente los mensajes que son de su interés
* **Event Bus**: Encargado de recibir, procesar, transportar y entregar los mensajes a los **Event Listeners**

### Diagrama

![Event Bus Diagram](/Event%20Bus.png)

### Patrón Observador vs Patrón Publish-Subscribe(Event Bus)
Aunque a simple vista parece tratarse del mismo patrón, hay que aclarar que su funcionamiento es distinto. 

El **Patrón Observador** hay un objeto conocido como *sujeto*, que mantiene una lista de objetos dependientes
(pueden ser componentes) a los que notifica de cualquier cambio en su estado mediante la invocación de un método o 
procedimiento. Esto crea una relación estrecha entre el publicador y el receptor de los mensajes.

Por otro lado, el **Patrón Event Bus** elimina esta relación, delegando la responsabilidad de entrega de los mensajes a un
actor intermedio, **Event Bus**, el cuál se encarga del procesamiento y distribución de mensajes a los objetos/componentes que 
esten interesados, los cuales dierón a conocer que mensajes(**Channel(es)**) eran de su interes al momento de conectarse al **Event Bus**

### Ventajas
* Simplifica la comunicación entre componentes de un sistema
* Componentes con bajo acoplamiento
* Facilita la subida/bajada de módulos/componentes en cualquier momento
* Permite la comunicación de componentes tanto a nivel interno de una aplicación como en aplicaciones separadas

### Desventajas
* Hace complejo entender el sistema a medida que este crece
* El **Event Source** no tiene conocimiento de si el mensaje fue recibido por algún **Event Source**
* Si no se implementa bien, puede hacer uso indebido de los recursos de hardware/software del sistema, por ejemplo, **Memory leaks**

### Uso
* Aplicaciones Android
* Sistemas de notificación
* Monitoreo de procesos
* Sistemas de trading

### Cuándo usar?
Cuando el sistema que se esta desarrollando se puede construir a partir de módulos o componentes con una funcionalidad bien definida, que requieren y pueden comunicarse entre ellos a través de mensajes simples.

### Fuentes consultadas
* [EventBus](https://github.com/greenrobot/EventBus) 
* [Message Bus a.k.a Event Bus](http://www.dossier-andreas.net/software_architecture/eventbus.html)
* [Observer vs Pub-Sub](https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c)
* [10 Common Software Architectural Patterns in a nutshell](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)
* [Observer Vs EventBus](https://medium.com/@Aida_Pro_/observer-vs-eventbus-patrones-de-dise%C3%B1o-cd8178f48c7d)
 
