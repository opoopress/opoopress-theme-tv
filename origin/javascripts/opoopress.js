/*
* OpooPress.js
* Copyright 2013 Alex Lin
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var OpooPressApp;
var DISQUSWIDGETS, disqus_domain, disqus_shortname;
(function() { 
	(function(n) {
        for (var t, i, r = {},
        u = function() {},
        f = "memory".split(","), e = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); t = f.pop();) n[t] = n[t] || r;
        while (i = e.pop()) n[i] = n[i] || u
    })(window.console = window.console || {}),
	(function(fn){
		if (!fn.map) fn.map=function(f){var r=[];for(var i=0;i<this.length;i++)r.push(f(this[i]));return r}
		if (!fn.filter) fn.filter=function(f){var r=[];for(var i=0;i<this.length;i++)if(f(this[i]))r.push(this[i]);return r}
	})(Array.prototype),
    Function.prototype.method = function(n, t) {
        return this.prototype[n] = t,
        this
    },
    Date.now = Date.now ||
    function() {
        return + new Date
    },
    Date.fromISO = function() {
        var n = Date.parse("2000-01-01T00:00:00Z");
        return n === 9466848e5 ?
        function(n) {
            return new Date(Date.parse(n))
        }: function(n) {
            var t, r, u = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            i = u.exec(n) || [];
            return i[1] ? (t = i[1].split(/\D/).map(function(n) {
                return parseInt(n, 10) || 0
            }), t[1] -= 1, t = new Date(Date.UTC.apply(Date, t)), !t.getDate()) ? NaN: (i[5] && (r = parseInt(i[5], 10) * 60, i[6] && (r += parseInt(i[6], 10)), i[4] == "+" && (r *= -1), r && t.setUTCMinutes(t.getUTCMinutes() + r)), t) : NaN
        }
    } (),
    Date.method("timeAgo",
    function() {
        var i = 86400,
        n = ( + new Date - this.getTime()) / 1e3,
        t = Math.floor(n / i);
        return n < 60 && "just now" || n < 120 && "a minute ago" || n < 2700 && Math.floor(n / 60) + " minutes ago" || n < 5400 && "an hour ago" || n < i && Math.floor(n / 3600) + " hours ago" || t === 1 && "yesterday" || t < 30 && t + " days ago" || t < 60 && "one month ago" || t < 365 && Math.floor(t / 30) + " months ago" || t < 730 && "one year ago" || Math.floor(t / 365) + " years ago"
    }),
	//try{
		Date.method("timeAgoZH",
		function() {
			var i = 86400,
			n = ( + new Date - this.getTime()) / 1e3,
			t = Math.floor(n / i);
			return n < 60 && "刚刚" || n < 120 && "1分钟前" || n < 2700 && Math.floor(n / 60) + "分钟前" || n < 5400 && "1小时前" || n < i && Math.floor(n / 3600) + "小时前" || t === 1 && "昨天" || t < 30 && t + "天前" || t < 60 && "1个月前" || t < 365 && Math.floor(t / 30) + "个月前" || t < 730 && "1年前" || Math.floor(t / 365) + "年前"
		}),
	//}catch(e){},
    Array.prototype.indexOf || (Array.prototype.indexOf = function(n) {
        "use strict";
        if (this == null) throw new TypeError;
        var t, i, u = Object(this),
        r = u.length >>> 0;
        if (r === 0 || (t = 0, arguments.length > 1 && (t = Number(arguments[1]), t != t ? t = 0 : t != 0 && t != Infinity && t != -Infinity && (t = (t > 0 || -1) * Math.floor(Math.abs(t)))), t >= r)) return - 1;
        for (i = t >= 0 ? t: Math.max(r - Math.abs(t), 0); i < r; i++) if (i in u && u[i] === n) return i;
        return - 1
    }),
    String.method("format",
    function() {
        var n = arguments;
        return this.replace(/{(\d+)}/g,
        function(t, i) {
            return typeof n[i] != "undefined" ? n[i] : t
        })
    }),
    "".trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")
    }),
    Number.method("toShortString",
    function() {
        var n = this,
        t = function(n, t) {
            return Math.round(n * Math.pow(10, t)) / Math.pow(10, t)
        };
        return n < 1e3 ? "" + n: n < 1e4 ? t(n / 1e3, 1) + "k": t(n / 1e3, 0) + "k"
    }),
    String.method("trim",
    function() {
        return this.replace(/^\s+|\s+$/g, "")
    }),
    Number.method("integer",
    function() {
        return Math[this < 0 ? "ceil": "floor"](this)
    }),
    Array.method("reduce",
    function(n, t) {
        for (var i = 0; i < this.length; i += 1) t = n(this[i], t);
        return t
    }),
    Array.method("sum",
    function() {
        return this.reduce(function(n, t) {
            return n + t
        },
        0)
    }),
    Array.dim = function(n, t) {
        for (var r = [], i = 0; i < n; i += 1) r[i] = t;
        return r
    },
    Array.matrix = function(n, t, i) {
        for (var u, f, e = [], r = 0; r < n; r += 1) {
            for (u = [], f = 0; r < t; r += 1) u[f] = i;
            e[r] = u
        }
        return e
    },
    String.method("parseUrl",
    function() {
        for (var r = /^(?:([A-Za-z]+):)?(\/{0,3})(0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
        t = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"], u = r.exec(this), i = {},
        n = 0; innerHeight < t.length; n += 1) i[t[n]] = u[n];
        return i
    }),
    String.method("validUrl",
    function() {
        var n = new RegExp("(http|ftp|https)://[a-z0-9-_]+(.[a-z0-9-_]+)+([a-z0-9-.,?^=%&;:/~+#]*[a-z0-9-?^=%&;/~+#])?");
        return n.test(this) ? !0 : !1
    }),
    String.method("validDate",
    function() {
        var t = this.split("/"),
        n = t[2],
        u = t[0],
        f = t[1],
        i,
        r;
        return n == null || n < 1900 ? 0 : (i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], (n % 4 || !(n % 100)) && n % 400 || (i[1] = 29), r = f <= i[--u])
    })
})(),
createDISQUSWIDGETS = function(){
	typeof DISQUSWIDGETS=="undefined"&&(DISQUSWIDGETS=function(){var b={},m=document.getElementsByTagName("HEAD")[0]||document.body,k={},l={identifier:1,url:2};b.domain="disqus.com";b.forum="";b.getCount=function(){var a,c;a=encodeURIComponent;var n=document.location.protocol+"//"+b.forum+"."+b.domain+"/count-data.js?",f=[],d=0,i=10;c=document.getElementsByTagName("A");for(var g,h,e,j=0;j<c.length;j++){g=c[j];if(g.hasAttribute&&g.hasAttribute("data-disqus-comments-count-loaded")){continue;}if(g.setAttribute){g.setAttribute("data-disqus-comments-count-loaded",true);}h=g.getAttribute("data-disqus-identifier");e=g.hash==="#disqus_thread"&&g.href.replace("#disqus_thread","");if(h)e=l.identifier;else if(e)h=e,e=l.url;else continue;k[h]={element:g,type:e};f.push(a(e)+"="+a(h))}f.sort();for(a=f.slice(d,i);a.length;)c=document.createElement("script"),c.async=!0,c.src=n+a.join("&"),m.appendChild(c),d+=10,i+=10,a=f.slice(d,i)};b.displayCount=function(a){for(var c,b,f=a.counts,d=a.text.comments;a=f.shift();)if(c=k[a.id]){switch(a.comments){case 0:b=d.zero;break;case 1:b=d.one;break;default:b=d.multiple}c.element.innerHTML=b.replace("{num}",a.comments)}};return b}());
},
OpooPressApp = function(n, t) {
    var i = {},
		r, u;
    return t = t || {},
	r = n.$ || window.jQuery || {},
	i.siteUrl = n.siteUrl || "",
    i.rootUrl = n.rootUrl || "",
	i.pageUrl = n.pageUrl || "",
	i.title = n.title || document.title,
	i.url = (i.siteUrl + i.rootUrl + i.pageUrl) || window.location.href,
    i.opts = n.opts || {},
    t.verbose = n.verbose || !1,
    t.refreshRelativeTimes = n.refreshRelativeTimes || !1,
	t.github = n.github || !1,
	t.delicious = n.delicious || !1,
    i.selectors = {
        sidebar: "#sidebar",
        navBar: "#navBar",
        content: "#content"
    },
	t.addSidebarToggler = function () {
      if(!$('body').hasClass('sidebar-footer')) {
        $('#content').append('<span class="toggle-sidebar"></span>');
        $('.toggle-sidebar').bind('click', function(e) {
          e.preventDefault();
          if ($('body').hasClass('collapse-sidebar')) {
            $('body').removeClass('collapse-sidebar');
          } else {
            $('body').addClass('collapse-sidebar');
          }
        });
      }
      var sections = $('.sidebar section');
      if (sections.length > 1) {
        sections.each(function(index){
          if ((sections.length >= 3) && index % 3 === 0) {
            $(this).addClass("first");
          }
          var count = ((index +1) % 2) ? "odd" : "even";
          $(this).addClass(count);
        });
      }
      if (sections.length >= 3){ $('aside.sidebar').addClass('thirds'); }
    },
	t.addCodeLineNumbers = function () {
      if (navigator.appName === 'Microsoft Internet Explorer') { return; }
      $('div.gist-highlight').each(function(index) {
        var tableStart = '<table><tbody><tr><td class="gutter">',
            lineNumbers = '<pre class="line-numbers">',
            tableMiddle = '</pre></td><td class="code">',
            tableEnd = '</td></tr></tbody></table>',
            count = $('.line', this).length;
        for (var i=1;i<=count; i++) {
          lineNumbers += '<span class="line-number">'+i+'</span>\n';
        }
        var table = tableStart + lineNumbers + tableMiddle + '<pre>'+$('pre', this).html()+'</pre>' + tableEnd;
        $(this).html(table);
      });
    },
	t.testFeature = function (features) {
      var getTestClasses = function (tests) {
        classes = '';
        if (typeof(tests.join) == 'function') {
          for (var i=0; i < features.length; i++)
            classes += getClass(features[i]) + ' ';
        } else {
          classes = getClass(tests);
        }
        return classes;
      };

      var getClass = function (test) {
        return ((Modernizr.testAllProps(test) ? test : "no-"+test)/*.toLowerCase()*/)
      };

      $('html').addClass(getTestClasses(features));
    },
	t.flashVideoFallback = function(){
		//i.log("rootUrl: [" + i.rootUrl + "]");
		var flashplayerlocation = i.rootUrl + "/assets/jwplayer/player.swf";
		var flashplayerskin = i.rootUrl + "/assets/jwplayer/glow/glow.xml";
		$('video').each(function(i, video){
			video = $(video);
			//Modernizr and swfobject is required
			if (!Modernizr.video.h264 && swfobject.getFlashPlayerVersion() || window.location.hash.indexOf("flash-test") !== -1){
				//.map() not work in IE8
				//video.children('source[src$=mp4]').first().map(i, function(source){
				var xx =  video.children('source[src$=mp4]').first();
				var src = xx.attr('src'),
				id = 'video_'+Math.round(1 + Math.random()*(100000)),
				width = video.attr('width'),
				height = parseInt(video.attr('height'), 10) + 30;
				video.after('<div class="flash-video"><div><div id='+id+'>');
				swfobject.embedSWF(flashplayerlocation, id, width, height + 30, "9.0.0",  
					{ file : src, image : video.attr('poster'), skin : flashplayerskin } , 
					{ movie : src, wmode : "opaque", allowfullscreen : "true" });
				video.remove();
			}
		});
	},
	t.wrapFlashVideos = function() {
      $('object').each(function(object) {
        object = $(object);
        if ( $('param[name=movie]', object).length ) {
          var wrapper = object.before('<div class="flash-video"><div>').previous();
          $(wrapper).children().append(object);
        }
      });
      $('iframe[src*=vimeo],iframe[src*=youtube]').each(function(iframe) {
        iframe = $(iframe);
        var wrapper = iframe.before('<div class="flash-video"><div>').previous();
        $(wrapper).children().append(iframe);
      });
	},
	i.renderDeliciousLinks = function (items) {
		//OpooPress.log("call renderDeliciousLinks:" + items);
      var output = "<ul>";
      for (var i=0,l=items.length; i<l; i++) {
        output += '<li><a href="' + items[i].u + '" title="Tags: ' + (items[i].t == "" ? "" : items[i].t.join(', ')) + '">' + items[i].d + '</a></li>';
      }
      output += "</ul>";
      $('#delicious').html(output);
    },
	t.showDeliciousLinks = function(n){
		if(!n.user || !n.count){return;}
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = '//feeds.delicious.com/v2/json/' + n.user 
				+ '?count=' + n.count + '&sort=date&callback=OpooPress.renderDeliciousLinks';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
		//OpooPress.log("Call showDeliciousLinks" + n);
	},
	t.showGitHubRepos = function(args){
		var htmlEscape = function (str) {
			return String(str)
			  .replace(/&/g, '&amp;')
			  .replace(/"/g, '&quot;')
			  .replace(/'/g, '&#39;')
			  .replace(/</g, '&lt;')
			  .replace(/>/g, '&gt;');
			  //OpooPress.log("htmlEscape call: " + str);
		},
		render = function(target, data){
			var i = 0, repos = '';
			for(i = 0; i < data.length; i++) {
			  repos += '<li><a href="'+data[i].html_url+'">'+htmlEscape(data[i].name)+'</a><p>'+htmlEscape(data[i].description)+'</p></li>';
			}
			target.html(repos);
			//OpooPress.log("render call: " + repos);
		};
		(function(n){
			//OpooPress.log("Call showGitHubRepos" + n);
			if(!n || !n.target) return;
			target = $(n.target);
			if (target.length == 0) return;
			var user = n.user;
			var count = n.count;
			var skip_forks = n.skip_forks;
			$.ajax({
				url: "https://api.github.com/users/"+user+"/repos?callback=?",
				dataType: 'jsonp',
				error: function (err) { target.find('.loading').addClass('error').text("Error loading feed"); },
				success: function(data){
					var repos = [];
					if (!data.data) { return; }
					for (var i = 0; i < data.data.length; i++) {
					if (skip_forks && data.data[i].fork) { continue; }
						repos.push(data.data[i]);
					}
					repos.sort(function(a, b) {
						var aDate = new Date(a.pushed_at).valueOf(),
						bDate = new Date(b.pushed_at).valueOf();

						if (aDate === bDate) { return 0; }
						return aDate > bDate ? -1 : 1;
					});

					if (count) { repos.splice(count); }
					render(target, repos);
				}
			});
		})(args);
	}/*()*/,
	i.bindRelativeTimes = function(n) {
        setInterval(i.refreshRelativeTimes, n || 6e3)
    },
    i.refreshRelativeTimes = function() {
        $("time").each(function() {
            var t = $(this),
            i = t.attr("datetime"),
            u = Date.fromISO(i);
            i && t.text(u.timeAgo())
        })
    },
	i.trackEvent = function(n) {
        i.log("Tracking Event", n),
        _gaq.push(["_trackEvent", n.category, n.action, n.label, n.value, n.nonInteraction])
    },
	i.trackRank = function() {
        var n;
        if (document.referrer.match(/google\.com/gi) && document.referrer.match(/cd/gi)) {
            var t = document.referrer,
            r = t.match(/cd=(.*?)&/),
            u = parseInt(r[1]),
            i = t.match(/q=(.*?)&/),
            f = document.location.pathname;
            n = i[1].length > 0 ? decodeURI(i[1]) : "(not provided)",
            _gaq.push(["_trackEvent", "RankTracker", n, f, u, !0])
        }
    },
	i.log = function() {
        t.verbose && typeof console.log == "function" && console.log.apply(console, Array.prototype.slice.call(arguments))
    },
	i.bindSocialShare = function(n) {
        var u, t, f;
        n = n || {},
        n.uri = n.url || window.location.href;
		
		if(n.twitterShare){
			u = "https://twitter.com/share?via=" + n.twitterAccount + "&text=" + encodeURIComponent(n.title) + "&url=" + encodeURIComponent(n.url),
			n.twitterUsername && (u += "&related=" + encodeURIComponent(n.twitterUsername)),
			$(n.twitterSelector || ".btn-social.twitter").click(function() {
				OpooPress.trackEvent({
					category: "user_click",
					action: "share_click_twitter"
				}),
				window.open(u, null, "width=640,height=300,toolbar=0,status=0")
			})
		}

		if(n.facebookShare){
			t = "http://www.facebook.com/sharer.php?s=100&p[title]=" + encodeURIComponent(n.title) + "&p[url]=" + encodeURIComponent(n.url),
			n.summary && (t += "&p[summary]=" + encodeURIComponent(n.summary)),
			n.image && (t += "&p[images][0]=" + encodeURIComponent(n.image)),
			$(n.facebookSelecter || ".btn-social.facebook").click(function() {
				OpooPress.trackEvent({
					category: "user_click",
					action: "share_click_facebook"
				}),
				window.open(t, "sharer", "width=640,height=300,toolbar=0,status=0")
			})
		}
		
		if(n.googlePlusShare){
			f = "https://plus.google.com/share?url=" + encodeURIComponent(n.url),
			$(n.googlePlusSelector || ".btn-social.googleplus").click(function() {
				OpooPress.trackEvent({
					category: "user_click",
					action: "share_click_googleplus"
				}),
				window.open(f, null, "width=640,height=300,toolbar=0,status=0")
			})
		}
    },
	t.bindViewSourceEventTracking = function(n) {
		$(".btn.source-at-github").click(function() {
			OpooPress.trackEvent({
				category: "user_click",
				action: "click_view_source_at_github"
			});
			return true;
		});
	},
	i.showDisqusCommentCount = function(){
		if (typeof disqus_shortname != "undefined") {
			createDISQUSWIDGETS();

			if (typeof disqus_domain != "undefined") {
				DISQUSWIDGETS.domain = disqus_domain;
			}
			DISQUSWIDGETS.forum = disqus_shortname;
			DISQUSWIDGETS.getCount();
		}
	},
	i.showDisqusWidgets = function(){
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			//dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			dsq.src = '//go.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	},
	i.init = function(){
		t.refreshRelativeTimes && i.bindRelativeTimes(),
		window._gaq && i.trackRank(),
		t.bindViewSourceEventTracking(),
		$(function(){
			if(n.socialShare && (n.socialShare.twitterShare || n.socialShare.facebookShare ||  n.socialShare.googlePlusShare)){
				n.socialShare.title = i.title;
				n.socialShare.url = i.url;
				
				//i.log(n.socialShare);
				i.bindSocialShare(n.socialShare);
			}

			//require modernizr
			if((typeof window.Modernizr) != "undefined"){
				t.wrapFlashVideos();
				t.testFeature(['maskImage', 'transform']);
				if(typeof swfobject != "undefined") {
					//i.log(swfobject);
					t.flashVideoFallback();
				}
			}
			t.addCodeLineNumbers();
			t.addSidebarToggler();
			t.github && t.showGitHubRepos(t.github);
			t.delicious && t.showDeliciousLinks(t.delicious);
		})
	},
	i
};

// iOS scaling bug fix
// Rewritten version
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295
(function(doc) {
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [0.25, 1.6];
    doc[addEvent](type, fix, true);
  }
}(document));

