import Joi from 'joi'
import JoiPN from 'joi-phone-number'

const inputJoyPN = Joi.extend(JoiPN);

const createUserSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phonenumber: inputJoyPN.string().phoneNumber({ defaultCountry: 'UA', format: 'international' }).required()
});


const authorizationSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});




export { createUserSchema, authorizationSchema }