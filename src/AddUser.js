import React from 'react'
import {useState} from 'react'

const AddUser =(props) => {

const initUser = {id: null, name: '', username: ''};

const [user, setUser] = useState(initUser);

const handleChange = (e) => {

const {name, value} = e.target;
setUser({...user, [name]: value});   
} 

const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.username) return

     props.addUser(user);
    setUser(initUser)
}


    return (
        <div>
         <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" value={user.name}  onChange={handleChange}/>
            <label>Username</label>
            <input className="u-full-width" type="text" name="username" value={user.username} onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit}>Add user</button>
        </form>  
        </div>
    )
}

export default AddUser