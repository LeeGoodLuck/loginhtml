(function(){
	var common = {
		url: function(){
			return 'http://192.168.1.102:16655'
		},
		ajax: function(url, type, data, callback){
			$.ajax({
				url: common.url() + url,
				type: type,
				data: data,
				success: function(result){
					callback(result);
				},
				error: function(reject){
					try{
						console.log(reject);
					}catch{
						console.log('500');
					}
				}
			})
		}
	}
	window.common = common
})();