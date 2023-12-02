function getData(el) {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  const parentRect = el.parentElement.getBoundingClientRect()

  // const style = window.getComputedStyle(el)

  return {
    // size
    width: +rect.width.toFixed(0),
    height: +rect.height.toFixed(0),
    // position
    top: +(rect.top - parentRect.top).toFixed(0),
    right: +(rect.right - parentRect.left).toFixed(0),
    bottom: +(rect.bottom - parentRect.top).toFixed(0),
    left: +(rect.left - parentRect.left).toFixed(0),
    // index
    index: Array.from(el.parentElement.children).indexOf(el),
  }
}

export { getData }
