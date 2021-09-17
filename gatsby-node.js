/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({graphql, actions}) =>{
    const {createPage} = actions 
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    return graphql(`
    query MyQuery {
        wpGraphQL {
          pages {
            nodes {
              id
              title
              elementorData
              slug
              uri
            }
          }
        }
      }           
    `, {limit: 1000}).then( result => {
        if(result.errors){
            throw result.errors 
        }
        console.log(result.data)
        result.data.wpGraphQL.pages.nodes.forEach(edge => {
            console.log(edge.uri)
            console.log(edge)
            createPage({
                path: edge.uri,
                component: blogPostTemplate, 
                context: edge 
            })
        })
    })
}