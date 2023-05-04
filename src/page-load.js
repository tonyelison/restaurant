const renderNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  ['Home', 'Menu', 'Contact'].forEach((tabName) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = tabName;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
};

const renderHeader = () => {
  const h1 = document.createElement('h1');

  h1.textContent = 'Lorem Ipsum';

  return h1;
};

const pageLoad = () => {
  const content = document.getElementById('content');
  content.appendChild(renderNav());
  content.appendChild(renderHeader());
};

export default pageLoad;
