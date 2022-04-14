

 export const fetchQuestions = async (amount : number, difficulty: string, getQuestions : Function) =>
    {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;  
        const promise = fetch(endpoint)        

        try{               
        const response = await promise;
        console.log(response);
        
        const data = await response.json();     
         
        getQuestions((data.results))
        }
        catch(error){
            console.log(error);        
        }

    } 
