export const getAllSeasons = () => {
    return fetch("http://localhost:8088/seasons"). then((res) => res.json())
}

// export const getSeasonById= (seasonId) => {
//     return fetch(`http://localhost:8088/seasons?id=${seasonId}`). then((res) => res.json())
// }

export const getSeasonById= (seasonId) => {
    return fetch(`http://localhost:8088/seasons/${seasonId}`). then((res) => res.json())
}

