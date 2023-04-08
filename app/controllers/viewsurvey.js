import { newSurvey } from '../models/surveyNewModel.js';
import {UserDisplayName } from "../utilities/index.js";

  const getSurveyResults = async (req, res, next) => {
    newSurvey.find(function (error, surveyCollection) {
      if (error) {
        console.error(error);
        res.end(error);
      }
      surveyCollection.forEach(survey => {
        console.log(survey.questions); // Log the questions array for each survey
      });
      res.render('content/survey/viewsurvey', {
        title: 'Survey List',
        page: 'viewsurvey',
        surveys: surveyCollection,
       username: req.user? req.user.username:null,
      });
    });
  };

//   const getSurveyResults = async (req, res, next) => {
//     newSurvey.find(function (error, surveyCollection) {
//       if (error) {
//         console.error(error);
//         res.end(error);
//       }
//       surveyCollection.forEach(survey => {
//         console.log(survey.questions); // Log the questions array for each survey
//       });
//       res.render('content/survey/viewsurvey', {
//         title: 'Survey List',
//         page: 'viewsurvey',
//         surveys: surveyCollection.map(survey => {
//           return {
//             ...survey.toObject(),
//             questions: survey.questions.map(question => question.question)
//           };
//         }),
//         username: req.user ? req.user.username : null
//       });
//     });
//   };
  
  export { getSurveyResults };