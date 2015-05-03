<#macro title2 post>
<#if post.type??>【${post.type}】</#if><#if post.cn_name??>《${post.cn_name}》</#if><#if post.en_name??>(${post.en_name})</#if><#if post.status??>  ${post.status}</#if><#t/>
</#macro>

  <header>
      <h1 class="entry-title"><@title2 page/></h1>
  </header>


