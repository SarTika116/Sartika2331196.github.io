/*=============== SHOW SIDEBAR ===============*/

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
         tab.addEventListener("click", () => {
             const target = document.querySelector(tab.dataset.target)

             tabContent.forEach(tabContents => {
                 tabContents.classList.remove('skills_active')
             })

             target.classList.add('skills_active')


             tabs.forEach(tab => {
                tab.classList.remove('skills_active')
            })

            tab.classList.add('skills_active')
             
         })
      })
/*=============== MIXITUP FILTER ALBUMS ===============*/
let mixerAlbums = mixitup('.albums_container', {
    selectors: {
        target: '.albums_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Albums =====*/
const linkAlbums = document.querySelectorAll('.albums_item')

function activeAlbums() {
    linkAlbums.forEach(l=> l.classList.remove('active-albums'))
    this.classList.add('active-albums')
}

linkAlbums.forEach(l=> l.addEventListener("click", activeAlbums))

/*===== Albums Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("albums_button")) {
        toggleAlbumsPopup();
        albumsItemDetails(e.target.parentElement);
    }
})

function toggleAlbumsPopup() {
    document.querySelector(".albums_popup").classList.toggle("open");
}

document.querySelector(".albums_popup-close").addEventListener("click", toggleAlbumsPopup)


function albumsItemDetails(albumsItem) {
    document.querySelector(".pp_thumbnail img").src = albumsItem.querySelector(".albums_img").src;
    document.querySelector(".albums_popup-subtitle span").innerHTML = albumsItem.querySelector(".albums_title").innerHTML;
    document.querySelector(".albums_popup-body").innerHTML = albumsItem.querySelector(".albums_item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
