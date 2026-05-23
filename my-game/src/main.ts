import './style.css'
import { setupCounter } from './counter.ts'
 
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <h1>Keep clicking the cube</h1>
  <h2 id="value"></h2>
  <button id="counter" type="button" class="counter"></button>
</section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!, document.querySelector<HTMLHeadElement>('#value')!)


