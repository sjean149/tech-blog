const post = async (event) => {
    console.log(id);

    const postId = event.currentTarget.getAttribute('data-id');
    console.log(postId);
    //window.location.href = `post/${postId}`;
  };
  
  
  document.querySelector('.post').addEventListener('click', post);