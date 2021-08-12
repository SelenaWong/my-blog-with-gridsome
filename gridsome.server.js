// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
module.exports = function (api) {
    // api.loadSource(async actions => {
    //     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    //
    //     // const collection = actions.addCollection({
    //     //     typeName: 'BlogPosts'
    //     // })
    //     //
    //     // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //     //
    //     // for (const post of data) {
    //     //     collection.addNode({
    //     //         id: post.id,
    //     //         title: post.title,
    //     //         content: post.body
    //     //     })
    //     // }
    // })
    //
    // api.createPages(({createPage}) => {
    //     // Use the Pages API here: https://gridsome.org/docs/pages-api/
    // })
}
