
const fetchQuestions = async(amount : number, difficulty: string) =>
{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;
    const data = await(await fetch(endpoint)).json();
    console.log(data);
} 

export default fetchQuestions;