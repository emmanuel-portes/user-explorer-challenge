import { useState, useEffect } from "react";

import UserCard from "../components/UserCard";

import { getUsers } from "../services/api";
import { useDebounce } from "../hooks/hooks";

export default function Homepage() {
    const [searchQuery, setSearchQuery] = useState({query: "", city: "", company: ""});
    const debounceSearch = useDebounce(searchQuery)
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const allUsers = await getUsers(debounceSearch);
                allUsers.success ? setUsers(allUsers.data): setUsers([])
            } catch(err){
                console.error(err)
                setError("Failed to load Users")
            } finally {
                setLoading(false)
            }
        }
        loadUsers()
    }, [debounceSearch])

    return(
    <div className="home-page">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <form className="flex items-center gap-3">
            <input 
                type="text" 
                placeholder="Search by name or email" 
                className="flex-1 px-4 py-2 border border-gray-300  text-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    placeholder-gray-400"
                value={searchQuery.query}
                onChange={(e) => setSearchQuery({...searchQuery, query: e.target.value})}
            />
            <input 
                type="text" 
                placeholder="Search by city" 
                className="flex-1 px-4 py-2 border border-gray-300  text-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    placeholder-gray-400"
                value={searchQuery.city}
                onChange={(e) => setSearchQuery({...searchQuery, city: e.target.value})}
            />
            <input 
                type="text" 
                placeholder="Search by company" 
                className="flex-1 px-4 py-2 border border-gray-300  text-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    placeholder-gray-400"
                value={searchQuery.company}
                onChange={(e) => setSearchQuery({...searchQuery, company: e.target.value})}
            />
        </form>
        </div>

        {
            error && 
            <div className="bg bg-red-200 border border-red-400 font-small  max-w-6xl mx-auto px-4 py-6 gap-6"> 
                <p className=" text-red-800 pt-1" >{error}</p>  
            </div>
        }

        {
            loading ? 
                (<div className="bg bg-blue-200 border border-blue-400 font-small  max-w-6xl mx-auto px-4 py-6 gap-6"> 
                    <p className=" text-blue-800 pt-1">Loading... </p>
                </div>)  
            : ( <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                { users.map(user =>(
                    <UserCard user={user} key={user.id}/>
                ))}
            </div> )
        }

        {
            !loading && !error && users.length === 0 && 
            ( <div className="bg bg-green-200 border borde-green-400 font-small  max-w-6xl mx-auto px-4 py-6 gap-6"> 
                <p className=" text-green-800 pt-1">No Users Found</p>
            </div> )
        }
    </div>
)
}