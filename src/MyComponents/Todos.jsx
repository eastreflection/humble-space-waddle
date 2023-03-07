import { toBeEmptyDOMElement } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import {TodoItem} from '../MyComponents/TodoItem';
export const Todos = (props) => {
  return (
    <div className="container" >
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.nap((todo)=>{
            return (
            <>
            <TodoItem todo={todo} />
            </>
            )})}
        
    </div>
  )
}
 