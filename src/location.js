function locationSection() {
  const location = document.createElement('div');
  location.innerHTML = `<div class="title-location">
                            <img class="pin-img" src="images/pin.png" alt="pin">
                            <h4> FIND US! </h4>
                        </div>
                        <p>15233 N Washington Ave  </p>
                        <p> Scranton, PA, 18503</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.1969111043989!2d-75.66350654204163!3d41.40896899481556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4dfda160c2bcb%3A0x65fc89ada56e46c2!2sPam%20Beesly!5e0!3m2!1ses-419!2smx!4v1585586074668!5m2!1ses-419!2smx" 
                        width="350" height="275" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
  location.className = 'location-section';
  return location;
}

export default locationSection;