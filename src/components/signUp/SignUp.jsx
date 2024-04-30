import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { createUser, getUserByEmail } from "../../services/userService"

export const SignUp = ({ setCurrentUser }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",

    })
    let navigate = useNavigate()

    const registerNewUser = () => {

        createUser(user).then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {// hasOwnProperty("id")) means has an id in the data bade like it shoudl have made when posted. 
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        id: createdUser.id,
                    })
                )
                setCurrentUser(createdUser)
                navigate("/")
            }
        })
    }

    const handleRegister = (e) => {
        e.preventDefault() // taking in the argument of e aks event and then prevents the page from refreshing. 
        getUserByEmail(user.email).then((response) => {
            if (response.length > 0) {
                // Duplicate email. No good.
                window.alert("Account with that email address already exists")
            } else {
                // Good email, create user.
                registerNewUser()
            }
        })
    }

    const updateUser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (<main className="auth-container">
        <form className="auth-form" onSubmit={handleRegister}>
            <h1 className="header">Learning Moments</h1>
            <h2>Please Register</h2>
            <fieldset className="auth-fieldset">
                <div>
                    <input
                        onChange={updateUser}
                        type="text"
                        id="name"
                        className="auth-form-input"
                        placeholder="Enter your name"
                        required
                        autoFocus
                    />
                </div>
            </fieldset>
            <fieldset className="auth-fieldset">
                <div>
                    <input
                        onChange={updateUser}
                        type="email"
                        id="email"
                        className="auth-form-input"
                        placeholder="Email address"
                        required
                    />
                </div>
            </fieldset>

            <fieldset className="auth-fieldset">
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </fieldset>
        </form>
    </main>
    )
}