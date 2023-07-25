import { useState} from 'react'
//useState to refllect the updated data.
import {puppyList} from './data.js'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //invoke the hook, usestate return an array an arr contains two element
  // first is the value that storing
  // second is a function which you can use to reset the value
  const [puppies, setPuppies] = useState(puppyList)
   console.log("puppyList: ", puppyList);

  //console.log(puppies, setPuppies)

  return (
    <div className="App">
      {
        puppies.map((puppy)=> {
          return <p key= {puppy.id}>{puppy.name}</p>
        })
      }
      
    </div>
  )
}

export default App
