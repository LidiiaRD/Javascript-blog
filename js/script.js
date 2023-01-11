'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;

  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [Done] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('arcticle');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('was clicked:', articleSelector);

  /* [Done] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle)

  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);

  function clearMessages() {
    document.getElementById('list titles').innerHTML = titleList;
  }

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    console.log(article)
  }

  /* get the article id */
  const articleId = articles.getAttribute(optArticleSelector);
  console.log(articleId);

  /* find the title element */
  const articleTitle = articles.querySelector(optTitleSelector).innerHTML;
  console.log(articleTitle);

  /* get the title from the title element */
  const title = optTitleSelector.getAttribute('h3');
  console.log(title)

  /* create HTML of the link */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

  /* insert link into titleList */
  titleList.innerHTML = titleList.innerHTML + linkHTML;
}










