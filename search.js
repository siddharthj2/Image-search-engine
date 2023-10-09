const accessKey = 'Npyctlj3huhzrSxVqmtTfRkIEREYFxvZJldeLF8bvic';
const inputForm = document.getElementById("input-form");
const input = document.getElementById("input");
const searchButton = document.getElementById("search-btn");
const apiImage=document.getElementById("api-image");
const showMore = document.getElementById("show-more");
let page = 1; // Move the page variable outside the function

async function searchImage() {
    let keyword = input.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const promise = await fetch(url);
    const data = await promise.json(); // Use .json() to parse the JSON response
    const result=data.results;
    if(page===1)
    {
        apiImage.innerHTML="";
    }
    result.map((result)=>{
        const image =document.createElement('img');
        image.src=result.urls.small;  
        const imageLink= document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        apiImage.appendChild(imageLink);        
    })
    showMore.style.display="block";
    
}

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});
   
showMore.addEventListener("click",()=>{
    page++;
    searchImage();
})