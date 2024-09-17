
const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#contents').value.trim();
  
    if (title && contents) {
      const response = await fetch('/api/users/createPost', {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData.message);
        document.location.reload();
      } else {
        console.log('Failed to log in:', response.statusText);
      }
  
    }
};
  
document
  .querySelector('.create-post')
  .addEventListener('submit', postFormHandler);