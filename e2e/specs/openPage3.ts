import Page3Page from '../pages/page3.page';


describe('', () => {
  it('open website', async () => {
   await open('http://localhost:4200/')
  });

  it('Page1 click', async () => {
    await Page3Page.openPage3();
  });
});
