import { Angular2HtmlPlaygroundPage } from './app.po';

describe('angular2-html-playground App', () => {
  let page: Angular2HtmlPlaygroundPage;

  beforeEach(() => {
    page = new Angular2HtmlPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
