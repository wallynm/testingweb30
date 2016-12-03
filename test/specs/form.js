describe('Form component', function() {
  before(function(){
    browser.url('/forms.html');
  });

  describe('Basic Rendering', function() {
    it('Should render form', function(){
      browser.isVisible('.mdl-card form').should.be.true;
    });
  });

  describe('Functionallity', function(){
    it('Should be able to change "first name"', function(){
      browser.setValue('#firstName', 'Wallysson');
      browser.pause(2000);
      browser.getValue('.mdl-card form #firstName').should.be.equal('Wallysson');
    });

    it('Should be able to change "second name"', function(){
      browser.setValue('#secondName', 'Nunes');
      browser.pause(2000);
      browser.getValue('.mdl-card form #secondName').should.be.equal('Nunes');
    });

    it('Should be able to change "birth date"', function(){
      browser.setValue('#birthday', '15 Aug, 1991');
      browser.pause(2000);
      browser.getValue('.mdl-card form #birthday').should.be.equal('15 Aug, 1991');
    });

    it('Should have "company email" input disabled', function(){
      browser.isEnabled('.mdl-card form #company').should.be.false;
    });

    it('Should have "company email" input disabled', function(){
      browser.isEnabled('.mdl-card form #company_email').should.be.false;
    });

    it('Should have submit button disabled', function(){
      browser.isEnabled('.mdl-card form #submit_button').should.be.false;
    });

    it('Should enable form submit checking "Entered information is reliable"', function(){
      browser.click('.mdl-card form .form__action .mdl-checkbox');
      browser.pause(5000);
      browser.isEnabled('.mdl-card form #submit_button').should.be.true;
    });

    it('Should be able to submit form', function(){
      var currentUrl = browser.getUrl();
      browser.click('.mdl-card form #submit_button');
      browser.getUrl().should.be.not.equal(currentUrl);
    });

    it('Should render success page', function(){
      browser.pause(5000);
      browser.getText('.mdl-card__title div').should.be.equal('Congratulations!!!');
      browser.pause(2000);
    });
  });

  describe('Regression test', function(){
    it('Should render form page correctly', function(done){
      browser.url('/forms.html')
      .webdrivercss('form', {
        name: 'form',
        elem: '.mdl-card form'
      }, function(err,res) {
          res.header[0].isWithinMisMatchTolerance.should.be.ok;
      })
      .call(done);
    });
  })
});