import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/vinlogo.png'

function App() {
 let [stdName,setStdName]=useState("")
 let [stdPhoneNumber,setStdPhoneNumber]=useState("")
 let [stdGender,setStdGender]=useState("Male")
 let [stdOccupation,setStdOccupation]=useState("")
 let [stdLocation,setStdLocation]=useState("")
 let [joinDate,setJoinDate]=useState("5th")
 let [popupshow,setPopupShow]=useState(false)
 let [error,setError]=useState(false)

 let handle=(e)=>{
if(e.target.name=='std_Name'){
  setStdName(e.target.value)
 }
 else if(e.target.name=='std_phone'){
  setStdPhoneNumber(e.target.value)
 }
  else if(e.target.name=='std_gender'){
  setStdGender(e.target.value)
 }
 else if(e.target.name=='std_ocupation'){
  setStdOccupation(e.target.value)
 }
 else if(e.target.name=='std_location'){
  setStdLocation(e.target.value)
 }
 else if(e.target.name=='date'){
  setJoinDate(e.target.value)
 }
 }

 let submitData=(e)=>{
  e.preventDefault()

  if(stdName&&stdPhoneNumber&&stdGender&&stdOccupation&&stdLocation&&joinDate){
let obj={stdName,stdPhoneNumber,stdGender,stdOccupation,stdLocation,joinDate}
console.log(obj)
setStdName("")
setStdPhoneNumber("")
setStdGender("Male")
setStdOccupation("")
setStdLocation("")
setJoinDate("5th")
setPopupShow(true)
  }else{
    setError(true)
  }

 }

  return (
    <div className="App">
        <div className='nav'>
          <div className='row'>
            <div className='col-5 d-flex align-items-center '>
              <div className='px-2'>
                     <img src={logo} style={{width:"150px"}}/>
              </div>
            </div>
            <div className='col-7'></div>
          </div>
        </div>
        <div className='banner p-2'>
          <div className='title d-flex align-items-center justify-content-center mt-3'>
              <h1 className='text-center heading'>Vinsup WorkShop Register Form</h1>
          </div>
        
        <div className='form-container d-flex justify-content-center align-items-center mt-2'>
             <div>
                   <form>
                      <div><label>Name :</label></div>
                      <div className='inp'><input name='std_Name' value={stdName} onChange={handle}/></div>
                      <div><label>Mobile No :</label></div>
                      <div className='inp' ><input name='std_phone' value={stdPhoneNumber} onChange={handle}/></div>
                      <div><label>Gender :</label></div>
                      <div className='inp'><select onChange={handle} name='std_gender' value={stdGender}>
                        <option value="Male">Male</option>
                        <option value="FeMale">FeMale</option>
                        </select></div>
                      <div><label>Occupation :</label></div>
                      <div className='inp'><input name='std_ocupation' value={stdOccupation} onChange={handle}/></div>
                      <div><label>Location :</label></div>
                      <div className='inp'><input placeholder='Ex:Tenkasi or Tirunelveli' name='std_location' value={stdLocation} onChange={handle}/></div>
                      <div><label>Date :</label></div>
                      <div className='inp'>
                        <select onChange={handle} name='date' value={joinDate}>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        </select>
                        </div>
                      <div className='d-flex justify-content-center align-items-center mt-4'><button className='btn btn-success cursor-pointer' onClick={submitData}>Register</button></div>
                  </form>
             </div> 
        </div>
        {popupshow?
        <div className='popParent'>
        <div className='popup'>
          <div className='d-flex justify-content-end '><span className='cursor-pointer' style={{fontWeight:"700"}} onClick={()=>{setPopupShow(false)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span></div>
          <div className=' h-100 d-flex align-items-center justify-content-center'>
            <h4 className='text-white text-center'>Thanks For Your Intrest Our Team Contact You Soon</h4>
          </div>
        </div></div>:""}
         {error?
        <div className='popParent'>
        <div className='popup error'>
          <div className='d-flex justify-content-end '><span className='cursor-pointer' style={{fontWeight:"700"}} onClick={()=>{setError(false)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span></div>
          <div className=' h-100 d-flex align-items-center justify-content-center'>
            <h4 className='text-white text-center'>Please Enter All Fields</h4>
          </div>
        </div></div>:""}
        </div>
        <div className='footer '>
             <span>@</span><span>2025</span>
        </div>
    </div>
  );
}

export default App;
