import { renderPosts } from "./posts.js";

function newPost(array) {

    const inputs = document.querySelectorAll('.newPost__input');

    const post = {};

    let emptyInput = 0

    inputs.forEach(input => {
        if (input.value === "") {
            emptyInput++
        }

        post[input.name] = input.value;
    })

    post.id = array.length + 1;

    if (emptyInput != 0) {
        alert('Favor preencher todos os campos.')
    }

    
    array.push(post);
}

export function newPostEvent(array) {
    const submitBtn = document.querySelector('.newPost__submitBtn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        newPost(array);
        renderPosts(array);
        
    })
}