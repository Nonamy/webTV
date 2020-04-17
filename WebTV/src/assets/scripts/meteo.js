class meteo {
    constructor(){
        this.getWeather = []
        this.tab = []
        return this;
    }
    weather(weather){
        var s = JSON.stringify(weather)
        var o = JSON.parse(s)
        let arr = []
        for(var i = 0; i < o.length; i++){
            this.getWeather = o[i]
            arr[0] = this.getWeather['description']
            arr[1] = this.getWeather['icon']
            arr[2] = this.getWeather['main']
        }
        return arr
    }
};
export {meteo};