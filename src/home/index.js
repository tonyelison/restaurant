import renderRoute from '../router';
import renderMenu from '../menu';

const render = (div) => {
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');
  const menuCta = document.createElement('button');

  h1.textContent = 'LOREM IPSUM';
  h3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  menuCta.textContent = 'View Menu';
  menuCta.addEventListener('click', renderMenu);

  div.append(h1, h3, menuCta);

  return div;
};

export default () => renderRoute('home', render);
