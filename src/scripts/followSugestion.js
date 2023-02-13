import { suggestUsers } from "./database.js";

function createCardSuggest(user) {
    const userContainer = document.createElement('li');
    const userAvatar = document.createElement('img');
    const username = document.createElement('p');
    const userInfo = document.createElement('span');
    const followBtn = document.createElement('button')

    userContainer.classList.add('user__container');

    userAvatar.src = user.img;

    username.classList.add('username');
    username.innerText = user.user;

    userInfo.classList.add('userInfo');
    userInfo.innerText = user.stack;

    followBtn.classList.add('followBtn')
    followBtn.innerText = 'Seguir'


    userContainer.append(userAvatar, username, userInfo, followBtn);

    return userContainer;
}

export function suggestRender(array) {
    const suggestUl = document.querySelector('.follow__container');

    array.forEach(user => {
        const card = createCardSuggest(user);
        suggestUl.appendChild(card);
    });
}

export function followBtnToggle() {
    const followBtns = document.querySelectorAll('.followBtn');

    followBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('followedBtn');
            button.classList.toggle('followBtn');
            
            if(button.innerText == 'Seguir'){
                button.innerText = 'Seguindo';
            }else if (button.innerText = 'Seguindo'){
                button.innerText = 'Seguir';
            }
        })
    })
}

