import { Currency } from './Currency'
import { CurrencyMismatchError } from './CurrencyMismatchError'

export class Money {
  public readonly currency: Currency
  public readonly amount: number

  constructor (amount: number, currency: Currency) {
    this.currency = currency
    this.amount = amount
  }

  add (money: Money): Money {
    if (money.currency === this.currency) {
      return new Money(money.amount + this.amount, this.currency)
    }

    throw new CurrencyMismatchError(this, money)
  }

  times (value: number): Money {
    return new Money(this.amount * value, this.currency)
  }

  divide (value: number): Money {
    return new Money(this.amount / value, this.currency)
  }

  equals (money: Money): boolean {
    return money.currency === this.currency && money.amount === this.amount
  }
}
