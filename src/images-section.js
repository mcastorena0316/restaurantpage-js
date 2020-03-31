function imageSection() {
  const imageSec = document.createElement('div');
  imageSec.className = 'images-sections display-section';

  const p1 = document.createElement('div');
  p1.className = 'image image1';
  const p2 = document.createElement('div');
  p2.className = 'image image2';
  const p3 = document.createElement('div');
  p3.className = 'image image3';
  const p4 = document.createElement('div', 'image image4');
  p4.className = 'image image4';

  const t1 = document.createElement('p');
  t1.innerHTML = 'My favorite restaurant in all the world';
  const t2 = document.createElement('p');
  t2.innerHTML = '-Michelle Obama';
  const t3 = document.createElement('p');
  t3.innerHTML = 'Definitely a must when you\'re in town';
  const t4 = document.createElement('p');
  t4.innerHTML = '-Elon Musk';
  const t5 = document.createElement('p');
  t5.innerHTML = 'I had the idea for Star Wars here!';
  const t6 = document.createElement('p');
  t6.innerHTML = '-George Lucas';
  const t7 = document.createElement('p');
  t7.innerHTML = 'I wrote my first hit song in a napkin when I was eating a hamburger in this place!';
  const t8 = document.createElement('p');
  t8.innerHTML = '-Lady Gaga';

  imageSec.appendChild(p1);
  imageSec.appendChild(p2);
  imageSec.appendChild(p3);
  imageSec.appendChild(p4);

  p1.appendChild(t1);
  p1.appendChild(t2);
  p2.appendChild(t3);
  p2.appendChild(t4);
  p3.appendChild(t5);
  p3.appendChild(t6);
  p4.appendChild(t7);
  p4.appendChild(t8);

  return imageSec;
}

export default imageSection;