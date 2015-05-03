<#assign __m_s_g__ = {
"Comments" : "评论",
"Previous Post" : "上一篇",
"Next Post" : "下一篇",
"posted in" : "所属分类" ,
"Copyright" : "版权所有",
"Powered by" : "自豪的使用",
"Posted by2" : "作者",
"Related Posts" : "相关文章",
"Related Resources" : "相关资源",
"Recent Posts" : "近期文章",
"Recent Resources" : "最新资源",
"Recent Comments" : "近期评论",
"Search" : "搜索",
"Tags" : "类型",
"Categories" : "分类",
"Filed under2" : "分类",
"Navigate" : "导航"
}>
<#macro msg name>${__m_s_g__[name]!name}</#macro>
