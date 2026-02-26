import React, { useState } from 'react'
import MacWindow from './MacWindow'
import Terminal, { ColorMode } from 'react-terminal-ui'
import './cli.scss'

const Cli = ({ windowName, setWindowsState }) => {

  const commandMap = {
    about: () =>
      'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.',

    skills: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`,

    projects: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`,

    experience: () => `Senior Developer @ Tech Corp (2022 - Present)
- Led development of 5+ React applications
- Mentored junior developers

Full Stack Developer @ Web Solutions (2020 - 2022)
- Built scalable APIs with Node.js
- Designed responsive UIs with React`,

    contact: () => `Email: ankur@example.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA`,

    github: () => {
      window.open('https://github.com', '_blank')
      return 'Opening GitHub...'
    },

    resume: () => 'Resume download started...',

    social: () => `Twitter: @ankurdev
LinkedIn: /in/ankurprajapati
Portfolio: ankurprajapati.dev`,

    help: () =>
      `Available commands:
about
skills
projects
experience
contact
github
resume
social
echo <text>`
  }

  const [lines, setLines] = useState([
    { type: 'text', value: 'Welcome to My Portfolio CLI 🚀' },
    { type: 'text', value: "Type 'help' to see all commands" }
  ])

  const handleInput = (input) => {
    const [command, ...args] = input.split(' ')

    let output = 'command not found'

    if (command === 'echo') {
      output = args.join(' ')
    } else if (commandMap[command]) {
      output = commandMap[command]()
    }

    setLines(prev => [
      ...prev,
      { type: 'input', value: input },
      { type: 'text', value: output }
    ])
  }

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          name="ankurprajapati:~$"
          colorMode={ColorMode.Dark}
          onInput={handleInput}
        >
          {lines}
        </Terminal>
      </div>
    </MacWindow>
  )
}

export default Cli
