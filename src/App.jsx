import { useState} from 'react'
//useState to refllect the updated data.
import {puppyList} from './data.js'
import './App.css'


function App() {
  //invoke the hook, usestate return an array an arr contains two element
  // first is the value that storing
  // second is a function which you can use to reset the value
  const [puppies, setPuppies] = useState(puppyList)
   console.log("puppyList: ", puppyList);
   const [featPupId, setFeatPupId] = useState(null) // set the defauly to null
   //console.log("puppy id: ", puppy.id)

   const featuredPup = puppies.find((pup)=> pup.id === featPupId)
   console.log(featuredPup);
   

  return (
    <div className="App">
      <h1>Puppy Pals List</h1>
      <h3>Click puppy's name to show their address</h3>
      { featPupId && <p>{featPupId}</p>}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Ag: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {
        puppies.map((puppy)=> {
          return (
          <button onClick={()=>{ setFeatPupId(puppy.id)}} 
          key= {puppy.id}>{puppy.name}
          </button>
          )  
        })}
    </div>
  )}


export default App
