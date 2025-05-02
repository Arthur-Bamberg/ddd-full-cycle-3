import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import AddressChangedEvent from "../address-changed.event";

export default class EnviaConsoleLog1Handler
  implements EventHandlerInterface<AddressChangedEvent>
{
  handle(event: AddressChangedEvent): void {
    const { id, nome, endereco } = event.eventData;

    console.log(`Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}`); 
  }
}
