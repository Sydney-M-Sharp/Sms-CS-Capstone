import { useEffect, useState } from "react";
import { getPostByUserId } from "../../services/myClosetService.jsx";
import { getUserById } from "../../services/UserService.jsx";


export const MyProfile = ({ currentUser }) => {
    const [userPosts, setUserPosts] = useState([])
    const [userObject, setUserObject] = useState([])

    useEffect(() => {
        getPostByUserId({ currentUser }).then((data) => { setUserPosts(data) })


    }, [currentUser]);

    useEffect(() => {
        getUserById({ currentUser }).then((data) => {

            if (data.length === 1) { 
                const user = data[0]
                setUserObject(user)
            }
        })
    }, [currentUser]);

    return (<>
        <section className="header-of-page">
            <h1>My Profile</h1>
        </section>

        <div className="userInfo">
            <h3>Profile Info</h3>
            <div className="userName">
                <div>Name: </div>
            <ul>{userObject.name}</ul>
            </div>

            <div className="userEmail">
            <div>Email: </div>
            <ul>{userObject.email}</ul>
            </div>

        </div>

        <div className="userClosetInfo">
            <h3>Outfits In My Closet</h3>
            <p>{userPosts.length}</p>
        </div>



        {/* <div className="mostAndLeast">
                <ul>Most Worn Item </ul>
            </div>

            <div className="mostAndLeast"></div>
            <ul>Least Worn Item </ul>

            <div className="mostAndLeast">
            <ul>Most Worn Accessory </ul>
            </div>

            <div className="mostAndLeast">
            <ul>Most Worn Accessory </ul>
            </div> */}

    </>
    )
}