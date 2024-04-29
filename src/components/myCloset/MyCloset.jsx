import { useState } from "react"
import { getPostByUserId } from "../../services/myClosetService.jsx"
import { useEffect } from "react"
import "./myCloset.css"



export const MyCloset = ({ currentUser }) => {
    const [userPosts, setUserPosts] = useState([])
    const [userPhoto, setUserPhoto] = useState([])

    useEffect(() => {
        getPostByUserId({ currentUser }).then((data) => { setUserPosts(data) })


    }, [currentUser]);

    useEffect(() => {
     

    }, [currentUser]);

    return (
        <>
            <section className="header-of-page">
                <h1>My Closet</h1>

                <div className="post-photo">


                    {userPosts.map((item) => {
                        let picture = item.photo;
                        return (
                            <img key={item.id} src={picture} alt={picture} />
                        );
                    })}

                </div>

            </section>

        </>
    )
}

