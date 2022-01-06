import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

const {getItems, getItemsById} = controller;

router.get('/api/items', getItems);
router.get('/api/items/:id', getItemsById);

export = router;