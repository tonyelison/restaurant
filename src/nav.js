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

export default renderNav;
