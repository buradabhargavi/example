function addItem(e) {
  e.preventDefault();


  //get input value
  var newName = document.getElementById('name').value;
  var newEmail = document.getElementById('email').value;
@@ -15,7 +16,18 @@ function addItem(e) {
  // localStorage.setItem("name", newName);
  // localStorage.setItem("email", newEmail);

  let infoObj = {
    name: newName,
    email: newEmail
  };

  let infoObj_serialized = JSON.stringify(infoObj);

  localStorage.setItem(infoObj.email, infoObj_serialized);

  let infoObj_deserialized = JSON.parse(localStorage.getItem("infoObj"))
  // Add event for delete 
  //form.addEventListener('click', removeItem);
  //create new li element

  var data = document.createElement('li');
@@ -24,22 +36,29 @@ function addItem(e) {

  data.className = 'list-group-item'

  //Create a delete button 
  var deleteBtn = document.createElement('input');
  deleteBtn.type = 'button';
  deleteBtn.value = 'delete';

  deleteBtn.onclick = () => {
    localStorage.removeItem(infoObj.email);
    form.removeChild(data);
  };

  //add classes to delete button 
  deleteBtn.className = 'btn-delete';

  //Append Text node to delete 
  deleteBtn.appendChild(document.createTextNode('X'));
  //add text node with input value

  data.appendChild(document.createTextNode(newName));
  data.appendChild(document.createTextNode('  ' + newEmail));

  //append child
  data.appendChild(deleteBtn);
  form.appendChild(data);
}
