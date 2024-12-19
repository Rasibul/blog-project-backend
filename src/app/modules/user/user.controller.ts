import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { userService } from './user.service';
import catchAsync from '../../utilitis/catchAsync';
import sendResponse from '../../utilitis/sendResponse';


const registerUser = catchAsync(async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser({
        name,
        email,
        password: hashedPassword,
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data: { _id: user._id, name: user.name, email: user.email },
    })


});


export const userController = {
    registerUser,
};
