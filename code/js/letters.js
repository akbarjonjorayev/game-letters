import * as Algorithms from './algorithms.js'
import * as appData from './data.js'
import * as HTML from './html.js'
import * as Element from './element.js'
import * as Move from './move.js'

const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode('a'.charCodeAt(0) + i)
)

const interval = appData.data.intervalOfLetters

const letterCon = document.querySelector('.letter_con')

const { width } = Element.getData(letterCon)
const { conSize } = appData.data

setInterval(() => {
  const rNum = Algorithms.random(1, letters.length - 1)
  const rPos = Algorithms.random(0, width - conSize)

  const letter = letters[rNum]
  const html = HTML.con(letter, rPos)

  letterCon.innerHTML += html

  const newEl = letterCon.lastChild
  newEl.style.top = `${-1 * conSize}px`

  console.log({ rNum, rPos })
  Move.moveToBottom()
}, interval)
