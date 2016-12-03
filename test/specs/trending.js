describe('Trending component', function() {
  before(function() {
    browser.url('/');
  });

  describe('Rendering', function() {
    it('Should render title correctly', function() {
      browser.getText('.card-treding .mdl-card__title').should.be.equal("Trending");
    });

    it('Should render 5 items', function(){
      browser.elements('.card-treding .mdl-list .mdl-list__item').value.should.have.length.of(5);
    });
  });
});