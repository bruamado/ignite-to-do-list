import './App.css'
import rocket from "./assets/rocket.svg"
import todo from "./assets/todo.svg"
import plus from "./assets/plus.svg"
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Delete } from './components/Delete'
import { CircleCheckbox } from './components/CircleCheckbox'
import { useState } from 'react'

function App() {

  const [checked, setChecked] = useState(false);

  return (
    <>
      <header className='header'>
        <img src={rocket} />
        <img src={todo} />
      </header>

      <main>
        <div className='input-row'>
          <Input type='text' placeholder='Adicione uma nova tarefa' />
          <Button>
            <span className='createBtn'>
              {"Criar"}
              <img src={plus} />
            </span>
          </Button>
        </div>
        <CircleCheckbox checked={checked} onClick={() => setChecked(state => !state)}/>
        <CircleCheckbox checked={checked} onClick={() => setChecked(state => !state)}/>
      </main>
    </>
  )
}

export default App
