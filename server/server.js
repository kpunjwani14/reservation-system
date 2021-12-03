const express = require("express");
const jwt = require('jsonwebtoken')
const app = express();
const moment = require('moment')
const { sequelize, UserCredentials, UserInformation, Reservation,Sequelize} = require('../models')
const Op = Sequelize.Op
const cors = require("cors");
const { body, validationResult, check } = require('express-validator');
const passport = require('passport')
app.use(cors());
app.use(express.json());
app.use(passport.initialize())

const local = require('passport-local').Strategy;

start(passport)
function start(pass) {
    pass.use(new local({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
        console.log('in')
        const user = await UserCredentials.findOne({ where: { Email: email, Password: password },include:UserCredentials.Info })
        
        if (user == null)
            return done(null, false, { message: 'Credentials Do Not Match Any Current Users' })

        let result = jwt.sign({ email: user.dataValues.Email, id: user.dataValues.UserId }, 'hellosecret', { expiresIn: 3600 })

        return done(null, { token: result, userId: user.dataValues.UserId, email: user.dataValues.Email, name:user.dataValues.UserInformation.Name })

    }))
    pass.serializeUser((user, done) => {
        return done(null, user.userId)

    })
    pass.deserializeUser(async (id, done) => {
        const user = await UserCredentials.findOne({ where: { userId: id }, include: UserCredentials.Info})
        console.log(user.dataValues)
        return done(null, user)

    })
}



const auth = (req, res, next) => {
    let token = req.headers.authorization
    console.log(token)
    if (!token || token == '')
      return res.status(401).send()
    token = token.split(' ')
    console.log(token[1])
    if (!token[1])
      return res.status(401).send()
    jwt.verify(token[1], 'hellosecret', async (err, user) => {
        console.log(user)
      if (err)
        return res.status(403).send()
      let checkUser = await UserCredentials.findOne({where:{userId:user.id}})
      if(checkUser == null)
        return res.status(401).send()
      req.user = user
      next()
    })
  }

app.get('/auth', auth, (req, res) => res.send('authenticated'))

app.post('/login', passport.authenticate('local'), async (req, res) => {
    res.send(req.user)
})
app.get('/', async (req, res) => {
    let result = await UserCredentials.findAll()
    res.send(result)
})
app.post('/register', check('email', 'No email Provided').isLength({ min: 1, max: 50 }).custom(async val => {

    let res = await UserCredentials.findOne({ where: { email: val } })

    if (res != null) {
        return Promise.reject()
    }

}).withMessage('Email Already Exists'), check('password').isLength({ min: 1, max: 20 }), check('name').isLength({ min: 1, max: 50 }),
    check('mailing').isLength({ min: 10, max: 50 }),
    check('mailingCity').isLength({ min: 1, max: 30 }),
    check('mailingState').isLength({ min: 1, max: 50 }),
    check('mailingZip').isLength({ min: 5, max: 10 }),
    check('billing').optional().isLength({ min: 10, max: 50 }),
    check('billingCity').optional().isLength({ min: 1, max: 30 }),
    check('billingState').optional().isLength({ min: 1, max: 50 }),
    check('billingZip').optional().isLength({ min: 5, max: 10 }),
    check('phone').optional().isLength({ min: 5, max: 15 }),
    check('card').isLength({min:16,max:16}),check('exp').isLength({min:5,max:5}),check('code').isLength({min:3,max:3}),
    async (req, res) => {
        const error = validationResult(req)
        if (!error.isEmpty()) {

            return res.status(400).json(error.array())
        }
        try {

            const result = await UserCredentials.create({
                Email: req.body.email,
                Password: req.body.password,
                UserInformation: {
                    Name: req.body.name,
                    PhoneNumber: req.body.phone,
                    Address: req.body.mailing,
                    City: req.body.mailingCity,
                    State: req.body.mailingState,
                    ZipCode: req.body.mailingZip,
                    BillingAddress: req.body.billing,
                    BillingCity: req.body.billingCity,
                    BillingState: req.body.billingState,
                    BillingZipCode: req.body.billingZip,
                    IsGuest: req.body.isGuest,
                    CreditCard: req.body.card,
                    Expiration:req.body.exp,
                    SecCode: req.body.code

                }
            },
                {
                    include: [{ association: UserCredentials.Info }]
                })
            



        }
        catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }

        return res.status(201).send('Successful Register!')
    })


app.post('/update', check('email', 'No email Provided').isLength({ min: 1, max: 50 }),
    check('name').isLength({ min: 1, max: 50 }),
    check('mailing').isLength({ min: 10, max: 50 }),
    check('mailingCity').isLength({ min: 1, max: 30 }),
    check('mailingState').isLength({ min: 1, max: 50 }),
    check('mailingZip').isLength({ min: 5, max: 10 }),
    check('billing').optional().isLength({ min: 10, max: 50 }),
    check('billingCity').optional().isLength({ min: 1, max: 30 }),
    check('billingState').optional().isLength({ min: 1, max: 50 }),
    check('billingZip').optional().isLength({ min: 5, max: 10 }),
    check('phone').optional().isLength({ min: 5, max: 15 }),
    check('userid').exists(), check('card').isLength({min:16,max:16}),check('exp').isLength({min:5,max:5}),check('code').isLength({min:3,max:3}),
    async (req, res) => {
        const error = validationResult(req)
        if (!error.isEmpty()) {

            return res.status(400).json(error.array())
        }
        try {



            const result = await UserInformation.update(

                {
                    Name: req.body.name,
                    PhoneNumber: req.body.phonenumber,
                    Address: req.body.mailing,
                    City: req.body.mailingCity,
                    State: req.body.mailingState,
                    ZipCode: req.body.mailingZip,
                    BillingAddress: req.body.billing,
                    BillingCity: req.body.billingCity,
                    BillingState: req.body.billingState,
                    BillingZipCode: req.body.billingZip,
                    
                },
                { where: { UserId: req.body.userid } })




        }
        catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }

        return res.status(201).send('Successful Update!')
    })

    app.get('/reservationSlots',async(req,res)=>{
        let options = [1,2,2,4,6,8]
        console.log([req.query.date +' '+req.query.time,moment(req.query.date +' '+req.query.time).add(60,'minutes').format('MM/DD/YYYY HH:mm')])
        let query = await Reservation.findAll({where: {Date:{[Op.between]:[req.query.date +' '+req.query.time,moment(req.query.date +' '+req.query.time).add(60,'minutes').format('MM/DD/YYYY HH:mm')]}}})
        
        query.forEach( i =>{
            console.log(i.dataValues,'these are the values')
        })
        res.send('it made it')
       
    })
    app.get('/user',async (req,res)=>{
        let result = await UserInformation.findOne({where:{UserId:req.query.id}})
        console.log(result.dataValues)
        res.send(result.dataValues)

    })


app.listen(3001, () => {
    console.log("works on 3001!");
    sequelize.authenticate()
});