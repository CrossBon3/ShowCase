const body = document.body;
const button = document.querySelector('button[type=button]');
const content = document.querySelector('.content');
const contenttext = `
<p><a href="./accordion/index.html" class="child">Accordion</a></p><br>
<p><a href="./Bookmarks/index.html" class="child">Todo</a></p><br>
<p><a href="./crazybuttons/index.html" class="child">Crazy Buttons</a></p><br>
<p><a href="./LinearGradient/index.html" class="child">Linear Gradient</a></p><br>
<p><a href="./pricing calculator/index.html" class="child">Price Calculator</a></p><br>
<p><a href="./scrollProgress/index.html" class="child">Scrolling Progressbar</a></p><br>
<p><a href="./stopwatch/index.html" class="child">Stop Watch</a></p><br>
`;
function toggleBodyOpen(){
    body.classList.toggle('open');
    if (body.classList.contains('open')) {
        button.innerHTML = 'Back to Home';
    }
    else{
        button.innerHTML = 'Show-Case';
    }
}
function rendercontent(){
    if (body.classList.contains('open')){
        content.innerHTML = contenttext;
    }
    else{
        content.innerHTML = '';
    }
}

button.addEventListener('click', toggleBodyOpen);
button.addEventListener('click', rendercontent);