import {
  FIRST_PACK_TICKETS,
  ALL_PACKS_TICKETS,
  SORT_STATUS_CHEAP,
  SORT_STATUS_FAST,
  SORT_STATUS_OPTIMAL,
  CHECKBOX_STATUS_ALL,
  CHECKBOX_STATUS_NO_STOPS,
  CHECKBOX_STATUS_STOPS_ONE,
  CHECKBOX_STATUS_STOPS_TWO,
  CHECKBOX_STATUS_STOPS_THREE,
  SORT_TICKETS_CHEAP,
  SORT_TICKETS_FAST,
  SORT_TICKETS_OPTIMAL,
  FILTER_CHECK_ALL,
  FILTER_CHECK_NO_STOPS,
  FILTER_CHECK_STOPS_ONE,
  FILTER_CHECK_STOPS_TWO,
  FILTER_CHECK_STOPS_THREE,
} from './actionsType'

//============actionCreatorGetTickets=========//
export const getFirstPackTickets = (payload) => {
  return { type: FIRST_PACK_TICKETS, payload }
}

export const getAllPacksTickets = (payload) => {
  return { type: ALL_PACKS_TICKETS, payload }
}

//============actionCreatorsTabs==============//
export const statusCheap = () => {
  return { type: SORT_STATUS_CHEAP }
}

export const statusFast = () => {
  return { type: SORT_STATUS_FAST }
}

export const statusOptimal = () => {
  return { type: SORT_STATUS_OPTIMAL }
}

//================actionCreatorsCheckbox=============//
export const addStateAllStops = () => {
  return { type: CHECKBOX_STATUS_ALL }
}

export const addStateNoStops = () => {
  return { type: CHECKBOX_STATUS_NO_STOPS }
}

export const addStateStopsOne = () => {
  return { type: CHECKBOX_STATUS_STOPS_ONE }
}

export const addStateStopsTwo = () => {
  return { type: CHECKBOX_STATUS_STOPS_TWO }
}

export const addStateStopsThree = () => {
  return { type: CHECKBOX_STATUS_STOPS_THREE }
}
//=================actionCreatorsSort============//
export const sortCheap = (payload) => {
  return { type: SORT_TICKETS_CHEAP, payload }
}

export const sortFast = (payload) => {
  return { type: SORT_TICKETS_FAST, payload }
}

export const sortOptimal = (payload) => {
  return { type: SORT_TICKETS_OPTIMAL, payload }
}

//==============actionCreatorsFilter==============//
export const filterAllStops = (payload) => {
  return { type: FILTER_CHECK_ALL, payload }
}

export const filterNoStops = (payload) => {
  return { type: FILTER_CHECK_NO_STOPS, payload }
}

export const filterStopsOne = (payload) => {
  return { type: FILTER_CHECK_STOPS_ONE, payload }
}

export const filterStopsTwo = (payload) => {
  return { type: FILTER_CHECK_STOPS_TWO, payload }
}

export const filterStopsThree = (payload) => {
  return { type: FILTER_CHECK_STOPS_THREE, payload }
}
