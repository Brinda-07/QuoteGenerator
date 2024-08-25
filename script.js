const text=document.getElementById("quotes");
const author=document.getElementById("author");
const tweetButton=document.getElementById("new");

const getNewQuote = async () =>
{
    var url="https://api.quotable.io";    
    const response=await fetch(url);
    
    const allQuotes = await response.json();
    const indx = Math.floor(Math.random()*allQuotes.length);
    const quote=allQuotes[indx].text;
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    }
getNewQuote();