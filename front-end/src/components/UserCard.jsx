
function UserCard({ user }) {
    return (
        <div className="bg-white border border-gray-200 shadow-sm p-5 
                       hover:shadow-md cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            <div className="mt-3 pt-3 border-t border-gray-100 space-y-1 text-sm text-gray-600">
                <p><span className="font-medium text-gray-700">Phone:</span> {user.phone}</p>
                <p><span className="font-medium text-gray-700">Company:</span> {user.company}</p>
                <p><span className="font-medium text-gray-700">City:</span> {user.city}</p>
            </div>
            
        </div>
    )
}

export default UserCard