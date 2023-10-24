import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import Portfolio from '../src/Portfolio'

describe('Portfolio', function () {
  test('Empty portfolio', () => {
    const portfolio = new Portfolio()
    const bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const evaluation = portfolio.evaluate(Currency.USD, bank)
    expect(evaluation).toBe(0)
  })

  test('Add to portfolio', () => {
    const portfolio = new Portfolio()
    portfolio.add(10, Currency.USD)
    const bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const evaluation = portfolio.evaluate(Currency.USD, bank)
    expect(evaluation).toBe(10)
  })

  test('10 USD + 5 USD = 15 US', () => {
    const portfolio = new Portfolio()
    portfolio.add(10, Currency.USD)
    portfolio.add(5, Currency.USD)
    const evaluation = portfolio.evaluate(Currency.USD, Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2))
    expect(evaluation).toBe(15)
  })

  test('5 USD + 10 EUR = 17 USD', () => {
    const portfolio = new Portfolio()
    const bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    portfolio.add(5, Currency.USD)
    portfolio.add(10, Currency.EUR)
    const evaluation = portfolio.evaluate(Currency.USD, bank)
    expect(evaluation).toBe(17)
  })
})
