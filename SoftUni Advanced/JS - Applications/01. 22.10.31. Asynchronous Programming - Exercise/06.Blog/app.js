
const select = document.getElementById("posts");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const postComments = document.getElementById("post-comments");

function attachEvents() {
    const loadButton = document.getElementById("btnLoadPosts");
    loadButton.addEventListener('click', onLoadFunc);
    const viewButton = document.getElementById("btnViewPost");
    viewButton.addEventListener('click', viewFunc);
}

async function onLoadFunc() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const obj = await response.json();
        const data = Object.values(obj);
        const optElements = data.map(createOptions);
        select.replaceChildren(...optElements);
    } catch (error) {
        console.log(error.message);
    }
}

async function viewFunc(e) {
    try {
        const id = select.value;
        const allOptions = Array.from(document.querySelectorAll('option'));
        const findOpt = allOptions.find(opt => opt.value == id);
        postTitle.textContent = findOpt.textContent;
        postBody.textContent = findOpt.getAttribute("data-id");

        const response = await fetch(`http://localhost:3030/jsonstore/blog/comments/`);
        const obj = await response.json();
        const values = Object.values(obj);
        const filterCom = values.filter(com => com.postId == id);
        const allComments = filterCom.map(createComments);
        postComments.replaceChildren(...allComments);
    } catch (error) {
        console.log(error.message);
    }
}

function createOptions(input) {
    const option = document.createElement('option');
    option.setAttribute('value', `${input.id}`);
    option.setAttribute('data-id', `${input.body}`);
    option.textContent = `${input.title}`;
    return option;
}

function createComments(input) {
    const li = document.createElement('li');
    li.setAttribute('id', `${input.id}`);
    li.textContent = `${input.text}`;
    return li;
}

attachEvents();