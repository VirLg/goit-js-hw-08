// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line



{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

const markupDiv = document.querySelector('.gallery');
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc+
    `
    <li>
         <div class="gallery__item">
           
             <img
                class="gallery__image"
               src="${preview}"
               data-source="large-image.jpg"
               alt="${description}" width ="200px">
             
           
         </div>
       </li>
    `
    ,'')
markupDiv.insertAdjacentHTML("beforeend",markup)

markupDiv.addEventListener('click', onClick)

function onClick(evn) { 
console.log(evn.Target);
}









console.log(galleryItems);



console.log(markup);