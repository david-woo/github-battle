import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'


// Component 
// State
// Lifecycle
// UI

class App extends React.Component{
  render() {
    return (
        <div className='container'>
            Hello Dominic!!
            <Popular />
        </div>
    )
  }
}

ReactDOM.render (
    <App/>,
    document.getElementById('app')
)