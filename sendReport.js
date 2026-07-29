const nodemailer = require("nodemailer");
const fs = require("fs");


// Read Cypress HTML report
const report = fs.readFileSync(
    "./cypress/reports/html/index.html",
    "utf8"
);


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

    subject: "Cypress Automation Test Report",

    html: `
        <h2>Cypress Test Execution Report</h2>

        <p>
        Cypress automation execution has completed.
        Please find the report below.
        </p>

        ${report}
    `

};


transporter.sendMail(mailOptions, (error, info) => {


    if (error) {

        console.log("Email failed:", error);

        process.exit(1);

    }


    console.log("Email sent successfully");

});