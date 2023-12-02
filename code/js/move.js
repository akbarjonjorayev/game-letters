import * as Element from './element.js'
import * as appData from './data.js'

const { movingRange, conSize } = appData.data

const letterCon = document.querySelector('.letter_con')
const { height } = Element.getData(letterCon)

function moveToBottom() {
  const letters = letterCon.children

  setInterval(() => {
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i]
      const { top } = Element.getData(letter)

      if (top >= height - conSize) letter.remove()
      letter.style.top = `${top + movingRange}px`
    }
  })
}

export { moveToBottom }
