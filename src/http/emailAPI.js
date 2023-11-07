import {$host} from "./index";

export const sendEmailGoods = async (messageData) => {
    const {data} = await $host.post('/sendEmail/goods', messageData)
    return data
}

export const sendEmailLeasing = async (messageData) => {
    const {data} = await $host.post('/sendEmail/leasing', messageData)
    return data
}

export const sendEmailTenders = async (messageData) => {
    const {data} = await $host.post('/sendEmail/tenders', messageData)
    return data
}