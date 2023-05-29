/// <reference types="cypress" />

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import BugerEatsPage from '../pageobjects/BugerEatsPage';

const bugerEatsPage = new BugerEatsPage();

Given('que acesso a página Home do BugerEats', () => {
    bugerEatsPage.accessSite();
    bugerEatsPage.verifyBugerEatsTitle();
  });

And('que aciono o botão Cadastra-se para fazer entregras', () => {
    bugerEatsPage.clickHomeButton();
});

And('informo os dados Nome Completo, CPF, Email e Whatsaap', () => {
    bugerEatsPage.typeFullname();
    bugerEatsPage.typeCPF();
    bugerEatsPage.typeEmail();
    bugerEatsPage.typePhone();
});

And('não informo os dados Nome Completo', () => {
    bugerEatsPage.typeNoFullname();
});

And('infomo o Enderco válido', () => {
    bugerEatsPage.typeCEP();
    bugerEatsPage.clickCpfButton();
    bugerEatsPage.typeNumberAddress();
});

And('seleciono o {string} do condutor', (metodoEntrega) => {
    bugerEatsPage.selectVehicle(metodoEntrega)
});

And('seleciono a foto da CNH', () => {
    bugerEatsPage.selectCnh();
});

When('aciono o botão Cadastra-se para fazer entregas', () => {
    bugerEatsPage.clickSaveButton();
});

Then('é exibido a modal com a mensagem {string}', (mensage) => {
    bugerEatsPage.validateMsgModal(mensage);
    bugerEatsPage.clickCloseButton();
});

Then('é exibido a mensagem {string}', (mensage) => {
    bugerEatsPage.validateMsgErrorName(mensage);
});
