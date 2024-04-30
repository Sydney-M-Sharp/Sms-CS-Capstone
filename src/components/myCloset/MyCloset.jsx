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
        getPostByUserId({ currentUser }).then((data) => { setUserPosts(data) })


    }, []);

  
    const handleClick =(item) =>{
        navigate("/my-outfit", { state: { item } })
        
    }

    return (
        <>
            <section className="header-of-page">
                <h1>My Closet</h1>

                <div className="post-photo">


                    {userPosts.map((item) => {
                        let picture = item.photo;
                        return (
                            <img key={item.id} data={item.seasonsId} src={picture} alt={picture}
                            onClick={() => handleClick(item)}/>
                        );
                    })}

                </div>

            </section>

        </>
    )
}

