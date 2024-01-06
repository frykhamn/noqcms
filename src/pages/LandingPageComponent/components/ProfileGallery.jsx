import React, { useEffect, useState } from 'react';


const ProfileGallery = () => {

    const [profileImages, setProfileImages] = useState([]);

    useEffect(() => {

        const loadImages = async () => {
            // Import all image modules matching the specified pattern - stored in Object w keys
            const imageModules = import.meta.glob('../../../assets/images/profiles/*.png')
            // Get the paths of all imported image modules
            const paths = Object.keys(imageModules);

            // Load all images and get their default URLs via the keys in paths
            const images = await Promise.all(paths.map(path => imageModules[path]()));
            const imageUrls = images.map(module => module.default);

            setProfileImages(imageUrls);
        };
        loadImages();
    }, []);

    return (
        <div className="flex space-x-4">
            {profileImages.map((image, index) => (
                <img key={index} src={image} alt={`Profile ${index + 1}`} className="w-16 h-16 rounded-full object-cover" />
            ))}
        </div>
    );
};

export default ProfileGallery;
