const profileEditButton = document.querySelector(".profile__edit");
const formClose = document.querySelector(".form__close_profile");
const editForm = document.querySelector(".popup_edit_profile");
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
const addformClose = document.querySelector(".form__close_add-photo");
const addForm = document.querySelector(".popup_add_photo");
const cardListContainer = document.querySelector(".cards");

function editOpenForm() {
  editForm.classList.add("popup_opened");
  formNameElement.value = nameProfile.textContent;
  formJobNameElement.value = aboutProfile.textContent;
};

function closePopup(event) {
  event.target.closest(".popup").classList.remove("popup_opened");
};

function openPopup(event) {
  event.target.closest(".popup").classList.add("popup_opened");
};

function submitHandlerForm(event) {
  event.preventDefault();
  nameProfile.textContent = formNameElement.value;
  aboutProfile.textContent = formJobNameElement.value;
  closePopup(event);
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
  closePopup(event);
};

const generateCardList = (cardData) => {
  const containerViewPhotoButtonClose = document.querySelector('.container-view-photo__button-close');
  const newTemplatePhotoCard = cardTemplate.cloneNode(true);
  const titleNewCard = newTemplatePhotoCard.querySelector(".card__title");
  const likeButton = newTemplatePhotoCard.querySelector(".card__like");
  const deleteButton = newTemplatePhotoCard.querySelector(".card__delete");
  const cardPhoto = newTemplatePhotoCard.querySelector(".card__photo");

  cardPhoto.src = cardData.link;
  titleNewCard.textContent = cardData.name;

  cardPhoto.addEventListener("click", function (event) {
    const eventPhoto = event.target;
    containerViewPhotoPhoto.src = cardPhoto.src;
    containerViewPhotoPhoto.alt = containerViewPhotoTitle.textContent = cardPhoto.nextElementSibling.textContent;
    popupViewPhoto.classList.add('popup_opened');
  });
  containerViewPhotoButtonClose.addEventListener("click", closePopup);
  deleteButton.addEventListener("click", handleDeleteCard);
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
formClose.addEventListener("click", closePopup);
formSubmit.addEventListener("submit", submitHandlerForm);
addformClose.addEventListener("click", closePopup);

profileAddButton.addEventListener("click", function formAddOpen() {
  addForm.classList.add("popup_opened");
});

