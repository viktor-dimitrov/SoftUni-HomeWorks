function notify(message) {

  let div = document.getElementById('notification');
  let mess = message;
  div.textContent = mess;
  div.style.display = "block";

  div.addEventListener('click', hide);

  function hide(e) {
    e.target.style.display = "none";

  }

}