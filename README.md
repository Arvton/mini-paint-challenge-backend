# Mini Paint Challenge -- Server

This is the repository for my BrainStation capstone project.  The live frontend of the project can be found [here](https://www.minipaintchallenge.com)

Here is a link the the [frontend repo](https://github.com/Arvton/mini-paint-challenge-frontend/tree/main)

## What is the project?

This is a landing page for the Mini Paint Challenge. The primary goal is to inform visitors about the challenge.

Visitors can also sign-up to receive the:

- current challenge reference photo
- challenge announcements
- challenge instructions
- weekly reminders

## Why did I choose this for my capstone?

My partner has an art challenge that can be powered up by a landing page and website.

These are some of the problems:

- Comms for the challenge happens through various social media accounts
- Lack of a channel to deliver challenge announcements directly to a follower
- No way to collect emails for her followers interested in the challenge
- Accessing challenge resources needs to be done manually
- Information about the challenge is shared manually

### How does this project solve these problems?

This server handles requests from the frontend and makes calls to an email API.

A landing page solves the following problems.

A sign up form will collect emails into a welcome list. This will trigger a welcome email to be sent. It will contain:

- the current challenge reference photo as an attachment
- instructions on how to prepare and participate in the challenge

The welcome email list will be used to send challenge announcements and any other marketing.

A checkbox on the form will opt-in followers into a weekly reminders email list. This list will be used to send new challenge reference photos and reminders.

The landing page will have sections to give more reasons to participate and sign-up with an email. These sections are mainly for visitors who are unfamiliar to the challenge.

For the users visiting the page after being given a URL through social media, they may be well-informed about the challenge.  The landing page will an easily shareable URL for their community.

## What tech stack did I build the project in?

The capstone is a fullstack project. It has a frontend, dedicated backend, and other integrations.

The frontend makes use of:

- Vite
- React
- Axios
- SASS

The backend makes use of:

- Express.js (json and static middleware)
- Node.js (fsPromises, form-data)
- CORS
- dotenv
- mailgun.js

The project makes use of DigitalOcean(DO). The frontend and backend are hosted on DO's App Platform. The DNS records required to work with the email service, Mailgun, are managed in DO as well.

The project uses Mailgun's Email API to manage email lists and sending emails.

## How am I going to extend this project?

This project is not just for the bootcamp. It's a personal project that I'll need to maintain and want to extend. Open up the collapsed sections to check out my ideas.

### Frontend

<details>
<summary>Create other pages</summary>
When I wrote up the capstone proposal, there were other pages that could be added to the project. I can add these seprate pages: About, Socials, Gallery, & Collaborators.

The About page will have more info about my partner and why she started the challenge.

The Socials page will have stylish cards that link out to my partner's [Youtube](https://www.youtube.com/@meganjosolart), [Instagram](https://www.instagram.com/meganjosolart/), and [blog](https://meganjosolart.ca/).

The Gallery page will feature art from the community. The challenge encourages others to create their own pieces of art and to tag my partner on social media. This page could be the home for all of it and serves as social proof for my wife's ability to encourage users to create.

The Collaborators page is for facilitating collaborations. Right now, my partner is handling this through DMs on Instagram. This page will have a form to submit the collaborator's reference photo(s) and contact info. A booking calendar will eb available to see open livestreams for a collaboration.

</details>
<details>
<summary>Migrate to component library</summary>
I want to migrate from using my own components to pre-made components. The components I'm planning to migrate to are Radix Primitives. I like that they are taking care of accessibility and that they are unstyled.
</details>
<details>
<summary>Add FAQ section</summary>
A frequently asked question section can better inform a visitor. It can lower the amount of questions being sent over social media.
</details>
<details>
<summary>Add Carousels</summary>
A frequently asked question section can better inform a visitor. It can lower the amount of questions being sent over social media.
</details>
<details>
<summary>Improve style and animations</summary>
The landing page has a basic design that I'm proud of. I want to try some a bento grid design and some fancier animations.
</details>
<details>
<summary>Add light/dark theme</summary>
The page is dark themed by default. I would like to add theme responsiveness based on the user's preferences.
</details>

### Backend

<details>
<summary>Add unsubscribe button to emails</summary>
This is legally required. It will be set up as another endpoint
</details>
<details>
<summary>Design an email templates</summary>
The current solution is one giant text string with line breaks.
</details>
<details>
<summary>Admin dashboard</summary>
The dashboard will be used trigger or schedule the weekly emails. It should provide a view of the attachment and the email text contents.

It will have a login page to control access
</details>
<details>
<summary>Re-use endpoints with a chatbot on blog</summary>
I originally wanted a chatbot for my capstone.  The chatbot will serve as an interactive mini paint challenge landing on the blog.
</details>

## Backstory

I chose to go through BrainStation's Software Engineering bootcamp to speed up learning to code. My pace as a self-taught developer felt slow.  As a Navy veteran, I had access to an education benefit and I decided to invest in further education.

My main goal was to use my new coding skills to build my wife's online presence. This capstone project was the first opportunity to do this during the bootcamp.

The coding skills have also helped in my current role which I'll describe as cloud operations. I have been able to take on app development and database responsibilities as needed.

## Local Hosting

To host this project locally and have a look at all the features, you will need to locally host the frontend, have a Mailgun acocunt, and Mailgun API key.
Then you need to configure the following variables in an .env file:

- PORT=8080
- API_KEY=<YOUR_API_KEY>
- DOMAIN=<YOUR_DOMAIN>
- WELCOME_LIST<YOUR_EMAIL_LIST>
- WEEKLY_LIST=<ANOTHER_EMAIL_LIST>
