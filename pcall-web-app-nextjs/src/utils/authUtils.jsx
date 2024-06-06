import axios from 'axios';
import axiosInstance from '@/utils/axiosConfig';

export const loginUser = async (emailOrUsername, password) => {
    try {
        const response = await axios.post('http://localhost:9090/api/auth/signin', {
            username: emailOrUsername,
            password,
        });

        const { accessToken, user } = response.data;
        sessionStorage.setItem('accessToken', JSON.stringify({ accessToken, user }));
        console.log('Login successful');
        return { accessToken, user };
    } catch (error) {
        console.error('Error logging in', error);
        throw new Error('Your username or password is incorrect');
    }
};

export const fetchUserInfo = async (token) => {
    try {
        const response = await axiosInstance.get('/user/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('User info:', response.data);
        sessionStorage.setItem('username', response.data.username);
        return response.data;
    } catch (error) {
        console.error('Error fetching user info', error);
        throw error;
    }
};