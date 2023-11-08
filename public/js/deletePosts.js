const deletePostsHandler = async (event) => {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const deletedPostResponse = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    });
    if(deletedPostResponse.ok){
    document.location.replace('/dashboard');
    } else {
        console.log('Error Deleting Post!', deletedPostResponse.statusText);
    }
}


document
  .querySelector("#delete-post")
  .addEventListener("click", deletePostsHandler);