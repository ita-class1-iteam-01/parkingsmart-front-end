const COMMAND_CODE = {
    PAGE_REQUEST:1,
    PAGE_RESPONSE:2
}

export default WebSocket = {
    socket:new WebSocket("ws://localhost:7397/ws"),

    init:function(callBack){
        this.socket.onopen = function(){
            console.log("客户端与服务端建立连接成功");
        };
        this.socket.onmessage = function(e){
            console.log("接收到消息："+e.data);
            var response = JSON.parse(e.data);
            // 说明是登陆的返回消息
            if(response.command== COMMAND_CODE.PAGE_RESPONSE){
                var result = JSON.parse(response.data);
                console.log(result);
               //拿到数据了
               callBack(result);
            }
        };
        this.socket.onerror = function(){
            console.log("发生错误");
        };
        this.socket.onclose = function(){
            console.log("客户端与服务端关闭连接成功");
        };	
    },
    requestForPage:function(latitude,longitude,startTime,endTime){
        console.log("ws click")
        let parms =  {
            latitude:latitude,
            longitude:longitude,
            startTime:startTime,
            endTime:endTime,
        }
        let packet = {
            version:1,
            command:COMMAND_CODE.PAGE_REQUEST,
            data:JSON.stringify(parms)
        }
        console.log(packet)
        this.socket.send(JSON.stringify(packet));
    }
}