import React from 'react'
import NavigationBar from './NavigationBar'
import { useState } from 'react'

const ViewallProducts = () => {
  const[data,setdata]=useState(
    [
      
         {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"hari ","rollno:":"1"},
          {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"rithu ","rollno:":"2"},
           {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"manju ","rollno:":"3"},
            {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"babu ","rollno:":"4"},
             {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"suroo ","rollno:":"5"},
              {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"manu ","rollno:":"6"},
               {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"vathu ","rollno:":"7"},
                {"avatar":"https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2445591577.jpg","name" :"hari ","rollno:":"8"},
       
     
      
    ]
  )

  return (
    <div>
        <NavigationBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                          
                            (value,index)=>{
                              return(
                              <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                     <div className="card" >
                                        <img src={value.avatar} className="card-img-top" alt="..." height="400px" width="300px"/>
                                  <div className="card-body">
                                    <h5 className="card-title">Name :{value.name}</h5>
                                    <p className="card-text">Rollno : {value.rollno}</p>
                                    
                                  </div>
</div>
                                 </div>
                        )}
                          
                          
                        )}
                                 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewallProducts