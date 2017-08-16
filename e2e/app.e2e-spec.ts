import { Angular2tutorialCustomDirectivesPage } from './app.po';

describe('angular2tutorial-custom-directives App', () => {
  let page: Angular2tutorialCustomDirectivesPage;

  beforeEach(() => {
    page = new Angular2tutorialCustomDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
