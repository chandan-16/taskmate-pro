import { Header } from './components/header/Header'
import { AddTask } from './components/addTask/AddTask'
import { ShowTask } from './components/showTask/ShowTask'

import './App.css'

function App() {
  
  return (
    <>
      <div className='App'>
        <Header />
        <AddTask />
        <ShowTask />
      </div>      
    </>
  )
}

export default App
