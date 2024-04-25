import { Link } from "react-router-dom"


export const SignIn = () => {

    
    return (<>
        <section className="header-of-page">
            <h1>Sign In</h1>
            <div className="titles">
                
            </div>
        </section>
        <section>
            <form className="form-login" 
            // onSubmit={handleLogin}
            >
                <fieldset>
                    <div className="form-group">
                        <input
                            type="email"
                            // value={email}
                            // onChange={(evt) => set(evt.target.value)}
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


            <Link className="link" to="/sign-up">Not a member yet?</Link>
            {/* its there you just cant see it^ work on css later */}
        </section>

    </>
    )
}