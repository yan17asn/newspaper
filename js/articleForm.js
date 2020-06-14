import * as $ from 'jquery'

import { Category } from './categories'

export function renderArticleForm(data = {}) {
    const content = $('#content')

    const articleFormHtml = `
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <form id="article-form">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input class="form-control" type="text" name="title" id="title">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select class="form-control" id="category" name="category">
                            ${renderCategoryOptions(data)}
                        </select>    
                    </div>
                    <div class="form-group">
                        <label for="content_html">Article  Content</label>
                        <textarea class="form-control" id="content_html" name="content_html"></textarea>
                    </div>
                    <button id="article-submit" class="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>    
    `

    content.html(articleFormHtml)

    CKEDITOR.replace('content_html')
}

function renderCategoryOptions(data) {
    let categoryOptionsHtml = ''
    for (const category of Object.keys(Category)) {
        categoryOptionsHtml +=  `
            <option value="${category}">${category}</option>
        `
    }
    return categoryOptionsHtml
}