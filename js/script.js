'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  console.log(activeLinks);
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [Done] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post active');
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

  function clearMessages() {
    document.getElementById(titleList).innerHTML = links;
  }
  console.log(titleList);

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelector(optArticleSelector);
  let html = links
  for (let article of articles) {

    /* get the article id */
    const articleId = document.getElementById('id');
    console.log(articleId);

    /* find the title element */
    const articleTitle = articles.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* get the title from the title element */
    const title = h3.getAttribute(optTitleSelector);
    console.log(title);

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* insert link into html variable*/
    html = html + linkHTML;
  }
  titleList.innerHTML = html;

}

generateTitleLinks();











