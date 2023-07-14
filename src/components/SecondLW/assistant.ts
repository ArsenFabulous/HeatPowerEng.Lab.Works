function raschot(Q: number[], H: number[], KPD: number[], Hnol: number) {
    let arrayOfPower: string[] = [];
    let arrayOfSpeedVs: string[] = [];
    let arrayOfSpeedNag: (string | number)[] = [];
    let arrayOfHeadVs: (string | number)[] = [];
    let arrayOfHeadNag: number[] = [];
    let arrayOfHeadDif: string[] = [];
    let arrayOfPvs: string[] = [];
    let arrayOfPnag: string[] = [];
    let Dvs = +(Math.sqrt(Q[0] / (0.785 * 0.41)).toFixed(3));
    console.log(`Диаметр на всасывающей линии - ${Dvs}`)
    let Dnag = Dvs - 0.006;
    console.log(`Диаметр на нагнетательной линии - ${Dnag}`)
    for (let i = 0; i < 5; i++) {
        arrayOfPower.push(i + 1 + ' сл ' + ((Q[i] * 9790.38 * H[i]) / (1000 * KPD[i] / 100)).toFixed(2))
        arrayOfSpeedVs.push(`${i + 1} сл вс ` + (Q[i] / (0.785 * Math.pow(Dvs, 2))).toFixed(2))
        arrayOfSpeedNag.push(`${i + 1} сл н ` + (Q[i] / (0.785 * Math.pow(Dnag, 2))).toFixed(2))
        arrayOfHeadVs.push(+((Q[i] / (0.785 * Math.pow(Dvs, 2))).toFixed(2)))
        arrayOfHeadNag.push(+((Q[i] / (0.785 * Math.pow(Dnag, 2))).toFixed(2)))
        arrayOfHeadDif.push((((+arrayOfSpeedNag[i] * +arrayOfSpeedNag[i]) - (+arrayOfSpeedVs[i] * +arrayOfSpeedVs[i])) / 19.62).toFixed(2) + Hnol)
        arrayOfPnag.push(i + 1 + ' сл ' + (H[i] * 9.81 * 0.93 - Hnol).toFixed(2))
        arrayOfPvs.push(i + 1 + ' сл ' + (H[i] * 9.81 * 0.07 - Hnol).toFixed(2))
    }
    console.log('Мощность ' + arrayOfPower)
    console.log('P нагнетания ' + arrayOfPnag)
    console.log('P всасывания ' + arrayOfPvs)
}

raschot([0.001, 0.002, 0.003, 0.004, 0.005], [22, 22, 21, 19, 16], [20, 40, 51, 55, 50], 0.1)