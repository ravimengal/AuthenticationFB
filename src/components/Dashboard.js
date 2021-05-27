import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import  mat from "../images/mat.jpg"
import "./Card.css"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
     <h1 className="heading">YOU ARE LOGGED IN </h1>
      <div className="dashboard">
       
        <img className="mat" src={mat} alt="something"/>
        </div>
      <Card style={{border: '2px solid black' }}>
        <Card.Body >
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>        {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout} style={{textDecoration:'none'}}>
          Log Out
        </Button>
      </div>
    </>
  )
}
