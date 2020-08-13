export const COMMAND_CODE = {
    PAGE_REQUEST:1,
    PAGE_RESPONSE:2,
    PAGE_PERSONAL_REQUEST:3,
    PAGE_PERSONAL_RESPONSE:4
}

export const webSocket = new WebSocket("ws:/10.222.29.148:8090/parkingws/1")