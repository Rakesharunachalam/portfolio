// SHOW MENU//

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle', 'nav_menu')

// ACTIVE & REMOVE ACTIVE//
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n=> n.classList.remove('active'))

function linkAction() {
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}


navLink.forEach(n=>n.addEventListener('click', linkAction))


let name1 = document.querySelector('#form_name')
let mail = document.querySelector('#email_id')

let textarea = document.querySelector('#message');
const btn = document.getElementById('button');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Mail Sent';

   const serviceID = 'default_service';
   const templateID = 'template_939iutr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      name1.value="";
      mail.value="";
      textarea.value=""

    }, (err) => {
      btn.value = 'Mail Sent';

    });
});















