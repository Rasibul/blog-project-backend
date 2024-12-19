import { TUser } from "./user.interface";
import { userModel } from "./user.model";


const createUser = async (userData: Partial<TUser>) => {
    return await userModel.create(userData);
};


export const userService = {
    createUser,

};