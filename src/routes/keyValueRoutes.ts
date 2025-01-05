import { Router } from 'express';
import { setKeyValue, deleteKeyValue, getValue, getAllKeyValues, deleteAllKeyValues, addRandomKeyValues } from '../controllers/keyValueController';

const router = Router();

router.delete('/delete/:key', deleteKeyValue);
router.post('/set', setKeyValue);
router.get('/get/:key', getValue);
router.get('/all', getAllKeyValues);
router.delete('/delete-all', deleteAllKeyValues);
router.post('/add-random', addRandomKeyValues);

export default router;