// $("ul#pager>li>a").click(function(e) {  
			    	
// 			    	var flag = true;
// 			    	var totalPage = $("#totalPage").text();
// 			     	if( $(this).attr("href").match("\\d*$") == 0 ){
// 						alert("当前页已经是第一页！！");
// 						flag = false;
// 					}
// 					if($(this).attr("href").match("\\d*$")-1 == totalPage){
// 						alert("当前页已经是最后一页！！");
// 						flag = false;
// 					}
// 					if(!flag){
// 						//阻止默认的超链接动作  
// 				        if ( e && e.preventDefault ){  
// 				            e.preventDefault();  
// 				        }else{  
// 				            window.event.returnValue = false;  
// 				        }  
				       
// 					}
// 			        return flag;
			    
// 				} ); 

/*分页函数*/
function page(address,pageNow,pageTotal){

	
	var First = '<li><a href="'+address+'1">First</a></li>';
	$("#pager").append(First);
	if(pageNow>5){
		var index = ( Math.floor( (pageNow-1)/5 )-1 )*5+1;
		var Prev = ' <li><a href="'+address+index+'">Prev</a></li>';
		$("#pager").append(Prev);
	}
	var pagelist = pageNum( address,Math.floor((pageNow-1)/5),pageTotal );
	$("#pager").append(pagelist);
	if( Math.floor( (pageNow-1)/5 )<Math.floor( (pageTotal-1)/5 ) ){
		var index = ( Math.floor( (pageNow-1)/5 )+1 )*5+1;
		var Next = '<li><a href="'+address+index+'">Next</a></li>';
		$("#pager").append(Next);
	}
	var Final = ' <li><a href="'+address+pageTotal+'">Final</a></li>';
	$("#pager").append(Final);
}

function pageNum (address,index,total){
	var str = "";
	var nums = 5;
	if(total<5) nums = total;
	index = index*5;
	for(i = 0;i<nums;i++){
		index = ++index;
		 str += '<li><a href="'+address+index+'">'+index+'</a></li>'
		 if(index==total)break;
	}
	return str;
}