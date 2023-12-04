import * as Algorithms from './algorithms.js'
import * as appData from './data.js'
import * as HTML from './html.js'
import * as Element from './element.js'
import * as Move from './move.js'
import * as Get from './get.js'
import * as Check from './check.js'

const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode('a'.charCodeAt(0) + i)
)

const letterCon = document.querySelector('.letter_con')

const { width, height } = Element.getData(letterCon)
const { conSize, intervalOfLetters } = appData.data

setInterval(() => {
  const rNum = Algorithms.random(1, letters.length - 1)
  const rPos = Algorithms.random(0, width - conSize)

  const letter = letters[rNum] || 'a'
  const html = HTML.con(letter, rPos)
  letterCon.appendChild(HTML.add(html))

  const newEl = letterCon.lastChild

  Move.moveToBottom(newEl)
  Check.letters()
}, intervalOfLetters)

document.onkeyup = (e) => {
  const { key } = e
  const cons = letterCon.querySelectorAll('.con')

  for (let i = 0; i < cons.length; i++) {
    const { top } = Element.getData(cons[i])

    if (top >= height) {
      continue
    }

    const letter = cons[i].innerText

    if (letter == key) {
      cons[i].remove()
    }
  }
}
