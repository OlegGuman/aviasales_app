import {
  FIRST_PACK_TICKETS,
  ALL_PACKS_TICKETS,
  SORT_TICKETS_CHEAP,
  SORT_TICKETS_FAST,
  SORT_TICKETS_OPTIMAL,
  FILTER_CHECK_ALL,
  FILTER_CHECK_NO_STOPS,
  FILTER_CHECK_STOPS_ONE,
  FILTER_CHECK_STOPS_TWO,
  FILTER_CHECK_STOPS_THREE,
} from '../actions/actionsType'

const initialState = {
  data: [],
  isLoading: true,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_PACK_TICKETS:
      return {
        ...state,
        data: [...action.payload].sort((a, b) => {
          return a.price - b.price
        }),
        basicTickets: [...action.payload].sort((a, b) => {
          return a.price - b.price
        }),
      }
    case ALL_PACKS_TICKETS:
      return {
        ...state,
        data: [...state.data, ...action.payload].sort((a, b) => {
          return a.price - b.price
        }),
        basicTickets: [...state.data, ...action.payload].sort((a, b) => {
          return a.price - b.price
        }),
        isLoading: false,
      }
    case SORT_TICKETS_CHEAP:
      return {
        ...state,
        data: [
          ...state.data.sort((a, b) => {
            return a.price - b.price
          }),
        ],
        basicTickets: [...state.basicTickets.sort((a, b) => a.price - b.price)],
      }
    case SORT_TICKETS_FAST:
      return {
        ...state,
        data: [
          ...state.data.sort((a, b) => {
            if (action.payload === 'fast') {
              return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
            }
          }),
        ],
        basicTickets: [
          ...state.basicTickets.sort((a, b) => {
            return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
          }),
        ],
      }
    case SORT_TICKETS_OPTIMAL:
      return {
        ...state,
        data: [
          ...state.data.sort((a, b) => {
            if (action.payload === 'optimal') {
              return (
                a.price -
                b.price +
                (a.segments[0].duration + a.segments[1].duration) -
                (b.segments[0].duration + b.segments[1].duration)
              )
            }
          }),
        ],
        basicTickets: [
          ...state.basicTickets.sort((a, b) => {
            return (
              a.price -
              b.price +
              (a.segments[0].duration + a.segments[1].duration) -
              (b.segments[0].duration + b.segments[1].duration)
            )
          }),
        ],
      }

    case FILTER_CHECK_ALL:
      if (action.payload.isChecked) {
        return { ...state, data: [...state.basicTickets] }
      }

      return { ...state, data: [] }
    case FILTER_CHECK_NO_STOPS:
      if (action.payload.isChecked) {
        if (action.payload.isAllChecked.checked) {
          return { ...state, data: [...state.basicTickets] }
        }
        return {
          ...state,
          data: [
            ...state.data,
            ...state.basicTickets.filter((item) => {
              return item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0
            }),
          ],
        }
      }
      return {
        ...state,
        data: [
          ...state.data.filter((item) => {
            return item.segments[0].stops.length !== 0 && item.segments[1].stops.length !== 0
          }),
        ],
        dataNonStops: [
          ...state.basicTickets.filter((item) => {
            if (item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0) {
              return item
            }
          }),
        ],
      }
    case FILTER_CHECK_STOPS_ONE:
      if (action.payload.isChecked) {
        if (action.payload.isAllChecked.checked) {
          return { ...state, data: [...state.basicTickets] }
        }
        return {
          ...state,
          data: [
            ...state.data,
            ...state.basicTickets.filter((item) => {
              return item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1
            }),
          ],
        }
      }
      return {
        ...state,
        data: [
          ...state.data.filter((item) => {
            return item.segments[0].stops.length !== 1 && item.segments[1].stops.length !== 1
          }),
        ],
      }
    case FILTER_CHECK_STOPS_TWO:
      if (action.payload.isChecked) {
        if (action.payload.isAllChecked.checked) {
          return { ...state, data: [...state.basicTickets] }
        }
        return {
          ...state,
          data: [
            ...state.data,
            ...state.basicTickets.filter((item) => {
              return item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2
            }),
          ],
        }
      }
      return {
        ...state,
        data: [
          ...state.data.filter((item) => {
            return item.segments[0].stops.length !== 2 && item.segments[1].stops.length !== 2
          }),
        ],
      }
    case FILTER_CHECK_STOPS_THREE:
      if (action.payload.isChecked) {
        if (action.payload.isAllChecked.checked) {
          return { ...state, data: [...state.basicTickets] }
        }
        return {
          ...state,
          data: [
            ...state.data,
            ...state.basicTickets.filter((item) => {
              return item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3
            }),
          ],
        }
      }
      return {
        ...state,
        data: [
          ...state.data.filter((item) => {
            return item.segments[0].stops.length !== 3 && item.segments[1].stops.length !== 3
          }),
        ],
      }

    default:
      return state
  }
}

export default ticketsReducer
