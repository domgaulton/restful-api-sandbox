var axios = require('axios');

// Logic
getUsers();

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', addUser);

const deleteForm = document.getElementById('delete')
deleteForm.addEventListener('submit', deleteUser);;

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
		userId: 1,
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
function deleteUser(e){
	e.preventDefault();
	const deleteUsername = document.getElementById('delete--username').value;
	axios.delete(`http://first-blank-sandbox.getsandbox.com/users/${deleteUsername}`)
	
	// axios.delete('http://first-blank-sandbox.getsandbox.com/users',{
	// 	username: deleteUsername
	// })
	// axios.delete('http://first-blank-sandbox.getsandbox.com/users',{
	// 	data: {
	// 		username: deleteUsername
	// 	}
	// })
	// axios({
 //    method: 'DELETE',
 //    url: 'http://first-blank-sandbox.getsandbox.com/users',
 //    data: {
 //      username: deleteUsername
 //    }
 //  })

  .then(function(response){
    console.log('deleted');
    console.log(response);
  })
  .catch(function(error){
  	console.log(error);
  }); 
}


