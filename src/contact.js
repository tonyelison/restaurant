const renderContact = () => {
  const contactDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');

  h1.textContent = 'CONTACT';
  h3.textContent = 'Contact information.';

  contactDiv.classList.add('page-content', 'contact');
  contactDiv.append(h1, h3);

  return contactDiv;
};

export default renderContact;
