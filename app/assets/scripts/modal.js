class Modal {
  constructor(button) {
    this.openModalButton = $(".open-modal-" + button);
    this.modal = $(".modal__" + button);
    this.visibilityClass = "modal__" + button + "--is-visible";
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
    this.modal.addClass(this.visibilityClass);
    return false;
  }

  closeModal() {
    this.modal.removeClass(this.visibilityClass);
  }
}

var modalContact = new Modal("contact");
var modalNewsletter = new Modal("newsletter");

