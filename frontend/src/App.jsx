import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './component/AddEmployee'
import EmployeeList from './component/EmployeeList'
import UpdateEmployee from './component/UpdateEmployee'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='/addemployee' element={<AddEmployee/>}></Route>
        <Route path='/updateemployee/:id' element={<UpdateEmployee/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
