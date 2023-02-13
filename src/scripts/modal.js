import { posts } from "./database.js";
import { createPost } from "./posts.js";


export function createModal(id, array) {
    const postContainer = document.createElement('div');
    const userContainer = document.createElement('div');
    const userAvatar = document.createElement('img');
    const username = document.createElement('p');
    const userInfo = document.createElement('span');
    const postTitle = document.createElement('h2');
    const postAbstract = document.createElement('p');
    const closeModalBtn = document.createElement('button');

    const postFound = array.find(post => post.id == Number(id));

    postContainer.classList.add('post__container');

    userContainer.classList.add('user__container');

    userAvatar.src = array.img;

    username.classList.add('username');
    username.innerText = array.user;

    userInfo.classList.add('userInfo');
    userInfo.innerText = array.stack;

    postTitle.classList.add('post__title');
    postTitle.innerText = array.title;

    postAbstract.classList.add('post__abstract');
    postAbstract.innerText = array.text;

    closeModalBtn.classList.add('closeModalBtn');
    closeModalBtn.innerText = 'X'

    userContainer.append(userAvatar, username, userInfo);
    postContainer.append(userContainer, postTitle, postAbstract);

    return postContainer
}

function closeModal() {
    const modal = document.querySelector('.modal__container');
    const closeBtn = document.querySelector('.closeModalBtn');

    closeBtn.addEventListener('click', () => {
        modal.close();
    })
}

export function renderModal(array) {
    const modal = document.querySelector('.modal__container');
    const buttons = document.querySelectorAll('.postModalBtn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mondalContent = createModal(button.dataset.postId, posts);

            modal.appendChild(mondalContent);
            modal.showModal();
            closeModal();
        })
    });
}
