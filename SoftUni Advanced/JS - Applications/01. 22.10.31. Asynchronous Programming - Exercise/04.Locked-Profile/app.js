async function lockedProfile() {

    const response = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
    const data = await response.json();
    const main = document.getElementById("main");
    let values = Object.values(data);
    main.innerHTML = '';


    values.forEach(id => {
        
        const div = document.createElement('div');
        div.setAttribute('class', 'profile');
        div.innerHTML = `				<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${id.username}" disabled readonly />
        <div id="user1HiddenFields" style=display:none>
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${id.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user1Age" value="${id.age}" disabled readonly />`

            const button = document.createElement('button');
            button.textContent = "Show more";
            button.addEventListener('click', showMore)
            div.appendChild(button);
            main.appendChild(div);
        
    });

    function showMore(e) {
        e.preventDefault();
        let btn = e.target;
        let parent = btn.parentElement;
        let hiddenInfo = parent.children[9];
        let lock = parent.children[2];
        let unlock = parent.children[4];
       
        if (unlock.checked == true  ) {
            if(btn.textContent == 'Show more'){
                hiddenInfo.style.display = 'block';
                btn.textContent = "Hide it";
            } else {
                hiddenInfo.style.display = 'none';
                btn.textContent = "Show more";
            }
        } 
    }

   

   
}