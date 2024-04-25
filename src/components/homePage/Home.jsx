import "./home.css"
import { useNavigate } from "react-router-dom"

export const Home = () => {
const navigate = useNavigate()

const moveToSignIn =() =>{
    navigate("sign-in")
}
const moveToSignUp =() =>{
    navigate("sign-up")
}

    return (
    <>

        <section className="top-of-page">
        <div className="left">
            <h1>Welcome to Dream Closet!</h1>
            <h3> Love dressing up but you can't for the life of you remember that outfit you loved?
                Don't worry! Dream Closet has your back.
            </h3>
                <div className="signIn-button">
                <button className="signIn-button" onClick={moveToSignIn}> Sign In</button>
                {/* This section will navigate to the sign in section */}
                </div>
                </div>
                <div className="right">
                <img className="mainLogo" src="src/components/logos/MainLogo.png"/> 
                </div>
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
        <h3>Want to start your own closet? Get started by signing up below!</h3>
        <div className="signIn-button">
        <button className="signUp-button" onClick={moveToSignUp}> Sign Up</button>
        </div>


        </section>
        </>
    )
}