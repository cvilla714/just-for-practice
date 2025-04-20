import { useState } from "react";
import { fetchUsers } from "../utils/fetchUsers";
import { User } from "../types/models";

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchUsers = async () =>{
        setLoading(true);
        setError(null);
        try{
            const data = await fetchUsers();
            setUsers(data);
            
        }catch(error){
            setError(error instanceof Error ? error.message: 'Failed to fetch users');
        }finally{
            setLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <button 
                onClick={handleFetchUsers}
                disabled={loading}
            >
                {loading ? 'Loading Users...' : 'Show Users'}
            </button>
            
            {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}

            {users.length > 0 && (
                <table style={{ marginTop: '1rem', width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Users;