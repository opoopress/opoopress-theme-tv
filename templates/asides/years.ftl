<#if (site.collections.post.tagsHolder.年代)?? && (site.collections.post.tagsHolder.年代?size > 0)>
<section>
    <h1>年代</h1>
    <ul id="yearTags" class="tags">
        <#list site.collections.post.tagsHolder.年代 as tag>
            <li class="tag"><span><a href="${root_url}${tag.url}">${tag.name}</a></span><span class="count">${tag.pagesSize}</span></li>
        </#list>
    </ul>
</section>
</#if>
