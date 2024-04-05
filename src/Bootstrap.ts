import 'dotenv/config'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'
import { UserController } from './User.controller'
import { IUser } from './Database';

/* --- Do this as last! --- */

// NOTE: Make sure to do a named export of your userController
const repository = new UserRepository;
const service = new UserService(repository);
const controller = new UserController(service);

controller.store({username:"John Doe"}).then((data:IUser)=>{
    console.log(data);
})