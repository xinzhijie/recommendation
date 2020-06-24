import request from '@/utils/request';

export const list = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/predictionScore/list',
        method: 'post',
        data: data
    })

export const add = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/predictionScore/add',
        method: 'post',
        data: data
    })

export const generate = <T>(data:string):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: `/api/predictionScore/generate/${data}`,
        method: 'post'
    })
