import { CustomerCreated } from "../customer-created.event";
import EnviaConsoleLog2Handler from "./envia-console-log-2.handler";

describe('EnviaConsoleLog2Handler', () => {
    it('should create an instance of EnviaConsoleLog2Handler', () => {
        const handler = new EnviaConsoleLog2Handler();
        expect(handler).toBeInstanceOf(EnviaConsoleLog2Handler);
    });
    
    it('should handle the event', () => {
        const handler = new EnviaConsoleLog2Handler();
        const event = new CustomerCreated('123');
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
        handler.handle(event);
    
        expect(consoleSpy).toHaveBeenCalledWith('Esse é o segundo console.log do evento: CustomerCreated');
        consoleSpy.mockRestore();
    });
});