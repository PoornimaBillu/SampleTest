import logo from './logo.svg';
import './App.css';
import Users from './ComponentsCondition/Users';
import Lists from './ComponentsCondition/Lists';

function App() {
  function users(user){
    return user.fname + " " +user.lname

  } 
  function greet(user){
    if(user){
      return <h1>Hello {users(user)}</h1>
    }
    else{
    return
    <h1>Hello Guest.. </h1>
  }  

  }
const user = {
  fname: "Poornima",
  lname:"Bhuvika"
}


  const welcome = <h1>Hello ,Welcome To React Js</h1>
  return (
    <div>
      {/* <>{welcome}</>
     <Users></Users>
     <Lists></Lists>
     <div>{users(user)}</div> */}
     <div>{greet()}</div>
    </div>
  );
}

export default App;
