import {UserDisplayName} from "../utilities/index.js";
import surveyModel from "../models/surveyModel.js";
import surveyAnswers from "../models/surveyAnswers.js";

export function DisplaySurveyResults(req, res, next){
    surveyModel.find(function (err, surveyCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        surveyAnswers.find(function (err, answersCollection){
            if(err){
                console.error(err);
                res.end(err);
            }

            res.render('index', {title: 'Survey Answers',
                page: 'results',
                survey: surveyCollection,
                answers: answersCollection,
                username: UserDisplayName(req)});
        });
    });
}