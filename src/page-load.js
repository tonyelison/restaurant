import renderNav from './nav';
import renderHome from './home';
import renderFooter from './footer';

const pageLoad = () => {
  const container = document.getElementById('container');
  const content = document.createElement('div');

  content.id = 'content';
  content.appendChild(renderNav());
  content.appendChild(renderHome());
  content.appendChild(renderFooter());

  container.appendChild(content);
};

export default pageLoad;
