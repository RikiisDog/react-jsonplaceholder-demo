import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [filterdUsers, setFilterdUsers] = useState([]);
    const ref = useRef();
    const handleChange = () => {
        setFilterdUsers(users.filter((user) => user.name.toLowerCase().includes(ref.current.value)));
    };
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => setUsers(data));
    }, []);
    return (
        <div className="App">
            <div className="main">
                <h2>Search App</h2>
                <input type="text" ref={ref} onChange={() => handleChange()} />
                <div className="content">
                    {filterdUsers.map((user) => (
                        <div className="box" key={user.id}>
                            <h3>{user.username}</h3>
                            <hr />
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
