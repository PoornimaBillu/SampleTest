import {useState} from 'react'
function Users(){
//     const[users,setUsers] = useState("admin")

//     return(
//         <div>
// <h1>This is APP Component</h1>
// { /*{users == "admin" ? <h1>This Is Admin PAGE</h1>:<h1>This is error</h1>}*/}
// {users == "admin" ? <h1>This Is Admin PAGE</h1>:" "}
// { users == "customer" ? <h1>This is Customer page</h1>:" "}

//         </div>
//     )

const [user,setUser] = useState("")
const selectedValue =(event) => {
    console.log(event.target.value)
    setUser(event.target.value)
} 
if(user == ""){
    return(
        <div>
    <select onChange={selectedValue}>
        <option>Select</option>
        <option value="admin">Admin</option>
        <option value="customer">Customer</option>
        <option value="user">User</option>
        <option value="guestuser">Guest User</option>
        <option value="invalid">Invalid</option>
    </select>

    </div>)} 

if(user == "admin"){
    return(
        <div>
            <h4>Hello.. Admin Login here</h4>
            <input type="text" placeholder='enter your token here'></input><br></br><br></br>
            <button>Submit</button>
        </div>
    )
} 
else if(user == "customer"){
    return(
        <div>
<h4>Hello Customer Welcome..</h4>
            <input type="text" placeholder='enter your username here'></input><br></br><br></br>
            <input type="text" placeholder='enter your password here'></input><br></br><br></br>
            <button>SignIn</button>
        </div>
    )
} 

if(user == "user"){
    return(
        <div>
            <h4>Hello User GoodMorning...!</h4>
            <input type="text" placeholder='enter your credentials'></input>
        </div>
    )
} 
if(user == "guestuser"){

    return(
        <div>
            <h4>Hello GusetUser GoodMorning...!</h4>
            <p>No Need to login..</p>
            
        </div>
    )
} 
else{
    return(
        <div>
            <h1 style={{color:"red"}}>This is Invalid Operation</h1>
        </div>
    )
} 

}

export default Users;