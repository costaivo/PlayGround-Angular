import { AngAppPage } from './app.po';

describe('ang-app App', () => {
  let page: AngAppPage;

  beforeEach(() => {
    page = new AngAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
