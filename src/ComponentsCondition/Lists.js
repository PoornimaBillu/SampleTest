import {useEffect,useState} from 'react';
import axios from 'axios';
function Lists(){
    const renderList=()=>{
      let uList=  users.map(users => {
           // return <li key={users.id}>{users.name}{users.address.zipcode}{users.address.geo.lng}</li> ///for list represenatation of data
           return <tr key={users.id}><td>{users.name}</td><td>{users.address.zipcode}</td><td>{users.address.geo.lng}</td></tr> //for table representation of data
        })
        return uList
    }
    const [users,setUsers]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            responce => {
                console.log(responce.data);
                console.log(responce)
                setUsers(responce.data)
            }
        )

    },[])
    if(users.length == 0 ){
        return (
            <div>
                <h1 style={{color:"green"}}>Loading....</h1>
            </div>
        )
    }
    else{
    return(
        <div>
            <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Website</th>
        
      </tr>
    </thead>
    <tbody>
    {renderList()}
     
    </tbody>
  </table>
        </div>
    )
}
    // return(
    //     <div>
    //              <h1>Lists</h1>
    //              {(users.length == 0 ? <h1>Loading.....</h1>:<ul>{renderList()}</ul>)}
    //     </div>
    // )
}
export default Lists;