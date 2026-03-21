import { useState, useEffect } from "react";

import UserCard from "../components/UserCard";

import { getUsers, getUsersBySearchCriteria } from "../services/api";

export default function Homepage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const allUsers = await getUsers();
                allUsers.success ? setUsers(allUsers.data): null
            } catch(err){
                console.error(err)
                setError("Failed to load Users")
            } finally {
                setLoading(false)
            }
        }
        loadUsers()
    }, [])

    const handleSearch =  async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchUsers = await getUsersBySearchCriteria(searchQuery);
            searchUsers.sucess ? setUsers(searchUsers.data): setUsers([])
            setError(null)
        } catch(err){
            console.error(err)
            setError("Failed to search Users.")
        } finally {
            setLoading(false)
        }

    }

    return(
    <div className="home-page">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex items-center gap-3">
            <input 
                type="text" 
                placeholder="Search by name or email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium
                    hover:bg-blue-700 transition-colors shadow-sm"> Search </button>
        </form>
        </div>

        {
            error && <div className="error-message"> {error} </div>
        }

        {
            loading ? (<div clasName = "loading-message"> Loading...</div>)  
            : ( <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                { users.length === 0 ? <p>No Users Found</p> : users.map(user =>(
                    <UserCard user={user} key={user.id}/>
                ))
                }
            </div> )
         }
    </div>
)
}