import request from '../utils/request'

//志愿活动获得所有数据
export function getAllVolunteerAct(params) {
    return request({
        url: 'admin/voluntary_activities',
        method: 'get',
        params
    })
}