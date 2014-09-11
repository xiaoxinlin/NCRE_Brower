$("ul#pager>li>a").click(function(e) {  
			    	
			    	var flag = true;
			    	var totalPage = $("#totalPage").text();
			     	if( $(this).attr("href").match("\\d*$") == 0 ){
						alert("当前页已经是第一页！！");
						flag = false;
					}
					if($(this).attr("href").match("\\d*$")-1 == totalPage){
						alert("当前页已经是最后一页！！");
						flag = false;
					}
					if(!flag){
						//阻止默认的超链接动作  
				        if ( e && e.preventDefault ){  
				            e.preventDefault();  
				        }else{  
				            window.event.returnValue = false;  
				        }  
				       
					}
			        return flag;
			    
				} ); 