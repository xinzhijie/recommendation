import request from '@/utils/request';

export const registry = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/registry',
        method: 'post',
        data: data
    })
