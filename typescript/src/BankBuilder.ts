import { Bank } from './Bank'
import { Currency } from './Currency'

export class BankBuilder {
  private pivotCurrency: Currency
  private readonly exchangeRates: Array<{
    currency: Currency
    rate: number
  }> = []

  static aBank (): BankBuilder {
    return new BankBuilder()
  }

  static aEuropeanBank = (): BankBuilder => BankBuilder.aBank().withPivotCurrency(Currency.EUR)

  withPivotCurrency (currency: Currency): BankBuilder {
    this.pivotCurrency = currency
    return this
  }

  withExchangeRate (currency: Currency, rate: number): BankBuilder {
    this.exchangeRates.push({ currency: currency, rate: rate })
    return this
  }

  build (): Bank {
    const bank = Bank.withExchangeRate(this.pivotCurrency, this.exchangeRates[0].currency, this.exchangeRates[0].rate)
    this.exchangeRates.forEach(exchangeRate => {
      bank.addExchangeRate(this.pivotCurrency, exchangeRate.currency, exchangeRate.rate)
      bank.addExchangeRate(exchangeRate.currency, this.pivotCurrency, 1 / exchangeRate.rate)
    })

    return bank
  }
}
