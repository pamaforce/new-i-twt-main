import axios from 'axios'
import { Message } from '@/component/message'
import { getToken } from './auth'
import qs from 'querystring';

const service = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    transformRequest: [(oldData, config) => {
        if (!config['Content-Type']) return qs.stringify(oldData);
        switch (config['Content-Type']) {
            case 'multipart/form-data':
                return oldData;
            default:
                return qs.stringify(oldData)
        }
    }],
    timeout: 60000
});

service.interceptors.request.use(config => {
    config.headers['token'] = getToken();
    return config
}, error => {
    return Promise.reject(error);
});

service.interceptors.response.use(response => {
    if (response.status === 200) {
        const {data} = response;
        if (response.request.responseType === 'blob') {
            return data
        }
        switch (data["error_code"]) {
            case 0:
                return data;
            case 40001:
                // toLogin();
                Message.error(`${data["msg"]},请重新登陆`);
                return Promise.reject(data["msg"]);
            default:
                Message.error(`${data["error_code"]+data["msg"]},请联系管理员`);
                return Promise.reject(data["msg"])
        }
    } else if (response.status === 500) {
        Message.error('500系统错误，请联系管理员')
    }
    return response
},
    error => {
        Message.error('发生未知错误，请联系管理员')
        return Promise.reject(error)
    });

export default service