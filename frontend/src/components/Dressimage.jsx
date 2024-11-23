import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Box } from '@mui/material';

const Dressimage = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image || !name) {
            alert('Please provide all fields');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);

        try {
            const response = await axios.post('http://localhost:4000/uploadimage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginTop={5}
        >
            <Typography variant="h5" gutterBottom>
                Upload Dress Image
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <TextField
                    label="Image Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <input type="file" accept="image/*" onChange={handleImageChange} required />
                <Button variant="contained" color="primary" type="submit">
                    Upload
                </Button>
            </form>
        </Box>
    );
};

export default Dressimage;
