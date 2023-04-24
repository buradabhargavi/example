var form = document.getElementById('my-form');

// form submit event
form.addEventListener('submit',addItem);

function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById('name').value;
  var newItem1 = document.getElementById('email').value;

  //put in local storage
  localStorage.setItem("name", newItem);
  localStorage.setItem("email", newItem1);
}
