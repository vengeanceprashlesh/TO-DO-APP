
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={[
          {
            title:"bsdk padh le ",
            description:"Karu gand lal",
            completed: false
          }
        ]}></Todos>
      </div>
    
  )
}

export default App
