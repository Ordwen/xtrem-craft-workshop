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
  static createBankWithExchangeRate (from: Currency, to: Currency, rate: number): Bank {
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
  convert (from: Currency, to: Currency, amount: number): number {
    const money: Money = new Money(amount, from)
    if (!(money.currency === to || this._exchangeRates.has(from + "->" + to))) {
      throw new MissingExchangeRateError(from, to)
    }
    if (from === to) return amount

    if (this._exchangeRates.has(from + '->' + to)) {
      return amount * this._exchangeRates.get(from + '->' + to)
    }
  }
}
