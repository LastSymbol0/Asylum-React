import renderer from './renderer'

export const scrollTo = (domElementSelector) => {
  const domElement = document.querySelector(domElementSelector)
  if (domElement) {
    const domElementCoords = renderer.getElementCoords(domElement)
    window.scrollTo({
      top: domElementCoords.top - window.innerHeight / 8,
      behavior: 'smooth',
    })
  } else {
    console.warn(`No dom element with selector ${domElementSelector}`)
  }
}
