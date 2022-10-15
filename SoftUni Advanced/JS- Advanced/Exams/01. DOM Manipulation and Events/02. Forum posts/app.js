window.addEventListener("load", solve);

function solve() {
 
  let title = document.getElementById("post-title");  //input
  let category = document.getElementById("post-category");  //input
  let content = document.getElementById("post-content");  // textarea
  let publishButton = document.getElementById("publish-btn");   //button;
  publishButton.addEventListener('click', publishFunc);

  let revList = document.getElementById("review-list" );
  let uploadPosts = document.getElementById('published-list');

  let buttonClear = document.getElementById("clear-btn");
  buttonClear.addEventListener('click', clearFunc);
 

  function publishFunc (e) {
    e.preventDefault();

    if (!title.value || !category.value || !content.value) {
      return
    }
  
    let li = document.createElement('li');
    li.setAttribute('class','rpost')
    let art = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `${title.value}`;

    let p1 = document.createElement('p');
    p1.textContent = `Category: ${category.value}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${content.value}`;

    art.appendChild(h4);
    art.appendChild(p1);
    art.appendChild(p2);

    let buttonEdit = document.createElement('button');
    buttonEdit.addEventListener('click', editFunc)
    buttonEdit.setAttribute('class', 'action-btn edit');
    buttonEdit.textContent = 'Edit';

    let buttonApprove = document.createElement('button');
    buttonApprove.addEventListener('click', approveFunc);
    buttonApprove.setAttribute('class', 'action-btn approve');
    buttonApprove.textContent = 'Approve';

    li.appendChild(art);
    li.appendChild(buttonEdit);
    li.appendChild(buttonApprove);

    revList.appendChild(li);

    title.value = '';
    category.value = '';
    content.value = '';

  }

  function editFunc (e) {

    let data = e.target.parentElement;
    let  elements = data.children[0].children;

    title.value = elements[0].textContent;
    category.value = elements[1].textContent.split(': ')[1];
    content.value = elements[2].textContent.split(': ')[1];
    data.remove();
  }

  function approveFunc (e) {
    e.preventDefault();
    let data = e.target.parentElement;
    uploadPosts.appendChild(data);

    let buttons = Array.from(data.querySelectorAll('button'));
    buttons.forEach(element => {
      element.remove();
    });
  
  }

  function clearFunc (e) {
   let data = Array.from(uploadPosts.children)
   data.forEach(element => {
    element.remove()
    
   });
  } 
}
