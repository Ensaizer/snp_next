import React from 'react'

export default function Search() {
  return (
    <div className="relative  w-6/12 m-auto">
 <input type="text" className="border text-white border-gray-300 rounded-md py-2 px-4 w-full bg-accent-content" placeholder="Поиск по артикулу"/>
  <ul className="absolute z-10 bg-white border border-gray-300 rounded-md py-1 mt-1 w-full">
    <li className="px-4 py-2 hover:bg-gray-100">Результат 1</li>
    <li className="px-4 py-2 hover:bg-gray-100">Результат 2</li>
    <li className="px-4 py-2 hover:bg-gray-100">Результат 3</li>
  </ul>
</div>
  )
}
