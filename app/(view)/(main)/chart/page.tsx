"use client"
import { useState } from 'react';
import { LineChart } from './components/LineChart'

export default function Chart() {
  const [deckSize, setDeckSize] = useState<number>(40);
  const [cardSize, setCardSize] = useState<number>(3);

  return (
    <main className='flex flex-col p-24'>
      <div className="margin-top">
        <div className="input-box-title">デッキ枚数</div>
        <input
          type='number'
          id="deck-size"
          className="input-box w-full"
          placeholder="deck size"
          onChange={(event) => setDeckSize(Number(event.target.value))}
        />
      </div>
      <div className="margin-top">
        <div className="input-box-title">引きたいカードの枚数</div>
        <input
          type='number'
          id="a"
          className="input-box w-full"
          placeholder="card size"
          onChange={(event) => setCardSize(Number(event.target.value))}
        />
      </div>
      <LineChart deckSize={deckSize} cardSize={cardSize} />
    </main>
  )
}