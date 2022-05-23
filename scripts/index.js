const profileEditButton = document.querySelector(".profile__edit");
const formClose = document.querySelector(".form__close_profile");
const formEdit = document.querySelector(".popup_edit_profile");
const cardTemplate = document.querySelector("#card").content.querySelector(".card");
const popupViewPhoto = document.querySelector('.popup_view_photo');
const containerViewPhotoPhoto = document.querySelector(".container-view-photo__photo");
const containerViewPhotoTitle = document.querySelector(".container-view-photo__title");
const formNameElement = document.querySelector(".form__input_type_name");
const formJobNameElement = document.querySelector(".form__input_type_about");
const formSubmit = document.querySelector(".form_edit_profile");
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


function editOpenForm() {
  openPopup(formEdit);
  formNameElement.value = nameProfile.textContent;
  formJobNameElement.value = aboutProfile.textContent;
};


function closePopupButton(event) {
  event.target.closest(".popup").classList.remove("popup_opened");
};

function closePopup(elem) {
  elem.classList.remove("popup_opened");
};

function openPopup(elem) {
  elem.classList.add("popup_opened");
};

function openFormAddPhoto() {
  openPopup(popupAddPhoto);
};

function submitHandlerForm(event) {
  event.preventDefault();
  nameProfile.textContent = formNameElement.value;
  aboutProfile.textContent = formJobNameElement.value;
  closePopup(formEdit);
};

const handleLikeCard = (event) => {
  event.target.closest(".card__like").classList.toggle("card__like_active");
};

const submitAddFotoCard = (event) => {
  event.preventDefault();
  renderCard({
    name: formInputAddNamePhoto.value,
    link: formInputAddUrl.value,
  });
  event.target.reset();
  closePopup(popupAddPhoto);
};

const generateCardList = (cardData) => {
  const newTemplatePhotoCard = cardTemplate.cloneNode(true);
  const titleNewCard = newTemplatePhotoCard.querySelector(".card__title");
  const likeButton = newTemplatePhotoCard.querySelector(".card__like");
  const cardDelete = newTemplatePhotoCard.querySelector(".card__delete");
  const cardPhoto = newTemplatePhotoCard.querySelector(".card__photo");

  cardPhoto.src = cardData.link;
  titleNewCard.textContent = cardData.name;

  cardPhoto.addEventListener("click", function (event) {
    containerViewPhotoPhoto.src = cardPhoto.src;
    containerViewPhotoPhoto.alt = cardPhoto.nextElementSibling.textContent;
    containerViewPhotoTitle.textContent = cardPhoto.nextElementSibling.textContent;
    openPopup(popupViewPhoto);
  });
  cardDelete.addEventListener("click", handleDeleteCard);
  likeButton.addEventListener("click", handleLikeCard);

  return newTemplatePhotoCard;
};

const handleDeleteCard = (event) => {
  event.target.closest(".card").remove();
};

const renderCard = (cardData) => {
  cardListContainer.append(generateCardList(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

formSubmitAddPhoto.addEventListener("submit", submitAddFotoCard);
profileEditButton.addEventListener("click", editOpenForm);
formSubmit.addEventListener("submit", submitHandlerForm);
profileAddButton.addEventListener("click", openFormAddPhoto);
formClose.addEventListener("click", closePopupButton);
containerViewPhotoButtonClose.addEventListener("click", closePopupButton);
formCloseAddPhoto.addEventListener("click", closePopupButton);

