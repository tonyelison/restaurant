const activateRouteTab = (name) => {
  const currentActiveTab = document.querySelector('nav li.active');
  const newActiveTab = document.querySelector(`nav li.${name}`);

  currentActiveTab?.classList.remove('active');
  newActiveTab?.classList.add('active');
};

const renderRoute = (name, render) => {
  const pageContent = document.querySelector('.page-content');
  const contentContainer = document.getElementById('content');

  const div = document.createElement('div');
  div.classList.add('page-content', name);
  const renderedDiv = render(div);

  if (pageContent) {
    contentContainer.replaceChild(renderedDiv, pageContent);
  }

  activateRouteTab(name);

  return renderedDiv;
};

export default renderRoute;
