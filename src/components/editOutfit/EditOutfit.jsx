import { useState } from "react"
import { useEffect } from "react"
import { useLocation, useNavigate, } from 'react-router-dom';
import { getAllSeasons, getSeasonById } from "../../services/seasonsServices.jsx";
import { updatePostInDatabase } from "../../services/PutService.jsx";



export const EditOutfit = ({ currentUser }) => {
    const location = useLocation();
    const { item } = location.state;

    const [allSeasons, setAllSeasons] = useState([])
    const [selectedSeason, setSelectedSeason] = useState("")
    const [originalSeason, setOriginalSeason] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
getSeasonById(item.seasonsId).then((data) => { setOriginalSeason(data) })

    }, [])

    useEffect(() => {
        getAllSeasons().then((data) => { setAllSeasons(data) })

    }, [])

    const updatePost = () => {
        const updatedPost = {
            "id": item.id,
            "userId": currentUser.id,
            "photo": item.photo,
            "seasonsId": selectedSeason
        }
        updatePostInDatabase(updatedPost)
            .then(() => {
                navigate(`/my-closet`)
            })


    }
    


    return (
        <>
            <section className="header-of-page">
                <h1>Edit Outfit</h1>
            </section>

            <div className="titles">
                <img className="post-photo2" key={item.id} data={item.seasonsId} src={item.photo} alt={item.photo} />
            </div>

            <label htmlFor="seasons">Choose a Season for this fit: </label>
            <select name="seasons" id="seasons" onChange={(evt) => setSelectedSeason(evt.target.value)}>
                <option defaultValue>This outfit Is currently set as {originalSeason.name}</option>

                {allSeasons.map((seasonItem) => {
                    return (
                        <option key={seasonItem.id} value={seasonItem.id}>{seasonItem.name}</option>

                    )
                })}
            </select>

            {/* <input type="submit" onClick={updatePost()}></input> */}
            <button onClick={updatePost}>Save Changes</button>


        </>
    )
}