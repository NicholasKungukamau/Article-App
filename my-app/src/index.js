import React, { useReducer, useState, createContext } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"

import OurContext from "./OurContext"
import DispatchContext from "./DispatchContext"

const AnimalNamesContext = createContext()

function ourReducerFunction(state, action) {
  switch (action.type) {
    case "incrementLikes":
      return { ...state, likeCount: state.likeCount + 1 }
    case "changeSize":
      return { ...state, size: action.value }
    case "changeColor":
      return { ...state, color: action.value }
    case "changeColorAndSize":
      return { ...state, color: action.value.color, size: action.value.size }
  }
}

const initialState = {
  size: 25,
  color: "skyblue",
  likeCount: 0
}

function App() {
  const [state, dispatch] = useReducer(ourReducerFunction, initialState)
  const [names, setNames] = useState({ catName: "Meowsalot", dogName: "Barksalot" })
