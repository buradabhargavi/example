e.preventDefault();

  //get input value
  var newItem = document.getElementById('name').value;
  var newItem1 = document.getElementById('email').value;
  var newName = document.getElementById('name').value;
  var newEmail = document.getElementById('email').value;

  //put in local storage
  localStorage.setItem("name", newItem);
  localStorage.setItem("email", newItem1);
  // localStorage.setItem("name", newName);
  // localStorage.setItem("email", newEmail);

  let infoObj = {
    name: newName,
    email: newEmail
  };

  let infoObj_serialized = JSON.stringify(infoObj);

  localStorage.setItem("key", infoObj_serialized);

  let infoObj_deserialized = JSON.parse(localStorage.getItem("infoObj"))

}
