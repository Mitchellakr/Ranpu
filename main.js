const tablinks = document.querySelectorAll(".tablinks");
const tabcontent = document.querySelectorAll(".tabcontent");

// listen for tab clicks on the tablinks
tablinks.forEach(item => item.addEventListener('click', selectItem));

// select tab content
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('active');
    const tabcontentitem = document.querySelector(`#${this.id}-content`);
    tabcontentitem.classList.add('show');
}

// removing the border
function removeBorder() {
    tablinks.forEach(item => item.classList.remove("active"));
}

// removing the content
function removeShow() {
    tabcontent.forEach(item => item.classList.remove("show"));
}