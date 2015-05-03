<p>
  <h2><@i18n.msg "Related Resources"/></h2>
  <ul id="related-posts-list">
    <#list page.related_posts as post>
      <li class="post">
        <a href="${ root_url }${ post.url }">${titlecase(post.title)}</a>
        <div class="source right">${post.年代!} ${post.loc!}</div>
      </li>
    </#list>
  </ul>
</p>
