import React, { useState } from 'react'
import "./app.scss"
import Doc from './components/Doc'
import Nav from './components/Nav'
import Github from './components/components/Windows/Github'
import Note from './components/components/Windows/Note'
import Pdf from './components/components/Windows/Pdf'
import Spotify from './components/components/Windows/Spotify'
import Cli from './components/components/Windows/Cli'
import Clock from './components/components/Windows/Clock'
import Calculator from './components/components/Windows/Calculator'
import Photo from './components/components/Windows/Photo'




const App = () => {

const [windowsState, setwindowsState] = useState({
    Github: false,
    Note:false,
    Pdf: false,
    Spotify :false,
    Clock:false,
    Calculator: false,
    Photo: false
})

  return (
   <main>
    <Nav/>
    <Doc setwindowsState={setwindowsState}/>
    {windowsState.Github && <Github  windowName="Github" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    {windowsState.Note && <Note windowName="Note" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    {windowsState.Pdf && <Pdf windowName="Pdf" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    {windowsState.Spotify && <Spotify windowName="Spotify" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    {/* {windowsState.Cli && <Cli windowName="Cli" windowsState={windowsState} setwindowsState={setwindowsState}/>} */}
    {windowsState.Clock && <Clock windowName="Clock" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    {windowsState.Calculator && <Calculator windowName="Calculator" windowsState={windowsState} setwindowsState={setwindowsState}/>}
    {windowsState.Photo && <Photo windowName="Photo" windowsState={windowsState} setwindowsState={setwindowsState}/>}
   </main>
  )
}

export default App