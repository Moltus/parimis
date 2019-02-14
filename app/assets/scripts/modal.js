class Modal {
  constructor(button) {
    this.openModalButton = $(".open-modal-" + button);
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

var modalContact = new Modal("contact");





// const openContactButton = $(".open-contact");
// const modal = $(".modal");
// const closeModalButton = $(".modal__close");

// function events() {
//   // clicking the open modal button

//   // clicking the x close modal button
// };

// function openModal() {

// };

// function closeModal() {

// };