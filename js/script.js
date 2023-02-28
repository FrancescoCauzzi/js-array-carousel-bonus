// - preparare un array di path di immagini
// - preparare gli elementi in js corrispondenti agli elementi html
// - memorizzare una variabile di indice
// -> alla pressione del pulsante "destra"
//   ° aumentare il valore dell'indice di un'unità
//   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
//   ° aggiungi la classe active al cerchio relativo alla posizione dell'indice
// -> alla pressione del pulsante "sinistra"
//   ° diminuire il valore dell'indice di un'unità
//   ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
//   ° aggiungi la classe active al cerchio relativo alla posizione dell'indice

// preparare un array di path di immagini

const arrImg = ['img/01.webp', 'img/02.webp', 'img/03.webp','img/04.webp','img/05.webp'];

// - preparare gli elementi in js corrispondenti agli elementi html

const topArrowEl = document.querySelector('.top-arrow');
const bottomArrowEl = document.querySelector('.bottom-arrow');
const activeImgEl = document.getElementById("active-img");

// - memorizzare una variabile di indice
let index = 0; 
const maxArrImg = arrImg.length;
activeImgEl.src = arrImg[index];

// seleziono il div padre

const thumbnailsContainerEl = document.querySelector('.thumbnails-container');

// ora 'appendo' al thumnail-container tanti div quante immagini ho nel mio array di immagini
for (let i = 0; i < maxArrImg; i++){
  // creo un elemento div che conterrà una thumbnail
  // e assegno una nuova classe agli elementi

  const thumbDiv = document.createElement('div');
  thumbDiv.className = "thumbnail-div"
  thumbnailsContainerEl.append(thumbDiv)
  thumbDiv.style.height = `calc(100% / ${maxArrImg})`;
  thumbDiv.style.border = '2px solid black';

  const thumbImg = document.createElement('img');
  thumbImg.className = 'thumbnail-image';
  thumbDiv.append(thumbImg);
  thumbImg.src = arrImg[i]
  
  
}



topArrowEl.addEventListener('click', function(){
  console.log('clicktop'); 
  
  if (index === maxArrImg - 1) {
    index = 0;
  } else {
    // -> alla pressione del pulsante "top"
    //   ° aumentare il valore dell'indice di un'unità
    index++;
  }
  // aggiungi la classe active al cerchio relativo alla posizione dell'indice
  activeImgEl.src = arrImg[index];
  // console.log(index);
  

})

bottomArrowEl.addEventListener('click', function(){
  console.log('clickbottom');
  if (index === 0) {
    index = maxArrImg - 1;
  } else {
    // -> alla pressione del pulsante "top"
    //   ° ridurre il valore dell'indice di un'unità
    index--;
  }
  // aggiungi la classe active al cerchio relativo alla posizione dell'indice
  activeImgEl.src = arrImg[index];
  // console.log(index);
});








