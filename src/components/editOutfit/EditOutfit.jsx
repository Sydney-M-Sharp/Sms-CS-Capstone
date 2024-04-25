


export const EditOutfit = () => {

 
    return (
        <>
            <section className="header-of-page">
                <h1>Edit Outfit</h1>
                <div className="titles">
                    <h3>Clothing Type</h3>
                    <h3>Item Description</h3>
                </div>
            </section>

            <form>
                {/* <div className="uploadOptions">
                    <select value={selectedValue} onChange={handleChange}>
                        <option>Select Clothing Type...</option>
                        {allTypes.map(types => (
                            <option key={types.id}>
                                {types.typeName}
                            </option>
                        ))}

                    </select>
                    <input type="text" id="itemDescription"></input>
                </div> */}

                <input type="submit"></input>
            </form >

        </>
    )
}