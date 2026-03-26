import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [todo,settodo]=useState("")
  const [todos,settodos]=useState([])
    const handleEdit=()=>{

    }

    const handleDelete=()=>{
      
    }

    const handleAdd=()=>{
      settodos([...todos,{todo,isCompleted: false}])
      settodo("")
    }

     const handleChnage=(e)=>{
      settodo(e.target.value)
    }

  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-3 rounded-lg bg-blue-300 py-4 px-3 max-w-4xl min-h-[83vh]'>

        <div className="addtodo my-2">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='bg-white rounded-sm w-1/2' onChange={handleChnage} value={todo}/>
          <button onClick={handleAdd} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-3'>Add</button>
        </div>

          <h2 className='font-bold text-lg'>Your Todos</h2>
          <div className="todos">
            {todos.map(item=>{

            return <div key={todo} className="todo flex justify-between w-1/2 py-1">
              <input type="checkbox" value={todo.isCompleted} name="" id="" />
                <div className={item.isCompleted?"line-through":""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button onClick={handleEdit} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'>Edit</button>
                  <button onClick={handleDelete} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'>Delete</button>
                </div>
            </div>
          })}
          </div>  
      </div>
    </>
  )
}

export default App