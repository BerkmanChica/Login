
import React from 'react'
import { AuthProvide } from './context/authcontex'
import FormsFirebase from ".//page/FormsFirebase"
const App = () => {
  return (
    <div>

      <AuthProvide>
        <h1>INCIO DE SESION</h1>
        <FormsFirebase />
      </AuthProvide>
    </div>
  )
}

export default App
