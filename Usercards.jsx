import UserCard from "./UserCard";
export default function UserCards({users}) {
    return (
        <div style={{
            display:"flex",
            flexWrap: "wrap",
            justifyContent:"center",
            margin:"50px"
        }}>
            {users.map((user, index) => (
              <UserCard key={index} name={user.name} image={user.image} id={user.id}/>
            ))}
        </div>
    );
}