// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const markupDiv = document.querySelector('.gallery');
console.log(markupDiv);

const ulMurkap = document.createElement("ul")
ulMurkap.classList.add("gallery__list")
markupDiv.append(ulMurkap)
console.log(markupDiv);
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc+
    `
<li>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>
 
    `, '')
ulMurkap.innerHTML = markup





let gallery = new SimpleLightbox('.gallery a');


gallery.on('show.simplelightbox', function () {

	// Do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});


// markupDiv.addEventListener('click', onClick)

// function onClick(evn) { 
// console.log(evn.Target);
// }








// console.log(galleryItems);



// console.log(markup);



