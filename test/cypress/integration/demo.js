/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

// describe('login', function () {
   
// })
describe('demo项目测试', function () {
    
    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      
      afterEach(() => {
        cy.saveLocalStorage();
      });
    it('登录测试', function () {
        cy.login()
    
    })
    it('表格测试', function () {
        cy.contains('基础表格').click()
        cy.tableTest(2)
    })
    it('表单测试', function () {
      cy.contains('表单相关').click()
      cy.wait(1000)
      cy.contains('基本表单').click()
      cy.get('.el-form-item__content > .el-input > .el-input__inner').type('测试表单')
      cy.get('.el-select > .el-input > .el-input__inner').click()
      cy.wait(500)
      cy.get('.el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(2)').contains('小天才').click()
      cy.wait(500)
      
      cy.get(':nth-child(1) > .el-date-editor > .el-input__inner').type('2020-11-04')
      cy.get(':nth-child(3) > .el-date-editor > .el-input__inner').click()
      cy.get('.confirm').click()
      cy.wait(500)
      cy.get('.el-cascader > .el-input > .el-input__inner').click()
      cy.wait(500)
     cy.contains('广东省').click()
     cy.wait(500)

     cy.contains('广州市').click()
     cy.wait(500)

     cy.contains('海珠区').click()
     cy.wait(500)

     cy.get('.el-switch__core').click()
     cy.get(':nth-child(3) > .el-checkbox__label').click()
     cy.get(':nth-child(1) > .el-radio__label').click()
     cy.get('.el-textarea__inner').type('测试demo完成啦！')
     cy.get('.el-form-item__content > .el-button--primary').click()
     cy.screenshot()
     
  })
    it('退出测试', function () {
      cy.get('.el-dropdown-link').click()
      cy.get('.el-dropdown-menu__item--divided').click()
      cy.wait(1000)
     cy.screenshot()

    })
})
