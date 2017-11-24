'use strict';

// показать окно с настройками пользователя
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

// получить контент содержимого '#similar-wizard-template'
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

// получить случайный элемент из массива
var getRandomItem = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// получить полное имя волшебника
var getFullName = function () {
  var fullName = getRandomItem(WIZARD_FIRST_NAME) + ' ' + getRandomItem(WIZARD_SURNAMES);
  return fullName;
};

// создаем волшебника
var createWizard = function () {
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getFullName(),
      coatColor: getRandomItem(WIZARD_COAT),
      eyesColor: getRandomItem(WIZARD_EYES)
    };
  }
  return wizards[i];
};

createWizard();


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
