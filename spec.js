describe('', function() {
  var nav = element(by.css('.nav'));
  var navOptions = element.all(by.css('.nav-option'));

  beforeEach(function() {
    browser.get('http://localhost:8080/');
  });

  it('should have a nav', function() {
    expect(nav.isPresent()).toBe(true)
  });

  it('should have 3 nav options', function(){
    expect(navOptions.count()).toBe(3);
  });

  it('should have a dates', function(){
    expect(.getText()).toContain('Dates');
  })
});