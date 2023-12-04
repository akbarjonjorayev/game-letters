function getData(el) {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  const parentRect = el.parentElement.getBoundingClientRect()

  return {
    // size
    width: +rect.width.toFixed(0),
    height: +rect.height.toFixed(0),
    // position
    top: +(rect.top - parentRect.top).toFixed(0),
  }
}

export { getData }
