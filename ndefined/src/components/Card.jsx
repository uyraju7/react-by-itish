import React from 'react'

function Card({username = "PK",myarry}) {

//console.log(props)
  return (
    <div>
      <img src = "https://media.istockphoto.com/id/1477517854/photo/group-of-friends-exploring-forest-during-vacation.jpg?s=2048x2048&w=is&k=20&c=3DiQD99Kpgaux_DP7yJ_pWFeA37fbGHA2kozlPMAEyw= " 
       alt = ""/>
      <h1 className='text-2xl bg-green-500 p-5 rounded'>card for photos {myarry}{username}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, maiores!</p>

    </div>
  )
}

export default Card
