
//Required for Boostrap
import * as $ from 'jquery'
import * as popper from 'popper.js'
import * as bootstrap from 'bootstrap'
export { $, popper, bootstrap } 

import { renderCats } from './cats'
import { getArticles, getArticle } from './articles'
import { renderNav } from './nav'
import { renderLoginForm } from './loginForm'
import { renderArticleForm } from './articleForm'
import { Category } from './categories'

// renderCats()
renderNav()

let page = window.location.href.split('#')[1]
let id

if(page && page.startsWith('Article_')) {
    id = page.split('_')[1]
    page = 'Article'    
}

console.log('Rendering page...', page)

switch (page) {
    case 'Home':
        getArticles()
        break
    case 'Login':
        renderLoginForm()
        break
    case 'Article':
        getArticle(id)
        break;
    case 'ArticleForm':
        renderArticleForm()
        break
    case Category.Comunity:
        getArticles(Category.Community)
        break
    case Category.Opinion:
        getArticles(Category.Opinion)
        break
    case Category.Sports:
        getArticles(Category.Sports)
        break
    case Category.World:
        getArticles(Category.World)
        break
    default:
        getArticles()
}

