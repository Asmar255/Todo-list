import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo,settodo]=useState("")
  const [todos,settodos]=useState([])

  const saveData=(params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  

    const handleEdit=(e,id)=>{
      let t= todos.filter(i=>i.id===id)
      settodo(t[0].todo)
      let index=todos.findIndex(item=>{
        return item.id===id;
      })
      let newTodos=todos.filter(item=>{
        return item.id!==id
      });
      settodos(newTodos)
      saveData()
    }

    const handleDelete=(e,id)=>{
      let index=todos.findIndex(item=>{
        return item.id===id;
      }) 
      let newTodos=todos.filter(item=>{
        return item.id!==id
      });
      settodos(newTodos)
      saveData()
    }

    const handleAdd=()=>{
      settodos([...todos,{id:uuidv4(),todo,isCompleted: false}])
      settodo("")
      saveData()
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
      saveData()
    }
    

  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-3 rounded-lg bg-blue-300 py-4 px-3 max-w-4xl min-h-[83vh]'>

        <div className="addtodo my-2">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='bg-white rounded-sm w-1/2' onChange={handleChnage} value={todo}/>
          <button onClick={handleAdd} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-3'>Save</button>
        </div>

          <h2 className='font-bold text-lg'>Your Todos</h2>
          <div className="todos">
            {todos.length===0 && <div className='text-xl text-gray-700 my-3'>No Todos to display</div>}
            {todos.map(item=>{

            return <div key={item.id} className="todo flex justify-between w-1/2 py-1">
              <div className='flex gap-7'>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                <div className={`${item.isCompleted?"line-through":""} text-lg`}>
                  {item.todo}
                </div>
              </div>
                <div className="buttons">
                  <button onClick={(e)=>handleEdit(e,item.id)} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'>Edit</button>
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