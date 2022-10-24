window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let title = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");

  let publishButton = document.getElementById("form-btn");
  publishButton.addEventListener('click', publishFunc);

  let prevList = document.getElementById("preview-list");

  let main = document.getElementById('main');


  let inputsArr = [firstName, lastName, age, title, genre, story]

  function publishFunc(e) {
    e.preventDefault();

    if (!firstName.value || !lastName.value || !age.value || !title.value || !story.value) {
      return
    }
  
    let li = document.createElement('li');
    li.setAttribute('class', 'story-info');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`
    article.appendChild(h4);

    let p1 = document.createElement('p');
    p1.textContent = `Age: ${age.value}`;
    article.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = `Title: ${title.value}`;
    article.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = `Genre: ${genre.value}`;
    article.appendChild(p3);

    let p4 = document.createElement('p');
    p4.textContent = `${story.value}`;
    article.appendChild(p4);

    li.appendChild(article);

    let buttonArt = document.createElement('article');

    let saveButton = document.createElement('button');
    saveButton.addEventListener('click', saveFunc);
    saveButton.setAttribute('class', 'save-btn');
    saveButton.textContent = "Save Story";
    saveButton.setAttribute('disabled')
    buttonArt.appendChild(saveButton);

    let editButton = document.createElement('button');
    editButton.addEventListener('click', editFunc);
    editButton.setAttribute('class', 'edit-btn');
    editButton.textContent = "Edit Story";
    buttonArt.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', deleteFunc);
    deleteButton.setAttribute('class', 'delete-btn');
    deleteButton.textContent = "Delete Story";
    buttonArt.appendChild(deleteButton)

    li.appendChild(buttonArt)

    prevList.appendChild(li);
    publishButton.setAttribute('disabled', true);

    inputsArr.forEach(element => {
      if (element != genre){
        element.value = "";
      }
     
      
    });


   
 
  }


  function saveFunc(e) {
    e.preventDefault();
    let data = Array.from(main.children);

    data.forEach(element => {
      element.remove()
    });

    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!";

    main.appendChild(h1)

  }

  function editFunc(e) {
    e.preventDefault();
    let data = e.target.parentElement.parentElement.children[0].children;
    let parent = e.target.parentElement.parentElement;


    firstName.value = data[0].textContent.split(' ')[1]
    lastName.value = data[0].textContent.split(' ')[2]
    age.value = data[1].textContent.split(': ')[1];
   title.value = data[2].textContent.split(': ')[1];
   genre.value = data[3].textContent.split(': ')[1];
   story.value = data[4].textContent;

publishButton.disabled = false;


parent.remove();

  }

  function deleteFunc(e) {
    e.preventDefault();
    publishButton.disabled = false;
    let data = Array.from(prevList.children);

    data.forEach((element, i) => {
      if (i != 0){
element.remove()
      }
    });



  }

}