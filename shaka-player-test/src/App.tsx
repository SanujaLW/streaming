import { Shaka } from './components/shaka'
import './App.css'

function App() {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <Shaka 
        manifestUri='http://localhost:8080/streams/Intro.mpd'
      />
    </div>
  )
}

export default App
