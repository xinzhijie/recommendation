const getters = {
    token: (state:any) => state.user.token,
    name: (state:any) => state.user.name,
    id: (state:any) => state.user.id,
    role: (state:any) => state.user.role,
    model: (state:any) => state.user.model,
    modelInfo: (state:any) => state.user.modelInfo,
}
export default getters
