const input = document.querySelector('input');
const searchbtn = document.querySelector('#search');
const removebtn = document.querySelector('#remove');
const gifArea = document.querySelector('.gifArea');

function checkInputVal() {
    try {
      if (!input.value) {
        throw Error("You must enter a value in the searchbox!");
      }
      searchGif();
    } catch (error) {
      alert(error.message);
    }
  }

async function searchGif(){
    // e.preventDefault();
    const tag = input.value;
    const res = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=fod1mXfQTLL8eZ91G05hzeGhOLn7xs9U&tag=${tag}`);
    const url = res.data.data.images.downsized.url;
    showImg(url);
    input.value=''
}

function showImg(url){
   const showImage = document.createElement('img');
   showImage.src = url;
   showImage.style.width='300px';
   gifArea.appendChild(showImage);
}

function removeImgs(){
    gifArea.innerHTML = '';
}

searchbtn.addEventListener('click', checkInputVal);
removebtn.addEventListener('click', removeImgs);