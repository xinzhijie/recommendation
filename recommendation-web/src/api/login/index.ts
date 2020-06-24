import request from '@/utils/request';

export const login = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
    url: '/api/login',
    method: 'post',
    data: data
})

export const getUserInfo = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/getUserInfo',
        method: 'post',
        data: data
    })
