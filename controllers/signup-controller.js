const API_KEY = process.env.API_KEY
const DOMAIN = process.env.DOMAIN
const WELCOME_LIST = process.env.WELCOME_LIST
const WEEKLY_LIST = process.env.WEEKLY_LIST

const fsPromises = require("fs").promises
const path = require("path")
const filePath = path.resolve(__dirname, "../public/challenge-photos/current-reference.png")

const formData = require('form-data')
const Mailgun = require('mailgun.js')
const mailgun = new Mailgun(formData)
const client = mailgun.client({ username: 'api', key: API_KEY })

const sendWelcomeEmail = (email) => {
    (async () => {
        const filepath = path.resolve(__dirname, "../public/challenge-photos/current-reference.png");
        try {
            const file = {
                filename: 'current-reference.png',
                data: await fsPromises.readFile(filepath)
            };
            const attachment = [file];

            const welcomeEmail = {
                from: "Welcome <welcome@minipaintchallenge.com>",
                to: email,
                subject: "Welcome to Mini Paint Challenge!",
                text: "This is a placeholder for the welcome email.",
                attachment
            };

            const result = await client.messages.create(DOMAIN, welcomeEmail);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    })();
}

const addNewEmailToWelcome = (email) => {
    (async () => {
        try {
            const newMember = await client.lists.members.createMember(WELCOME_LIST,
                {
                    address: email,
                    upsert: "yes"
                })
            sendWelcomeEmail(email)
            console.log("newMember", newMember)
        } catch (err) {
            console.log(err)
        }
    })()
}

const addNewEmailToWeekly = (email) => {
    (async () => {
        try {
            const newMember = await client.lists.members.createMember(WEEKLY_LIST,
                {
                    address: email,
                    upsert: "yes"
                })
            console.log("newMember", newMember)
        } catch (err) {
            console.log(err)
        }
    })()
}

const signup = (req, res) => {
    const email = req.body.email
    const weeklyReminders = req.body.weeklyReminders
    addNewEmailToWelcome(email)
    if (weeklyReminders) {
        addNewEmailToWeekly(email)
    }
    res.send(`Sign up endpoint received the form data. Email: ${email}, Weekly Reminders: ${weeklyReminders}.`)
}

module.exports = {
    signup
}