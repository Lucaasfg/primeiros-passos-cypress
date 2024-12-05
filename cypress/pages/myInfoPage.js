class MyInfoPage {
    selectorsList () {
        const selectors = {
            firstNameField: "[name='firstName']",
            midNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            testField: "[options='']",
            submitButton: "[type='submit']",
            genericComboBox: "[tabindex='0']",
            brNationality: ".oxd-select-dropdown > :nth-child(27)",
            maritalStatus : ".oxd-select-dropdown > :nth-child(3)",
            genderCheck: ".oxd-radio-input--active"
        }

        return selectors

    }

    accessMyInfoPage() {
        cy.get(this.selectorsList().firstNameField).type('GENERAL')
        cy.get(this.selectorsList().midNameField).type('LUCAS')
        cy.get(this.selectorsList().lastNameField).type('JAMESON')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('3333')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('4444')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('5555')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-06-09')
        cy.get(this.selectorsList().testField).clear().type('TESTE FIELD')
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().brNationality).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().maritalStatus).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type('1993-06-06')
        cy.get(this.selectorsList().genderCheck).eq(0).click({force: true})
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage