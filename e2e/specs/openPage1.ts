import Page1Page from '../pages/page1.page';


describe('', () => {
  it('open website', async () => {
   await open('http://localhost:4200/')
  });

  it('Page1 click', async () => {
    await Page1Page.openPage1();
  });
});
