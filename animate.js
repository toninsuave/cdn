!function(a){function t(){n=!1
for(var t=0;t<i.length;t++){var d=a(i[t]).filter(function(){return a(this).is(":appeared")})
if(d.trigger("appear",[d]),e){var o=e.not(d)
o.trigger("disappear",[o])}e=d}}var e,i=[],d=!1,n=!1,o={interval:250,force_process:!1},r=a(window)
a.expr[":"].appeared=function(t){var e=a(t)
if(!e.is(":visible"))return!1
var i=r.scrollLeft(),d=r.scrollTop(),n=e.offset(),o=n.left,s=n.top
return s+e.height()>=d&&s-(e.data("appear-top-offset")||0)<=d+r.height()&&o+e.width()>=i&&o-(e.data("appear-left-offset")||0)<=i+r.width()},a.fn.extend({appear:function(e){var r=a.extend({},o,e||{}),s=this.selector||this
if(!d){var f=function(){n||(n=!0,setTimeout(t,r.interval))}
a(window).scroll(f).resize(f),d=!0}return r.force_process&&setTimeout(t,r.interval),i.push(s),a(s)}}),a.extend({force_appear:function(){return!!d&&(t(),!0)}})}(jQuery),function(a){"$:nomunge"
function t(t){function d(){t?o.removeData(t):c&&delete e[c]}function n(){s.id=setTimeout(function(){s.fn()},p)}var o,r=this,s={},f=t?a.fn:a,l=arguments,u=4,c=l[1],p=l[2],$=l[3]
if("string"!=typeof c&&(u--,c=t=0,p=l[1],$=l[2]),t?(o=r.eq(0),o.data(t,s=o.data(t)||{})):c&&(s=e[c]||(e[c]={})),s.id&&clearTimeout(s.id),delete s.id,$)s.fn=function(a){"string"==typeof $&&($=f[$]),!0!==$.apply(r,i.call(l,u))||a?d():n()},n()
else{if(s.fn)return void 0===p?d():s.fn(!1===p),!0
d()}}var e={},i=Array.prototype.slice
a.doTimeout=function(){return t.apply(window,[0].concat(i.call(arguments)))},a.fn.doTimeout=function(){var a=i.call(arguments),e=t.apply(this,["doTimeout"+a[0]].concat(a))
return"number"==typeof a[0]||"number"==typeof a[1]?this:e}}(jQuery),$(".animatedParent").appear(),$(".animatedClick").click(function(){var a=$(this).attr("data-target")
if(void 0!=$(this).attr("data-sequence")){var t=$("."+a+":first").attr("data-id"),e=$("."+a+":last").attr("data-id"),i=t
$("."+a+"[data-id="+i+"]").hasClass("go")?($("."+a+"[data-id="+i+"]").addClass("goAway"),$("."+a+"[data-id="+i+"]").removeClass("go")):($("."+a+"[data-id="+i+"]").addClass("go"),$("."+a+"[data-id="+i+"]").removeClass("goAway")),i++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){if(console.log(e),$("."+a+"[data-id="+i+"]").hasClass("go")?($("."+a+"[data-id="+i+"]").addClass("goAway"),$("."+a+"[data-id="+i+"]").removeClass("go")):($("."+a+"[data-id="+i+"]").addClass("go"),$("."+a+"[data-id="+i+"]").removeClass("goAway")),++i<=e)return!0})}else $("."+a).hasClass("go")?($("."+a).addClass("goAway"),$("."+a).removeClass("go")):($("."+a).addClass("go"),$("."+a).removeClass("goAway"))}),$(document.body).on("appear",".animatedParent",function(a,t){var e=$(this).find(".animated"),i=$(this)
if(void 0!=i.attr("data-sequence")){var d=$(this).find(".animated:first").attr("data-id"),n=d,o=$(this).find(".animated:last").attr("data-id")
$(i).find(".animated[data-id="+n+"]").addClass("go"),n++,delay=Number(i.attr("data-sequence")),$.doTimeout(delay,function(){if($(i).find(".animated[data-id="+n+"]").addClass("go"),++n<=o)return!0})}else e.addClass("go")}),$(document.body).on("disappear",".animatedParent",function(a,t){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).on("load",function(){$.force_appear()})