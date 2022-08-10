const RemovedProduct = require('../models/removedproduct');

exports.getRemovedList = async (req, res) => {
    const removedList = [];
    let ritems = await RemovedProduct.find({});
    for (let r of ritems) {
        let itemid = r.itemid.toString();

        removedList.push({
            itemid: itemid,
            name: r.name,
            quantity: r.quantity,
            amount: r.amount,
            dateadded: r.createdAt.toUTCString().slice(6, 16)

        });

    }
    res.json({ removedList });
}

exports.getRemovedProductListByName = async (req, res) => {
    const removedList = [];
    let r = await RemovedProduct.findOne({ name: req.body.name });
    if (!r) {
        return res.json({ code: 1, message: "Item Not Found!", removedList });
    }

    let date = r.createdAt.toUTCString().slice(6, 16);
    let itemid = r.itemid.toString();

    removedList.push({
        itemid: itemid,
        name: r.name,
        quantity: r.quantity,
        amount: r.amount,
        dateadded: date

    });

    res.json({ code: 1, removedList });



}
exports.getremovedProducts = (req, res) => {

    RemovedProduct.find({})
        .exec((error, removedproducts) => {
            if (error) return res.status(400).json({ error });
            if (removedproducts) {
                res.json({ removedproducts });
            }

        });
}
exports.getTotalScrap = (req, res) => {
    let totalScrapNo = 0;
    let totalScrapRevenue = 0;
    RemovedProduct.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                for (let r of products) {
                    totalScrapNo = totalScrapNo + r.quantity;
                    totalScrapRevenue = totalScrapRevenue + r.amount;
                }
                res.json({ totalScrapNo, totalScrapRevenue });
            }

        });
}

exports.getMonthsScrap = (req, res) => {
    let year = new Date().getFullYear();

    // console.log(year);
    // console.log(month);
    let JanScrapRevenue = 0;
    let FebScrapRevenue = 0;
    let MarScrapRevenue = 0;
    let AprScrapRevenue = 0;
    let MayScrapRevenue = 0;
    let JunScrapRevenue = 0;
    let JulScrapRevenue = 0;
    let AugScrapRevenue = 0;
    let SepScrapRevenue = 0;
    let OctScrapRevenue = 0;
    let NovScrapRevenue = 0;
    let DecScrapRevenue = 0;


    RemovedProduct.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                for (let m of products) {
                    let myear = m.createdAt.getFullYear();
                    let month = m.createdAt.getMonth();
                    // console.log("a",month);
                    if (myear == year && month == 1) {
                        JanScrapRevenue = JanScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 2) {
                        FebScrapRevenue = FebScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 3) {
                        MarScrapRevenue = MarScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 4) {
                        AprScrapRevenue = AprScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 5) {
                        MayScrapRevenue = MayScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 6) {
                        JunScrapRevenue = JunScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 7) {
                        JulScrapRevenue = JulScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 8) {
                        AugScrapRevenue = AugScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 9) {
                        SepScrapRevenue = SepScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 10) {

                        OctScrapRevenue = OctScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 11) {

                        NovScrapRevenue = NovScrapRevenue + m.amount;
                    }
                    else if (myear == year && month == 12) {
                        DecScrapRevenue = DecScrapRevenue + m.amount;
                    }


                }
                res.json({ JanScrapRevenue, FebScrapRevenue, MarScrapRevenue, AprScrapRevenue, MayScrapRevenue, JunScrapRevenue, JulScrapRevenue, AugScrapRevenue, SepScrapRevenue, OctScrapRevenue, NovScrapRevenue, DecScrapRevenue });
            }

        });
}