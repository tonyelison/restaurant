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

const renderHeader = () => {
  const h1 = document.createElement('h1');

  h1.textContent = 'LOREM IPSUM';

  return h1;
};

const pageLoad = () => {
  const container = document.getElementById('container');
  const content = document.createElement('div');

  content.id = 'content';
  content.appendChild(renderNav());
  content.appendChild(renderHeader());

  container.appendChild(content);
};

export default pageLoad;
