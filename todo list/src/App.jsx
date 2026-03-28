import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo,settodo]=useState("")
  const [todos,settodos]=useState([])
    const handleEdit=()=>{
      
    }

    const handleDelete=(e,id)=>{
      let index=todos.findIndex(item=>{
        return item.id===id;
      })
      let newTodos=todos.filter(item=>{
        return item.id!==id
      });
      settodos(newTodos)
      
      console.log("del done")
    }

    const handleAdd=()=>{
      settodos([...todos,{id:uuidv4(),todo,isCompleted: false}])
      settodo("")
    }

     const handleChnage=(e)=>{
      settodo(e.target.value)
    }

    const handleCheckbox=(e) => {
      let id=e.target.name;
      let index=todos.findIndex(item=>{
        return item.id===id;
      })
      let newTodos=[...todos];
      newTodos[index].isCompleted=!newTodos[index].isCompleted
      settodos(newTodos)
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

            return <div key={item.id} className="todo flex justify-between w-1/2 py-1">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                <div className={item.isCompleted?"line-through":""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button onClick={handleEdit} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'>Edit</button>
                  <button onClick={(e)=>{handleDelete(e,item.id)}} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'>Delete</button>
                </div>
            </div>
          })}
          </div>  
      </div>
    </>
  )
}

export default App