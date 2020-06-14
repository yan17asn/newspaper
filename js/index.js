
//Required for Boostrap
import * as $ from 'jquery'
import * as popper from 'popper.js'
import * as bootstrap from 'bootstrap'
export { $, popper, bootstrap } 

import { renderCats } from './cats'
import { getArticles } from './articles'
import { renderNav } from './nav'
import { renderLoginForm } from './loginForm'
import { renderArticleForm } from './articleForm'
import { Category } from './categories'

// renderCats()
renderNav()

const page = window.location.href.split('#')[1]

switch (page) {
    case 'Home':
        getArticles()
        break
    case 'Login':
        renderLoginForm()
        break
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

