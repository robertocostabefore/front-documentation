import { handleRenderNavbar } from '../shared/navbar.js'
import { handleRenderFooter } from '../shared/footer.js'
import { handleRenderAside } from '../shared/aside.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import agreements from './agreements.js'
import goodPractices from "./goodPractices.js"
import errors from "./errors.js"
import architecture from "./architecture.js"

handleRenderNavbar("pap")
handleRenderAside("pap")
handleRenderFooter()

renderOrderedList({ description: agreements.description, listItems: agreements.listItems, containerId: 'container-agreements' })
renderOrderedList({ description: goodPractices.description, listItems: goodPractices.listItems, containerId: 'container-good-practices' })

architecture.forEach(item => renderOrderedList(item))
errors.forEach(item => renderOrderedList(item))
