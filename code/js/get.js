function CSSProperties(cssString) {
  const styleDeclarations = cssString.split(';')

  const { property, value } = styleDeclarations.reduce(
    function (acc, declaration) {
      const parts = declaration.split(':')

      if (parts.length == 2) {
        acc.property.push(parts[0].trim())
        acc.value.push(parts[1].trim())
      }

      return acc
    },
    { property: [], value: [] }
  )

  return { property, value }
}

function allNumbers(txt) {
  const matches = txt.match(/\d+/g)
  return matches ? matches.map(Number) : []
}

export { CSSProperties, allNumbers }
