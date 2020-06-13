import * as $ from 'jquery'

const api = 'https://api-us-west-2.graphcms.com/v2/ckbct0kdx0kqh01xy4pwgfijo/master'

export function getArticles(category){
    let filter = ''
    if (category) {
        filter = `(where: {category: ${category}})`

    }
    $.post(api, JSON.stringify({
        operationName: 'GetArticles',
        query: `
        query GetArticles {
            articles${filter} {
                title
                content {
                    html
                }
                category
            }
        }`,
        variables: null
    })).then(function(response) {
        const articles = response.data.articles
        const content = $('#content')

        let articlesListHtml = '<div class="row">'

        //Loop over the articles and append to my html
        articles.forEach((articles, index) => {
            if (index % 3 === 0) {
                articlesListHtml += '</div><div class="row">'
            }
            articlesListHtml += `
            <article class="col">
                    <h3>${articles.title}</h3>
                    <section>
                        ${articles.content.html}
                    </section>
            </article>
            `
        })

        articlesListHtml += '</div>'
        content.html(articlesListHtml)
    })
}