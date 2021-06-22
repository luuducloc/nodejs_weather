const Course = require('../models/Course')
class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    };

    show(req, res) {
        // res.send('<h1>Detail</h1>');
        Course.find({}, (err, courses) => {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        })
    }
}

module.exports = new NewsController;