import { Post } from '../types/models';

export const fecthPosts = async (start:number): Promise<Post[]> =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        return await response.json();
    }catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};