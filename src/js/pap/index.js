import { handleRenderNavbar } from '../shared/navbar.js'
import { handleRenderAside } from '../shared/aside.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import agreements from './agreements.js'
import goodPractices from "./goodPractices.js"

handleRenderNavbar("pap")
handleRenderAside("pap")
renderOrderedList({ description: agreements.description, goals: agreements.agreements, containerId: 'container-agreements' })
renderOrderedList({ description: goodPractices.description, goals: goodPractices.goodPractices, containerId: 'container-good-practices' })
