import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { Money } from '../src/Money'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  const bank1point2 = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  test('convert from eur to usd returns number', () => {
    var money = new Money(10,Currency.EUR)
    const valueAfterConversion = bank1point2.convert(Currency.USD, money)
    expect(valueAfterConversion).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    var money = new Money(10,Currency.USD)
    const valueAfterConversion = bank1point2.convert(Currency.USD,money)
    expect(valueAfterConversion).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    var money = new Money(10,Currency.EUR)
    expect(() => bank1point2.convert(Currency.KRW,money)).toThrowWithMessage(MissingExchangeRateError, 'No exchange rate from EUR to KRW')
  })

  test('convert with different exchange rates returns different numbers', () => {
    const bank1point3 = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const bank1point5 = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.5)
    let valueAfterConversion: number
    var money = new Money(10,Currency.EUR)
    valueAfterConversion = bank1point2.convert(Currency.USD,money)
    expect(valueAfterConversion).toBe(12)
    money = new Money(10,Currency.EUR)
    valueAfterConversion = bank1point3.convert(Currency.USD,money)
    expect(valueAfterConversion).toBe(13)
    money = new Money(10,Currency.EUR)
    valueAfterConversion = bank1point5.convert(Currency.USD,money)
    expect(valueAfterConversion).toBe(15)
  })

  test('convert with missing exchange rate uses public exchange rate', () => {
    const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
    var money = new Money(10,Currency.EUR)
    const valueAfterConvertion = bank.convert(Currency.USD,money)
    expect(valueAfterConvertion).toBe(12)

    money = new Money(10,Currency.EUR)
    expect(() => bank.convert(Currency.KRW,money)).toThrow(MissingExchangeRateError)
    
    money = new Money(10,Currency.KRW)
    expect(() => bank.convert(Currency.EUR,money)).toThrow(MissingExchangeRateError)
    
    expect(() => bank.convert(Currency.USD,money)).toThrow(MissingExchangeRateError)
    

    money = new Money(10,Currency.USD)
    expect(() => bank.convert(Currency.KRW, money)).toThrow(MissingExchangeRateError)
    
    expect(() => bank.convert(Currency.EUR, money)).toThrow(MissingExchangeRateError)
  })
})
