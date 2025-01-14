import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useImageUpload = () => {

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );

            if (response.data && response.data.data && response.data.data.url) {
                return response.data.data.url;
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (err) {
            console.error(err.message || 'Something went wrong during image upload.')
            throw err;
        }
    };

    return { uploadImage };
};

export default useImageUpload;
