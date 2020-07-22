import * as axios from "axios";

const samuraiSocialApi = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': '8d91509d-47d7-4210-b177-56724c8672fb'}
    }
);



export const getUser = (pageSize = 10, currentPage = 1) => {
    return samuraiSocialApi.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const getProfile = (userId = 2) => {
    return samuraiSocialApi.get(`profile/${userId}`).then(response => response.data)
}

export const authMe = () => {
    return samuraiSocialApi.get(`auth/me`).then(response => response.data)
}

export const follow = (userId) => {
    return samuraiSocialApi.post(`follow/${userId}`).then(response => response.data)
}

export const unFollow = (userId) => {
    return samuraiSocialApi.delete(`follow/${userId}`).then(response => response.data)
}

export const SamuraiSocialAPI = {
    getUser(pageSize = 10, currentPage = 1) {return samuraiSocialApi.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)},
    getProfile(userId = 2) {return samuraiSocialApi.get(`profile/${userId}`).then(response => response.data)},
    authMe() {return samuraiSocialApi.get(`auth/me`).then(response => response.data)},
    unFollow(userId) {return samuraiSocialApi.delete(`follow/${userId}`).then(response => response.data)},
    follow(userId) {return samuraiSocialApi.post(`follow/${userId}`).then(response => response.data)},
}