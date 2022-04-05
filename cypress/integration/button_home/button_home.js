import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { Environment } from '../global';

// Mobile
Given('I want to return Home page in one click on Mobile', () => {
  Environment.testOnMobile()
  Environment.visitLinkOnMobile()
})

When('I click on Button Home on Mobile', () => {
  Environment.clickButtonHome()
})

Then('Return home', () => {
  Environment.returnHome()
})

// Tablet
Given('I want to return Home page in one click on Tablet', () => {
  Environment.testOnTablet()
  Environment.visitLinkOnMobile()
})

When('I click on Button Home on Tablet', () => {
  Environment.clickButtonHome()
})

Then('Return home', () => {
  Environment.returnHome()
})

// Desktop
Given('I want to return Home page in one click on Desktop', () => {
  Environment.testOnDesktop()
  Environment.visitLinkOnDesktop()
})

When('I click on Button Home on Desktop', () => {
  Environment.clickButtonHome()
})

Then('Return home', () => {
  Environment.returnHome()
})
