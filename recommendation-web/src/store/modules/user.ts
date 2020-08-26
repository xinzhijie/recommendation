import { getUserInfo } from '@/api/login'
import { getToken } from '@/api/auth/index'
import {User} from "@/class/User";
import { Commit } from 'vuex';
const state: any  = {
    user: {
        name:"",
        id: "",
        role:"",
        model: "",
        modelInfo: ""
    }
}
const mutations: any = {
    setName: (state: any, name:string) => {
        state.user.name = name
    },
    setId: (state: any, id:string) => {
        state.user.id = id
    },
    setRole: (state: any, roles:string) => {
        state.user.role = roles
    },
    setModel: (state: any, model:string) => {
        state.user.model = model
        state.user.modelPath = model
    },
    setModelInfo: (state: any, model:any) => {
        state.user.modelInfo = model
    },
    removeUser: (state: any, model:any) => {
        state.user = {
            name:"",
            id: "",
            role:"",
            model: "",
            modelInfo: ""
        }
    }

};

const actions: any = {
    getUserInfo(context: { commit: Commit }) {
        state.token = getToken();
        return new Promise(function(resolve, reject) {
            getUserInfo<User>({token: state.token}).then(response => {
                const data = response.data
                context.commit('setRole', data.role)
                context.commit('setName', data.name)
                context.commit('setId', data.id)
                resolve()
            })
        })
    },
    setModel(context: { commit: Commit } , param: string) {
        context.commit('setModel', param)
    },
    setModelInfo(context: { commit: Commit } , param: any) {
        context.commit('setModelInfo', param)
    },
    removeUser(context: { commit: Commit } , param: string) {
        context.commit('removeUser', param)
    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};

