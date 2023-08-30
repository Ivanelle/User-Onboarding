describe('Form App', () => {
   it('renders website', () => {
    cy.visit('http://localhost:3003');
   })
   it('renders elements', () => {
    cy.get('input[name=username]')
        .type('Ivanelle')
        .should('have.value', 'Ivanelle');
    cy.get('input[name=email]')
        .type('ivanellep@gmail.com')
        .should('have.value', 'ivanellep@gmail.com')
    cy.get('input[name=password]')
        .type('TaikaKoba')
        .should('have.value', 'TaikaKoba')
   })

   it('user can check the agreement terms', () => {
    cy.visit('http://localhost:3003');
    cy.get(`[type='checkbox']`).check()
   })

   it('user can submit the form data', () => {
    cy.visit('http://localhost:3003');
    cy.get('form').submit()
   })

    it('form validation if an input is left empty', () => {
        cy.visit('http://localhost:3003')
        cy.get('input[name=agreement]').check().check()
        cy.get('input[type=submit').should('be.disabled')
    }) 




















})
