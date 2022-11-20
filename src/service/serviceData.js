import { getFirstPackTickets, getAllPacksTickets } from '../redux/actions/actionCreators'

export function dataServer() {
  return async function (dispatch) {
    const allTickets = []
    const searchIdRes = await fetch('https://aviasales-test-api.kata.academy/search')

    const { searchId } = await searchIdRes.json()
    let isNotLastPackTickets = true
    let isFirstPackTickets = false

    while (isNotLastPackTickets) {
      const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

      if (ticketsResponse.status !== 200) continue

      const { tickets, stop } = await ticketsResponse.json()

      if (!isFirstPackTickets) {
        isFirstPackTickets = true
        dispatch(getFirstPackTickets(tickets))
      }

      allTickets.push(...tickets)
      if (stop) isNotLastPackTickets = false
    }

    dispatch(getAllPacksTickets(allTickets))
  }
}

//Просто отправь GET-запрос на https://front-test.dev.aviasales.ru/search и получи его.
//Отправляй GET-запросы на https://front-test.dev.aviasales.ru/tickets и передай searchId полученный из запроса выше GET-параметром.
//Request: https://front-test.dev.aviasales.ru/tickets?searchId=4niyd
//Response: {tickets: [], stop: false}
