export const getUserById = ({ currentUser }) => {

    return fetch(`http://localhost:8088/users/${currentUser.id}`).then((res) => // the ? is you providing an argument to that end point.
        res.json()
    )// the argument email is equal to the prop email aka find the data where the email is equal to this email. 
}