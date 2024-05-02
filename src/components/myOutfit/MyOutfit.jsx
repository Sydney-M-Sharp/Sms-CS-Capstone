
import { useLocation, useNavigate } from 'react-router-dom';
import { getSeasonById } from '../../services/seasonsServices.jsx';
import { useEffect, useState } from 'react';
import "./myOutfit.css"
import { eraseFromDatabase } from '../../services/DeleteService.jsx';


export const MyOutfit = ({ currentUser }) => {
    const location = useLocation();
    const { item } = location.state;
    let navigate = useNavigate()


    const [postSeason, setPostSeason] = useState({})

    useEffect(() => {
        let seasonId = item.seasonsId

        getSeasonById(seasonId).then(setPostSeason)
        // .then((data) => { setPostSeason(data) })

    }, [currentUser]);

    const handleClick = (item) => {
        navigate("/edit-outfit", { state: { item } })

    }
    const deleteClick = (item) => {
        eraseFromDatabase(item).then(() =>{ 
            navigate("/my-closet")
        })
        

    }
    
    return (<>
        <section className="header-of-page">
            <h1>My Outfit</h1>
        </section>

        <div className="photo-Section">

            <img className="post-photo2" key={item.id} data={item.seasonsId} src={item.photo} alt={item.photo} />
        </div>
        <div className='season-name'>
            <p className='season-name' key={postSeason.id}>Season: {postSeason.name}</p>

        </div>

        <div className='bottom-buttons'>
            <button onClick={() => handleClick(item)}>Edit Outfit</button>
            <button className="delete-button" onClick={() => deleteClick(item)} >Delete Outfit</button>
        </div>

    </>)
}