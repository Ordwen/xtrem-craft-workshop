import { number } from 'fp-ts'
import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'
import { Money } from './Money'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  /**
   * @param from
   * @param to
   * @param rate
   */
  static withExchangeRate (from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.addExchangeRate(from, to, rate)
    return bank
  }

  /**
   * @param from
   * @param to
   * @param rate
   */
  addExchangeRate (from: Currency, to: Currency, rate: number): void {
    this._exchangeRates.set(from + '->' + to, rate)
  }

  /**
   * @param from
   * @param to
   * @param amount
   */
  convert (to: Currency, money: Money ): number {
    if (!(money.currency === to || this._exchangeRates.has(money.currency + "->" + to))) {
      throw new MissingExchangeRateError(money.currency, to)
    }
    if (money.currency === to) return money.amount

    if (this._exchangeRates.has(money.currency + '->' + to)) {
      return money.amount * this._exchangeRates.get(money.currency + '->' + to)
    }
  }
}