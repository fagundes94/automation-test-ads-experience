describe('Testa login da página do ads experience', () => {

    beforeEach (() => {
        cy.visit('./final_app/login.html')
      })
    
    
    it('deve realizar o login com sucesso', () =>{
        cy.get('#login').type('admin')
        cy.get('#password').type('admin')
        cy.contains('button', 'Login').click()

        cy.get('#mensagem')
          .should('be.visible')
          .and('have.text', 'Login com sucesso! Redirecionando...');
    })

    it('deve exibir uma mensagem não permitindo criar outra conta', () =>{
        cy.contains('button', 'Criar Conta').click()

        cy.get('#mensagem-erro')
           .should('be.visible')
           .and('have.text', 'No momento não é permitido criar outra conta');
    })

})

