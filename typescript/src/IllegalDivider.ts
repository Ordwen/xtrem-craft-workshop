export class IllegalDivider extends Error {
  constructor (divider: number) {
    super('Illegal divider ' + divider.toString())
  }

  message: string
}
