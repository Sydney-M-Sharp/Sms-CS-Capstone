import { useState } from "react"
import { getPostByUserId } from "../../services/myClosetService.jsx"
import { useEffect } from "react"
import "./myCloset.css"
import { useNavigate } from "react-router-dom"


export const MyCloset = ({ currentUser }) => {
    const [userPosts, setUserPosts] = useState([])
    const [userPhoto, setUserPhoto] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        if ("id" in currentUser){ // this is checking to see if the object current user has the id key in it.
            getPostByUserId({ currentUser }).then((data) => { setUserPosts(data) })
        }

    }, [currentUser]);

  
    const handleClick =(item) =>{
        navigate("/my-outfit", { state: { item } })
        
    }

    return (
        <>
            <section className="header-of-page">
                <h1>My Closet</h1>

{userPosts.length ? 
                <div className="post-photo">
                    {userPosts.map((item) => {
                        let picture = item.photo;
                        return (
                            <img key={item.id} data={item.seasonsId} src={picture} alt={picture}
                            onClick={() => handleClick(item)}/>
                        );
                    })}
                </div>
:
<section className="Upload-photo">
    
<div>Oops looks like your closet is empty! Let's have you upload a photo and get started!</div>
<button onClick={()=>navigate("/upload")}> Upload </button>

</section>
}
            </section>

        </>
    )
}

