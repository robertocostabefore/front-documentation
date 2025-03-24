import { handleRenderNavbar } from '../shared/navbar.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import goals from "./goals.js"

handleRenderNavbar("documentation")

renderOrderedList({ description: goals.description, goals: goals.goals2025, containerId: "container-agreements" })
