import React from "react"
import DispatchContext from "../DispatchContext"

function Footer(props) {
  console.log("Imagine our footer is slow.")
  const dispatch = React.useContext(DispatchContext)