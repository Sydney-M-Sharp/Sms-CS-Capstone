import { useEffect, useState } from "react"
import { getAllSeasons } from "../../services/seasonsServices.jsx"
import { useNavigate } from "react-router-dom"
import { savePostToDatabase } from "../../services/PostService.jsx"
import "./upload.css"
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { UploadWidget } from "./UploadWidget.jsx"

export const Upload = ({ currentUser }) => {
    const [photoURL, setPhotoURL] = useState("")
    const [selectedSeason, setSelectedSeason] = useState({})
    const [allSeasons, setAllSeasons] = useState([])

    const [publicId, setPublicId] = useState("");
    // Replace with your own cloud name
    const [cloudName] = useState(import.meta.env.VITE_CLOUD_NAME);
    // Replace with your own upload preset
    const [uploadPreset] = useState(import.meta.env.VITE_PRESET);

    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
    });

    const navigate = useNavigate()

    useEffect(() => {
        getAllSeasons().then((data) => { setAllSeasons(data) })

    }, [currentUser])

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

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName,
        },
    });

    const myImage = cld.image(publicId);

    return (
        <div>
            <section className="header-of-page">
                <h1>Upload Photo</h1>
            </section>
            <div className="middle">
                <label htmlFor="seasons"> Choose a Season for this fit: </label>
                <select className="dropDown" name="seasons" id="seasons" onChange={(evt) => setSelectedSeason(evt.target.value)}>
                    <option defaultValue>Choose a Season</option>

                    {allSeasons.map((seasonItem) => {
                        return (
                            <option key={seasonItem.id} value={seasonItem.id}>{seasonItem.name}</option>

                        )
                    })}
                </select>
            </div>
            <UploadWidget
                uwConfig={uwConfig}
                setPublicId={setPublicId}
                // photoURL={photoURL}
                setPhotoURL={setPhotoURL}
            />

            <div style={{ width: "800px" }}>
                <AdvancedImage
                    style={{ maxWidth: "100%" }}
                    cldImg={myImage}
                    plugins={[responsive(), placeholder()]}
                />
            </div>
            <button className="button-Submit" type="submit" onClick={savePost} >Submit</button>
        </div>
    );

    // const navigate = useNavigate()

    // useEffect(() => {
    //     getAllSeasons().then((data) => { setAllSeasons(data) })

    // }, [currentUser])

    // const savePost = () => {
    //     const newPost = {
    //         "userId": currentUser.id,
    //         "photo": photoURL,
    //         "seasonsId": selectedSeason
    //     }
    //     savePostToDatabase(newPost)
    //     // .then({
    //         navigate("/my-closet")
    //     // })
    // }

    // return (<>
    //     <section className="header-of-page">
    //         <h1>Upload Photo</h1>
    //         </section>
    //         <div className="middle">
    //             {/* <form onSubmit={savePhoto}> */}
    //                 <input
    //                     type="url"
    //                     value={photoURL}
    //                     onChange={(evt) => setPhotoURL(evt.target.value)}
    //                     className="form-control"
    //                     placeholder="Add Photo Link"
    //                     required
    //                     autoFocus
    //                 />
    // <label htmlFor="seasons"> Choose a Season for this fit: </label>
    // <select name="seasons" id="seasons" onChange={(evt) => setSelectedSeason(evt.target.value)}>
    //     <option defaultValue>Choose a Season</option>

    //     {allSeasons.map((seasonItem) => {
    //         return (
    //             <option key={seasonItem.id} value={seasonItem.id}>{seasonItem.name}</option>

    //         )
    //     })}
    // </select>



    //             {/* </form> */}
    //         </div>
    //         <button className="button-photo" type="submit" onClick={savePost} >Submit Photo</button>
    // </>
    // )
}