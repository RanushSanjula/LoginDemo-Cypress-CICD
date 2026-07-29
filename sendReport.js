// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD
//     }
// });

// const mailOptions = {
//     from: process.env.EMAIL,
//     to: process.env.EMAIL,
//     subject: "Cypress Test Report",
//     text: "Please find the attached Cypress test report.",
//     attachments: [
//         {
//             filename: "Cypress_Report.html",
//             path: "./cypress/reports/html/index.html"
//         }
//     ]
// };

// transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//         console.error(err);
//         process.exit(1);
//     } else {
//         console.log("Email sent");
//     }
// });



// const nodemailer = require("nodemailer");
// const archiver = require("archiver");
// const fs = require("fs");


// function createZip() {

//     return new Promise((resolve, reject) => {

//         const output = fs.createWriteStream("cypress-report.zip");

//         const archive = archiver("zip");

//         output.on("close", () => {
//             resolve();
//         });

//         archive.on("error", (err) => {
//             reject(err);
//         });

//         archive.pipe(output);

//         archive.directory(
//             "cypress/reports/html",
//             false
//         );

//         archive.finalize();

//     });

// }


// async function sendEmail() {

//     await createZip();


//     const transporter = nodemailer.createTransport({

//         service: "gmail",

//         auth: {

//             user: process.env.EMAIL,

//             pass: process.env.EMAIL_PASSWORD

//         }

//     });


//     await transporter.sendMail({

//         from: process.env.EMAIL,

//         to: process.env.EMAIL,

//         subject: "Cypress Automation Test Report",

//         text: "Cypress test execution completed. Report attached.",

//         attachments: [

//             {

//                 filename: "cypress-report.zip",

//                 path: "./cypress-report.zip"

//             }

//         ]

//     });


//     console.log("Report email sent");

// }


// sendEmail();



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

    subject: "Cypress Automation Test Report",

    text: "Cypress execution completed. Please find the attached HTML report.",


    attachments: [
        {
            filename: "Cypress_Report.html",
            path: "./cypress/reports/html/index.html"
        }
    ]

};


transporter.sendMail(mailOptions, (error, info) => {

    if (error) {

        console.error("Email sending failed:", error);
        process.exit(1);

    } else {

        console.log("Email sent successfully:", info.response);

    }

});