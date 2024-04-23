export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts"). then((res) => res.json())
}
export const getAllClothingItemTags = () => {
    return fetch("http://localhost:8088/clothingItemTags"). then((res) => res.json())
}
