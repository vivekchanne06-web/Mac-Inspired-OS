import React, { useState, useEffect } from 'react'
import MacWindow from './MacWindow'
import "./clock.scss"

const Clock = ({ windowName, setwindowsState }) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const dayName = days[time.getDay()]
  const date = time.getDate()
  const monthName = months[time.getMonth()]
  const year = time.getFullYear()
  let hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')
  const ampm = hours >= 12 ? 'pm' : 'am'
   hours = hours % 12 || 12

  return (

  <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
      <div className="clock-container">
      <div className="clock-display">
        <div className="time">{hours}:{minutes}:{seconds} {ampm}</div>
        <div className="date-info">
          <span>{dayName}</span>
          <span>{date} {monthName} {year}</span>
        </div>
      </div>
    </div>
    </MacWindow>
  )
}

export default Clock
