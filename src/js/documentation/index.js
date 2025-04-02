import { handleRenderNavbar } from '../shared/navbar.js'
import { handleRenderAside } from '../shared/aside.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import goals from "./goals.js"

handleRenderNavbar("documentation")

handleRenderAside("documentation")

renderOrderedList({ description: goals.description, goals: goals.goals2025, containerId: "container-agreements" })
