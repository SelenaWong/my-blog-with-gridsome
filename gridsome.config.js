// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BlogPost',
                path: './content/blog/*.md',
            }
        },
        {
            use: '@gridsome/source-strapi',
            options: {
                apiURL: process.env.GRIDSOME_API_URL,
                queryLimit: 1000,// defaults to 100
                contentTypes: ['post', 'tag'],
                // typeName:'Strapi',
                singleTypes: ['general'],//单个节点
                // loginData: { //需要登录获取的数据
                //     identifier: '',
                //     password: ''
                // }
            }
        }
    ],
    templates: {
        StrapiPost: [//typeName+模型名称
            {
                path: '/post/:id',
                component: './src/templates/Post.vue'
            }
        ],
        StrapiTag: [
            {
                path: '/tag/:id',
                component: './src/templates/Tag.vue'
            }
        ]
    },
    transformers: {
        remark: {
            // global remark options
        },
    }
}
