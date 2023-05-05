import renderRoute from './router';

const render = (div) => {
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');

  h1.textContent = 'CONTACT';
  h3.textContent = 'Contact information.';

  div.append(h1, h3);

  return div;
};

export default () => renderRoute('contact', render);
