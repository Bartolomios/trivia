import { Dispatch } from "redux";

 export const fetchQuestions = async (amount : number, difficulty: string, getQuestions : Function , dispatch : Dispatch) =>
    {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;  
        const promise = fetch(endpoint)

        try{           
        const response = await promise;
        const data = await response.json();     
         
        dispatch(getQuestions((data.results)));
        }
        catch(error){
            console.log(error);        
        }

    } 
