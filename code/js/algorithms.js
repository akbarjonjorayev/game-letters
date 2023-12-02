function random(start, end) {
  if (start > end) {
    ;[start, end] = [end, start]
  }

  const range = end - start + 1
  const randomValue = Math.random() * range

  return Math.round(start + randomValue)
}

export { random }
