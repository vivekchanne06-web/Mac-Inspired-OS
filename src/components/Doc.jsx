import React from 'react'
import "./Doc.scss"
import Clock from './components/Windows/Clock'
const Doc = ({setwindowsState}) => {
  return (
    <footer className='dock'>
        <div onClick={() => { setwindowsState(state => ({ ...state, Github: true })) }}
         className="icon github"> <img src="./icons/github.svg" alt="" /></div>

        <div   onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
        className="icon calendar"> <img src="./icons/calender.svg" alt="" /></div>

        <div onClick={() => { setwindowsState(state => ({ ...state, Note: true })) }}
        className="icon note"> <img src="./icons/note.svg" alt="" /></div>

        <div onClick={() => { setwindowsState(state => ({ ...state, Pdf: true })) }}
        className="icon pdf"> <img src="./icons/pdf.svg" alt="" /></div>

        <div onClick={() => { setwindowsState(state => ({ ...state, Spotify: true })) }}
        className="icon spotify"> <img src="./icons/spotify.svg" alt="" /></div>

        <div onClick={()=>{window.open("https://mail.google.com/mail/u/0/#inbox?compose=newhttps://mail.google.com/mail/u/0/?view=cm&to=recipient@example.com&cc=cc@example.com&bcc=bcc@example.com&su=Subject&body=Body%20text   ","_blank")}}
        className="icon mail"> <img src="./icons/mail.svg" alt="" /></div>

        <div  onClick={()=>{window.open("https://www.linkedin.com/in/vivek-channe-948898357/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FQCLqftwR02vxYgG0YwNwQ%3D%3D","_blank")}}
        className="icon link"> <img src="./icons/link.svg" alt="" /></div>

        {/* <div onClick={() => { setwindowsState(state => ({ ...state, cli: true })) }}
        className="icon cli"> <img src="./icons/cli.svg" alt="" /></div> */}

        <div onClick={() => { setwindowsState(state => ({ ...state, Clock: true })) }}
        className="icon clock"> <img src="./icons/clock.svg" alt="" /></div>

        <div onClick={() => { setwindowsState(state => ({ ...state, Calculator: true })) }}
        className="icon calculator"> <img src="./icons/calculator.svg" alt="" /></div>

        <div onClick={() => { setwindowsState(state => ({ ...state, Photo: true })) }}
        className="icon photo"> <img src="./icons/photos.svg" alt="" /></div>
    </footer>
  )
}

export default Doc
