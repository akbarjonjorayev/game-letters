import * as Element from './element.js'
import * as appData from './data.js'
import * as Get from './get.js'

// const { movingRange, conSize, intervalOfLetters } = appData.data

// const letterCon = document.querySelector('.letter_con')
// const { height } = Element.getData(letterCon)

function moveToBottom(el) {
  requestAnimationFrame(() => {
    el.style.top = `100%`
  })
}

export { moveToBottom }
