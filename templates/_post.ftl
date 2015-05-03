<#macro tag_links2 tags>
<#if (tags?size > 0)>
<#assign n = 0>
<#list tags as tag><#if n == 1> / </#if><a class="tag" href="${root_url}${tag.url}">${tag.name}</a><#assign n = 1></#list>
</#if>
</#macro>

<#assign single = true>
<#macro postLayout>
<#include "_default.ftl">
<@defaultLayout>
<#assign singleHolder = page.tagsHolder.singleHolder>
<#if singleHolder.loc??><#assign locTag = singleHolder.loc></#if>
<#if singleHolder.年代??><#assign yearTag = singleHolder.年代></#if>
<#assign tags = page.tags>
<#assign directorTags = page.tagsHolder.导演>
<#assign actorTags = page.tagsHolder.主演>
<div>
<article class="hentry" role="article">
  <#include "post/article.ftl">
  <div class="resource-meta">
  <#if page.img_url??><img src="${site.snapshot_path}${page.img_url}" class="img"></#if>
  <ul>
  <#if locTag??><li><span>地区：</span><a href="${root_url}${locTag.url}">${locTag.name}</a></li></#if>
  <#if yearTag??><li><span>年代：</span><a href="${root_url}${yearTag.url}">${yearTag.name}</a></li></#if>
  <#if (tags?size > 0)><li><span>类型：</span><@tag_links2 tags/></li></#if>
  <#if (directorTags?size > 0)><li><span>导演：</span><@tag_links2 directorTags/></li></#if>
  <#if (actorTags?size > 0)><li><span>主演：</span><@tag_links2 actorTags/></li></#if>
  </ul>
  </div>
  <div class="entry-content"><#nested></div>
  <#if page.resList??>
  <h2>相关资源列表</h2>
  <div class="resource-list">
  <#list page.resList as res>
  <h3>${res.title}</h3>
  <ul>
  <#if (res.items?size > 0)>
  <#list res.items as item>
    <li>
	<span><#if item.format??>[${item.format}] </#if>${item.name}<#if item.isnew??><img src="${root_url}/images/anew.gif"></#if></span>
	<span style="float:right;">
	<#if item.emule_url??><a href="${item.emule_url}">[电驴]</a></#if>
	<#if item.magnet_url??><a href="${item.magnet_url}">[磁力]</a></#if>
	<#if item.thunder_url??><a href="${item.thunder_url}">[迅雷]</a></#if>
    <#if item.baidu_url?? && item.baidu_url?starts_with('http://pan.baidu.com/')><a href="${item.baidu_url}">[百度]</a></#if>
	</span>
    </li>	
  </#list>
  <#else>
  <li>资源被删除</li>
  </#if>
  </ul>
  </#list>
  </div>
  </#if>
  
  <footer>
    <p class="meta">
      <#include "post/author.ftl">
      <#include "post/date.ftl"><#if was_updated??>${updated}<#else>${time}</#if>
      <#include "post/categories.ftl">
    </p>
	<#if (page.sharing)!true == true>
      <#include "post/sharing.ftl">
	</#if>
	<#if (page.related_posts)?? && (page.related_posts?size > 0)>
	  <#include "post/related_posts.ftl">
	</#if>
    <p class="meta">
      <#if (page.previous.url)??>
        <a class="basic-alignment left" href="${root_url}${page.previous.url}" title="<@i18n.msg "Previous Post"/>: ${page.previous.title}">&laquo; ${page.previous.title}</a>
      </#if>
       <#if (page.next.url)??>
        <a class="basic-alignment right" href="${root_url}${page.next.url}" title="<@i18n.msg "Next Post"/>: ${page.next.title}">${page.next.title} &raquo;</a>
      </#if>
    </p>
  </footer>
</article>
<#include "post/comments.ftl">
</div>
<#if !(page.sidebar)?? || ((page.sidebar)?string != "false")>
<aside class="sidebar">
    <#include "default_asides_content.html">
</aside>
</#if>
</@defaultLayout>

</#macro>
