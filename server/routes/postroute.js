import express from 'express';
import {deleteData, getData,postData} from '../controllers/postcontroller.js';

const router=express.Router();

router.get('/',getData);

router.post('/',postData);

router.delete('/',deleteData);

export default router;