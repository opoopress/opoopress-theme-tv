<#if (site.tags?size > 0)>
<section>
  <h1><@i18n.msg "Tags"/></h1>
  <ul id="tags" class="tags">
<#list site.tags as tag>
	<li class="tag"><span><a href="${root_url}${tag.url!'#'}">${tag.name}</a></span><span class="count">${tag.pagesSize}</span></li>
</#list>
  </ul>
</section>
</#if>