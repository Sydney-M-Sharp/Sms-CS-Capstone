

export const EditProfile = () => {


return (<>
        <section className="header-of-page">
            <h1>Edit Profile</h1>
            <div className="titles">
                
            </div>
        </section>
        <section>
            <form className="form-EditProfile">

                <fieldset>
                    <div className="form-group">
                        <input
                            //   onChange={updateCustomer}
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Update your name"
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
                            placeholder="Update email"
                            required
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <button className="login-btn btn-info" type="submit">
                            Save
                        </button>
                    </div>
                </fieldset>

            </form>


            {/* <Link to="/register">Not a member yet?</Link> */}
        </section>

    </>
    )
}