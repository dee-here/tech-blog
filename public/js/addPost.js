const createPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    console.log("trying to submit post with : ", title, content);
  
    if ( title && content) {
      const response = await fetch("/api/posts/create", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Error creating Post");
      }
    }
  };
  
// add a create Post form that submits.  add-post-form !!
  document
    .querySelector(".add-post-form")
    .addEventListener("submit", createPostHandler);