import axios from 'axios';

export const fetchEntity = async ({ entity, request }) => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No access token found');
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/admin/${entity}/${request}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    return await fetchData();
}

export const deleteEntity = async ({ entity, id }) => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No access token found');
    }

    try {
        const response = await axios.delete(`http://localhost:9090/admin/${entity}/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting entity:', error);
        throw error;
    }
};

export const updateEntity = async ({ entity, id, data }) => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No access token found');
    }
    try {
        const response = await axios.put(`http://localhost:9090/admin/${entity}/update/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating entity:', error);
        throw error;
    }
}

export const createEntity = async ({ entity, data }) => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        throw new Error('No access token found');
    }
    try {
        const response = await axios.post(`http://localhost:9090/admin/${entity}/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating entity:', error);
        throw error;
    }
};

