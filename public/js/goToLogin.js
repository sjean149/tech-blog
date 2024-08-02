const login = async (event) => {
    event.preventDefault();
    console.log()
  
    console.log(`client side call to redirect to login`);
    window.location.href = '/login';
  
}
  
document.querySelector('#login').addEventListener('click', login);