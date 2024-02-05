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
                text: "Thanks for joining the Mini Paint Challenge! I'm excited to have you here.\n\nThis week's reference photo is a collaboration with a UK mixed media artist. Her name is Elysia Jessica and she kindly provided this delicious latte for us to paint.\n\nCome join my live painting lessons every week on my YouTube channel. I'll walk you through my colour mixing process and teach you how I approach my paintings. Here's how to join the live lessons. ⤵️\n\nWednesday at 10am PST I'll be going live on my YouTube channel. Subscribe to my YouTube channel at this link and turn on the bell to get notified when I go live.\n\nhttps://youtube.com/@meganjosolart\n\nI will send you an email with the reference photo and live stream link as well the day before. That way you can get a basic sketch done beforehand.\n\nInstructions on how to join:\n⭐ Do a rough sketch of the reference photo beforehand.\n⭐ Gather your art supplies. (Oil, Acrylic, Watercolour, Digital, Paint Sticks, Pencils, Markers, Embroidery…)\n⭐ Join the YouTube live stream or paint on your own time.\n⭐ Post your painting on Instagram or Facebook\n⭐ Use the hashtag #minipaintchallenge\n⭐ Tag me @meganjosolart so I can show your art some love!\n\nI will be painting with oil paint but feel free to use any medium of your choice.\n\nIf you miss the live stream don't worry! I'll be posting the replays on my YouTube channel after the stream. You can come back to it whenever you have time.\n\nI look forward to seeing you there. ❤️",
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