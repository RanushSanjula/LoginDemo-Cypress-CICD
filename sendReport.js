const nodemailer = require("nodemailer");
const archiver = require("archiver");
const fs = require("fs");


function createZip() {

    return new Promise((resolve, reject) => {

        const output = fs.createWriteStream("Cypress-Test-Report.zip");

        const archive = archiver.create("zip", {
            zlib: { level: 9 }
        });


        output.on("close", () => {

            console.log("ZIP created successfully");

            resolve();

        });


        archive.on("error", (err) => {

            reject(err);

        });


        archive.pipe(output);


        archive.directory(
            "cypress/reports/html",
            false
        );


        archive.finalize();

    });

}



async function sendEmail() {

    await createZip();


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

        text:
        `
Cypress test execution completed.

Please find the attached ZIP report.
Extract the ZIP file and open index.html.
        `,

        attachments: [

            {
                filename: "Cypress-Test-Report.zip",
                path: "./Cypress-Test-Report.zip"
            }

        ]

    };


    await transporter.sendMail(mailOptions);


    console.log("Email sent successfully");

}


sendEmail();