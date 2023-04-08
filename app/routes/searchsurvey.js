// import express from 'express';
// import { getSearchSurvey } from '../controllers/searchsurvey.js';

// const router = express.Router();

// //router.get('/searchsurvey', getSearchSurvey);
// router.get('/', getSearchSurvey);


// export default router;

//const searchSurveyController = require('./controllers/searchsurvey');


import express from 'express';
//import { searchSurveyController } from '../controllers/searchsurvey.js';
import { getSearchSurvey } from '../controllers/searchsurvey.js';


const router = express.Router();

//router.get('/', searchSurveyController);
router.get('/', getSearchSurvey);

export default router ;

