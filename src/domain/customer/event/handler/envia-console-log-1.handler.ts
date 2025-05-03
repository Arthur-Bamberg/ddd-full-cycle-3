import { CustomerCreated } from "../customer-created.event";

export default class EnviaConsoleLog1Handler {
  handle(event: CustomerCreated): void {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
  }
}
