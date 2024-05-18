import axios from 'axios';

// Get Properties
export const getProperties = () => async dispatch => {
    try {
        const res = await axios.get('/api/properties');
        dispatch({
            type: 'GET_PROPERTIES',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'PROPERTY_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add Property
export const addProperty = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('/api/properties', formData, config);
        dispatch({
            type: 'ADD_PROPERTY',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'PROPERTY_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete Property
export const deleteProperty = (id) => async dispatch => {
    try {
        await axios.delete(`/api/properties/${id}`);
        dispatch({
            type: 'DELETE_PROPERTY',
            payload: id
        });
    } catch (err) {
        dispatch({
            type: 'PROPERTY_ERROR',
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
