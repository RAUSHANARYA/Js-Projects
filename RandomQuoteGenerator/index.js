console.log('connected');

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');

const nextBtn = document.querySelector('#nextBtn');
const copyBtn = document.querySelector('#copyBtn');

// api fetch 
async function getQuote () {

    try {
        const response = await fetch ("https://dummyjson.com/quotes/random");
        const data = await response.json();
         console.log(data);

         //display 
         quoteElement.innerText = data.quote;
        authorElement.innerText = '~' + data.author;

    } catch (error) {
        
       console.log(error);
        alert("Unable to fetch quote!");
    }
    
}



nextBtn.addEventListener("click", getQuote);

// Copy button
copyBtn.addEventListener("click", async function() {

    const text = quoteElement.innerText + " - " + authorElement.innerText;

    try {
        await navigator.clipboard.writeText(text);
        alert("Quote Copied!");
    } catch (error) {
        console.log(error);
        alert("Unable to copy quote!");
    }

});
getQuote();