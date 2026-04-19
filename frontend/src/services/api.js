const API=axios.create({
    baseURL:"http://localhost:3001/auth",
    withCredentials:true,
})
export default API