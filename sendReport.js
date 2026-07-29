const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Cypress Test Report",
    text: "Please find the attached Cypress test report.",
    attachments: [
        {
            filename: "Cypress_Report.html",
            path: "./cypress/reports/html/index.html"
        }
    ]
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log("Email sent");
    }
});