import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const [isLoaded, setIsLoaded] = useState(false)
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      settodos(todos)
    }
    setIsLoaded(true)  // ✅ mark as loaded
  }, [])

  useEffect(() => {
    if (isLoaded)  // ✅ only save AFTER data has been loaded
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)

  }

  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)

  }

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")

  }

  const handleChnage = (e) => {
    settodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    settodos(newTodos)
  }

    const toggleFinished=(e) => {
      setshowFinished(!showFinished)
    }
    


  return (
    <>
      <Navbar />
      <div className='md:container md:mx-auto my-3 rounded-lg bg-blue-300 py-4 px-3 max-w-4xl min-h-[83vh] md:w-1/2'>
        <h1 className='font-bold text-2xl text-center'>iTask - Your todo Taker</h1>

        <div className="addtodo my-2 flex flex-col gap-2">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='bg-white rounded-sm w-full py-1' onChange={handleChnage} value={todo} />
          <button onClick={handleAdd} disabled={todo.length<=3} className='cursor-pointer bg-blue-400 hover:bg-blue-500 disabled:bg-blue-600 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'>Save</button>
        </div>
          
          <input  onChange={toggleFinished} type="checkbox" checked={showFinished} id="" /> Show Finished

        <h2 className='font-bold text-lg'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='text-xl text-gray-700 my-3'>No Todos to display</div>}

          {todos.map(item => {
            return (showFinished || !item.isCompleted) && 
            <div key={item.id} className="todo flex justify-between w-auto py-1 md:w-1/2">
              <div className='flex gap-7 '>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={`${item.isCompleted ? "line-through" : ""} text-lg`}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'><MdModeEditOutline /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='cursor-pointer bg-blue-400 hover:bg-blue-500 p-3 py-1 rounded-md text-white text-sm font-bold mx-1'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App