import { handleRenderNavbar } from '../shared/navbar.js'
import { handleRenderAside } from '../shared/aside.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import agreements from './agreements.js'
import goodPractices from "./goodPractices.js"
import errors from "./errors.js"
import architecture from "./architecture.js"

handleRenderNavbar("pap")
handleRenderAside("pap")
renderOrderedList({ description: agreements.description, goals: agreements.agreements, containerId: 'container-agreements' })
renderOrderedList({ description: goodPractices.description, goals: goodPractices.goodPractices, containerId: 'container-good-practices' })
renderOrderedList({ description: architecture.description, goals: architecture.architecture, containerId: 'container-architecture' })
renderOrderedList({ description: errors.description, goals: errors.errors, containerId: 'container-errors' })
