import "./addClothingType.css"
import { useEffect, useState } from "react"
import { getAllTypes } from "../../services/TypesServices.jsx"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const AddClothingType = () => {

    const [allTypes, setAllTypes] = useState([])

    const [selectedValue, setSelectedValue] = useState('')

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
                <h1>Add Clothing Type</h1>
                <div className="titles">
                    <h3>Clothing Type</h3>
                    <h3>Item Description</h3>
                </div>
            </section>

            <form>
                <div className="uploadOptions">
                    <select value={selectedValue} onChange={handleChange}>
                        <option>Select Clothing Type...</option>
                        {allTypes.map(types => (
                            <option key={types.id}>
                                {types.typeName}
                            </option>
                        ))}

                    </select>
                    <input type="text" id="itemDescription"></input>
                </div>

                <input type="submit"></input>
            </form >

        </>
    )
}