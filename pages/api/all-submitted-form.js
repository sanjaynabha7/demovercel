import initDB from '../../helper/initDB'
import Emails from '../../models/contact-email'
initDB()
export default async function handler(req, res) {
    const data = await Emails.find().lean()
    return res.status(200).send(data)
}
