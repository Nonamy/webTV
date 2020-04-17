class bus {
    constructor() {
        this.set_fname = {}
        this.set_fdep = []
        this.set_fart = []
        this.set_fdest = []
        this.set_ID = []
        this.tab = []
        return this
    }
    data(trafic){
        var s = JSON.stringify(trafic)
        var o = JSON.parse(s)
        for(var i = 0; i<o.length; i++){
            var data = o[i].fields
            this.set_fname[i] = data.nomcourtligne
            this.set_fdep[i] = data.depart
            this.set_fart[i] = data.nomarret
            this.set_fdest[i] = data.destination
            this.set_ID[i] = data.idcourse
            this.tab.push({ 
                "ID": this.set_ID[i],
                "Name": this.set_fname[i],
                "Dep": this.set_fdep[i],
                "Art": this.set_fart[i],
                "Dest":this.set_fdest[i]
            });
        }
    }
};
export {bus};