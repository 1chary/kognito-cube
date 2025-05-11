import React from 'react'
import Header from '../Header'

const Product = () => {

  const consoleMessage = () => {
    console.log("hello this is the testing")
  }

  const todaysDate = new Date()
  const convertDateToString = todaysDate.toISOString()

  return (
    <div>
        <Header/>
        <h1>This is the Product page i have changed just now</h1>
        <span>To test weather the merge is working fine or not</span>
        <span>This is the another line to check merge is working or not</span>
        <h1>Ram siya</h1>
        <button onClick={consoleMessage}>hi welcome to the another testing phase</button>
        <h1>{convertDateToString}</h1>
    </div>
  )
}

export default Product