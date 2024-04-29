export const savePostToDatabase = (post) => {
   return fetch("http://localhost:8088/posts",{
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(post)
    }).then((res) => res.json())

}