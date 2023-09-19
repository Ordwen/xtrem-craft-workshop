import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  const bank1 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)

  test('convert from eur to usd returns number', () => {
    expect(bank1.convert(Currency.EUR, Currency.USD, 10)).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    expect(bank1.convert(Currency.USD, Currency.USD, 10)).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => bank1.convert(Currency.EUR, Currency.KRW, 10))
      .toThrow(MissingExchangeRateError)
  })

  test('convert with different exchange rates returns different numbers', () => {
    expect(bank1.convert(Currency.EUR, Currency.USD, 10)).toBe(12)

    const bank2 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const bank3 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.5)
    expect(bank2.convert(Currency.EUR, Currency.USD, 10)).toBe(13)
    expect(bank3.convert(Currency.EUR, Currency.USD, 10)).toBe(15)
  })
})
