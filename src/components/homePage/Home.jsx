import "./home.css"
import { useNavigate } from "react-router-dom"

export const Home = ({currentUser}) => {
const navigate = useNavigate()

const moveToSignIn =() =>{
    navigate("sign-in")
}
const moveToSignUp =() =>{
    navigate("sign-up")
}

    return (
    < div className="Home-Page" >

        <section className="top-of-page">
        <div className="left">
            <h1>Welcome to Dream Closet!</h1>
            <h3 className="love-dressing-up"> Enjoy dressing up but you can't for the life of you remember that last outfit you loved?
                Don't worry! Dream Closet has your back.
            </h3>
            {!currentUser &&
                <div className="signIn-button">
                <button className="signIn-button" onClick={moveToSignIn}> Sign In</button>
                {/* This section will navigate to the sign in section */}
                </div>
                }
                </div>
                <div className="right">
                <img className="mainLogo" src="src/components/logos/MainLogo.png"/> 
                </div>
        </section>

        <section className="middle-of-page">
            <div className="left">
            <img className="circular-image1 " src="src/components/logos/SelfieLogo.png"/> 
                <h3>View and Upload Photos of Your Outfits</h3>
                <h5>You look great! Why not snap a photo and put it to good use</h5>
            </div>

            <div className="right-mid">
            <img className="circular-image2 " src="src/components/logos/PhotoLogo.png"/> 
                <h3>Search your Closet for your Favorite Outfits</h3>
                <h5>You never have to rack your brain for whats on your closet's rack</h5>
                </div>
        </section>
        
        {/* //the line below says if there is no user then return whats after the && other wise return nothing. */}
        {!currentUser &&
        <section className="bottom-of-page">
        <h3>Want to start your own closet? Get started by signing up below!</h3>
        <div className="signIn-button">
        <button className="signIn-button" onClick={moveToSignUp}> Sign Up</button>
        </div>
        </section>
        }
        </div>
    )
}