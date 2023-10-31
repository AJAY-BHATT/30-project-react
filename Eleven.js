import React from 'react'

export default function Eleven() {
    let quotes = [
        "hello i am ajay.","hello i am amit", "hello i am rajat", "hello i am honey", "hello i am king",
        "hello i am raman","hello i a, harsh"
    ];
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quote = quotes[randomIndex];
  return (
    <div>
    {quote}

    </div>
  )
}
