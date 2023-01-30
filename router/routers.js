import {Router} from "express"
import { getHomepage, postHomepage } from "../controller/controller.js"


export const router=Router()

router.route('/').get(getHomepage) // user with username
router.route('/post').post(postHomepage) // user with username


