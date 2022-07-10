const Category = require('../models/category');
const Product = require('../models/product');
const Location = require('../models/location');
const Distributor = require('../models/distributor');
const RemovedProduct = require('../models/removedproduct');



exports.createProduct = async (req, res) => {
    const itemObj = {
        name: req.body.name,
        price: req.body.price,
        sellingPrice: req.body.sellingPrice,
        category: req.body.category,
        quantity: req.body.quantity,
        location: req.body.location,
        distributor: req.body.distributor
    };
    let pdct = await Product.findOne({ name: req.body.name });
    if (pdct) {
        let name1 = pdct.name;
        let Quantity = pdct.quantity + parseInt(req.body.quantity);
        var myquery = { name: name1 };
        var newvalues = {
            $set: {
                name: name1, price: req.body.price, sellingPrice: req.body.sellingPrice,
                quantity: Quantity, category: req.body.category, location: req.body.location,
                distributor: req.body.distributor
            }
        };
        Product.updateOne(myquery, newvalues, function (err, item) {
            if (err) return res.status(400).json({ err });
            if (item) {
                return res.json({ message: "Item Added successfully!" });
            }
        })
    }
    else {
        const product = new Product(itemObj);
        product.save(((error, item) => {
            if (error) return res.status(400).json({ error });
            if (item) {
                return res.json({ message: "Item Added successfully!" });
            }
        }));
    }
};
exports.getProducts = (req, res) => {
    Product.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                res.json({ products });
            }
        });
}
exports.getProductByName = (req, res) => {

    Product.findOne({ name: req.body.name })
        .exec((error, product) => {
            if (error) return res.status(400).json({ error });
            if (product) {
                res.json({ product });
            }
        });
}
exports.updateProductByName = async (req, res) => {
    const itemObj = {
        name: req.body.name,
        price: req.body.price,
        sellingPrice: req.body.sellingPrice,
        category: req.body.category,
        quantity: req.body.quantity,
        location: req.body.location,
        distributor: req.body.distributor
    };
    try {
        let product = await Product.findOne({ name: req.body.name })
        if (!product) {
            return res.json({ message: "Item Not Found!" });
        }
        if (product) {
            let name1 = product.name;
            var myquery = { name: name1 };
            var newvalues = {
                $set: {
                    price: req.body.price, sellingPrice: req.body.sellingPrice,
                    quantity: req.body.quantity, category: req.body.category,
                    location: req.body.location, distributor: req.body.distributor
                }
            }
            Product.updateOne(myquery, newvalues, function (error, item) {
                if (error) return res.status(400).json({ error });
                if (item) {
                    return res.json({ message: "Item Updated successfully!" });
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.getProductList = async (req, res) => {
    const productList = [];
    let products = await Product.find({});
    for (let p of products) {
        let catid = p.category.toString();
        let locid = p.location.toString();
        let disid = p.distributor.toString();
        let cat = await Category.findById(catid);
        let catname = cat.name;
        let loc = await Location.findById(locid);
        let locname = loc.name;
        let dist = await Distributor.findById(disid);
        let distname = dist.name;
        let removedno = p.removedItems.length;
        let resellno = p.resellItems.length;
        // console.log(p.createdAt.toUTCString().slice(6,16));
        // let date = p.createdAt.toUTCString().slice(6, 16);
        productList.push({
            _id: p._id,
            name: p.name,
            price: p.price,
            sellingPrice: p.sellingPrice,
            category: catname,
            location: locname,
            distributor: distname,
            quantity: p.quantity,
            resellNo: resellno,
            removedNo: removedno,
            // date: date
        });

    }
    // console.log(products);
    res.json({ productList });

};
exports.getrecentProductList = async (req, res) => {
    const productList = [];
    let products = await Product.find().sort({ "createdAt": 1 }).limit(10);
    for (let p of products) {
        let catid = p.category.toString();
        let locid = p.location.toString();
        let disid = p.distributor.toString();
        let cat = await Category.findById(catid);
        let catname = cat.name;
        let loc = await Location.findById(locid);
        let locname = loc.name;
        let dist = await Distributor.findById(disid);
        let distname = dist.name;
        let removedno = p.removedItems.length;
        let resellno = p.resellItems.length;
        // console.log(p.createdAt.toUTCString().slice(6,16));
        let date = p.createdAt.toUTCString().slice(6, 16);
        productList.push({
            _id: p._id,
            name: p.name,
            price: p.price,
            sellingPrice: p.sellingPrice,
            category: catname,
            location: locname,
            distributor: distname,
            quantity: p.quantity,
            resellNo: resellno,
            removedNo: removedno,
            // date: date
        });
    }
    // console.log(products);
    res.json({ productList });

};

exports.getProductListByName = async (req, res) => {
    let name1 = req.body.name;
    const productList = [];
    let p = await Product.findOne({ name: name1 });
    if (!p) res.json({ message: "product not found", productList });
    if (p) {
        let catid = p.category.toString();
        let locid = p.location.toString();
        let disid = p.distributor.toString();
        let cat = await Category.findById(catid);
        let catname = cat.name;
        let loc = await Location.findById(locid);
        let locname = loc.name;
        let dist = await Distributor.findById(disid);
        let distname = dist.name;
        let removedno = p.removedItems.length;
        let resellno = p.resellItems.length;
        // console.log(p.createdAt.toUTCString().slice(6,16));
        let date = p.createdAt.toUTCString().slice(6, 16);
        productList.push({
            _id: p._id,
            name: p.name,
            price: p.price,
            sellingPrice: p.sellingPrice,
            category: catname,
            location: locname,
            distributor: distname,
            quantity: p.quantity,
            resellNo: resellno,
            removedNo: removedno,
            // date: date
        });
        // console.log(products);
        res.json({ productList });
    }

};


exports.deleteProduct = async (req, res) => {
    let name1 = req.body.name;
    let no = req.body.Rno;
    let rnos = [];
    let p = await Product.findOne({ name: name1 });
    if (!p) res.json({ message: "product not found" });
    if (p) {
        var found = p.removedItems.find(function (element) {
            return element == no;
        });
        if (found == undefined) {
            let r = await RemovedProduct.findOne({ name: name1 });
            if (!r) {
                rnos.push(no);
                const remObj = {
                    name: req.body.name,
                    quantity: no,
                    amount: p.sellingPrice * no,
                    removedNos: rnos,
                    itemid: p._id,
                    price: p.sellingPrice
                };
                const ritem = new RemovedProduct(remObj);
                ritem.save(((error, item) => {
                    if (error) return res.status(400).json({ error });
                }));
            }
            if (r) {
                r.removedNos.push(no);
                r.amount = r.amount + (r.price * no);
                r.quantity = r.quantity + no;
                var myquery = { name: name1 };
                var newvalues =
                    { $set: { removedNos: r.removedNos, amount: r.amount, quantity: r.quantity } };
                RemovedProduct.updateOne(myquery, newvalues, function (error, item) {
                    if (error) return res.status(400).json({ error });
                })
            }
            p.removedItems.push(no);
            let q = p.quantity - no;
            var myquery = { name: name1 };
            var newvalues = { $set: { removedItems: p.removedItems, quantity: q } }
            Product.updateOne(myquery, newvalues, function (error, item) {
                if (error) return res.status(400).json({ error });
            })
            res.json({ message: "product deleted Successfully!" });
        }
        else {
            res.json({ message: "product already deleted" });
        }
    }
}

exports.getTotalItems = async (req, res) => {
    // let totalRegistred = 0;
    let totalAvailable = 0;
    let itemsExpense = 0;

    Product.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                for (let p of products) {
                    totalAvailable = totalAvailable + p.quantity;
                    // totalRegistred = totalRegistred + p.InitialQuantity;
                    itemsExpense = itemsExpense + (p.quantity * p.price);
                }
                res.json({ totalAvailable, itemsExpense });
            }
        });

}


exports.getMonthsCost = (req, res) => {
    let year = new Date().getFullYear();

    // console.log(year);
    // console.log(month);
    let JanProductExpence = 0;
    let FebProductExpence = 0;
    let MarProductExpence = 0;
    let AprProductExpence = 0;
    let MayProductExpence = 0;
    let JunProductExpence = 0;
    let JulProductExpence = 0;
    let AugProductExpence = 0;
    let SepProductExpence = 0;
    let OctProductExpence = 0;
    let NovProductExpence = 0;
    let DecProductExpence = 0;

    Product.find({})
        .exec((error, products) => {
            if (error) return res.status(400).json({ error });
            if (products) {
                for (let m of products) {
                    let myear = m.createdAt.getFullYear();
                    let month = m.createdAt.getMonth();
                    // console.log("a",month);
                    if (myear == year && month == 1) {
                        JanProductExpence = JanProductExpence + m.price;
                    }
                    else if (myear == year && month == 2) {
                        FebProductExpence = FebProductExpence + m.price;
                    }
                    else if (myear == year && month == 3) {
                        MarProductExpence = MarProductExpence + m.price;
                    }
                    else if (myear == year && month == 4) {
                        AprProductExpence = AprProductExpence + m.price;
                    }
                    else if (myear == year && month == 5) {
                        MayProductExpence = MayProductExpence + m.price;
                    }
                    else if (myear == year && month == 6) {
                        JunProductExpence = JunProductExpence + m.price;
                    }
                    else if (myear == year && month == 7) {
                        JulProductExpence = JulProductExpence + m.price;
                    }
                    else if (myear == year && month == 8) {
                        AugProductExpence = AugProductExpence + m.price;
                    }
                    else if (myear == year && month == 9) {
                        SepProductExpence = SepProductExpence + m.price;
                    }
                    else if (myear == year && month == 10) {

                        OctProductExpence = OctProductExpence + m.price;
                    }
                    else if (myear == year && month == 11) {

                        NovProductExpence = NovProductExpence + m.price;
                    }
                    else if (myear == year && month == 12) {
                        DecProductExpence = DecProductExpence + m.price;
                    }
                }
                res.json({ JanProductExpence, FebProductExpence, MarProductExpence, AprProductExpence, MayProductExpence, JunProductExpence, JulProductExpence, AugProductExpence, SepProductExpence, OctProductExpence, NovProductExpence, DecProductExpence });
            }

        });
}