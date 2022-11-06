import { useState } from 'react'

import { generateId } from '../specialFunctions'
import { Card, FooterButton } from '../router'

export function CardList(props) {
  const { tickets } = props

  const [newArray, setNewArray] = useState(tickets.tickets.slice(0, 5))

  function addMoreCards() {
    const num = newArray.length
    const moreArr = [...newArray]
    const addCards = tickets.tickets.slice(num, num + 5)
    moreArr.push(...addCards)
    setNewArray(moreArr)
  }

  const cards = newArray.map((ticket) => {
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
