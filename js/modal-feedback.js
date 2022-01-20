const popup = document.querySelector(".modal_feedback");
const feedbackForm = popup.querySelector("form");
const feedbackButton = document.querySelector(".contacts_button");
const modalClose = popup.querySelector(".modal_close");
const formName = popup.querySelector("[name=name]");
const formEmail = popup.querySelector("[name=email]");
const formText = popup.querySelector("[name=text]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
	storageName = localStorage.getItem("name");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal_show");
	if (storageName && storageEmail) {
		formName.value = storageName;
		formEmail.value = storageEmail;
		formText.focus();
	} else {
		formName.focus();
	}
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal_show");
	popup.classList.remove("modal_error");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!formName.value || !formEmail.value || !formText.value) {
		evt.preventDefault();
		popup.classList.remove("modal_error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal_error");
	} else if (isStorageSupport) {
		localStorage.setItem("name", formName.value);
		localStorage.setItem("email", formEmail.value);
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal_show")) {
			evt.preventDefault();
			popup.classList.remove("modal_show");
			popup.classList.remove("modal_error");
		}
	}
});
