const profileEditButton = document.querySelector(".profile__edit");
const formCloseProfile = document.querySelector(".form__close_profile");
const formEdit = document.querySelector(".popup_edit_profile");
const cardTemplate = document.querySelector("#card").content.querySelector(".card");
const popupViewPhoto = document.querySelector('.popup_view_photo');
const containerViewPhotoPhoto = document.querySelector(".container-view-photo__photo");
const containerViewPhotoTitle = document.querySelector(".container-view-photo__title");
const formNameElement = document.querySelector(".form__input_type_name");
const formJobNameElement = document.querySelector(".form__input_type_about");
const formSubmitProfile = document.querySelector(".form_edit_profile");
const nameProfile = document.querySelector(".profile__name");
const aboutProfile = document.querySelector(".profile__about-name");
const formInputAddNamePhoto = document.querySelector(".form__input_add_photo");
const formInputAddUrl = document.querySelector(".form__input_add_url");
const formSubmitAddPhoto = document.querySelector(".form__sending_foto_add");
const profileAddButton = document.querySelector(".profile__add-button");
const formCloseAddPhoto = document.querySelector(".form__close_add-photo");
const popupAddPhoto = document.querySelector(".popup_add_photo");
const cardListContainer = document.querySelector(".cards");
const containerViewPhotoButtonClose = document.querySelector('.container-view-photo__button-close');
const formSubmitFoto = formSubmitAddPhoto.querySelector('.form__submit');
const keyNmbrEsc = 27;

function editOpenForm() {
  openPopup(formEdit);
  formNameElement.value = nameProfile.textContent;
  formJobNameElement.value = aboutProfile.textContent;
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', handleEscClose);
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown',  handleEscClose);
  };

function submitProfileForm(event) {
  event.preventDefault();
  nameProfile.textContent = formNameElement.value;
  aboutProfile.textContent = formJobNameElement.value;
  closePopup(formEdit);
};

const handleLikeCard = (event) => {
  event.target.classList.toggle("card__like_active");
};

const submitAddFotoCard = (event) => {
  event.preventDefault();
  renderCard({
    name: formInputAddNamePhoto.value,
    link: formInputAddUrl.value,
  });
  event.target.reset();
  closePopup(popupAddPhoto);
  formSubmitFoto.setAttribute('disabled', true);
  formSubmitFoto.classList.add('form__submit_type_disabled');
};

const generateCardList = (cardData) => {
  const newTemplatePhotoCard = cardTemplate.cloneNode(true);
  const titleNewCard = newTemplatePhotoCard.querySelector(".card__title");
  const likeButton = newTemplatePhotoCard.querySelector(".card__like");
  const cardDelete = newTemplatePhotoCard.querySelector(".card__delete");
  const cardPhoto = newTemplatePhotoCard.querySelector(".card__photo");
  const cardTitle = newTemplatePhotoCard.querySelector(".card__title");

  cardPhoto.src = cardData.link;
  cardPhoto.alt = cardData.name;
  titleNewCard.textContent = cardData.name;

  function handlePreviewCard() {
    containerViewPhotoPhoto.src = cardPhoto.src;
    containerViewPhotoPhoto.alt = cardTitle.textContent;
    containerViewPhotoTitle.textContent = cardTitle.textContent;
    openPopup(popupViewPhoto);
  };

  cardPhoto.addEventListener("click", handlePreviewCard);
  cardDelete.addEventListener("click", handleDeleteCard);
  likeButton.addEventListener("click", handleLikeCard);

  return newTemplatePhotoCard;
};

const handleDeleteCard = (event) => {
  event.target.closest(".card").remove();
};

const renderCard = (cardData) => {
  cardListContainer.prepend(generateCardList(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

function  handleEscClose(evt) {
  const popupView = document.querySelector('.popup_opened');
  if (evt.keyCode === keyNmbrEsc) {
    closePopup(popupView);
  };
}

formSubmitAddPhoto.addEventListener("submit", submitAddFotoCard);
profileEditButton.addEventListener("click", editOpenForm);
formSubmitProfile.addEventListener("submit", submitProfileForm);
profileAddButton.addEventListener("click",() => openPopup(popupAddPhoto));
containerViewPhotoButtonClose.addEventListener("click", () => closePopup(popupViewPhoto));
formCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));
formCloseProfile.addEventListener("click", () => closePopup (formEdit));

document.addEventListener("mousedown", (event) => {
  const popup = event.target.classList.contains('popup');
  const popupView = document.querySelector('.popup_opened');
  if (popup) {
    closePopup(popupView);
  }
});

