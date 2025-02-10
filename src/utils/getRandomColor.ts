function getRandomColor(): string {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  if (
    (r === g && g === b) ||
    (r === 255 && g === 255 && b === 255) ||
    (r === 0 && g === 0 && b === 0)
  ) {
    return getRandomColor()
  }
  return `rgba(${r}, ${g}, ${b}, 0.2)`
}

export default getRandomColor
