interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export const fetchUsers = async (): Promise<User[]> =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        return await response.json();
    }catch(error){
        console.error('Fetch error', error)
        throw error;
    }
};