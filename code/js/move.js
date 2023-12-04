function moveToBottom(el) {
  requestAnimationFrame(() => {
    el.style.top = `100%`
  })
}

export { moveToBottom }
