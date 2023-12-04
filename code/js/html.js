function con(letter, left) {
  return `<div class="con df_ai_jc_ce" style="left: ${left}px; top: 0%;">${letter}</div>`
}

function add(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()

  return template.content.firstChild
}

export { con, add }
