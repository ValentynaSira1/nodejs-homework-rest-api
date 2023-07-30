const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "valentyna2033@meta.ua",
        pass: META_PASSWORD
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const NodemailerEmail = async(data) => {
    const email = {...data, from: "valentyna2033@meta.ua"};
    await transport.sendMail(email);
    return true;
}

module.exports = NodemailerEmail;