var list=['图片一','图片二','图片三','图片四','图片五']
var btn_pre=document.querySelector(".btn-pre");
var btn_next=document.querySelector(".btn-next");
var item_title=document.querySelector(".item-title");
var ul=document.querySelector(".slider");
var item=document.querySelectorAll(".slider-pages a");
console.log(item);
console.log(ul);
btn_pre.addEventListener('click',function()
	{ 
       setItem(ul,item_title,item,-2000,-2500);
       
});

btn_next.addEventListener('click',function()
	{ 
       setItem(ul,item_title,item,-500,-2500); 
});
for(let j=0;j<item.length;++j)
{
	item[j].addEventListener('click',()=>{
		let k=getItem(item);
		setItem(ul,item_title,item,(j-k)*(-500),-2500); 
	});
}

setInterval(()=>{
	setItem(ul,item_title,item,-500,-2500);
},2500);
function setItem(node,title,item,space,length)
{
  
      var style=null;
      if(window.getComputedStyle)
      {
         style=window.getComputedStyle(node,null)
      }
      else
      {
      	 style=ul.style;
      }
      left=parseInt(style.left);
      newleft=(left+space)%(length);
      node.style.left=newleft+'px';
      title.innerHTML=list[newleft/-500];
      removeClass(item);
      item[newleft/-500].setAttribute('class','active');

}

function removeClass(item)
{
	for(let i=0;i<item.length;i++)
	{
		if(item[i].getAttribute('class')!='')
		{
			item[i].setAttribute('class','');
		}
	}
}

function getItem(item)
{
	for(let i=0;i<item.length;++i)
	{
	   if(item[i].getAttribute('class')!='')
	   	return i;
	}
}
