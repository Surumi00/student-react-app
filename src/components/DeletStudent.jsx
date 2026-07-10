import React from 'react'
import NavigationBar from './NavigationBar'

const DeletStudent = () => {
  return (
    <div>
        <NavigationBar/>
        <div className="container">
            <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Delete Book</label>
                <input type="text" className="form-control" />
                
            </div>
             <div className="row g-3 col col-12 col-sm-6 col-md-16 col-lg-4 col-xl-4 col-xxl-4">
                
            <button className="btn btn-success">Delete</button>
                
            </div>
            
        </div>
    </div>
  )
}

export default DeletStudent