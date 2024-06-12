const firebaseConfig = {
	apiKey: "AIzaSyBPJmzQtu7_BEpr3N8KIipnBuzZiUIScHo",
	authDomain: "contactform-a023a.firebaseapp.com",
	databaseURL: "https://contactform-a023a-default-rtdb.firebaseio.com",
	projectId: "contactform-a023a",
	storageBucket: "contactform-a023a.appspot.com",
	messagingSenderId: "383154192338",
	appId: "1:383154192338:web:b2ed0d89b820f6ea44520b"
};
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("cuntactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();

	var name = getElementVal("name");
	var email = getElementVal("email");
	var message = getElementVal("message");

	saveMessages(name, email, message);

	document.querySelector(".alert").style.display = "block";

	setTimeout(() => {
		document.querySelector(".alert").style.display = "none";
	}, 3000);
	name.value = ''
	email.value = ''
	message.value = ''

	document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
	var newContactForm = contactFormDB.push();

	newContactForm.set({
		name: name,
		email: email,
		msgContent: message,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};


function toggleMenu() {
	const menu = document.getElementById('navbarMenu');
	menu.classList.toggle('active');
}
function showTab(index) {
	const contents = document.querySelectorAll('.tab-content');
	contents.forEach((content, i) => {
		content.classList.toggle('active', i === index);
	});
}
function showModal() {
	document.getElementById('modal').style.display = 'flex';
}
function hideModal(event) {
	if (event.target.id === 'modal') {
		document.getElementById('modal').style.display = 'none';
	}
}
let currentSlide = 0;
function changeSlide(step) {
	const slides = document.querySelector('.slides');
	const totalSlides = slides.children.length;
	currentSlide = (currentSlide + step + totalSlides) % totalSlides;
	slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

const sr = ScrollReveal({
	distance: '30px',
	duration: 1600,
	reset: true
});

sr.reveal('.h-text', { delay: 280, origin: 'bottom' });
sr.reveal('.work, .contact', { delay: 200, origin: 'bottom' });