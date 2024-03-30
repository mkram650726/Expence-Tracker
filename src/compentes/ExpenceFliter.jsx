import React from 'react'

export const ExpenceFliter = ({filterItem}) => {
  return (
   <select name="" id="" className="form-select mb-3" onChange={(event) => filterItem(event.target.value)}>
       <option value="">Filter Option</option>
       <option value="Income">Income</option>
       <option value="Expence">Expence</option>
       <option value="Groceries">Groceries</option>
   </select>
  )
}
