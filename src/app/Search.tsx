import React from 'react'

export default function Search() {
  return (
    <div className="relative">
  <input type="text" className="border border-gray-300 rounded-md py-2 px-4 w-64" placeholder="Поиск..."/>
  <ul className="absolute z-10 bg-white border border-gray-300 rounded-md py-1 mt-1 w-64">
    <li className="px-4 py-2 hover:bg-gray-100">Результат 1</li>
    <li className="px-4 py-2 hover:bg-gray-100">Результат 2</li>
    <li className="px-4 py-2 hover:bg-gray-100">Результат 3</li>
  </ul>
</div>
  )
}
