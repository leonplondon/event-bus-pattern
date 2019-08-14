// This must be execute with NodeJS

// Communication layer;
const Emitter = require('events').EventEmitter;

class Message {
	constructor(event, data) {
		this.event = event;
		this.data = data;
	}

	toString() {
		return JSON.stringify(this);
	}
}

// Event Bus, this is the shared class that must be share by components
const EventBus = new Emitter();

// Event Listener
const listener1 = (message) => {
	console.log(`Received data on listener1: ${message.toString()}`);
}

// Event Listener
const listener2 = (message) => {
	console.log(`Received data on listener2: ${message.toString()}`)
}

// Subscribe Event Listener to Event Bus single channel
EventBus.on('event1', listener1);

// Subscribe Event Listener to Event Bus multiple channels
EventBus.on('event2', listener2);
EventBus.on('event2', listener1);
EventBus.on('event3', listener2);

// Event source
(() => {
	EventBus.emit('event1', new Message('event1', { message: 'Emit to only one listener' }));
	EventBus.emit('event2', new Message('event2', { message: 'Emit to two listeners' }));
	EventBus.emit('event3', new Message('event3', { message: 'Emit to only one listener' }));
})();

// Unsubscribe Event Listener from Event Bus
EventBus.removeListener('event2', listener2);
EventBus.emit('event2', new Message('event2', { message: 'Listener 2 is not interested anymore on event2' }));
