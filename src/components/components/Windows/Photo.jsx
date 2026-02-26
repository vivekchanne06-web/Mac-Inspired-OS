import React from 'react'
import MacWindow from './MacWindow'
import "./photo.scss"


const photos = [
  "https://picsum.photos/seed/pic1/300/300",
  "https://picsum.photos/seed/pic2/300/300",
  "https://picsum.photos/seed/pic3/300/300",
  "https://picsum.photos/seed/pic4/300/300",
  "https://picsum.photos/seed/pic5/300/300",
  "https://picsum.photos/seed/pic6/300/300",
  "https://picsum.photos/seed/pic7/300/300",
  "https://picsum.photos/seed/pic8/300/300",
  "https://picsum.photos/seed/pic9/300/300",
  "https://picsum.photos/seed/pic10/300/300",
  "https://picsum.photos/seed/pic11/300/300",
  "https://picsum.photos/seed/pic12/300/300",
  "https://picsum.photos/seed/pic13/300/300",
  "https://picsum.photos/seed/pic14/300/300",
  "https://picsum.photos/seed/pic15/300/300",
  "https://picsum.photos/seed/pic16/300/300",
  "https://picsum.photos/seed/pic17/300/300",
  "https://picsum.photos/seed/pic18/300/300",
  "https://picsum.photos/seed/pic19/300/300",
  "https://picsum.photos/seed/pic20/300/300",
];


const Photo = ({ windowName, windowsState, setwindowsState }) => {
    return (
        <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState}>
<div className="mac-content">
        <div className="toolbar">
          <span className="title">Photos</span>
        </div>

        <div className="body">
          <div className="sidebar">
            <div className="item">Library</div>
            <div className="item">Albums</div>
            <div className="item">Favorites</div>
          </div>

          <div className="content">
            <div className="photo-grid">
              {photos.map((src, index) => (
                <div className="photo-icon" key={index}>
                  <img src={src}  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </MacWindow>
    )
}

export default Photo
