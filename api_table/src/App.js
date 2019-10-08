import React, {Component, Fragment} from 'react';
import './App.css';





class App extends Component {
  constructor(){
    super()
    this.state={
        userArray:[],
        isLoaded : false
    }
}


componentDidMount = () => {
    
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => 
        this.setState({
            isLoaded:true,
            userArray: data
      })
     ) ;
     
    
}

render(){
    var {userArray } = this.state;
    console.log(this.state.userArray)
  return(
      <div>   
          <table className="table-style">
            <tr>
                <th>
                    Name
                </th>
                <th>
                    User Name
                </th>
                <th>
                    email
                </th>
            </tr>
              {userArray.map((user)=>
                //   <td> 
                //       <tr> Name </tr>
                //        {user.name}
                //        <br/>  <br/> <tr> User Name</tr>
                //         {user.username}
                //         <br/>  <br/>  <tr>   User Email </tr>
                //       {user.email}
                //   </td>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td><input type="text" value={user.name}></input></td>
                    <td><input type="text" value={user.username}></input></td>
                    <td><input type="text" value={user.name}></input></td>
                    <td><input   type="text" value={user.username}></input></td>
                </tr>
              )}
          </table>

      </div>

  )
}
}

export default App;
