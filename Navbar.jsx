import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
   let [searchParams, setSearchParams] = useSearchParams();
   let [search, setSearch] = useState("");

   function handleClick() {
     fetch("http://localhost:8000/search?name=" + search)
       .then(data => data.json())
       .then((users) => console.log(users));
   }

   return (
     <div style={{display: "flex", background: "orange", padding: "10px 20px", gap: "50px" }}>
       <span>Users Website</span>
       <input 
         placeholder="search"
         value={search}
         onChange={e => setSearch(e.target.value)}
       />
       <button onClick={handleClick}>Search</button>
     </div>
   );
}
