import { handleRenderNavbar } from '../shared/navbar.js'
import { handleRenderAside } from '../shared/aside.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import goals from "./goals.js"
import goodPractices from "./goodPractices.js"
import agreements from "./agreements.js"

handleRenderNavbar("documentation")

handleRenderAside("documentation")

renderOrderedList({ description: goals.description, listItems: goals.listItems, containerId: "container-agreements" })
renderOrderedList({ description: goodPractices.description, listItems: goodPractices.listItems, containerId: 'container-good-practices' })
