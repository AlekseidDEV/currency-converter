import {axiosClient} from "../axiosClient.js";

export const getCurruncyList = async () => {
    const { data , error , status } = await axiosClient.get("https://status.neuralgeneration.com/api/currency")
        .then((res) => {
            return {
                data: res.data,
                status: res.status,
                error: undefined
            }
    })
        .catch((err) => {
            return {
                data: undefined,
                status: err.status,
                error: err
            }
        })

    return {
        data,
        error,
        status,
    }
}