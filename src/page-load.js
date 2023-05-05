const renderNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  ['Home', 'Menu', 'Contact'].forEach((tabName) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = tabName;
    a.href = '';

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
};

const renderHomePage = () => {
  const homeDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');

  h1.textContent = 'LOREM IPSUM';
  h3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  homeDiv.classList.add('home');
  homeDiv.append(h1, h3);

  return homeDiv;
};

const renderFooter = () => {
  const footer = document.createElement('footer');

  footer.textContent = '© Copyright by Lorem Ipsum LLC. All rights reserved.';

  return footer;
};

const pageLoad = () => {
  const container = document.getElementById('container');
  const content = document.createElement('div');

  content.id = 'content';
  content.appendChild(renderNav());
  content.appendChild(renderHomePage());
  content.appendChild(renderFooter());

  container.appendChild(content);
};

export default pageLoad;
