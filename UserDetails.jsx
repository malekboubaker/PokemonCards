import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetails() {
    
    // link front with back 
    let { id } = useParams();
    let [user, setUser] = useState(null); 

    useEffect(() => {
        fetch("http://localhost:8000/" + id)
            .then((data) => data.json())
            .then((user) => setUser(user));
    }, [id]);

    if (!user) {
        return <div>User not found!!</div>;
    }

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRight: "1px solid gray",
                padding: "40px 60px"
            }}>
                <img src={user.image} alt={user.name} />
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>
            <div style={{ fontSize: "30px", padding: "40px 60px" }}>
                <h3>Name: {user.name}</h3>
                <h3>Phone: {user.phone}</h3>
                <h3>Address</h3>
                <ul style={{ listStyle: "none" }}>
                    <li>Street: {user?.address?.street}</li>
                    <li>Suite: {user?.address?.suite}</li>
                    <li>City: {user?.address?.city}</li>
                    <li>Zipcode: {user?.address?.zipcode}</li>
                </ul>
                <h3>Work details</h3>
                <ul style={{ listStyle: "none" }}>
                    <li>Company: {user?.company?.name}</li>
                    <li>Website: {user?.website}</li>
                </ul>
            </div>
        </div>
    );
}
