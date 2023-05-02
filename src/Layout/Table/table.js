


const Table=(props)=>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>userName</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody> 
                {props.users.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td >
                        <button onClick={()=>props.deleteUser(user.id)} className="btn btn-primary">delete</button>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
    )
}
export default Table