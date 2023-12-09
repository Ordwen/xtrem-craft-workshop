import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { BankBuilder } from '../src/BankBuilder'
import { Money } from '../src/Money'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  const bank1point2 = BankBuilder.aBank()
    .withPivotCurrency(Currency.EUR)
    .withExchangeRate(Currency.USD, 1.2)
    .build()
  test('convert from eur to usd returns number', () => {
    var money = new Money(10, Currency.EUR)
    const valueAfterConversion = bank1point2.convert(Currency.USD, money)
    expect(valueAfterConversion).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    var money = new Money(10, Currency.USD)
    const valueAfterConversion = bank1point2.convert(Currency.USD, money)
    expect(valueAfterConversion).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    var money = new Money(10, Currency.EUR)
    expect(() => bank1point2.convert(Currency.KRW, money)).toThrowWithMessage(MissingExchangeRateError, 'No exchange rate from EUR to KRW')
  })

  test('convert with different exchange rates returns different numbers', () => {
    const bank1point3 = BankBuilder.aBank()
      .withPivotCurrency(Currency.EUR)
      .withExchangeRate(Currency.USD, 1.3)
      .build()
    const bank1point5 = BankBuilder.aBank()
      .withPivotCurrency(Currency.EUR)
      .withExchangeRate(Currency.USD, 1.5)
      .build()
    let valueAfterConversion: number
    var money = new Money(10, Currency.EUR)
    valueAfterConversion = bank1point2.convert(Currency.USD, money)
    expect(valueAfterConversion).toBe(12)
    money = new Money(10, Currency.EUR)
    valueAfterConversion = bank1point3.convert(Currency.USD, money)
    expect(valueAfterConversion).toBe(13)
    money = new Money(10, Currency.EUR)
    valueAfterConversion = bank1point5.convert(Currency.USD, money)
    expect(valueAfterConversion).toBe(15)
  })

  test('convert with missing exchange rate uses public exchange rate', () => {
    const bank = BankBuilder.aBank()
      .withPivotCurrency(Currency.EUR)
      .withExchangeRate(Currency.USD, 1.2)
      .build()
    var money = new Money(10, Currency.EUR)
    const valueAfterConvertion = bank.convert(Currency.USD, money)
    expect(valueAfterConvertion).toBe(12)

    money = new Money(10, Currency.EUR)
    expect(() => bank.convert(Currency.KRW, money)).toThrow(MissingExchangeRateError)

    money = new Money(10, Currency.KRW)
    expect(() => bank.convert(Currency.EUR, money)).toThrow(MissingExchangeRateError)

    expect(() => bank.convert(Currency.USD, money)).toThrow(MissingExchangeRateError)

    money = new Money(10, Currency.USD)
    expect(() => bank.convert(Currency.KRW, money)).toThrow(MissingExchangeRateError)
  })

  test('Round tripping doesn\'t exceed 1% error', () => {
    const bank = BankBuilder.aBank()
      .withPivotCurrency(Currency.EUR)
      .withExchangeRate(Currency.USD, 1.2)
      .build()

    // convert 10 EUR to USD and back
    const money = new Money(10, Currency.EUR)
    const maxError = 0.01 * money.amount
    const intermediate = bank.convert(Currency.USD, money)
    const result = bank.convert(Currency.EUR, new Money(intermediate, Currency.USD))
    expect(result).toBeLessThan(money.amount + maxError)
    expect(result).toBeGreaterThan(money.amount - maxError)

    // convert 10 EUR TO KRW and back
    const bank2 = BankBuilder.aBank()
      .withPivotCurrency(Currency.EUR)
      .withExchangeRate(Currency.KRW, 1300)
      .build()
    const money2 = new Money(10, Currency.EUR)
    const maxError2 = 0.01 * money2.amount
    const intermediate2 = bank2.convert(Currency.KRW, money2)
    const result2 = bank2.convert(Currency.EUR, new Money(intermediate2, Currency.KRW))
    expect(result2).toBeLessThan(money2.amount + maxError2)
  })
})
