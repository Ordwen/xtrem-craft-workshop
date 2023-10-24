import { Currency } from './Currency'
import { Bank } from './Bank'
import { Money } from './Money'

export default class Portfolio {
  private readonly _amounts: Map<Currency, number> = new Map()

  add (amount: number, currency: Currency, money: Money = new Money(amount,currency)): void {
    const current = this._amounts.has(money.currency) ? this._amounts.get(money.currency) : 0
    this._amounts.set(money.currency, current + money.amount)
  }

  evaluate (to: Currency, bank: Bank): number {
    let total = 0
    for (const [from, amount] of this._amounts) {
      total += bank.convert(from, to, amount)
    }

    return total
  }
}
