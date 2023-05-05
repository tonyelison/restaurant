const renderHome = () => {
  const homeDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');

  h1.textContent = 'LOREM IPSUM';
  h3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  homeDiv.classList.add('page-content', 'home');
  homeDiv.append(h1, h3);

  return homeDiv;
};

export default renderHome;
