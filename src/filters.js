export const indexHandle = (index) => {
  if (typeof index !== 'number') {
    throw Error('param of indexHandle filter must be a number')
  }
  const fixIndex = Math.floor(index)
  if (fixIndex < 10 && fixIndex >= 0) {
    return '0' + (fixIndex + 1)
  }
  return '' + fixIndex
}
