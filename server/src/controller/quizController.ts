import { NextFunction, Request, Response } from 'express';
import  { Quiz }  from '../models/quizSchema'

//controller for managing quiz

export const questions = async (req: Request, res: Response) => {
    try {
        const fectchQuestions = await Quiz.find()
        if( fectchQuestions ){
            res.status(200).json({
                success :  true, 
                message : 'fetched successfully',
                data : fectchQuestions
            })
        }else{
            res.status(500).json({
                success :  false, 
                message : 'fetching failed !',
                data : []
            })
        }

    } catch (err) {

        console.error('Error in fetching questions :', err);
        res.status(500).json({ message: 'Internal Server Error' });
        
    }
};


export const addQuestions = async (req: Request, res: Response) => {
    try {
        
        const data = req.body
        const updatedQuestion = await Quiz.create( data )
        
        if( updatedQuestion ){
            res.status(201).json({
                success : true ,
                message : 'Question added to database ',
                data : updatedQuestion
            })
        }else{
            res.status(500).json({
                success : false,
                message : 'Question added failed !'
            })
        }


    } catch (err) {

        console.error('Error in Adding question :', err);
        res.status(500).json({ message: 'Internal Server Error' });
        
    }
};
