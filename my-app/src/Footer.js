import React from "react"
import DispatchContext from "../DispatchContext"

function Footer(props) {
  console.log("Imagine our footer is slow.")
  const dispatch = React.useContext(DispatchContext)

  return (
    <footer className="footer">
      <p>
        Did you like this article?  
              <button  className="b3" onClick={() => dispatch({ type: "incrementLikes" })}>Like ❤️</button> </p>
      <p><button className="b2" onClick={() => dispatch({ type: "changeSize", value: 30 })}>Make the text 30px but leave the color the same</button>
      </p>
    </footer>
  )
}

export default React.memo(Footer)
