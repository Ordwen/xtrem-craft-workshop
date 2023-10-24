import { Currency } from './Currency'

export class Money {
  currency: Currency
  amount: number

  constructor (amount: number, currency: Currency) {
    this.currency = currency
    this.amount = amount
  }

  add (money: Money): Money {
    if (money.currency === this.currency) {
      return new Money(money.amount + this.amount, this.currency)
    } else {
      return null
    }
  }

  times (money: Money): Money {
    if (money.currency === this.currency) {
      return new Money(money.amount * this.amount, this.currency)
    } else {
      return null
    }
  }

  divide (money: Money): Money {
    if (money.currency === this.currency) {
      return new Money(this.amount / money.amount, this.currency)
    } else {
      return null
    }
  }

  equals (money: Money): boolean {
    return money.currency === this.currency && money.amount === this.amount
  }
}
