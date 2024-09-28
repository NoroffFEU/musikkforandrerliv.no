function toggleModal(modalId) {
    let modal = document.querySelector(`#${modalId}`);
    modal.classList.toggle('hidden');
}

//VOLUNTEER:
//Opens the modal
document
    .querySelector('.volunteer-form-btn')
    .addEventListener('click', function () {
        toggleModal('volunteer-modal');
    });

//Hides the modal
document
    .querySelector('#volunteer-close-icon')
    .addEventListener('click', function () {
        toggleModal('volunteer-modal');
    });

//DONATION:
document
    .querySelector('#donation-form-btn')
    .addEventListener('click', function () {
        toggleModal('donation-modal');
    });

document
    .querySelector('#donation-close-icon')
    .addEventListener('click', function () {
        console.log('close');
        toggleModal('donation-modal');
    });

//FUNDRAISING:
document
    .querySelector('#fundraising-form-btn')
    .addEventListener('click', function () {
        toggleModal('fundraiser-modal');
    });

document
    .querySelector('#fundraising-close-icon')
    .addEventListener('click', function () {
        toggleModal('fundraiser-modal');
    });
