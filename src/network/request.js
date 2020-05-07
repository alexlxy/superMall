import Axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = Axios.create({
            baseURL: '',
            timeout: 3000
        })
        //2.axios的拦截器
        //2.1 请求拦截的作用
    instance.interceptors.request.use(config => {
            return config
        }), //err => {

        // })
        //2.2 响应式拦截
        instance.interceptors.request.use(res => {
            return res.data
        }, err => {
            console.log(err);
        })
        //3.发送真正的网络请求
    return instance(config)
}