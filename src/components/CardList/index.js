//import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { generateId } from '../../utils'
import { Card, FooterButton } from '../router'

export function CardList() {
  //const { tickets } = props
  //console.log(tickets)
  const ticketsArray = useSelector((state) => state.ticketsData.data)

  //let newArray = ticketsArray.slice(0, 5)
  const [pageTickets, setPageTickets] = useState([])
  useEffect(() => {
    setPageTickets(ticketsArray.slice(0, 5))
  }, [ticketsArray])

  //const pageArray = ticketsArray.slice(0, 5)
  function addMoreCards() {
    const num = pageTickets.length
    const moreArr = [...pageTickets]
    const addCards = ticketsArray.slice(num, num + 5)
    moreArr.push(...addCards)
    setPageTickets(moreArr)
  }

  const cards = pageTickets.map((ticket) => {
    return (
      <li key={generateId()}>
        <Card ticket={ticket} />
      </li>
    )
  })
  return (
    <div>
      <ul>{cards}</ul>
      <FooterButton addMoreCards={addMoreCards} />
    </div>
  )
}
