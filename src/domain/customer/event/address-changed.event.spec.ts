import Customer from "../entity/customer";
import { AddressChanged } from "./address-changed.event";

describe('AddressChanged', () => {
  it('should create an instance of AddressChanged', () => {
    const customer = new Customer('123', 'John Doe');
    const event = new AddressChanged('123', customer);
    
    expect(event).toBeInstanceOf(AddressChanged);
    expect(event.aggregate_id).toBe('123');
    expect(event.customer).toEqual(customer);
    expect(event.occurred_on).toBeInstanceOf(Date);
    expect(event.event_version).toBe(1);
  });
});