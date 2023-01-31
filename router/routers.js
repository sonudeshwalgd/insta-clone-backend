import {Router} from "express"
import { fileUploader, getHomepage, postHomepage } from "../controller/controller.js"


export const router=Router()

router.route('/').get(getHomepage) // user with username
router.route('/post').post(postHomepage) // user with username
router.route('/postFile').post(fileUploader) // user with username


