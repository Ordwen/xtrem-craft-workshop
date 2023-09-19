import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'

describe('Portfolio', function () {
  test("10 USD + 5 USD = 15 USD",()=>{

    const portfolio = new Portfolio()
    portfolio.add(10, Currency.USD)
    portfolio.add(5,Currency.USD)
    portfolio.evaluate(Currency.USD, bank)
    
  })
})
