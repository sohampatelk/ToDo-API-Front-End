// Grab the index list of all todos.
const allToDos = document.getElementById( 'index' );
// If available, proceed.
if ( allToDos )
{ // Run Axios to obtain list.
  axios.get( 'https://localhost:44320/api/ToDoItems' )
    // Get just the data from the response.
    .then( response => response.data )
    // "Process" our data (JSON object or array.)
    .then( data => {
      console.log( data );
      // Output list of todos.
      // data.forEach( toDo => {

      // } );
    } );
}

// Grab the "create" ToDo form.
const createToDo = document.getElementById('create');