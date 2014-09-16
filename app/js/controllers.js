'use strict';

/* Controllers */

function MyCtrl2() {
}
MyCtrl2.$inject = [];

//获取侧边公告栏的公告列表（7个）
var AnnoListCtrl = [
		'$scope',
		'$http',
		function($scope,$http){
			$http.get("http://localhost:8080/NCRE/announcement/showIndexAnnouncement").success(function(data){
				$scope.annos = data;
			});
		}
];

//获取一个问题实例
var  QuestionDetailCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var quesId = $routeParams.quesId;
			//这里后续需要对参数进行判断处理
			//....
			$http.get("http://localhost:8080/NCRE/question/show?id="+ quesId ).success(function(data){
				$scope.question = data;
			});
		}
];

//获取一个问题列表（14个）
var  QuestionsCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var quesPageId = $routeParams.quesPageId;
			//这里后续需要对参数进行判断处理
			//....
			$http.get("http://localhost:8080/NCRE/question/index?id="+ quesPageId ).success(function(data){
				$scope.questions = data.list;
				$scope.pageSize = data.pageSize;
				$scope.pageNumber = data.pageNumber;
				$scope.totalPage = data.totalPage;
			});
		}
];

//获取一个公告实例
var  AnnouncementDetailCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var annoId = $routeParams.annoId;
			//这里后续需要对参数进行判断处理
			//....
			$http.get("http://localhost:8080/NCRE/announcement/show?id="+ annoId ).success(function(data){
				$scope.announcement = data;
			});
		}
];

//获取一个公告列表（14个）
var AnnouncementsCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var annoPageId = $routeParams.annoPageId;
			//这里后续需要对参数进行判断处理
			//....
			$http.get("http://localhost:8080/NCRE/announcement/index?page="+ annoPageId ).success(function(data){
				$scope.announcements = data.list;
				$scope.pageSize = data.pageSize;
				$scope.pageNumber = data.pageNumber;
				$scope.totalPage = data.totalPage;
			});
		}
];

//获取一个下载列表（14个）
var DownloadsCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var downPageId = $routeParams.downPageId;
			//这里后续需要对参数进行判断处理
			//....

			$http.get("http://localhost:8080/NCRE/file/index?page="+ downPageId ).success(function(data){
				$scope.action = "";
				$scope.pageSize = data.pageSize;
				$scope.pageNumber = data.pageNumber;
				$scope.totalPage = data.totalPage;
				$scope.files = data.list;
				//console.log($scope.files);
			});
		
		}
];

//获取一个文件下载列表（14个）
var DownloadsDocCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var downPageId = $routeParams.downPageId;
			//var downType = $routeParams.downType;
			//这里后续需要对参数进行判断处理
			//....

			$http.get("http://localhost:8080/NCRE/file/indexByType?page="+ downPageId + "&type=1" ).success(function(data){
				$scope.action = "doc/";
				$scope.pageSize = data.pageSize;
				$scope.pageNumber = data.pageNumber;
				$scope.totalPage = data.totalPage;
				$scope.files = data.list;
				//console.log($scope.files);
			});
		
		}
];


//获取一个软件下载列表（14个）
var DownloadsSoftwareCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var downPageId = $routeParams.downPageId;
			//var downType = $routeParams.downType;
			//这里后续需要对参数进行判断处理
			//....

			$http.get("http://localhost:8080/NCRE/file/indexByType?page="+ downPageId + "&type=2" ).success(function(data){
				$scope.action = "software/";
				$scope.pageSize = data.pageSize;
				$scope.pageNumber = data.pageNumber;
				$scope.totalPage = data.totalPage;
				$scope.files = data.list;
				//console.log($scope.files);
			});
		
		}
];

//获取每日一练试题
var TestCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var testType = $routeParams.testType;
			//var downType = $routeParams.downType;
			//这里后续需要对参数进行判断处理
			//....

			$http.get("http://localhost:8080/NCRE/items/testList?subject-type="+ testType ).success(function(data){
				
				
				$scope.xzt = data[0];
				$scope.tkt = data[1];
				//console.log($scope.files);
			});
		
		}
];

//获取在线试题
var ExamCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var examType = $routeParams.examType;
			//var downType = $routeParams.downType;
			//这里后续需要对参数进行判断处理
			//....

			$http.get("http://localhost:8080/NCRE/items/examList?subject-type="+ examType ).success(function(data){
				
				$scope.subjectType = examType;
				$scope.xztList = data[0];
				$scope.tktList = data[1];
				$scope.bTkt = data[2];
				$scope.random = Math.random();
				//console.log($scope.files);
			});
		
		}
];

var RefreshExamCtrl = [
		'$scope',
		'$routeParams',
		'$http',
		function($scope,$routeParams,$http){
			var examType = $routeParams.examType;
			//var downType = $routeParams.downType;
			//这里后续需要对参数进行判断处理
			//....

			$http.get("http://localhost:8080/NCRE/items/RefreshExamList?subject-type="+ examType ).success(function(data){
				
				$scope.subjectType = examType;
				$scope.xztList = data[0];
				$scope.tktList = data[1];
				$scope.bTkt = data[2];
				$scope.random = Math.random();
				//console.log($scope.files);
			});
		
		}
];
