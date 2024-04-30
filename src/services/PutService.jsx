export const updatePostInDatabase = (updatedPost) => {
    return fetch(`http://localhost:8088/posts/${updatedPost.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    }).then((res) => res.json())

}