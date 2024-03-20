// if api is used to populate blogposts
let blogPosts

async function fetchData(url) {
    try {
        const data = await fetch(url);
	    const json = await data.json();
	    return json;
    } catch (error) {
        alert('Error displaying posts:', error);
    }    
}

async function getPosts(){
    if(!blogPosts) {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        blogPosts  = await fetchData(apiUrl)
    }
}

await getPosts();
export {blogPosts}