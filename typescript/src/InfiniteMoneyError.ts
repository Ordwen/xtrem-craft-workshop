export class InfiniteMoneyError extends Error {
  message: string

  constructor () {
    super('Money cannot be infinite')
  }
}
