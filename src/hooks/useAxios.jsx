
const instance = axios.create({
    baseURL: '',
})

const useAxios = () => {
    return instance
}

export default useAxios