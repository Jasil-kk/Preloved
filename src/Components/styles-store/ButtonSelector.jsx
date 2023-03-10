import React from 'react'

const ButtonSelector = (props) => {
  return (
    <div>
        <button className="h-10 px-3 border border-slate-400 rounded-md hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-300">{props.content}</button>
    </div>
  )
}

export default ButtonSelector