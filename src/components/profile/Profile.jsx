import { useEffect, useState } from "react";
import { getPostByUserId } from "../../services/myClosetService.jsx";
import { getUserById } from "../../services/UserService.jsx";
import "./profile.css"

export const MyProfile = ({ currentUser }) => {
    const [userPosts, setUserPosts] = useState([])
    const [userObject, setUserObject] = useState([])

    useEffect(() => {
        getPostByUserId({ currentUser }).then((data) => { setUserPosts(data) })

    }, [currentUser]);

    useEffect(() => {
        getUserById({ currentUser }).then((data) => {
            setUserObject(data)
        })
    }, [currentUser]);

    return (<>
        <section className="header-of-page">
            <h1>My Profile</h1>
            <img className="plant-img" src="src/components/logos/hangingPlant.png" alt="src/components/logos/hangingPlant.png" />
        </section>
        
        <img className="mirror" src="src/components/logos/hanging-mirror.png" alt="src/components/logos/hanging-mirror.png" />
        <div className="userInfo">
            
            <div className="userName">
                <div className="title">Name: </div>
                <ul>{userObject.name}</ul>
            </div>

            <div className="userEmail">
                <div className="title">Email: </div>
                <ul>{userObject.email}</ul>
            </div>

        </div>
        <img className="closet-img" src="src/components/logos/closetImg.png" alt="src/components/logos/closetImg.png" />
        <div className="userClosetInfo">
        <div className="closet-title">Outfits In My Closet</div>
            <div className="closet-amount" >{userPosts.length}</div></div>
        
        


    </>
    )
}