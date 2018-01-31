import { AngularpocPage } from './app.po';

describe('angularpoc App', () => {
  let page: AngularpocPage;

  beforeEach(() => {
    page = new AngularpocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
