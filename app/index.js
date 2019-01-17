var axios = require('axios');

// Logic
getUsers();

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', addUser);

const deleteUserBtn = document.getElementById('delete-user')
deleteUserBtn.addEventListener('click', deleteUser('Nameuser'));;

// Get Users
function getUsers(){
	axios.get('http://first-blank-sandbox.getsandbox.com/users')
	.then(function(response){
		console.log(response);
	})

	.catch(function(error){
	  console.log(error);
	});
}

// Add New User
function addUser(e){
	e.preventDefault();
	const nameInput = document.getElementById('user-form--name').value;
	const usernameInput = document.getElementById('user-form--username').value;

	axios.post('http://first-blank-sandbox.getsandbox.com/users',{
		name: nameInput,
		username: usernameInput
	})
  .then(function(response){
    console.log('saved successfully');
    console.log(response);
  })
  .catch(function(error){
  	console.log(error);
  }); 
}

// Delete User
function deleteUser(username){
	axios.delete('http://first-blank-sandbox.getsandbox.com/users',{
		username: username,
	})
  .then(function(response){
    console.log('deleted');
    console.log(response);
  })
  .catch(function(error){
  	console.log(error);
  }); 
}

