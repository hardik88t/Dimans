const Product = require('../models/product');
const ReselledProduct = require('../models/reselleditems');
const Distributor = require('../models/distributor');

exports.addToReselled = async (req, res) => {
    let no = req.body.Sno;
    let p = await Product.findOne({ name: req.body.name });
    let d = await Distributor.findOne({ name: req.body.distributorname });
    if (!p) return res.json({ message: "product not found" });
    if (p) {
        const mainObj = {
            name: req.body.name,
            itemid: p._id,
            quantity: req.body.Sno,
            distributorid: d._id,
            price: p.sellingPrice * no,
            dateReselled: req.body.dateadd,
            // reselledNos: snos,
        };
        const mitem = new ReselledProduct(mainObj);
        mitem.save(((error, item) => {
            if (error) {
                console.log(error);
                return res.json({ error });
            }
        }));
        p.resellItems.push(no);
        let q = p.quantity - no;
        var myquery = { name: req.body.name };
        var newvalues = { $set: { resellItems: p.resellItems, quantity: q } }
        Product.updateOne(myquery, newvalues, function (error, item) {
            if (error) {
                res.status(400).json({ error });
            }
        })
        res.json({ message: "product added to reselled successfully!" });
    }
}


exports.getReselledList = async (req, res) => {
    const reselledList = [];
    let mitems = await ReselledProduct.find({});
    for (let m of mitems) {
        let itemid = m.itemid.toString();
        let distributorid = m.distributorid.toString();
        let datereselled = m.dateReselled.toUTCString().slice(6, 16);
        // console.log(m.quantity);
        reselledList.push({
            itemid: itemid,
            name: m.name,
            qty: m.quantity,
            dateReselled: datereselled,
            price: m.price,
            distributorid: distributorid
        });
    }
    res.json({ reselledList });
}

exports.getReselledProducts = (req, res) => {

    ReselledProduct.find({})
        .exec((error, reselledproducts) => {
            if (error) return res.status(400).json({ error });
            if (reselledproducts) {
                res.json({ reselledproducts });
            }

        });
}
exports.getReselledProductListByName = async (req, res) => {
    const reselledList = [];
    let m = await ReselledProduct.findOne({ name: req.body.name });
    if (!m) {
        res.json({ message: "item not found", reselledList });
    }
    if (m) {
        let itemid = m.itemid.toString();
        let distributorid = m.distributorid.toString();
        let datereselled = m.dateReselled.toUTCString().slice(6, 16);


        // console.log(m.quantity);
        reselledList.push({
            itemid: itemid,
            name: m.name,
            qty: m.quantity,
            dateReselled: datereselled,
            price: m.price,
            distributorid: distributorid

        });

    }
    res.json({ reselledList });
}
exports.getTotalResell = (req, res) => {
    let totalResellNo = 0;
    let totalResellRevenue = 0
    ReselledProduct.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                for (let rs of products) {
                    totalResellNo = totalResellNo + rs.quantity;
                    totalResellRevenue = totalResellRevenue + rs.price;
                }
                res.json({ totalResellNo, totalResellRevenue });
            }

        });
}

exports.getMonthsResell = (req, res) => {
    let year = new Date().getFullYear();

    // console.log(year);
    // console.log(month);
    let JanResellRevenue = 0;
    let FebResellRevenue = 0;
    let MarResellRevenue = 0;
    let AprResellRevenue = 0;
    let MayResellRevenue = 0;
    let JunResellRevenue = 0;
    let JulResellRevenue = 0;
    let AugResellRevenue = 0;
    let SepResellRevenue = 0;
    let OctResellRevenue = 0;
    let NovResellRevenue = 0;
    let DecResellRevenue = 0;


    ReselledProduct.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                for (let m of products) {
                    let myear = m.dateReselled.getFullYear();
                    let month = m.dateReselled.getMonth();
                    // console.log("a",month);

                    if (myear == year && month == 1) {
                        JanResellRevenue = JanResellRevenue + m.price;
                    }
                    else if (myear == year && month == 2) {
                        FebResellRevenue = FebResellRevenue + m.price;
                    }
                    else if (myear == year && month == 3) {
                        MarResellRevenue = MarResellRevenue + m.price;
                    }
                    else if (myear == year && month == 4) {
                        AprResellRevenue = AprResellRevenue + m.price;
                    }
                    else if (myear == year && month == 5) {
                        MayResellRevenue = MayResellRevenue + m.price;
                    }
                    else if (myear == year && month == 6) {
                        JunResellRevenue = JunResellRevenue + m.price;
                    }
                    else if (myear == year && month == 7) {
                        JulResellRevenue = JulResellRevenue + m.price;
                    }
                    else if (myear == year && month == 8) {
                        AugResellRevenue = AugResellRevenue + m.price;
                    }
                    else if (myear == year && month == 9) {
                        SepResellRevenue = SepResellRevenue + m.price;
                    }
                    else if (myear == year && month == 10) {

                        OctResellRevenue = OctResellRevenue + m.price;
                    }
                    else if (myear == year && month == 11) {

                        NovResellRevenue = NovResellRevenue + m.price;
                    }
                    else if (myear == year && month == 12) {
                        DecResellRevenue = DecResellRevenue + m.price;
                    }


                }
                res.json({ JanResellRevenue, FebResellRevenue, MarResellRevenue, AprResellRevenue, MayResellRevenue, JunResellRevenue, JulResellRevenue, AugResellRevenue, SepResellRevenue, OctResellRevenue, NovResellRevenue, DecResellRevenue });
            }

        });
}