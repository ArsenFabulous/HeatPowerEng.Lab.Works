function raschot(Q, H, KPD, Hnol, Pump) {
    let arrayOfPower = [];
    let arrayOfSpeedVs = [];
    let arrayOfSpeedNag = [];
    let arrayOfHeadVs = [];
    let arrayOfHeadNag = [];
    let arrayOfHeadDif = [];
    let arrayOfPvs = [];
    let arrayOfPnag = [];
    let Dvs = (Math.sqrt(Q[0] / (0.785 * 0.41)).toFixed(3));
    console.log(`Диаметр на всасывающей линии - ${Dvs}`)
    let Dnag = Dvs - 0.006;
    console.log(`Диаметр на нагнетательной линии - ${Dnag}`)
    for (let i = 0; i < 5; i++) {
        arrayOfPower.push(i + 1 + ' сл ' + ((Q[i] * 9790.38 * H[i]) / (1000 * KPD[i] / 100)).toFixed(2))
        arrayOfSpeedVs.push(`${i + 1} сл вс ` + (Q[i] / (0.785 * Math.pow(Dvs, 2))).toFixed(2))
        arrayOfSpeedNag.push(`${i + 1} сл н ` + (Q[i] / (0.785 * Math.pow(Dnag, 2))).toFixed(2))
        arrayOfHeadVs.push(+((Q[i] / (0.785 * Math.pow(Dvs, 2))).toFixed(2)))
        arrayOfHeadNag.push(+((Q[i] / (0.785 * Math.pow(Dnag, 2))).toFixed(2)))
        arrayOfHeadDif.push((((arrayOfSpeedNag[i] * arrayOfSpeedNag[i]) - (arrayOfSpeedVs[i] * arrayOfSpeedVs[i])) / 19.62).toFixed(2) + Hnol)
        arrayOfPnag.push(i + 1 + ' сл ' + (H[i] * 9.81 * 0.93 - Hnol).toFixed(2))
        arrayOfPvs.push(i + 1 + ' сл ' + (H[i] * 9.81 * 0.07 - Hnol).toFixed(2))
    }
    console.log(Pump);
    console.log('Мощность ' + arrayOfPower);
    console.log('P нагнетания ' + arrayOfPnag);
    console.log('P всасывания ' + arrayOfPvs);
    console.log('___________________________________________________________');
}

raschot([0.001, 0.002, 0.003, 0.004, 0.005], [22, 22, 21, 19, 16], [20, 40, 51, 55, 50], 0.1, 'К50-32-125 0в')
raschot([0.002, 0.004, 0.006, 0.008, 0.010], [37.3, 35.8, 32.9, 29.1, 22.8], [30, 50, 61, 68, 60], 0.1, 'К65-50-160 1в')
raschot([0.004, 0.008, 0.012, 0.016, 0.020], [37, 36, 35, 28, 24], [38, 58, 67, 66, 60], 0.2, 'К80-65-160 2в')
raschot([0.005, 0.010, 0.012, 0.015, 0.020], [57, 56, 50, 49, 40], [40, 60, 64, 66, 65], 0.2, 'К80-50-200 3в')
raschot([0.001, 0.015, 0.02, 0.03, 0.04], [36, 37, 35, 30, 22], [24, 48, 70, 78, 69], 0.2, 'К100-80-160 4в')
raschot([0.015, 0.015, 0.020, 0.030, 0.040], [58, 57.5, 57, 50, 37], [50, 60, 70, 69, 65], 0.2, 'К100-65-200 5в')
raschot([0.010, 0.015, 0.020, 0.030, 0.040], [87, 86, 82, 78, 60], [44, 57, 62, 64, 60], 0.15, 'К100-65-250 6в')
raschot([0.01, 0.02, 0.03, 0.04, 0.05], [24, 25, 23, 22, 21], [28, 50, 65, 77, 80], 0.15, 'К150-125-250 7в')
raschot([0.01, 0.02, 0.03, 0.04, 0.05], [37, 36, 35, 34, 33], [38, 58, 68, 75, 76], 0.2, 'К150-125-315 8в')
raschot([0.02, 0.04, 0.06, 0.08, 0.10], [22, 24, 23, 20, 18], [38, 60, 72, 81, 82], 0.2, 'К200-150-250 9в')