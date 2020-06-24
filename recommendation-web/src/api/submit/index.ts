import request from '@/utils/request';

export const list = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/submit/list',
        method: 'post',
        data: data
    })

export const add = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/submit/add',
        method: 'post',
        data: data
    })


export const get = <T>(sid:string):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: `/api/submit/get/${sid}`,
        method: 'post'
    })

export const deleteSubmit = <T>(sid:string):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: `/api/submit/delete/${sid}`,
        method: 'post'
    })
