import React from 'react'
import {useForm} from "react-hook-form"


export const ExpenceForm = ({addExpence}) => {
    const {register,handleSubmit,reset, formState: {errors}}=useForm()

  return (
    <form action="" className='mb-5' onSubmit= {handleSubmit((data)=>{
    addExpence(data);
    reset()
    })}>
        
        <div className="mb-3">
            <label htmlFor="description" className="from-label"><h3>Description</h3></label>
            <input id="description" type="text" placeholder="Enter the Description"className="form-control"{ ...register("description",{minLength:6,required:true})} />
            {errors.description?.type=="required" && <p className='text-danger'>This field required</p>}
            {errors.description?.type=="minLength" && <p className='text-danger'>Atleast req 5 character</p>}
        </div>

        <div className="mb-3">
            <label htmlFor="amount" className="from-label"><h3>Amount</h3></label>
            <input id="description" placeholder="Enter the amount" type="number" className="form-control" { ...register("amount",{required:true})} />
            {errors.amount?.type=="required" && <p className='text-danger'>This field required</p>}
            
        </div>

        <div className='mb-3'>
            <label htmlFor="description" className="from-label"><h3>Category</h3></label>
            
            <select name="" id="" className='form-select ' {...register("category",{required:true})}>
                <option value="" >Select the Category</option>
                <option value="Income">Income</option>
                <option value="Expence">Expence</option>
                <option value="Groceries">Groceries</option>
            </select> 
            {errors.category?.type=="required" && <p className='text-danger'>This field required</p>}
            {errors.category?.type=="minLength" && <p className='text-danger'>Atleast req 5 character</p>}
        </div>

        <button className="btn btn-primary">Sumbit</button>
    </form>
  )
}
