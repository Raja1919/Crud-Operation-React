import { useState } from "react"
import './form.css'



const Form =(props)=>{

    const initialState={id:null,name:"",username:""}

    const[user,setUser]=useState(initialState)

    const handleInput=(e)=>{
       const{name,value} =e.target

       setUser({...user,[name]:value})
       
    }

    return(
        <form onSubmit={
            e=>{
                e.preventDefault()
                if(!user.name||!user.username)return;
                props.addUser(user)
                setUser(initialState)
            }
        }>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" onChange={handleInput} class="form-control" name="name" value={user.name}/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="text" onChange={handleInput} class="form-control" name="username" value={user.username}/>
        </div>
       
       
        
        <div className="mt-3">
          <button type="submit" class="btn btn-primary">Add User</button>
        </div>
      </form>
    )
}
export default Form