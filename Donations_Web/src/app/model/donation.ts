export class Donation {

  public name: string;
  public surname: string;
  public amount: number;
  public currency: number;
  public currencyStr: string;

  constructor(name: string, surname: string, amount: number, currency: number) {
    this.name = name;
    this.surname = surname;
    this.amount = amount;
    this.currency = currency;
    this.currencyStr = (currency === 1 ? 'EUR' : 'USD');
  }
}
