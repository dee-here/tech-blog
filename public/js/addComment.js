const createCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();

  if (content) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Error creating Comment");
    }
  }
};

// add a create Post form that submits.  add-post-form !!
document
  .querySelector(".add-comment-form")
  .addEventListener("submit", createCommentHandler);
