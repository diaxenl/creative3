let mock = [
{"name":"Aron","profession":"Rogue","str":16,"dex":11,"con":20,"int":10,"cha":12,"wis":14,"id":1},
{"name":"Tova","profession":"Wizard","str":12,"dex":14,"con":18,"int":9,"cha":16,"wis":9,"id":2},
{"name":"Euell","profession":"Wizard","str":19,"dex":14,"con":8,"int":20,"cha":18,"wis":16,"id":3},
{"name":"Guenevere","profession":"Bard","str":9,"dex":8,"con":16,"int":20,"cha":11,"wis":19,"id":4},
{"name":"Merv","profession":"Wizard","str":16,"dex":16,"con":17,"int":16,"cha":12,"wis":13,"id":5},
{"name":"Anni","profession":"Bard","str":13,"dex":9,"con":12,"int":19,"cha":12,"wis":10,"id":6},
{"name":"Coop","profession":"Wizard","str":17,"dex":12,"con":13,"int":17,"cha":16,"wis":8,"id":7},
{"name":"Gus","profession":"Wizard","str":15,"dex":15,"con":11,"int":12,"cha":10,"wis":16,"id":8},
{"name":"Franky","profession":"Wizard","str":12,"dex":10,"con":9,"int":16,"cha":15,"wis":16,"id":9},
{"name":"Luther","profession":"Bard","str":19,"dex":10,"con":10,"int":11,"cha":16,"wis":10,"id":10},
{"name":"Neile","profession":"Wizard","str":13,"dex":15,"con":19,"int":14,"cha":13,"wis":17,"id":11},
{"name":"Dominick","profession":"Rogue","str":10,"dex":9,"con":9,"int":19,"cha":17,"wis":16,"id":12},
{"name":"Alvie","profession":"Rogue","str":8,"dex":18,"con":18,"int":12,"cha":16,"wis":18,"id":13},
{"name":"Tessie","profession":"Bard","str":16,"dex":10,"con":15,"int":14,"cha":11,"wis":8,"id":14},
{"name":"Philippine","profession":"Wizard","str":14,"dex":13,"con":18,"int":19,"cha":18,"wis":16,"id":15},
{"name":"Carmencita","profession":"Wizard","str":16,"dex":14,"con":20,"int":8,"cha":17,"wis":17,"id":16},
{"name":"Amil","profession":"Bard","str":13,"dex":18,"con":12,"int":16,"cha":19,"wis":20,"id":17},
{"name":"Franky","profession":"Wizard","str":8,"dex":13,"con":9,"int":18,"cha":14,"wis":12,"id":18},
{"name":"Rozalie","profession":"Rogue","str":15,"dex":14,"con":9,"int":8,"cha":9,"wis":16,"id":19},
{"name":"Sella","profession":"Wizard","str":12,"dex":9,"con":17,"int":11,"cha":20,"wis":20,"id":20},
{"name":"Sigfrid","profession":"Bard","str":10,"dex":13,"con":13,"int":19,"cha":13,"wis":12,"id":21},
{"name":"Elyse","profession":"Rogue","str":19,"dex":12,"con":9,"int":20,"cha":19,"wis":11,"id":22},
{"name":"Ruthann","profession":"Rogue","str":8,"dex":17,"con":17,"int":14,"cha":10,"wis":11,"id":23},
{"name":"Constancy","profession":"Bard","str":14,"dex":10,"con":15,"int":12,"cha":17,"wis":20,"id":24},
{"name":"Andriette","profession":"Wizard","str":20,"dex":9,"con":12,"int":18,"cha":20,"wis":8,"id":25},
{"name":"Nike","profession":"Rogue","str":16,"dex":12,"con":12,"int":10,"cha":11,"wis":13,"id":26},
{"name":"Kyla","profession":"Wizard","str":16,"dex":20,"con":16,"int":9,"cha":11,"wis":19,"id":27},
{"name":"Mimi","profession":"Rogue","str":17,"dex":18,"con":11,"int":12,"cha":16,"wis":15,"id":28},
{"name":"Robin","profession":"Wizard","str":10,"dex":18,"con":15,"int":19,"cha":14,"wis":11,"id":29},
{"name":"Cayla","profession":"Rogue","str":20,"dex":9,"con":13,"int":20,"cha":8,"wis":17,"id":30},
{"name":"Wilmar","profession":"Bard","str":12,"dex":15,"con":20,"int":10,"cha":18,"wis":8,"id":31},
{"name":"Milena","profession":"Rogue","str":11,"dex":14,"con":15,"int":18,"cha":14,"wis":8,"id":32},
{"name":"Shina","profession":"Rogue","str":20,"dex":14,"con":16,"int":14,"cha":12,"wis":13,"id":33},
{"name":"Shirlene","profession":"Rogue","str":11,"dex":11,"con":10,"int":11,"cha":18,"wis":1,"id":34},
{"name":"Lea","profession":"Bard","str":8,"dex":13,"con":13,"int":9,"cha":14,"wis":13,"id":35},
{"name":"Marrissa","profession":"Bard","str":13,"dex":13,"con":9,"int":10,"cha":10,"wis":9,"id":36},
{"name":"Petey","profession":"Wizard","str":13,"dex":20,"con":12,"int":18,"cha":20,"wis":17,"id":37},
{"name":"Merrilee","profession":"Rogue","str":15,"dex":19,"con":9,"int":8,"cha":10,"wis":19,"id":38},
{"name":"Jermaine","profession":"Rogue","str":12,"dex":18,"con":9,"int":9,"cha":17,"wis":20,"id":39},
{"name":"Rustie","profession":"Rogue","str":8,"dex":13,"con":8,"int":10,"cha":20,"wis":15,"id":40},
{"name":"Rosanne","profession":"Wizard","str":13,"dex":18,"con":16,"int":15,"cha":10,"wis":15,"id":41},
{"name":"Gena","profession":"Bard","str":17,"dex":8,"con":10,"int":15,"cha":13,"wis":17,"id":42},
{"name":"Corette","profession":"Wizard","str":14,"dex":15,"con":14,"int":11,"cha":13,"wis":19,"id":43},
{"name":"Sandi","profession":"Rogue","str":9,"dex":18,"con":13,"int":15,"cha":9,"wis":19,"id":44},
{"name":"Norene","profession":"Rogue","str":15,"dex":11,"con":10,"int":20,"cha":20,"wis":8,"id":45},
{"name":"Lesly","profession":"Wizard","str":14,"dex":8,"con":15,"int":18,"cha":17,"wis":19,"id":46},
{"name":"Ebonee","profession":"Bard","str":10,"dex":15,"con":18,"int":11,"cha":15,"wis":20,"id":47},
{"name":"Danita","profession":"Wizard","str":19,"dex":12,"con":15,"int":20,"cha":11,"wis":10,"id":48},
{"name":"Cherie","profession":"Wizard","str":14,"dex":10,"con":12,"int":11,"cha":8,"wis":16,"id":49},
{"name":"Leola","profession":"Bard","str":18,"dex":19,"con":13,"int":9,"cha":10,"wis":10,"id":50}
]

export default mock;