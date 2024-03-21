import { posts } from "./displayPosts.js";
// filter through blogs 
const searchInput = document.getElementById('search'); // id can be different

searchInput.addEventListener('input', (e) => {
    // make the search case insensitive
    const value = e.target.value.toLowerCase();
    posts.forEach(post => {
        const isDisplayed =
            post.querySelector('h2').textContent.toLowerCase().includes(value) ||
            post.querySelector('p').textContent.toLowerCase().includes(value)
        post.classList.toggle('hidden', !isDisplayed) // class name can be different
    }); 

})
