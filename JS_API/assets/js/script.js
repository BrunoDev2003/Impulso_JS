const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat'); 
const catImg = document.getElementById('cat');

const getData = async () => {

    try { 
        const data = await fetch(BASE_URL);
        const json = await data.json();
        
        return json.webpurl;
    } 
    catch (err) {
        console.log(err.message);
    }
};

const loadImg = async () => {
    catImg.src = await getData();
}

catBtn.addEventListener('click',loadImg);

loadImg();