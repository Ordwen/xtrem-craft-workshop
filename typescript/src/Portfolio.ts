import { Currency } from './Currency'
import { Bank } from './Bank'

export default class Portfolio {
  private readonly _amounts: Map<Currency, number> = new Map()

  add (amount: number, currency: Currency): void {
    const current = this._amounts.has(currency) ? this._amounts.get(currency) : 0
    this._amounts.set(currency, current + amount)
  }

  evaluate (to: Currency, bank: Bank): number {
    let total = 0
    for (const [from, amount] of this._amounts) {
      total += bank.convert(from, to, amount)
    }

    return total
  }
}
