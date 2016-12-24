import { NgTeslaRangeCalculatorPage } from './app.po';

describe('ng-tesla-range-calculator App', function() {
  let page: NgTeslaRangeCalculatorPage;

  beforeEach(() => {
    page = new NgTeslaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
