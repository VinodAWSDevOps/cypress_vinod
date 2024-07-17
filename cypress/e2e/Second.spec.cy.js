/// <reference types="cypress"/>
describe("This is my Second Set",()=>{

    before("This is before All hooks runs only once that too in the beginning",()=>{
        cy.log("before ALL will execute first than others")
    })

    beforeEach(()=>{
        cy.log("This is beforeEach hooks runs before every 'it' files")
    })

    afterEach("This is afterEach hook",()=>{
cy.log("This is the hook which executes after completion of each TC")
    })

    after("",()=>{
        cy.log("This is the hook which runs only once after completion on test set")
    })

    it("This is my first TC",()=>{
        cy.visit("https://gmail.com")
    })

    it("This is my second TC",()=>{
        cy.visit("https://facebook.com")
    })
})