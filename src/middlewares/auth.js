import jwt from 'jsonwebtoken';
import prisma from '../prisma.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../errors/appError.js';

const auth = catchAsync(async (req, res, next) => {
    let token = null;
    if (req.cookies.token) {
        token = req.cookies.token;
    } else {
        token = req.header('Authorization').replace('Bearer ', '');
    }

    if (!token) {
        return next(new AppError('no token provided', 401));
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // 2) check user existance
    const user = await prisma.user.findUnique({
        where: {
            id: JSON.parse(decode.id),
        },
    });
    if (!user) return next(new AppError('no user found', 404));

    // 3) check if it's exist
  
    const isBlocked = await prisma.blockedTokens.findUnique({
        where: {
            token,
        },
    });
   
    // token provided?

    if (isBlocked) {
        return next(new AppError('token not valid', 401));
    }

    req.user = user;
    next();
});

export default auth;
