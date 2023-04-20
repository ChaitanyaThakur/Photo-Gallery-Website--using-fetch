
let imageListUrl = 'imgDataFile.json'; //stored data from json file in one variable
var imageList;
let htmlToReturn = "",
        i = 0;

async function loadProducts(imageListUrl) { //started async function with an argument. 

    fetch(imageListUrl)                     //fetched datafrom the variable in which we stored the data
        .then(response => response.json())  //we check response. The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
        .then(json => {
            imageList = json;
            imageList.imageData.forEach((product) => {
                htmlToReturn =
                    `<div class="imgCard">
                    <img src="${product.imgSrc}" alt="" class="cardImg">
                    <div class="hoverPart">
                    <p class="cardImgName">${product.imgName}</p>
                    <button class="imgDownloadBtn">Download</button>
                    </div>
                    </div>`

                document.querySelector('#imageCardArea').innerHTML += htmlToReturn;
            });

        })
}
loadProducts(imageListUrl);

//To fetch JSON from the server using the Fetch API, you need to use the JavaScript fetch() method and then call the response.json() method to get the JSON data as a JavaScript object. The response.json() method reads the data returned by the server and returns a Promise that resolves with a JSON object