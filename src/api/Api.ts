

 export const fetchQuestions = async (amount : number, difficulty: string, setQuestions : Function) =>
    {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;  
        const promise = fetch(endpoint)   
        
        console.log(promise);
        

        try{               
        const response = await promise;
        console.log(response);
        
        const data = await response.json();     
        console.log(data.results);
         
        setQuestions((data.results))
        }
        catch(error){
            console.log(error);        
        }

    } 
