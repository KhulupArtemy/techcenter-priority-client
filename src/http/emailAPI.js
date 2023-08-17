import {$host} from "./index";

export const sendEmail = async (messageData) => {
    const {data} = await $host.post('/sendEmail', messageData)
    return data
}