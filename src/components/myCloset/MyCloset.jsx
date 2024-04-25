//my goal on this page is to have the  title 
// then I want a list of posts. 
// for this page I only need to show each image of the posts. 

import { useState } from "react"
import { getAllPosts } from "../../services/myClosetService.jsx"
import { useEffect } from "react"

//AFTER MVP
//and then 2 drop down options. 
//the first drop down will let you 

export const MyCloset = () => {

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((postArray) => setAllPosts(postArray)) //do I need a .then here? 
        // console.log(allPosts)
    }, [])



    return (
        <>
            <section className="header-of-page">
                <h1>My Closet</h1>

                <div className="post-photo">
                    <ul>
                        {allPosts.map((item) => (
                            <ul key={item.id}>{item.photo}</ul>
                        ))}
                    </ul>
                </div>

            </section>

        </>
    )
}