import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
      
      const day = daysOfWeek[now.getDay()]
      const month = months[now.getMonth()]
      const date = now.getDate()
      let hour = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hour >= 12 ? 'pm' : 'am'

      hour = hour % 12 || 12
      
      const formattedDateTime = `${day} ${month} ${date} ${hour}:${minutes} ${ampm}`
      setDateTime(formattedDateTime)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div>{dateTime}</div>
  )
}

export default DateTime