import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <p>Welcome to Intrmodl</p>
    <Link to="/uploads">Upload CSV File</Link>
  </div>
)

export default Home
