import renderNav from './nav';
import renderHome from './home/index';
import renderFooter from './footer';

const pageLoad = () => {
  const container = document.getElementById('container');
  const content = document.createElement('div');

  content.id = 'content';
  container.appendChild(content);

  content.appendChild(renderNav());
  content.appendChild(renderHome());
  content.appendChild(renderFooter());
};

export default pageLoad;
