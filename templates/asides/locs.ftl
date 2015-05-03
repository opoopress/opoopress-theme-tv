<#if (site.collections.post.tagsHolder.loc)?? && (site.collections.post.tagsHolder.loc?size > 0)>
<section>
    <h1>地区</h1>
    <ul id="locTags" class="tags">
        <#list site.collections.post.tagsHolder.loc as tag>
            <li class="tag"><span><a href="${root_url}${tag.url}">${tag.name}</a></span><span class="count">${tag.pagesSize}</span></li>
        </#list>
    </ul>
</section>
</#if>