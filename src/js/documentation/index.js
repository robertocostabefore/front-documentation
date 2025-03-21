import { handleRenderNavbar } from '../shared/navbar.js'
import { renderGoals } from "../shared/renderGoals.js"
import goals from "./goals.js"

handleRenderNavbar("documentation")

renderGoals({ description: goals.description, goals: goals.goals2025, containerId: "container-agreements" })
