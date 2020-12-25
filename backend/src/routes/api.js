

const model = require('../dbconfig/dbconfig');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const { RedoTwoTone } = require('@material-ui/icons');
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

router.get('/products/:id', async(req, res) => {
    const {id} = req.params;

    const products = await model.statement.sequelize.query(`
    SELECT idproduct, prod_name , prod_price, prod_image FROM products p
INNER JOIN sub_categories sc ON p.prod_idsubcategory = sc.idsub_category
INNER JOIN categories c ON sc.id_category = c.idcategory where c.idcategory = ?
    `, {
        replacements:[`${id}`],
        type:QueryTypes.SELECT
    });
    const productsJson = JSON.stringify(products);
    res.send(productsJson);
    res.end();
});

router.post('/register', async(req, res)=>{
    
    //autenticar correo
    try{
        const client = await model.client.findOne({
            where:{
                cli_email:req.body.cli_email
            }
        })
        if(!client){
            let hashPassword
            // hashear la contraseña
            hashPassword = bcrypt.hashSync(req.body.cli_password , 10);
            //guardar el registro
            req.body.cli_password = hashPassword;
            await model.client.create(req.body);
            console.log("datos registrados");
            res.end();
        }else{
            res.send("Ese correo ya existe");res.end();
        }

    }catch(err){
        console.log(err);
    }

});




module.exports = router;