import axios from "axios"

// async function Auth(){
// try {
//     const response = await axios.get('https://test.gnzs.ru/oauth/get-token.php', {
//       headers: {
//         'X-Client-Id': '31992158'
//       }
//     })

//     const { access_token, base_domain } = response.data

//     // Сохраняем токен и домен в localStorage или Pinia
//     localStorage.setItem('access_token', access_token)
//     localStorage.setItem('base_domain', base_domain)

//     // Перенаправляем на главную страницу
//     router.push({ name: 'Home' })
//   } catch (err) {
//     error.value = 'Ошибка при авторизации. Попробуйте еще раз.'
//   } finally {
//     loading.value = false
//   }
// }


const api = axios.create({
    baseURL: 'https://test.gnzs.ru',
    timeout: 5000,
});

export const Auth = async () => {
    const response = await api.get('/oauth/get-token.php', {
        headers: {
            'X-Client-Id': '31992158'
        }
    });
    return response.data;
};