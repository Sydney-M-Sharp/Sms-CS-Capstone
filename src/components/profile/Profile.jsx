

export const MyProfile = () =>{

    return( <>
    <section className="header-of-page">
        <h1>My Profile</h1>
        <div className="userClosetInfo">
            <h3>Outfits In My Closet</h3>
            <div className="mostAndLeast">
                <ul>Most Worn Item </ul>
            </div>

            <div className="mostAndLeast"></div>
            <ul>Least Worn Item </ul>

            <div className="mostAndLeast">
            <ul>Most Worn Accessory </ul>
            </div>

            <div className="mostAndLeast">
            <ul>Most Worn Accessory </ul>
            </div>
        </div>
    </section>
    </>
    )
}