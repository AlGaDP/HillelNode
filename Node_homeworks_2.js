import axios from "axios";

const urls = [
    'http://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

async function getData(urls) {
    try {
        const result = await Promise.all(urls.map(async (url) => {
            const { data } = await axios.get(url);
            return data
        }));
        console.log(result)
    } catch (error) {
        console.log({error})
    }
}

getData(urls);