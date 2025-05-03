import { AddressChanged } from "../address-changed.event";

export class EnviaConsoleLogHandler {

  handle(event: AddressChanged): void {
    console.log(`Endereço do cliente: ${event.customer.id}, ${event.customer.name} alterado para: ${event.customer.Address.toString()}`);
  }
}