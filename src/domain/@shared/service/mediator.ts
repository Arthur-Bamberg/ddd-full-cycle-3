import  EventEmitter from 'eventemitter2'
import { AggregateRoot } from '../domain/aggregate-root';

export class Mediator {

    eventEmitter: EventEmitter;

    register(eventName: string, listener: any) {
        this.eventEmitter.on(eventName, listener);
    }

    async publish(aggregate_root: AggregateRoot) {
        const events = aggregate_root.events
        for (const event of events) {
            await this.eventEmitter.emitAsync(event.constructor.name);
        }
    }

}