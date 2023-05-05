const renderMenu = () => {
  const menuDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');

  h1.textContent = 'MENU';
  h3.textContent = 'This is the menu.';

  menuDiv.classList.add('page-content', 'menu');
  menuDiv.append(h1, h3);

  return menuDiv;
};

export default renderMenu;
