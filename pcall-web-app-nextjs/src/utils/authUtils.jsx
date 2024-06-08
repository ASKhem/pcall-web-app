import axios from 'axios';
import axiosInstance from '@/utils/axiosConfig';

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:9090/api/auth/signin', {
            username,
            password,
        });

        const { accessToken, id, name, email, profileUrl, rol } = response.data;
        if (!accessToken) {
            throw new Error('Invalid response from server');
        }

        const user = { id, name, email, profileUrl, rol };

        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('user', JSON.stringify(user));
        return { accessToken, user };
    } catch (error) {
        throw new Error('Your username or password is incorrect');
    }
};

export const fetchUserInfo = async (token) => {
    try {
        const response = await axiosInstance.get('/admin/users/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
