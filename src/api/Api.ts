

 export const fetchQuestions = async (amount : number, difficulty: string, setQuestions : Function, setStatus : Function) =>
    {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;  
        const promise = fetch(endpoint)   
        setStatus("PENDING");       

        try{               
            
        const response = await promise;             
        const data = await response.json();    
    
        setQuestions((data.results))
        setStatus("SUCCES");   
        }
        catch(error){
            setStatus("FAILED");
            console.log(error);        
        }

    } 
