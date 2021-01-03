

const model = require('../dbconfig/dbconfig');
const clientController = require('../controllers/clients');
const productsController = require('../controllers/products');
const { RssFeedTwoTone } = require('@material-ui/icons');
const router = require('express').Router();


router.get('/pets', async(req, res) => {

    const response = await model.pet.findAll();
    const responseJson = JSON.stringify(response);
    res.send(responseJson);
});

router.get('/category', async(req, res) => {
    const  response= await model.category.findAll();
    const responseJson = JSON.stringify(response);
    res.send(responseJson);res.end();
});

router.get('/subcategory/:id', async (req ,res) => {
        const result = await model.subCategory.findAll({
            where:{
                id_category:req.params.id
            }
        });
        const resultJson = JSON.stringify(result);
        res.send(resultJson);res.end();
});


router.get('/products/:id', productsController.getProducts);
router.get('/product/:id', productsController.getProductById);
router.post('/buy',productsController.buyingInfo);

//routes para el cliente
router.post('/register', clientController.saveClient);
router.post('/login',clientController.login);
router.get('/user', clientController.getUser);
router.get('/logout', clientController.logout);



module.exports = router;