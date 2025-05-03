import { CustomerCreated } from "./customer-created.event";

describe('CustomerCreated', () => {
  it('should create an instance of CustomerCreated', () => {
    const event = new CustomerCreated('123');

    expect(event).toBeInstanceOf(CustomerCreated);
    expect(event.aggregate_id).toBe('123');
    expect(event.occurred_on).toBeInstanceOf(Date);
    expect(event.event_version).toBe(1);
  });
});