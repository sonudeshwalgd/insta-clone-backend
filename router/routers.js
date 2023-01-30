import {Router} from "express"
import { getHomepage } from "../controller/controller.js"


export const router=Router()

router.route('/').get(getHomepage) // user with username

// router.route("/").get(getHomepage)
