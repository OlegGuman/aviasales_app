const allStops = () => {
  return { type: 'ALL_STOPS' }
}

const noStops = () => {
  return { type: 'NO_STOPS' }
}

const stopsOne = () => {
  return { type: 'STOPS_ONE' }
}

const stopsTwo = () => {
  return { type: 'STOPS_TWO' }
}

const stopsThree = () => {
  return { type: 'STOPS_THREE' }
}

export { allStops, noStops, stopsOne, stopsTwo, stopsThree }
