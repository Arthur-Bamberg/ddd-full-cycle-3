import Customer from "../../entity/customer";
import Address from "../../value-object/address";
import { AddressChanged } from "../address-changed.event";
import { EnviaConsoleLogHandler } from "./envia-console-log.handler";

describe('EnviaConsoleLogHandler', () => {
    it('should create an instance of EnviaConsoleLogHandler', () => {
        const handler = new EnviaConsoleLogHandler();
        expect(handler).toBeInstanceOf(EnviaConsoleLogHandler);
    });

    it('should handle the event', () => {
        const handler = new EnviaConsoleLogHandler();
        const customer = new Customer('123', 'John Doe');
        const address = new Address('Street 1', 123, 'City', 'State');
        customer.changeAddress(address);
        const event = new AddressChanged('1', customer);
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        handler.handle(event);

        expect(consoleSpy).toHaveBeenCalledWith(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.Address.toString()}`);
        consoleSpy.mockRestore();
    });
});