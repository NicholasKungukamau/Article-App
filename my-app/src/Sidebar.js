import React from "react"
import OurContext from "../OurContext"
import DispatchContext from "../DispatchContext"

function Sidebar(props) {
  const state = React.useContext(OurContext)
  const dispatch = React.useContext(DispatchContext)

  return (
    <div className="sidebar">
      <input type="text" value={state.size} onChange={e => dispatch({ type: "changeSize", value: e.target.value })} />
      <input type="text" value={state.color} onChange={e => dispatch({ type: "changeColor", value: e.target.value })} />
      <button className="b1"
        onClick={() => {
          dispatch({ type: "changeColorAndSize", value: { color: "green", size: 20 } })
        }}
      >
        Make the text 20px and green
      </button>
    </div>
  )
}

export default Sidebar
