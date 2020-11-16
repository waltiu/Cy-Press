let LOCAL_STORAGE_MEMORY = {};

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
Cypress.Commands.add('login', () => {
        cy.visit("login")
        cy.get('input[placeholder="username"]').type('admin')
        cy.get('input[placeholder="password"]').type('admin')
        cy.contains('登录').click()
        cy.wait(1000)
        cy.screenshot()

        cy.location().should((loc) => {
            expect(loc.hash).to.eq('#/dashboard')
        })

})


Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
})
Cypress.Commands.add("tableTest", (index) => {
  cy.get('.el-icon-edit').eq(index).click()
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear().type('小明')
  cy.get('.dialog-footer > .el-button--primary').click()
  cy.wait(1000)
  cy.screenshot()

  cy.get('.el-select > .el-input > .el-input__inner').click()
  cy.wait(500)

  cy.get('.el-scrollbar__view > :nth-child(1)').click()
  cy.contains('搜索').click()
  cy.wait(500)

  cy.screenshot()
  cy.wait(1000)

  cy.get('.handle-input > .el-input__inner').type('张三')
  cy.wait(500)

  cy.contains('搜索').click()
  cy.screenshot()
  cy.wait(1000)

  cy.get('.red').click()
  cy.wait(500)

  cy.get('.el-message-box__btns > .el-button--primary').click()
  cy.wait(500)

  cy.screenshot()

})