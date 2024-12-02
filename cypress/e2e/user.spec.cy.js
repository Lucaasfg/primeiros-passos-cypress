import userData from '../fixtures/userData.json'

describe('Orange HRM TEST', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    midNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    testField: "[options='']",
    submitButton: "[type='submit']",

  }

  it.only('User Info Update - Sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('General')
    cy.get(selectorsList.midNameField).clear().type('Lucky')
    cy.get(selectorsList.lastNameField).clear().type('Jameson')
    cy.get(selectorsList.genericField).eq(3).clear().type('3333')
    cy.get(selectorsList.genericField).eq(4).clear().type('4444')
    cy.get(selectorsList.genericField).eq(5).clear().type('55555')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-06-09')
    cy.get(selectorsList.testField).clear().type('TESTE FIELD')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login sem Sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert) 
  })
}) 
