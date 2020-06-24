import request from '@/utils/request';

export const getTrainingModel = <T>(data:any):Promise<Ajax.Response<T>> =>
    request<Ajax.Response>({
        url: '/api/trainingModel/list',
        method: 'post',
        data: data
    })

