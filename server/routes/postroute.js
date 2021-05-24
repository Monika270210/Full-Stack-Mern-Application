import express from 'express';
import {getData,postData} from '../controllers/postcontroller.js';

const router=express.Router();

router.get('/',getData);

router.post('/',postData);

export default router;