import React from 'react'

const Four = () => {
    const items= ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
  return (
    <div>
    {items.map((item,index)=>{
        return <li key={index}>{item}</li>
    })}
    </div>
  )
}

export default Four;