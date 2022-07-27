import React from "react"
import OurContext from "../OurContext"
import DispatchContext from "../DispatchContext"

function Sidebar(props) {
  const state = React.useContext(OurContext)
  const dispatch = React.useContext(DispatchContext)