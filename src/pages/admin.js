import { useState, useEffect } from 'react';


const Admin = (props) => {

    //var + state
    const [user, setUser] = useState(null)

    //update the user once the page loaded
    useEffect(() => {
        let u = localStorage.getItem('user')
        setUser(JSON.parse(u))
    }, []);


    if (user == null) 
        return <h1>Please Login</h1>
    else 
        return (
        <div>
            <h1>Admin page</h1>
            <p>
                Welcome to admin mangetment page
            </p>
            <img width="400px" src={user.profileImg} />
        </div>
    )
}

export default Admin;