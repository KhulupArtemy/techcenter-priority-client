import {$host} from "./index";

export const sendEmail = async (messageData) => {
    await $host.post('/sendEmail', messageData)
}