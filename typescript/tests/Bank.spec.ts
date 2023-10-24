import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  const bank1point2 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
  test('convert from eur to usd returns number', () => {
    const valueAfterConversion = bank1point2.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConversion).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    const valueAfterConversion = bank1point2.convert(Currency.USD, Currency.USD, 10)
    expect(valueAfterConversion).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => bank1point2.convert(Currency.EUR, Currency.KRW, 10)).toThrowWithMessage(MissingExchangeRateError, 'No exchange rate from EUR to KRW')
  })

  test('convert with different exchange rates returns different numbers', () => {
    const bank1point3 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const bank1point5 = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.5)
    let valueAfterConversion: number

    valueAfterConversion = bank1point2.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConversion).toBe(12)

    valueAfterConversion = bank1point3.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConversion).toBe(13)

    valueAfterConversion = bank1point5.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConversion).toBe(15)
  })

  test('convert with missing exchange rate uses public exchange rate', () => {
    const bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const valueAfterConvertion = bank.convert(Currency.EUR, Currency.USD, 10)
    expect(valueAfterConvertion).toBe(12)

    expect(() => bank.convert(Currency.EUR, Currency.KRW, 10)).toThrow(MissingExchangeRateError)

    expect(() => bank.convert(Currency.KRW, Currency.EUR, 10)).toThrow(MissingExchangeRateError)

    expect(() => bank.convert(Currency.KRW, Currency.USD, 10)).toThrow(MissingExchangeRateError)

    expect(() => bank.convert(Currency.USD, Currency.KRW, 10)).toThrow(MissingExchangeRateError)

    expect(() => bank.convert(Currency.USD, Currency.EUR, 10)).toThrow(MissingExchangeRateError)
  })
})
