import renderHome from './home/index';
import renderMenu from './menu';
import renderContact from './contact';

const tabs = [
  { name: 'home', render: renderHome },
  { name: 'menu', render: renderMenu },
  { name: 'contact', render: renderContact },
];

const renderNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  tabs.forEach((tab) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.classList.add(tab.name);
    a.textContent = tab.name;
    a.addEventListener('click', tab.render);

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
};

export default renderNav;
