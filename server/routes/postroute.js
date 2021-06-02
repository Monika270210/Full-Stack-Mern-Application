import express from 'express';
import {deleteData, getData,postData,likeData, updateData, getSearchData, getParticularData} from '../controllers/postcontroller.js';
import Auth from '../middleware/auth.js';

const router=express.Router();


router.get('/search',getSearchData);   

router.get('/',getData);

router.get('/:id',getParticularData);

router.post('/',Auth,postData);

router.delete('/',Auth,deleteData);

router.patch('/',Auth,likeData);

router.put('/',Auth,updateData)

export default router;