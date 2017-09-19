import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'


function App (props) {
  return (
    <div className='app-container'>
      <Router>
        <div>
          <Route exact path='/' component={} />
        </div>
      </Router>
    </div>
  )
}

export default App
