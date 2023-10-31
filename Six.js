import React, { useEffect, useState } from 'react'

const Six = () => {
    const [data, setData]= useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=> response.json())
        .then((datas)=> setData(datas))
    },[])

  return (
    <div>
        {
            data?  ( 
                <div> <p> Title : {data.title} </p>
                <p> Body : {data.body}</p>
                 </div>
            ) : (
                <p>
                    Loading.........
                </p>
            )
        }
    </div>
  )
}

export default Six