const Location = require('../models/location')

const slugify = require('slugify');


exports.addLocation = (req, res) => {
    const locationObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }


    const loc = new Location(locationObj);
    loc.save((error, location) => {
        if (error) return res.status(400).json({ error });
        if (location) {
            return res.json({ message: "Location added successfully!" });
        }
    });

}

exports.getLocations = (req, res) => {
    Location.find({})
        .exec((error, locations) => {
            if (error) return res.status(400).json({ error });
            if (locations) {
                res.status(200).json({ locations });
            }

        });
}
exports.updateLocationByName = async (req, res) => {

    const newname = req.body.newname;
    try {
        const location = await Location.findOne({ name: req.body.oldname });

        if (!location) {
            return res.json({ message: "location not found" });
        }
        if (location) {
            console.log("updated1");
            let name1 = location.name;
            var myquery = { name: name1 };
            var newvalues = { $set: { name: newname, slug: slugify(newname) } }
            Location.updateOne(myquery, newvalues, function (err, item) {
                if (err) return res.status(400).json({ error });
                if (item) {
                    return res.json({ message: "Location Updated successfully!" });
                }
            })
        }
    } catch (error) {
        console.log(error);
    }


}