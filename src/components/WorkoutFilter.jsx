import React from 'react'

export const WorkoutFilter = ({setFilterType}) => {
  return (
    <>
    <select className="custom-select" onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All </option>
        <option value="Running">Running</option>
      <option value="Cycling">Cycling</option>
      <option value="Swimming">Swimming</option>
    </select>
    </>
  )
}
