import { useEffect, useState } from "react";
import UserCards from "../components/Usercards";

export default function Home() {

    // link front with back 
    
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000")
            .then((data) => data.json())
            .then((users) => setUsers(users));
    }, []);

    return (
        <div>
            <UserCards users={users} />
        </div>
    );
}
 