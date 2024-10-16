import axios from "axios"
import type { OAuthResponse } from "./types/OAuthResponse";
import type { AmoCRMResponse } from "./types/AmoCRMResponse";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

export const Auth = async () => {
    const response = await api.get('/auth');
    return response.data as OAuthResponse;
};

export const CreateLead = async () => {
    const response = await api.post('/lead', {}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return (response.data as AmoCRMResponse)._embedded.leads![0];
};

export const CreateContact = async () => {
    const response = await api.post('/contact', {}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return (response.data as AmoCRMResponse)._embedded.contacts![0];
};

export const CreateCompany = async () => {
    const response = await api.post('/company', {}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return (response.data as AmoCRMResponse)._embedded.companies![0];
};