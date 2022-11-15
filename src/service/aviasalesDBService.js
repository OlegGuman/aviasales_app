async function dataServer() {
  async function getData() {
    const id = await fetch('https://front-test.dev.aviasales.ru/search')
    return await id.json()
  }

  const { searchId } = await getData()

  async function getTickets(id, arr = []) {
    return await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.stop) {
          arr.push(...data.tickets)
          return getTickets(searchId, arr)
        }
        return arr
      })
      .catch(() => {
        return getTickets(searchId, arr)
      })
  }
  return getTickets(searchId)
}

export { dataServer }

//Просто отправь GET-запрос на https://front-test.dev.aviasales.ru/search и получи его.
//Отправляй GET-запросы на https://front-test.dev.aviasales.ru/tickets и передай searchId полученный из запроса выше GET-параметром.
//Request: https://front-test.dev.aviasales.ru/tickets?searchId=4niyd
//Response: {tickets: [], stop: false}
