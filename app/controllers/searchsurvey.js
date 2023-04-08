import {UserDisplayName} from "../utilities/index.js";
import { newSurvey } from '../models/surveyNewModel.js';
const getSearchSurvey = async (req, res, next) => {
    const searchQuery = req.query.q;
    if (!searchQuery) {
      return res.render('content/survey/searchsurvey', {
        title: 'Search Survey',
        page: 'searchsurvey',
        surveys: [],
        query: '',
        username: UserDisplayName(req)
      });
    }
  
    try {
      const surveys = await newSurvey.find({ quiz: { $regex: searchQuery, $options: 'i' } });
      return res.render('content/survey/searchsurvey', {
        title: 'Search Survey',
        page: 'searchsurvey',
        surveys: surveys,
        query: searchQuery,
        username: UserDisplayName(req)
      });
    } catch (error) {
      console.error(error);
      res.end(error);
    }
  };

  export { getSearchSurvey };
  

// import { newSurvey } from '../models/surveyNewModel.js';

// const searchSurveyController = async (req, res) => {
//   try {
//       const { q } = req.query;
//       const surveys = await newSurvey.find({ quiz: { $regex: new RegExp(q, 'i') } });
//       //res.render('content/survey/searchsurvey', { surveys });
//       res.render('content/survey/searchsurvey', {title: 'Search  Survey', page: 'searchsurvey',username: UserDisplayName(req)}); 
//       } 
//    catch (error) {
//     console.log(error);
//     res.render('error');
//   }
// };

// export { searchSurveyController };