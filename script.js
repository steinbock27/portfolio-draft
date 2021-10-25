function index() {
        
    fetch('main.html')
    .then(data => data.text())
    .then(html => document.querySelector('main').innerHTML = html);
    
}

function about() {
        
fetch('about.html')
.then(data => data.text())
.then(html => document.querySelector('main').innerHTML = html);

}

function contact() {
        
    fetch('contact.html')
    .then(data => data.text())
    .then(html => document.querySelector('main').innerHTML = html);
        
}
    