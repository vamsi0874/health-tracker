import React from 'react'

export const WorkoutSearch = ({setSearchTerm}) => {
  return (
    <>
     <input type='text' placeholder='Seacrch by name'
     onChange={(e)=>setSearchTerm(e.target.value)}
     />
    </>
  )
}
