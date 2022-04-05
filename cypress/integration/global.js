import { CLASSES, VIEWPORT } from './constants';

export class Environment {

    static testOnMobile() {
    cy.viewport(VIEWPORT.mobile)
    }  

    static testOnTablet() {
        cy.viewport(VIEWPORT.tablet)
    }

    static testOnDesktop() {
        cy.viewport(VIEWPORT.desktop)
    }  

    static visitLinkOnMobile() {
        cy.visit(CLASSES.link)
        cy.get(CLASSES.hamburguer_menu).click()
        cy.get(CLASSES.solutions).click()
        cy.get(CLASSES.goals_solutions).click()
        cy.wait(5000)
    }

    static visitLinkOnDesktop() {
        cy.viewport(VIEWPORT.desktop)
        cy.visit(CLASSES.link)
        cy.get(CLASSES.solutions_desk).click()
        cy.get(CLASSES.goals_solutions_desk).click()
        cy.wait(5000)
    }

    static clickButtonHome() {
        cy.get(CLASSES.logo).click()
    }

    static returnHome() {
        cy.url().should('eq', CLASSES.link)
    }
}
