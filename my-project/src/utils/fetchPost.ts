interface Post {
    id: number;
    title: string;
    body: string

}

export const fecthPosts = async (): Promise<Post[]> =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        return await response.json();
    }catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};