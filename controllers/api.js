const Stretch = require('../models/Stretches')

module.exports = {
    getIndex: async (request, response) => {
        try {
            const todoItems = await Stretch.find()
            // const todoItems = await Stretch.find().sort({likes:-1})
            const itemsLeft = await Stretch.countDocuments()
            response.render('index.ejs', {items: todoItems, left: itemsLeft})
        } catch(error) {
            console.error(error)
        }
    },
    createStretch: async (request, response) => {
        const { name, difficulty, instructions, muscle, coverImg, demoVideo } = request.body;
        if (!name || !muscle) response.status(405).json({ success: false, data: "Invalid or missing required input" });
        try {
            await Stretch.create({
                name,
				difficulty,
				instructions,
				muscle,
				coverImg,
				demoVideo,
            })
            console.log('Stretch has been added!')
            response.redirect('/')
        } catch(error){
            console.error(error)
        }
    },
}
