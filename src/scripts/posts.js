import { posts } from "./database.js";

export function createPost(post){
    
    const postLi = document.createElement('li');
    const userContainer = document.createElement('div');
    const userAvatar = document.createElement('img');
    const username = document.createElement('p');
    const userInfo = document.createElement('span');
    const postTitle = document.createElement('h2');
    const postAbstract = document.createElement('p');
    const postForm = document.createElement('div');
    const openModalBtn = document.createElement('button');
    const likeBtn = document.createElement('button');
    const likeCont = document.createElement('span');

    postLi.classList.add('post');
    
    userContainer.classList.add('user__container');

    userAvatar.src = post.img;

    username.classList.add('username');
    username.innerText = post.user;

    userInfo.classList.add('userInfo');
    userInfo.innerText = post.stack;

    postTitle.classList.add('post__title');
    postTitle.innerText = post.title;

    postAbstract.classList.add('post__abstract');
    postAbstract.innerText = `${post.text.substring(0, 160)}...`;

    postForm.classList.add('post__form-container');
    
    openModalBtn.classList.add('postModalBtn');
    openModalBtn.innerText = 'Abrir Post'
    openModalBtn.dataset.postId = post.id;

    likeBtn.classList.add('likeBtn');
    likeBtn.img = "../src/assets/img/likeb.svg";

    likeCont.classList.add('like__cont');
    likeCont.innerText = post.likes;

    userContainer.append(userAvatar, username, userInfo);
    postForm.append(openModalBtn, likeBtn, likeCont);

    postLi.append(userContainer, postTitle, postAbstract,postForm);

    return postLi;
}


export function renderPosts(array){
    const postsContainer = document.querySelector('.posts__container');

    array.forEach(post => {
        const postCard = createPost(post);
        postsContainer.appendChild(postCard);
        
    });
}