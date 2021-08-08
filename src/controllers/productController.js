const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productController = {
    index: (req, res) => {
        res.render("item-detail");
    },






    detail: (req,res) => {

        let idURL = req.params.index;
        let productoEncontrado;

        for(let p of products){
            if(p.id==idURL){
                productoEncontrado = p;
                break;
            }
        }

        res.render("item-detail", {productoDetalle: productoEncontrado});
    }
}

module.exports = productController;