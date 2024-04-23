import { useEffect, useState } from "react"
import { getAllTypes } from "../../services/TypesServices.jsx"



export const Upload = () => {

    const [allTypes, setAllTypes] = useState([])
    const [selectedValue1, setSelectedValue1] = useState('')
    const [userInput, setUserInput] = useState("")

    useEffect(() => {
        getAllTypes().then((typesArray) => setAllTypes(typesArray))

    }, [])

    const handleChange = (event) => {
        setSelectedValue1(event.target.value);
    }

    return (
        <>
            <section className="header-of-page">
                <h1>Upload</h1>
            </section>
            <form>
                <select value={selectedValue1} onChange={handleChange}>
                    <option>Select Clothing Type...</option>
                    {allTypes.map(types => (
                        <option key={types.id}>
                            {types.typeName}
                        </option>
                    ))}

                </select>


            </form>

        </>
    )
}