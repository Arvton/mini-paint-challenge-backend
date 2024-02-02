const signup = (req, res) => {
    const email = req.body.email
    const weeklyReminders = req.body.weeklyReminders
    res.send(`Sign up endpoint received the form data. Email: ${email}, Weekly Reminders: ${weeklyReminders}`)
}

module.exports = {
    signup
}