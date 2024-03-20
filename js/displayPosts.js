import { blogPosts } from "./fetch.js";
console.log(blogPosts)

// populate the html with the data
const container = document.querySelector('.container'); //class name can be different

function createBlogElement(title, body){
    const blogContainer = document.createElement('div');
    const postTitle = document.createElement('h2');
    const paragraph = document.createElement('p');
    // here css classes can be added accordingly as well

    postTitle.textContent = title
    paragraph.textContent = body
    blogContainer.append(postTitle, paragraph);
    blogContainer.classList.add('post') // class name can be different
    
    return blogContainer;
}

blogPosts.forEach(post => {
    const postElement = createBlogElement(post.title, post.body);
    container.appendChild(postElement)
});

const posts = document.querySelectorAll('.post');
export {posts}

