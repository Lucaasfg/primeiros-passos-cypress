import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange HRM TEST', () => {
    
  it('User Info Update - Sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployDetails(
      chance.string({ length: 5, numeric: true}), 
      chance.string({ length: 5, numeric: true}), 
      chance.string({ length: 8, numeric: true}), 
      '12-12-2026')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})