import "./home.css"
export const Home = () => {


    return (
    <>

        <section className="top-of-page">
        <div className="left">
            <h1>Welcome to Dream Closet!</h1>
            <h3> Love dressing up but you can't for the life of you remember that outfit you loved?
                Don't worry! Dream Closet has your back.
            </h3>
                <div className="signIn-button">
                <button className="signIn-button"> Sign In</button>
                {/* This section will navigate to the sign in section */}
                </div>
                </div>
                <div className="Img-section">Place Holder for image</div>
        </section>

        <section className="middle-of-page">
            <div className="left">
                <div>Place Holder for image</div>
                <h3>View and Upload Photos of Your Outfits</h3>
                <h5>You look great! Why not snap a photo and put it to good use</h5>
            </div>

            <div className="right">
                <div>Place Holder for image</div>
                <h3>Search your Closet for your Favorite Items</h3>
                <h5>You never have to rack your brain for whats on your closet's rack</h5>
                </div>
        </section>
        
        <section className="bottom-of-page">
        <button className="signUp-button"> Sign Up</button>
            {/* This section will navigate to the sign UP section */}


        </section>
        </>
    )
}