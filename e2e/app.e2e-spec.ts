import { MyTemplatePage } from './app.po';

describe('my-template App', () => {
  let page: MyTemplatePage;

  beforeEach(() => {
    page = new MyTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
