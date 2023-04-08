
import {newSurvey} from '../models/surveyNewModel.js';
import { DisplaySurveyCreatePage} from '../controllers/createNewSurvey.js';
//import {DisplaySurveyCreatePage} from "../controllers/index.js";
//router.get('/create', DisplaySurveyCreatePage);
import { AuthGuard } from '../utilities/index.js';

import {Router} from 'express';

const router = Router();

//router.get('/createNewSurvey', DisplaySurveyCreatePage);  

// GET route to display the form populated with the survey results
router.get('/createNewsurvey', async (req, res) => {
  try {
    const newestsurvey = await newSurvey.find({});
    res.render('createnewsurvey', { newestsurvey }); // Pass the survey results to the EJS template
  } catch (err) {
    console.log(err);
    res.send('Error retrieving newestsurvey results.');
  }
});

// GET route for results
router.get('/results', async (req, res) => {
  try {
    const newestsurvey = await newSurvey.find({});
    res.render('results', { newestsurvey });
  } catch (err) {
    console.log(err);
    console.log("hello world");
    res.redirect('/');
  }
});


router.post('/submit', async (req, res) => {
  try {
      const { quiz, questions, lifeline } = req.body; // Get the quiz, questions, and lifeline data from the request body

      // Create a new survey object with the quiz, questions, and lifeline data
      const survey = new newSurvey({
          quiz,
          questions,
          lifeline
      });

      // Save the survey object to the database
      const result = await survey.save();

      res.redirect('/viewnewsurvey'); // Redirect to the survey results page
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
  }
});


export default router;


router.get('/survey-create', AuthGuard,DisplaySurveyCreatePage );

