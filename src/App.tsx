import React from "react"
import ReactDOM from "react-dom"
import { Button } from "./components/Button"
import { FakeButton } from "./components/FakeButton"
import { Image } from "./components/Image"

/**
 * Test your React application with the axe-core accessibility testing library.
 * Results will show in the Chrome DevTools console.
 *
 * Call the exported function passing in the React and ReactDOM objects as well as a timing delay in milliseconds
 * that will be observed between each component change and the time the analysis starts.
 */
if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react")
  axe(React, ReactDOM, 1000)
}

function App() {
  return (
    <div>
      <Image />
      <div role="myRole">This div has a wrong rule</div>
      <div>
        <Button text="Click me NOW" onClick={() => {}} />
        <FakeButton text="Click me NOW" onClick={() => {}} />
        <div onClick={() => {}}>Click me NOW</div>
      </div>
      <div>
        <div tabIndex={0} />
        <div tabIndex={-1} />
      </div>
      <div>
        <a aria-label="Continue">Click me NOW</a>
        <a aria-label="Continue" role="button">
          Click me NOW
        </a>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" />
      </div>
      <div>
        <label>
          Email: <input type="text" />
        </label>
      </div>
    </div>
  )
}

export default App
