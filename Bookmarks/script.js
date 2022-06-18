const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

function showFloater(){
    body.classList.add('show-floater');
};
function closeFloater(){
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
}


input.addEventListener('focusin', showFloater);

// input.addEventListener('focusout', closeFloater);

overlay.addEventListener('click', closeFloater);

// ====================================================================================

const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
let   bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [{title:"default bookmark"}];


function createBookmark(e){
    e.preventDefault();
    if (!bookmarkInput.value) return;
    const title = bookmarkInput.value;
    const bookmark = {
        title: title
    };

    bookmarks.push(bookmark);
    fillBookmarksArray(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();
    
}

function fillBookmarksArray(bookmarks = []) {
    
    const bookmarksHtml = bookmarks.map((bookmark, i) => {
        return `
        <a href="#" class="bookmark" data-id="${i}">
            <div class="bi bi-bookmark-fill img"></div>
            <div class="title">${bookmark.title}</div>
            <span class="bi bi-bookmark-x delete-bookmark"></span>
        </a>
        `;
    }).join('');
    bookmarksList.innerHTML = bookmarksHtml;
    

    // let bookmarksHtml = '';
    // for (let i = 0; i < bookmarks.length; i++) {
    //     bookmarksHtml += `
    //         <a href="" class="bookmark" data-id="i">
    //               <div class="img"></div>
    //             <div class="title>${bookmarks[i].title}</div>
    //              <span class="bi bi-bookmark-x delete-bookmark"></span>
    //         </a>
    //     `;
    // };
    // console.log(bookmarksHtml);
    // console.table(bookmarks);
    

}
fillBookmarksArray(bookmarks)

function removeBookmark(e) {
    if(!e.target.matches('.bi-bookmark-x')) return;
    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    fillBookmarksArray(bookmarks);
    storeBookmarks(bookmarks);
}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}


bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);
