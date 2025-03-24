import { handleRenderNavbar } from '../shared/navbar.js'
import { renderOrderedList } from "../shared/renderOrderedList.js"
import goals from "./goals.js"
import agreements from './agreements.js'

handleRenderNavbar("hub")

renderOrderedList({ description: goals.description, goals: goals.goals2025, containerId: 'container-goals' })
renderOrderedList({ description: agreements.description, goals: agreements.agreements, containerId: 'container-agreements'})

// fluxo de refatoracao =>
// sem ajuste/melhoria/epico =>
//    criar o card com a tag [REFAT-VUE][MODULO(ORDER/etc)] e vincular ao MAS-XXXX

// se tiver card epico =>
//   caso não mexa em componentes compartilhados =>
//      criar o card como item filho com a tag [REFAT-VUE][MODULO(ORDER/etc)] e vincular ao MAS-XXXX
//   caso mexa em componentes compartilhados =>
//      subir em branch separada e mergear, ai linkar a o item filho com o MAS-XXXX

// se for melhoria/tarefa =>
//   criar um item vinculado, com o tipo  [implements]