export const eraseFromDatabase = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).then((res) => res.json())

}
