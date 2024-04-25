export const getAllTypes = () => {
    return fetch("http://localhost:8088/types"). then((res) => res.json())
}