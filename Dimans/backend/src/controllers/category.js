const Category = require('../models/category')

const slugify = require('slugify');

exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error, category) => {
        if (error) return res.status(400).json({ error });
        if (category) {
            return res.json({ message: "Category added successfully!" });
        }
    });

}

exports.getCategories = (req, res) => {

    Category.find({})
        .exec((error, categories) => {
            if (error) return res.status(400).json({ error });
            if (categories) {
                res.json({ categories });
            }

        });
}
exports.updateCategoryByName = (req, res) => {
    const newname = req.body.newname;

    Category.findOne({ name: req.body.oldname })
        .exec((error, category) => {
            if (error) return res.status(400).json({ error });
            if (category) {
                let name1 = category.name;
                var myquery = { name: name1 };
                var newvalues = { $set: { name: newname, slug: slugify(newname) } }
                Category.updateOne(myquery, newvalues, function (err, item) {
                    if (err) return res.status(400).json({ error });
                    if (item) {
                        return res.json({ message: "Category Updated successfully!" });
                    }
                })
            }

        });
}

exports.getTotalCategories = (req, res) => {
    let totalCategories
    Category.find({})
        .exec((error, categories) => {
            if (error) return res.status(400).json({ error });
            if (categories) {
                totalCategories = categories.length;

                res.json({ totalCategories });
            }

        });
}