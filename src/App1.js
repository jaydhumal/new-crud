import React from 'react'
import Table from './Table'
import {useState} from 'react'
import AddUser from './AddUser';
import EditUser from './EditUser'

const App1 = () => {

const userList = [ {id: 1,name: 'Frank',username: 'Frank Degrassi'},
                   {id: 2,name: 'Birgit',username: 'Birgit Boswald'}
                 ];

const [users, setUsers] = useState(userList);

const [editing, setEditing] = useState(false);
 
 
const initialUser = {id: null, name: '', username: ''};

const [currentUser, setCurrentUser] = useState(initialUser);

const deleteUser = (id) => {

   setUsers(users.filter((user) => user.id !== id));

}  

const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }
  
const editUser = (id, user) => {

     setEditing(true);
    setCurrentUser(user);
  }

const updateUser = (newUser) => {
    setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
    setEditing(false);

  }
    
    return (

<div className="container">

      <h3 ><center>React CRUD App with Hooks</center></h3>
      <div className="row">


        <div className="five columns">

        { editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUser 
                currentUser={currentUser}
                setEditing={setEditing}
               editUser={editUser}
                updateUser={updateUser}
                deleteUser={deleteUser}      
                       />
            </div>
    ) : (
        <div>
          <h2 className="jay1">Add user</h2>
          <AddUser addUser={addUser}   />
        </div>
      )}



{/* 
          <h2 className="jay1">Add user</h2>
          <AddUser  addUser={addUser}/> */}
        </div>


        <div className="seven columns">
          <h2 className="jay1">View users</h2>
          <Table  users={users}  deleteUser={deleteUser}  editUser={editUser}    />
        </div>


      </div>
    </div>    )
}

export default App1