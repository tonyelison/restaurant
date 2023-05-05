import renderHome from './home/index';
import renderMenu from './menu';
import renderContact from './contact';

const renderNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const tabs = [
    { name: 'Home', render: renderHome },
    { name: 'Menu', render: renderMenu },
    { name: 'Contact', render: renderContact },
  ];

  tabs.forEach((tab) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = tab.name;
    a.addEventListener('click', () => {
      const pageContent = document.querySelector('.page-content');
      if (!pageContent.classList.contains(tab.name.toLowerCase())) {
        const contentContainer = document.getElementById('content');
        contentContainer.replaceChild(tab.render(), pageContent);
      }
    });

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
};

export default renderNav;
