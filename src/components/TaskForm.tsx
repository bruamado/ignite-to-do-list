import { Button } from "./Button"
import { Input } from "./Input"
import plus from "../assets/plus.svg"
import { ChangeEvent, FormEvent, useState } from "react";

interface TaskFormProps {
  onSubmit: (inputValue: string) => void;
}

export const TaskForm = ({onSubmit}: TaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    onSubmit(inputValue);
    setInputValue('');
  }

  return (
    <form className='input-row' onSubmit={handleSubmit}>
      <Input type='text' placeholder='Adicione uma nova tarefa' value={inputValue} onChange={handleInputChange} required/>
      <Button type="submit">
        <span className='createBtn'>
          {"Criar"}
          <img src={plus} />
        </span>
      </Button>
    </form>
  )
}