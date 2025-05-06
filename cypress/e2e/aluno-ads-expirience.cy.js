describe('dve realizar validações para a tela de alunod', () => {

    beforeEach (() => {
        cy.visit('./final_app/login.html')
        cy.get('#login').type('admin')
        cy.get('#password').type('admin')
        cy.contains('button', 'Login').click()
    })

    it.only('deve cadastrar um aluno com sucesso', () => {
        cy.get('[href="alunos.html"]').click()
        
    })

})