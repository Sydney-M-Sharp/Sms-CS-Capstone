export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts"). then((res) => res.json())
}
export const getAllClothingItemTags = () => {
    return fetch("http://localhost:8088/clothingItemTags"). then((res) => res.json())
}
// get post by user. 


//     return fetch(`http://localhost:8088/customers?userId=${userId}&_expand=user`
//     ).then((res) => res.json())
// }
export const getPostByUserId = ({currentUser}) => {
    return fetch(`http://localhost:8088/posts?userId=${currentUser.id}`).then((res) => // the ? is you providing an argument to that end point.
        res.json()
)
}