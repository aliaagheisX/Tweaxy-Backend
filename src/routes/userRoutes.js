import { Router } from 'express';
import { isEmailUnique } from '../controllers/userController.js';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API
 * /users:
 *   post:
 *     summary: Create a new users
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *   get:
 *     summary: Retrieve a list of  users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - username
 *         - name
 *         - email
 *         - password
 *         - birthdayDate
 *         - joinedDate
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of user must be a unique
 *           format: email
 *         username:
 *           type: string
 *           description: The username of user must be a unique
 *         name:
 *           type: string
 *         password:
 *           type: string
 *         phone:
 *           type: string
 *         cover:
 *           type: bytes
 *           format: x-image
 *         avatar:
 *           type: bytes
 *           format: x-image
 *         bio:
 *           type: string
 *         location:
 *           type: string
 *         website:
 *           type: string
 *           format: x-link
 *         Tokens:
 *           type: string
 *           description: the Tokens for each user to authenticate
 *         joinedAt:
 *           type: string
 *           formate: date
 *           format: x-date
 *         birthdayDat:
 *           type: string
 *           format: x-date
 *         ResetToken:
 *           type: string
 *           description: the code used to reset password
 *       example:
 *         id: 'clo4glaw00000vlcohum0n8z3'
 *         username: 'Warren_Breitenberg'
 *         name: 'treva'
 *         email: 'Mazie@gmail.com'
 *         phone: '07019778111'
 *         password: '00000000'
 *         location: 'North Reubenchester'
 *         website: 'https:capital-charger.net'
 *         joinedAt: '2023-10-24T15:05:54.528Z'
 *         birthdayDate: '1976-03-04'
 */



 /**
 * @swagger
 * /users/checkEmailUniqueness:
 *   get:
 *     summary: check email uniqueness
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user .
 *                 format: email
 *                 example: "aliaagheis@gmail.com"
 *     responses:
 *       200:
 *         description: Email has not been used before(unique).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [success]
 *                 data:
 *                   type: object
 *                   description: null
 *               example:
 *                 status: success
 *                 data: null
 *       409:
 *         description: Conflict - Email has been used before.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [fail]
 *                   description: The status of the response.
 *                 message:
 *                   type: string
 *                   example: [email already exists]
 *       500:
 *         description: Internal Server Error - Something went wrong on the server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [error]
 *                   description: The status of the response.
 *                 message:
 *                   type: string
 *                   description: A general error message.
 *               example:
 *                 status: 'error'
 *                 message: 'Internal Server Error'
 *      
 */



const userRouter = Router();

// userRouter.route('/:id').get(getUserById);
userRouter.route('/checkEmailUniqueness').get(isEmailUnique);

export default userRouter;
