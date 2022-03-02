
gyumolcsok = ["alma", "körte", "barack", "banán", "dinnye"];
gy_szin = ["piros", "sárga", "sárga", "sárga", "zöld"];
gy_ar = [600, 150, 250, 300, 500];

for (let x = 0; x < gyumolcsok.length; x++) {
    console.log(gyumolcsok[x]);
}

var piros_gy_ar = 0;
var alatt_300 = 0;
var felett_1000 = false;
for(let x=0;x<gyumolcsok.length;x++)
{
    if(felett_1000==false && gy_ar[x] > 1000)
        felett_1000 = true;
    if(gy_ar[x]<300)
        alatt_300+=gy_ar[x];
    if(gy_szin=="piros")
        piros_gy_ar+=gy_ar[x];
}

console.log(piros_gy_ar);
console.log(alatt_300);
console.log(felett_1000);