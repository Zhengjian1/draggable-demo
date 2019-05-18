
// 定义私有变量防止被外界修改
let _message = {};

export const Observer = {
    // 注册信息借口
    regist: function(type, fn){
        if(typeof _message[type] === 'undefined') {
            _message[type] = [fn];
        } else {
            _message[type].push(fn);
        }
    },
    // 发布信息借口
    fire: function(type, args) {
        // 如果未注册消息，直接返回
        if(!_message[type]) {
            return ;
        }
        // 定义消息信息
        var events = {
            type: type,
            args: args || {}   // 消息携带的数据
        },
        i = 0,
        len = _message[type].length;
        for(; i < len; i++) {
            _message[type][i].call(this, events);
        }
    },
    // 移除信息借口
    remove: function(type, fn){
        if(_message[type] instanceof Array) {
                var i = _message[type].length - 1;
                for(; i >= 0 ; i--) {
                    _message[type][i] === fn && _message[type].splice(i, 1);
                }
        }
    }
};

window.Observer = Observer;