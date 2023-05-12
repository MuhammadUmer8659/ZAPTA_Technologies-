/// <reference types="cypress" />

describe('verify page text', () => {
    it('should contain specified text in "The Stay" and "The Amenities" sections', () => {
      // Navigate to the Zapta Tech website
      cy.visit('https://stg.zaptatech.com/')
  
      // Find the Midland Apartments card in the featured listings section and click on it
      cy.contains('Midland Apartments').click()

      cy.get('.offers > .col-md-8 > :nth-child(2) > :nth-child(1)')
     .contains('2 Bedrooms')
     .should('be.visible');

     cy.get('.offers > .col-md-8 > :nth-child(2) > :nth-child(2)')
      .contains('4 Guests')
     .should('be.visible')

     cy.get('.col-md-8 > :nth-child(2) > :nth-child(3)')
    .contains('2 Bath')
    .should('be.visible')

    cy.get('.col-md-8 > :nth-child(4) > :nth-child(1)')
    .contains('Wifi')
    .should('be.visible')

    cy.get('.col-md-8 > :nth-child(4) > :nth-child(2)')
    .contains('Work Area')
    .should('be.visible')

    cy.get('.col-md-8 > :nth-child(4) > :nth-child(3)')
    .contains('Full Kitchen')
    .should('be.visible')


    cy.screenshot(`FIRST_${new Date().toLocaleTimeString()}`)

  

    })
  })
  