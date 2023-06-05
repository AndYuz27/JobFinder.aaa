import axios from "axios";

export const getComps = async () => {
    // try {
        const res = await axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}
export const getCompany = async (id) => {
    // try {
        const res = await axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/company/${id}`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}
export const getVacs = async () => {
        const res = await axios.get(`https://sppjfapi.andrieiiuzlov.repl.co/api/vacancy/`)

        return res.data.rows;

}


