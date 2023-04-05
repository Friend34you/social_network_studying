import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: { 'API-KEY': '3497c823-ea5c-4d0f-85f4-2040ad8f97e7' },
    }
)

export const usersRequests = {
    getUsers(currentPage = 1, usersCount = 5) {
        return instance.get(`users?page=${currentPage}&count=${usersCount}`)
            .then(response => response.data)
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`)

            .then(response => response.data)
    },

    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const headerRequests = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileRequests = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}


