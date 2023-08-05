import React, { useState, useEffect } from 'react';

const ImagePreview = ({ file }) => {
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPreview(reader.result);
            };
        }
    }, [file]);

    return (
        <div>
            <img style={{ width: "300px" }} src={preview} alt="" />
        </div>
    );
};

export default ImagePreview;
