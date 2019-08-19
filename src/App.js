import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import Image from "./components/image/image"
import Button from "./components/button/button"
import FakeButton from "./components/fakeButton/fakeButton"

/**
 * Test your React application with the axe-core accessibility testing library.
 * Results will show in the Chrome DevTools console.
 *
 * Call the exported function passing in the React and ReactDOM objects as well as a timing delay in milliseconds
 * that will be observed between each component change and the time the analysis starts.
 */
if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe")
  axe(React, ReactDOM, 1000)
}

function App() {
  return (
    <div className="App">
      <Button classes="button" text="Click me NOW" />
      <br />
      <br />
      <button role="button">CLICK ME</button>
      <br />
      <br />
      <button className="nonVisibleButton">CAN YOU SEE ME??</button>
      <br />
      <br />
      <div onClick={() => {}} />
      <div tabIndex={0} />
      <br />
      <br />
      <FakeButton classes="button" text="Click me NOW" />
      <br />
      <br />
      <a aria-label="Continue">Click me NOW</a>
      <br />
      <a aria-label="Continue" role="button">
        Click me NOW
      </a>
      <br />
      <a role="myCustomRole">Click me NOW</a>
      <a />
      <br />
      <div tabIndex={-1} />
      <hr />
      <br />
      <br />
      <Image src="https://cms-assets.tutsplus.com/uploads/users/30/posts/29042/preview_image/a11y.png" />
      <br />
      <br />
      <img
        width="200px"
        src="https://cms-assets.tutsplus.com/uploads/users/30/posts/29042/preview_image/a11y.png"
      />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <label>Email: </label>
      <input type="text" />
      <br />
      <label>
        Email: <input type="text" />
      </label>
    </div>
  )
}

export default App
