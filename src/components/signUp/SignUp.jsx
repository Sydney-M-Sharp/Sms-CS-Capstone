

export const SignUp = () => {


    return (<>
        <section className="header-of-page">
            <h1>Sign Up</h1>
            <div className="titles">
                
            </div>
        </section>
        <section>
            <form className="form-SignUp">

                <fieldset>
                    <div className="form-group">
                        <input
                            //   onChange={updateCustomer}
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                            autoFocus
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <input
                            //   onChange={updateCustomer}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <button className="login-btn btn-info" type="submit">
                            Sign Up
                        </button>
                    </div>
                </fieldset>

            </form>

        </section>

    </>
    )
}