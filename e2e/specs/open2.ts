import Page2Page from '../pages/page2.page';

describe('', () => {
  it('open website', async () => {
   await open('http://localhost:4200/')
  });

  it('Page2 click', async () => {
    await Page2Page.openPage2();
  });


});
