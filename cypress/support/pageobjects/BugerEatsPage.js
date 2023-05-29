import BugerEatsElements from '../elements/BugerEatsElements';
import ScreenshotHelper from './helpers/ScreenshotHelper';

import { faker } from '@faker-js/faker/locale/pt_BR';
import CPFGenerator from '../utils/CPFGenerator';

const bugerEatsElements = new BugerEatsElements();
const screenshotHelper = new ScreenshotHelper();

const url = Cypress.env('BASE_URL');

export default class BugerEatsPage {

    accessSite(waite = 2000) {
        cy.log(url);
        cy.visit(url);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(waite);
        screenshotHelper.getScreenshot();
    }

    verifyBugerEatsTitle() {
        cy.log(cy.title());
        cy.title().should('eq', 'Buger Eats');
    }

    clickHomeButton() {
        cy.get(bugerEatsElements.btnHome()).click();
    }

    typeFullname() {
        const fullName = faker.person.fullName()
        cy.get(bugerEatsElements.inputName()).type(fullName);
    }

    typeNoFullname() {
        cy.get(bugerEatsElements.inputName()).type('Teste Qa').clear();
    }

    typeCPF() {
        const cpf = CPFGenerator.generateValidCPF();
        cy.get(bugerEatsElements.inputCpf()).type(cpf);
        return cpf;
    }

    typeEmail() {
        const email = faker.string.numeric(5);
        cy.get(bugerEatsElements.inputEmail()).type(`tst.auto${email}@vomoto.com`);
    }

    typePhone() {
        const phone = faker.phone.number('+55-##-9########');
        cy.get(bugerEatsElements.inputWhatsapp()).type(phone);
    }

    typeCEP() {
        cy.get(bugerEatsElements.inputCep()).type('64077-850');
    }

    clickCpfButton(waite = 1000) {
        cy.wait(waite);
        cy.get(bugerEatsElements.btnSearchCep()).focus().click({ force: true });
    }

    typeNumberAddress() {
        const num = faker.string.numeric(3);
        cy.get(bugerEatsElements.inputNumberPeople()).type(num)
    }

    selectVehicle(vehicle) {
        switch (vehicle) {
            case 'moto':
                console.log('Selecionado moto');
                cy.get(bugerEatsElements.motocicly()).click({ force: true });
                break;
            case 'bicicleta':
                console.log('Selecionado bicicleta');
                cy.get(bugerEatsElements.bicycle()).click();
                break;

            case 'carro':
                console.log('Selecionado carro');
                cy.get(bugerEatsElements.car()).click();
                break;
            default:
                console.log(`Sorry, we are out of ${vehicle}.`);
            }
        }

    selectCnh() {
        cy.get(bugerEatsElements.cnh()).attachFile('cnh-entregador.jpeg')
    }

    clickSaveButton() {
        cy.get(bugerEatsElements.btnSave()).click();
    }

    validateMsgModal(mensage) {
        cy.get(bugerEatsElements.msgModal()).should('have.text', mensage)
    }

    clickCloseButton() {
        cy.get(bugerEatsElements.btnClose()).click();
    }

    validateMsgErrorName(mensage) {
        cy.get(bugerEatsElements.msgErrorName()).should('have.text', mensage)
    }

    
}
