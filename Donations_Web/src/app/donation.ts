export class Donation {

  public name: string;
  public surname: string;
  public amount: number;
  public currency: string;

  constructor(name: string, surname: string, amount: number, currency: string) {
    this.name = name;
    this.surname = surname;
    this.amount = amount;
    this.currency = currency;
  }
}
