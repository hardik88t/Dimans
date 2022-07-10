const Distributor = require('../models/distributor')

exports.addDistributor = (req, res) => {
    console.log('addDistributor');
    const DistributorObj = {
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        address: req.body.address
        // role: req.body.role
    }
    const a = new Distributor(DistributorObj);
    a.save((error, distributor) => {
        if (error) return res.status(400).json({ error });
        if (distributor) {
            return res.json({ message: "Distributor added successfully!" });
        }
    });
}
exports.getDistributors = (req, res) => {
    Distributor.find({})
        .exec((error, agencies) => {
            if (error) return res.status(400).json({ error });
            if (agencies) {
                res.status(200).json({ agencies });
            }
        });
}
exports.updateDistributorByName = (req, res) => {
    const newname = req.body.newname;
    const email = req.body.email;
    const contactNumber = req.body.contactNumber;
    const address = req.body.address;
    // const role = req.body.role;

    Distributor.findOne({ name: req.body.oldname })
        .exec((error, distributor) => {
            if (error) return res.status(400).json({ error });
            if (distributor) {
                let name1 = distributor.name;
                var myquery = { name: name1 };
                var newvalues = {
                    $set: {
                        name: newname, email: email,
                        contactNumber: contactNumber, address: address
                        // role: role
                    }
                }
                Distributor.updateOne(myquery, newvalues, function (err, item) {
                    if (err) return res.status(400).json({ error });
                    if (item) {
                        res.json({ code: 0, message: "Distributor updated successfully!" });
                    }
                })
            }
        });
}