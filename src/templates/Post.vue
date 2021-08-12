<template>
    <Layout>
        <!-- Page Header -->
        <header class="masthead"
            :style="{
              backgroundImage:`url(${$page.post.cover.url})`
            }">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="post-heading">
                            <h1>{{$page.post.title}}</h1>
                            <span class="meta">Posted by
              on {{$page.post.created_at}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Post Content -->
        <article>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto"
                        <p>
                          <span v-for="tag in $page.post.tags" :key="tag.id">
                             <g-link :to="'/tag/'+tag.id">
                                {{tag.title}}&nbsp;&nbsp;
                              </g-link>
                          </span>
                        </p>
                    </div>
                    <div class="col-lg-8 col-md-10 mx-auto"
                         v-html="mdToHtml($page.post.content)">
                    </div>
                </div>
            </div>
        </article>

    </Layout>
</template>
<page-query>
    query($id:ID!){
        post: strapiPost(id:$id){
            id
            title
            content
            cover{
                url
            }
            tags{
                id
                title
            }
            created_at
        }
    }
</page-query>
<script>
    import MarkdownIt from 'markdown-it'

    export default {
        name: 'PostPage',
        methods:{
            mdToHtml(markdown){
                const md = new MarkdownIt()
                return md.render(markdown)
            }
        }
    }
</script>

<style>

</style>
