function generateId() {
  return Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
}

function addPrice(sum) {
  let sum2 = sum % 1000
  const sum1 = (sum - sum2) / 1000
  sum2.toString().length === 2 ? (sum2 = `0${sum2}`) : sum2
  sum2.toString().length === 1 ? (sum2 = `00${sum2}`) : sum2
  const allSum = `${sum1} ${sum2} Р`
  return allSum
}

function addInfoStops(info) {
  if (info.length === 0) {
    return 'без пересадок'
  }
  if (info.length === 1) {
    return `${info.length} пересадка`
  }
  if (info.length > 1 && info.length < 4) {
    return `${info.length} пересадки`
  }
}

function getTimeTicket(time) {
  let min = time % 60
  let hours = (time - min) / 60
  if (min < 10 && min > 0) min = '0' + min
  if (hours < 10 && hours > 0) hours = '0' + hours
  if (hours >= 24) {
    let day = 1
    hours = hours - 24
    if (hours < 10 && hours > 0) hours = '0' + hours
    return `${day}д ${hours}ч ${min}м`
  }
  return `${hours}ч ${min}м`
}

function getDateTicket(date) {
  const fullDate = new Date(date)
  let hours = fullDate.getHours()
  let min = fullDate.getMinutes()
  if (min < 10) min = '0' + min
  if (hours < 10) hours = '0' + hours
  return `${hours}:${min}`
}

function getTimeDestination(time1, time) {
  let minutes = time % 60
  let hours2 = (time - minutes) / 60
  if (minutes < 10) minutes = '0' + minutes
  if (hours2 < 10) hours2 = '0' + hours2
  let time2 = `${hours2}:${minutes}`

  let splitTime1 = time1.split(':')
  let splitTime2 = time2.split(':')
  let hours = parseInt(splitTime1[0]) + parseInt(splitTime2[0])
  let min = parseInt(splitTime1[1]) + parseInt(splitTime2[1])

  hours = Math.floor(hours + min / 60)
  min = Math.floor(min % 60)
  if (hours >= 24) hours = hours - 24
  if (min < 10) min = '0' + min
  if (hours < 10) hours = '0' + hours
  return `${hours}:${min}`
}

export { addInfoStops, addPrice, generateId, getTimeTicket, getDateTicket, getTimeDestination }
