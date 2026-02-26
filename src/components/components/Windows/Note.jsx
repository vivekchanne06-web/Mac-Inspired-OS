import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import"./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({ windowName, setwindowsState }) => {

    const [markDown, setMarkdown] = useState("")


    useEffect(() => {
        fetch("/public/Note.txt")
            .then(response => response.text())
            .then(data => setMarkdown(data))
    })

    
  return (
    <MacWindow width='40vw' height='50vh' windowName={windowName} setwindowsState={setwindowsState}>
    <div className='note-window'>
        {markDown ? <SyntaxHighlighter language="markdown" style={atelierDuneDark}>{markDown}</SyntaxHighlighter> : <p>Loading...</p>}
    </div>
    </MacWindow>
  )
}

export default Note
