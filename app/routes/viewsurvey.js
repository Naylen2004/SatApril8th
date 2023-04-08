// import {Router} from 'express';

// import { getSurveyResults } from '../controllers/viewsurvey.js';  
// import { AuthGuard } from '../utilities/index.js';
// //import { UserDisplayName } from '../utilities/index.js';

// const router = Router();

// router.post('/viewsurvey', AuthGuard, getSurveyResults);
// export default router;

import express from 'express';
import { getSurveyResults } from '../controllers/viewsurvey.js';

const router = express.Router();

router.get('/', getSurveyResults);

export default router;
