import * as axios from "axios";

const samuraiApi = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': '8d91509d-47d7-4210-b177-56724c8672fb'}
    }
);

export const authAPI = {
    me() {
        return samuraiApi.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe) {

        return samuraiApi.post(`auth/login/`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
        }).then(response => response.data.data.userId)
    },
}

export const usersAPI = {
    getUser(pageSize = 10, currentPage = 1) {
        return samuraiApi.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return samuraiApi.post(`follow/${userId}`).then(response => response.data)
    },
    unFollow(userId) {
        return samuraiApi.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId = 2) {
        console.warn('Bad way. Use profileAPI.')
        return profileAPI.getProfile(userId); //Для обратной совместимости.
    }
}
export const profileAPI = {
    getProfile(userId = 2) {
        return samuraiApi.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId) {
        return samuraiApi.get(`profile/status/${userId}`)
    },
    setUserStatus(statusText) {
        return samuraiApi.put(`profile/status/`, {status: statusText}).then(response => response.data)
    },

}
