"use client"
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

type DeckSize = {
  max: number;
  min: number;
}

const maxDeckSize = 60;
const minDeckSize = 0;

export default () => {
  const [targetDeck, setTargetDeck] = useState<DeckSize>({ max: maxDeckSize, min: minDeckSize });


  return (
    <main>
      {/* <Line data={data} /> */}
    </main>
  )
}