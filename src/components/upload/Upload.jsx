import { useEffect, useState } from "react"
import { getAllSeasons } from "../../services/seasonsServices.jsx"
import { useNavigate } from "react-router-dom"
import { savePostToDatabase } from "../../services/PostService.jsx"


export const Upload = ({ currentUser }) => {
    const [photoURL, setPhotoURL] = useState("")
    const [selectedSeason, setSelectedSeason] = useState({})
    const [allSeasons, setAllSeasons] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllSeasons().then((data) => { setAllSeasons(data) })

    }, [])

    const savePost = () => {
        const newPost = {
            "userId": currentUser.id,
            "photo": photoURL,
            "seasonsId": selectedSeason
        }
        savePostToDatabase(newPost)
        // .then({
            navigate("/my-closet")
        // })
    }




        return (<>
            <section className="header-of-page">
                <h1>Upload Photo</h1>
                </section>
                <div>
                    {/* <form onSubmit={savePhoto}> */}
                        <input
                            type="url"
                            value={photoURL}
                            onChange={(evt) => setPhotoURL(evt.target.value)}
                            className="form-control"
                            placeholder="Add Photo Link"
                            required
                            autoFocus
                        />
                        <label htmlFor="seasons">Choose a Season for this fit: </label>
                        <select name="seasons" id="seasons" onChange={(evt) => setSelectedSeason(evt.target.value)}>
                            <option defaultValue>Choose a Season</option>

                            {allSeasons.map((seasonItem) => {
                                return (
                                    <option key={seasonItem.id} value={seasonItem.id}>{seasonItem.name}</option>

                                )
                            })}
                        </select>

                        <button type="submit" onClick={savePost} >Submit Photo</button>

                    {/* </form> */}
                </div>
        </>
        )
    }