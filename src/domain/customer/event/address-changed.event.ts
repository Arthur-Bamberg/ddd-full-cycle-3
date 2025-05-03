import { IDomainEvent } from "../../@shared/domain/domain-event.interface";
import Customer from "../entity/customer";

export class AddressChanged implements IDomainEvent {
  readonly occurred_on: Date
  readonly event_version: number = 1;

  constructor(
    readonly aggregate_id: string,
    readonly customer: Customer,
  ) {
    this.occurred_on = new Date();
  }
}