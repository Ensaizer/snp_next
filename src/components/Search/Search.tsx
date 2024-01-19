'use client'
import React, {useEffect, useState} from 'react'


export default function Search() {
  const [value, setValue] = useState('');

  useEffect(() =>{
    let timerId = setTimeout(() => {
      if(value.length >= 2){
        search(value);
      }
    }, 500)
    return () => clearTimeout(timerId)
  }, [value])

  async function search (value:string) {
    const response = await fetch('/api/search', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({value})
    });

    return await response.json();
  }
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
   setValue(e.target.value)
  };

   return (
    <div className="relative">
  <input
      type="text"
      className="border border-gray-300 rounded-md py-2 px-4 w-64"
      placeholder="Поиск..."
      defaultValue={value}
      onChange={changeHandler}
  />
  <ul className="absolute z-10 bg-white border border-gray-300 rounded-md py-1 mt-1 w-64">
    <li className="px-4 py-2 hover:bg-gray-100">Результат 1</li>
    <li className="px-4 py-2 hover:bg-gray-100">Результат 2</li>
    <li className="px-4 py-2 hover:bg-gray-100">Результат 3</li>
  </ul>
</div>
  )
}
