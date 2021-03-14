    /* 스테이터스 바 시계 */
    setInterval(function(){
        
        const date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        
        
        if(hour <  10){
            hour = "0" + hour;
        }
        if(min <  10){
            min = "0" + min;
        }
        
        var result = hour + ":" + min;
        
        document.getElementById('time').textContent = result;
        
    },1000);
