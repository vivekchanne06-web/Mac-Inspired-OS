import React from 'react'
import MacWindow from './MacWindow'
import "./pdf.scss"
const Pdf = ({ windowName, setwindowsState }) => {
    return (
        <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
            <div className="pdf-window">
                <embed src="/public/Resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Pdf