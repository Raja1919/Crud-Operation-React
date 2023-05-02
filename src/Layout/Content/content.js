import "./content.css";
import Table from "../Table/table";
import Form from '../Form/form'
import { useState } from "react";

const Content = () => {
  const UsersData = [
    { id: 1, name: "raja", username: "aart" }
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
}


  const [users, setUsers] = useState(UsersData);

  return (
    <div className="container">
      <h1>CRUD OPERATION</h1>
      <div className=" ">
        <div className="col">
          <h2>AddUser</h2>
          <Form addUser={addUser}/>
        </div>
        <div className="col">
          <h2>ViewUser</h2>
          <Table deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
};

export default Content;
