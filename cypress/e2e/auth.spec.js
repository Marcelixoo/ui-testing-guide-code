import { Default as TaskListDefault } from '../../src/components/TaskList.stories';

const credentials = {
  name: 'Alice Carr',
  email: 'alice.carr@test.com',
  password: 'k12h1k0$5;lpa@Afn',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
}

describe('The login page', () => {
  beforeEach(() => {
    cy.intercept('POST', '/authenticate', {
      statusCode: 201,
      body: {
        user: {
          name: credentials.name,
          token: credentials.token,
        },
      },
    });

    cy.intercept('GET', '/tasks', {
      statusCode: 201,
      body: TaskListDefault.args,
    });
  })
  it('allows a user to authenticate via the login form', () => {
    cy.visit('/');

    cy.get('input[name=email]').type(credentials.email);
    cy.get('input[name=password]').type(credentials.password);

    cy.get('button[type=submit]').click();

    cy.get('[aria-label="tasks"] li').should('have.length', 6);
  })
})