

/* eslint-disable no-undef */
describe('e2e test page', function() {
  beforeEach(function() {
    cy.intercept(
      'https://api.github.com/users/fredrik655/repos', [
      {
        name: 'test',
        description: 'dec test',
        created_at: '2021-01-03T08:00:56Z',
        updated_at: '2021-01-03T08:00:56Z',
        html_url: 'https://test.com'
      },
      {
        name: 'test2',
        description: 'dec test',
        created_at: '2020-01-03T08:00:56Z',
        updated_at: '2020-01-03T08:00:56Z',
        html_url: 'https://test.com'
      },
      {
        name: 'test3',
        description: 'dec test',
        created_at: '2022-01-03T08:00:56Z',
        updated_at: '2022-01-03T08:00:56Z',
        html_url: 'https://test.com'
      }
    ])
  })

  it('load page ', function() {
    cy.visit('http://localhost:8080');
  })

  it('check navbar refs', function() {
    cy.get('a[href="#"]');
    cy.get('a[href*="#skills-target"]');
    cy.get('a[href*="#projects-target"]');
    cy.get('a[href*="#git-target"]');
  });

  it('navbar btn toggle', function() {
    cy.get('.btn').first().should('have.text', 'Dark Theme').click();
    cy.get('.btn').first().should('have.text', 'Light Theme');
  })

  it('sort git projects by date', function() {
    cy.get('.btn').last().click();
    cy.get('[data-filterid="3"]').click();
    cy.get('.git-card-title').first().should('have.text', ' Repo name: test2');

    cy.get('.btn').last().click();
    cy.get('[data-filterid="4"]').click();
    cy.get('.git-card-title').first().should('have.text', ' Repo name: test3');
  })

  
})