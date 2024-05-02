
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getUserByEmail } from "../../services/userService.js"
import "./signIn.css"


export const SignIn = ({setCurrentUser}) => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault() // this is a method that is on window events. Its purpos is to stop auto refreshing the page when the button is clicked. 

        return getUserByEmail(email).then((foundUsers) => {// then we are making a call to get the user by the email. .. and then we are doing somthign with the found user

            if (foundUsers.length === 1) { // first we are checking to see that there is only one user that is matched in the array\\ / we also check that there are more then 0 users. 
                const user = foundUsers[0]// this says with bracket notation"[0]"" that user is the first object in the found user array. 
                localStorage.setItem( // this is what sets the item in local storage. this is a built in browser method that puts data in loal storage.localStorage is a place where you can store keys and their values.  
                    "user",
                    JSON.stringify({
                        id: user.id,
                    })
                )
                setCurrentUser(user)

                navigate("/my-closet")
            } else {
                window.alert("Invalid login")
            }
        })
    }

    return (<>
        <section className="header-of-page">
            <h1>Sign In</h1>
        </section>
        
        <section className="full-page">
            <form className="form-login"
            onSubmit={handleLogin}
            >
                <fieldset>  
                    <div className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(evt) => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required
                            autoFocus
                        />
                    </div>
                </fieldset>


                <fieldset>
                    <div className="form-group">
                        <button className="login-btn btn-info" type="submit">
                            Sign in
                        </button>
                    </div>
                </fieldset>
                
            </form>
            <div className="bottom-half">

 <img className="hanger" src="src/components/logos/hanger.png" alt="src/components/logos/hanger.png" />
            <Link className="link" to="/sign-up">Not a member yet? Click here!</Link>
            
            </div>
        </section>

    </>
    )
}