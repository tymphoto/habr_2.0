import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User is not authorized', () => {
    it('Main page should open', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('should open Main page if user try to open profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('should open NotFoundPage ', () => {
      cy.visit('/dsgsfs');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('User is authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('should open Main page if user try to open profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('should open Articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
