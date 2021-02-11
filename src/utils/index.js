export const getAllMonths = (start, end, years, month) => {
  let s = +new Date(start)
  let e = end === 'present time' ? +new Date() : +new Date(end)
  let result = (e - s) / 2592000000

  return result > 12 ? `${result.toFixed()/12 >> 0} ${years} ${result.toFixed() - ((result.toFixed()/12 >> 0)*12)} ${month}`
    : `${result.toFixed()} ${month}`
}
