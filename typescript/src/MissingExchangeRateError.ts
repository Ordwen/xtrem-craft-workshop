import { Currency } from './Currency'

export class MissingExchangeRateError extends Error {
  constructor (from: Currency, to: Currency) {
    super('No exchange rate from ' + from + ' to ' + to)
  }

  message: string
}
