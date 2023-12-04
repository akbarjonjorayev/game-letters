import * as Element from './element.js'
import * as AppData from './data.js'

const letterCon = document.querySelector('.letter_con')
const { height } = Element.getData(letterCon)

function letters() {
  const cons = letterCon.querySelectorAll('.con')

  for (let i = 0; i < cons.length; i++) {
    const { top } = Element.getData(cons[i])

    if (top >= height) {
      cons[i].remove()
      AppData.data.user.heart--
      console.log(AppData.data.user.heart)
    }
  }
}

export { letters }
