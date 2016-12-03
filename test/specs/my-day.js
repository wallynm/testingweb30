describe('My-day Component', function(){
  before(function() {
    browser.url('/');
  });
  
  it('Should render title correctly', function() {
    browser.getText('.card-pie .mdl-card__title').should.be.equal("My Day");
  });

  it('Should render 5 items', function() {
    var items = browser.elements('.card-pie .legend .legend__item').value;
    items.should.have.length.of(5);
  });
});