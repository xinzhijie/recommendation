import request from "@/utils/request";

export const getToken = () => localStorage.getItem("token");

export const setToken = (token:string) => localStorage.setItem("token", token);

export const removeToken = () => localStorage.removeItem("token");

export const list = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/user/list',
        method: 'post',
        data: data
    })
