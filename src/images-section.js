function imageSection() {
  const imageSec = document.createElement('div');
  imageSec.innerHTML = ` <div class="image image1">
                                <p>"My favorite restaurant in all the world"</p>
                                <p>-Michelle Obama</p>
                            </div>
                            <div class="image image2">
                                <p>"Definitely a must when you're in town"</p>
                                <p>-Elon Musk</p>
                            </div>
                            <div class="image image3">
                                <p>"I had the idea for Star Wars here!"</p>
                                <p>-George Lucas</p>
                            </div>
                            <div class="image image4">
                                <p>"I wrote my first hit song in a napkin when I was eating a hamburger in this place!</p>
                                <p>-Lady Gaga</p>
                            </div>`;
  imageSec.className = 'images-sections';

  return imageSec;
}

export default imageSection;