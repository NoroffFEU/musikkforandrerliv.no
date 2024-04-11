
function toggleModal() {
    let modal = document.querySelector("#volunteer-modal");
    modal.classList.toggle("hidden");
}

//Opens the modal
document.querySelector(".volunteer-form-btn").addEventListener("click", toggleModal);

//Hides the modal
document.querySelector("#close-icon").addEventListener("click", toggleModal);

