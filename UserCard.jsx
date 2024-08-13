import { Link } from "react-router-dom";

export default function UserCard({name, image, id}) {
    return (
        <div 
          style={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            gap:"30px",
            width:"400px",
            boxShadow:"4px 8px 16px gray",
            padding:"10px"
            }}
        >
            <img src={image} alt="" style={{width:"100% "}}/>
            <h3>{name}</h3>
            <Link 
                to= {`/${id}`}
                style={{
                width: "200px",
                border:"1px solid orange",
                height: "50px",
                display:"flex",
                justifyContent: "center",
                alignItems:"center",
                color:"orange",
                textDecoration:"none",
                fontSize:"20px",
                borderRadius:"10px",
            }}> more </Link>
        </div>
    );
}