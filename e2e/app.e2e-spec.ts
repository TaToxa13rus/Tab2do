import { Tab2doPage } from './app.po';

describe('tab2do App', function() {
  let page: Tab2doPage;

  beforeEach(() => {
    page = new Tab2doPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
