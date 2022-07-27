import AAVue from './AA.vue'
import {applyVueInReact} from 'veaury'
const AA = applyVueInReact(AAVue)
function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <AA/>
    </div>
  )
}

export default App
