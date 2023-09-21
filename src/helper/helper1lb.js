const variants = [
    [
        5, //h                              0
        45, //V                             1
        0.1, //P                            2
        20, //H                             3
        20, //t1                            4
        35, //Lн линия нагнетания           5
        2, //2 отвода под углом 90          6
        90, // угол отвода                  7
        5, //5 отводов под углом 110        8
        110, // угол отвода                 9
        2, // нормальных вентиля            10
        1, // прямоточный вентиль           11
        15, //Lвс линия всасывания          12
        2, // прямоточных вентиля           13
        3, // отвода под углом 90           14
        90, // угол отвода                  15
        4, // отношение радиуса изгиба к внутреннему диаметру трубопровода  16
        32.93, //полный напор насоса        17
        6.7, //Полезная мощность насоса     18
        153420, //Re                        19
        0.0235, //Коэффициент трения        20
    ],
    [
    ]
]

let i 

i = 0 // Обращение к 0му массиву 

let d = Math.sqrt(variants[i][1]/3600/(0.785*1.5))

console.log('Диаметр '+d);

let re = 1.5* d * 988/ 0.001005 

console.log('Рейнольдс '+re);

let lambda = 0.11 * ((0.5/d)+(68/re))**0.25

console.log('Лямба '+lambda);

let mestnVsas = 0.5+variants[i][13]*4.1+variants[i][14]*1 //4.1 в варьируется (см протокол)

console.log('Потери местные всас '+mestnVsas);

let mestnNag = 1+1*0.11*variants[i][6]+variants[i][8]*1.13*0.11+4.1*variants[i][10]+0.92*0.5*variants[i][11] //4.1 0.92 0.5 варьируется (см протокол)

console.log('Потери местные наг '+mestnNag);

let poteriDavVsas = (lambda*(variants[i][12]/d)+mestnVsas)*988*1.5**2/2

console.log('Потери давления всас '+poteriDavVsas);

let poteriDavNag = (lambda*(variants[i][5]/d)+mestnNag)*988*1.5**2/2

console.log('Потери давления нагнетания '+poteriDavNag);

let poteriNapVsas = poteriDavVsas/(988*9.81)

console.log('Потери напора всас '+poteriNapVsas);

let poteriNapNag = poteriDavNag/(988*9.81)

console.log('Потери напора нагнетания '+poteriNapNag);

let obchiePoteri =  poteriNapNag + poteriNapVsas

console.log('Общие потери '+obchiePoteri);

let naporNasosa = variants[i][2]/(988*9.81)+variants[i][3]+obchiePoteri

console.log('Напор насоса '+naporNasosa);

let polesnaiaMochnostNasosa = variants[i][1]/3600*988*9.81*naporNasosa

console.log('Полезная мощность насоса '+polesnaiaMochnostNasosa);

let polnaiaMochnost = polesnaiaMochnostNasosa/0.6

console.log('Полная мощность насоса '+polnaiaMochnost);