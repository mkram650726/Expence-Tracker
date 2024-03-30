import { useState } from 'react'
import './App.css'
import { ExpenceList } from './compentes/ExpenceList'
import { ExpenceFliter } from './compentes/ExpenceFliter'
import { ExpenceForm } from './compentes/ExpenceForm'

function App() {

  const [expences, setExpences] =useState([

    {id:1 ,description:"Market",amount:100,category:"Income"},
    {id:2 ,description:"Games",amount:100,category:"Expence"},
    {id:3 ,description:"Shopping",amount:400,category:"Expence"},
    {id:4 ,description:"Business",amount:200,category:"Income"},
    {id:5 ,description:"Home Rent",amount:400,category:"Income"},
    {id:6 ,description:"Food Items",amount:100,category:"groceries"},
      
]);

const addItem =(data)=>{
  console.log(data);
  setExpences(()=>[...expences,data])
}
const deleteItem=(id)=>{
  setExpences(expences.filter(expence=>expence.id!==id))
}

const filterItem=(cat)=>{
  setExpences(expences.filter(expence=>expence.category==cat))
}
  return (
    <>
    <ExpenceForm addExpence={addItem}/>
    <ExpenceFliter filterItem={filterItem}/>
    <ExpenceList items={expences} deleteItem={deleteItem} />
    </>
  )
}

export default App
