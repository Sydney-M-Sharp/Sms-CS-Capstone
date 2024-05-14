import { createContext, useEffect, useState } from "react";
import "./CloudinaryButton.css";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

export const UploadWidget = ({
    uwConfig,
    setPublicId,
    // photoURL,
    setPhotoURL,
}) => {
    const [loaded, setLoaded] = useState(false);
    const [cloudName] = useState(import.meta.env.VITE_CLOUD_NAME);

    useEffect(() => {
        // Check if the script is already loaded
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const handleChange = (info) => {
        setPhotoURL(info.url,
        // setPhotoURL(`https://res.cloudinary.com/${cloudName}/image/upload/v1714697764/${info.public_id}.jpg`,
        
        );
    };

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            var myWidget = window.cloudinary.createUploadWidget(
                uwConfig,
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        console.log("Done! Here is the image info: ", result.info);
                        setPublicId(result.info.public_id);
                        handleChange(result.info);
                    }
                }
            );

            document.getElementById("upload_widget").addEventListener(
                "click",
                function () {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button
                id="upload_widget"
                className="cloudinary-button" // Apply custom class for styling
                onClick={initializeCloudinaryWidget}
            >
                Upload Image
            </button>
        </CloudinaryScriptContext.Provider>
    );
};

export { CloudinaryScriptContext };