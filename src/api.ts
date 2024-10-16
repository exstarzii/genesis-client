import axios from "axios"
import type { OAuthResponse } from "./types/OAuthResponse";
import type { AmoCRMResponse } from "./types/AmoCRMResponse";

const base_api = axios.create({
    baseURL: 'https://app2.gnzs.ru',
    timeout: 5000,
});

const api = axios.create({
    baseURL: 'https://amocrmgnzstesttask.amocrm.ru',
    timeout: 5000,
});

export const Auth = async () => {
    const response = await base_api.get('/amocrm/test/oauth/get-token.php', {
        headers: {
            'X-Client-Id': '31992158'
        }
    });
    return response.data as OAuthResponse;
};

export const CreateDeal = async () => {
    const response = await api.get('/api/v4/leads', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return (response.data as AmoCRMResponse)._embedded.leads![0];
};

export const CreateContact = async () => {
    const response = await api.get('/api/v4/contacts', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return (response.data as AmoCRMResponse)._embedded.contacts![0];
};

export const CreateCompany = async () => {
    const response = await api.get('/api/v4/companies', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return (response.data as AmoCRMResponse)._embedded.companies![0];
};