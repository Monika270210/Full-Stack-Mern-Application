import express from 'express';
import {deleteData, getData,postData,likeData} from '../controllers/postcontroller.js';

const router=express.Router();

router.get('/',getData);

router.post('/',postData);

router.delete('/',deleteData);

router.patch('/',likeData);

export default router;