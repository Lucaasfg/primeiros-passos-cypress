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

    fillPersonalDetails(firstName, midName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midNameField).clear().type(midName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployDetails(employId, otherId, driversLicenceNumber, driversLicenceDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenceDate).click({force: true})
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().brNationality).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().maritalStatus).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type('1993-06-06')
        cy.get(this.selectorsList().genderCheck).eq(0).click({force: true})
        cy.get(this.selectorsList().testField).clear().type('TESTE FIELD')
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage