export default class AviasalesService {
  _apiBase = 'https://front-test.dev.aviasales.ru/'

  async getSearchId() {
    const id = await fetch(`${this._apiBase}search`)
    const resId = await id.json()
    return await this.getTickets(resId.searchId)
  }

  async getTickets(id) {
    const res = await fetch(`${this._apiBase}tickets?searchId=${id}`)

    if (!res.ok) {
      throw new Error(`Не удалось получить данные ${res.status}`)
    }

    const ticketsArr = await res.json()
    return ticketsArr
  }
}

//Просто отправь GET-запрос на https://front-test.dev.aviasales.ru/search и получи его.
//Отправляй GET-запросы на https://front-test.dev.aviasales.ru/tickets и передай searchId полученный из запроса выше GET-параметром.
//Request: https://front-test.dev.aviasales.ru/tickets?searchId=4niyd
//Response: {tickets: [], stop: false}
