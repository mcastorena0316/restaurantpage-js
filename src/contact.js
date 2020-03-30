function contactSection() {
  const formContact = document.createElement('div');
  formContact.innerHTML = `
                            <h3>Drop Us a Message</h3>
                            <form>
                              <div class="row">
                                <div class="col-md-6 section1-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Your Name *"  required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email *" required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="tel"  class="form-control" placeholder="Your Phone Number *"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit"  class="contact-button" id="contact-button" value="Send Message" />
                                    </div>
                                </div>
                                 <div class="col-md-6 section2-form">
                                    <div class="form-group">
                                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *" required></textarea>
                                    </div>
                                </div>
                        </div>
                    </form>`;
  formContact.className = 'form-section display-section';
  return formContact;
}

export default contactSection;