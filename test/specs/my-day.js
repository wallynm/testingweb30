describe('My-day Component', function(){
  it('Should render title correctly', function() {
    browser.url('/');
    browser.getText('.card-pie .mdl-card__title').should.be.equal("My Day");
  });

  it('Should render 5 items', function() {
    var items = browser.elements('.card-pie .legend .legend__item').value;
    items.should.have.length.of(5);
  });
});