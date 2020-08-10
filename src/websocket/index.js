const COMMAND_CODE = {
    PAGE_REQUEST:1,
    PAGE_RESPONSE:2
}

const BackEndWebSocket = {
    socket:new WebSocket("ws://localhost:7397/ws"),

    init(callBack){
        this.socket.onmessage = function onMessage(e){
            const response = JSON.parse(e.data)
            // 说明是登陆的返回消息
            if(response.command === COMMAND_CODE.PAGE_RESPONSE){
                const result = JSON.parse(response.data)
               // 拿到数据了
               callBack(result)
            }
        }
    },
    requestForPage(latitude,longitude,startTime,endTime){
        const parms =  {
            latitude,
            longitude,
            startTime,
            endTime,
        }
        const packet = {
            version:1,
            command:COMMAND_CODE.PAGE_REQUEST,
            data:JSON.stringify(parms)
        }
        this.socket.send(JSON.stringify(packet))
    }
}

export default BackEndWebSocket