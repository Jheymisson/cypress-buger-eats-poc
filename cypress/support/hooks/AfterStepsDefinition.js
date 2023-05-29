/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/// <reference types="cypress" />
import { After } from 'cypress-cucumber-preprocessor/steps';

After( () => {
    cy.clearLocalStorage();
    cy.reload();
  },
);