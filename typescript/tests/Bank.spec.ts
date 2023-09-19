import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  const bank1point2 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
  test('convert from eur to usd returns number', () => {
    let valueAfterConvertion = bank1point2.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConvertion).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    let valueAfterConvertion = bank1point2.convert(Currency.USD, Currency.USD, 10)
    expect(valueAfterConvertion).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => bank1point2.convert(Currency.EUR, Currency.KRW, 10))
      .toThrow(MissingExchangeRateError)
  })

  test('convert with different exchange rates returns different numbers', () => {
    const bank1point3 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const bank1point5 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.5)
    let valueAfterConvertion

    valueAfterConvertion = bank1point2.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConvertion).toBe(12)

    valueAfterConvertion = bank1point3.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConvertion).toBe(13)

    valueAfterConvertion = bank1point5.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConvertion).toBe(15)
  })
})
