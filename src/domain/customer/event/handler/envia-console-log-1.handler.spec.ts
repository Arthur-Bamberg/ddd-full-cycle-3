import { CustomerCreated } from "../customer-created.event";
import EnviaConsoleLog1Handler from "./envia-console-log-1.handler";

describe('EnviaConsoleLog1Handler', () => {
    it('should create an instance of EnviaConsoleLog1Handler', () => {
        const handler = new EnviaConsoleLog1Handler();
        expect(handler).toBeInstanceOf(EnviaConsoleLog1Handler);
    });
    
    it('should handle the event', () => {
        const handler = new EnviaConsoleLog1Handler();
        const event = new CustomerCreated('123');
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
        handler.handle(event);
    
        expect(consoleSpy).toHaveBeenCalledWith('Esse é o primeiro console.log do evento: CustomerCreated');
        consoleSpy.mockRestore();
    });
});