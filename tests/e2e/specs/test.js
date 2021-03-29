// Api Test's

describe("GET - Api test", () =>{
  it("Verify endpoint is avaible", () => {
    cy.request('GET','http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge');
  });
});

describe("GET - Verify api is null and get amount of array", () =>{
  it("Verify the return of api", () => {
    cy.request('GET','http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge').then((response) =>{
      expect(response).to.have.property('status', 200)
      expect(response.body).to.not.be.null
      expect(response.body.length).to.equal(26)
    });
  });
});

describe("GET - Verify if all indexes are valid", () =>{
  it("Verify if all indices have the UF", () =>{
      cy.request('GET','http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge').then((response) =>{
        response.body.map(data => {
          expect(data.address.formattedAddress.includes('SP')).to.be.true
        });
      });
  });
});

// Element creation test

describe("Verify the element have the correct sentence", () => {
  it("Visits the app root url and find h1", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to the QA Challenge");
  });
});

describe("Verify creates elements", () => {
  it("Finds as the first 'div' in the app", () => {
    cy.get('div').should('be.visible');
  });
  it("Verify if have address of property", () => {
    cy.get('.row').find('.card').each((card) => {
      expect(!!card.children()[1].innerText).to.be.true
    });
  });
  it("Verify if have price of property", () =>{
    cy.get('.row').find('.card').each((card) => {
      expect(!!card.children()[2].innerText).to.be.true
    });
  });
  it("Verify if all price are greater than 0", () => {
    cy.get('.row').find('.card').each((card) =>{
      const price = card.children()[2].innerText.slice(3).replace(/\./g,'');
      expect(parseFloat(price)).to.be.greaterThan(0);
    });
  });
});

describe("Verifying that the elements were created with the correct style ", () =>{
  it("Search for elements with the correct class", () =>{
    cy.request('GET','http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge').then((response) =>{
      let responseLenght = response.body.length;
      cy.get('.row').find('.card').should('have.length', responseLenght);
    });
  });
})