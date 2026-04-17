const cron = require('node-cron');
const Preference = require('../models/preference');
const { getNews } = require('../services/newsService');
const { sendEmail } = require('../services/emailService');
const User = require('../models/user');

const startNewsAlerts = () => {

    cron.schedule('*/1 * * * *', async () => { 
        console.log("Checking news alerts...");

        try {
            const users = await Preference.find();

            for (let pref of users) {

                if (!pref.emailEnabled) continue;

                const category = pref.categories?.[0];
                if (!category) continue;

                const news = await getNews(category);

                const user = await User.findById(pref.userId);

                if (!user) continue;

               
                const content = news.slice(0, 3).map(n => `• ${n.title}`).join('\n');

                await sendEmail(
                    user.email,
                    `News Alert - ${category}`,
                    content
                );
            }

        } catch (error) {
            console.log("Cron error:", error.message);
        }
    });
};

module.exports = { startNewsAlerts };