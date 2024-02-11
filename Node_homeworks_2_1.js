import axios from "axios";

const urls = [
    'http://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

async function getData(urls) {
    try {
        const result = [];
        while (urls.length != 0){
            const dataLastUrl = urls.pop();
            const dataUrl = await axios.get(dataLastUrl)
            result.push(dataUrl.data);
        }
        console.log(result)
        return result
    } catch (error) {
        console.log({error})
    }
}

getData(urls)