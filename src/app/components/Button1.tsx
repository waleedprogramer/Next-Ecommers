import React from 'react'

interface type{
  text:string
}

function Button({text}: type) {
  return (
    <>
      <button className="inline-block rounded-md bg-black font-bold  px-8 py-3 text-center font-medium text-white hover:bg-gray-900 transition ease-in">
      {text}
      </button>
    </>
  )
}

export default Button
