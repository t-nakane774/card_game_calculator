"use client"
import { useState } from 'react';
import { LineChart } from './components/LineChart'

export default function Chart() {
  const [deckSize, setDeckSize] = useState<number>(40);
  const [cardSize, setCardSize] = useState<number>(3);

  return (
    <main className='flex flex-col p-24'>
      <div className="mx-auto">
        <div>
          <div className="input-box-title">デッキ枚数</div>
          <input
            type='number'
            id="deck-size"
            className="input-box w-full"
            placeholder="deck size"
            max={999}
            min={1}
            value={deckSize}
            onChange={(event) => setDeckSize(Number(event.target.value))}
          />
        </div>
        <div>
          <div className="input-box-title">引きたいカードの枚数</div>
          <input
            type='number'
            id="card-size"
            className="input-box w-full"
            placeholder="card size"
            max={999}
            min={1}
            value={cardSize}
            onChange={(event) => setCardSize(Number(event.target.value))}
          />
        </div>
      </div>
      <div className="mx-auto margin-top w-2/3">
        <LineChart deckSize={deckSize < 1000 ? deckSize : 999} cardSize={cardSize < 1000 ? cardSize : 999} />
      </div>

    </main>
  )
}