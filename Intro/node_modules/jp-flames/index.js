const flames = (name, partner) => {
    name = name.replace(/ /g,'').toLowerCase();
    partner = partner.replace(/ /g,'').toLowerCase();
    let namearray, finalnamearrary;
    let partnerarray, finalpartnerarray;
    let lenthofname = 0;
    namearray = name.split('');
    finalnamearrary = name.split('');
    partnerarray = partner.split('');
    finalpartnerarray = partner.split('');
    namearray.forEach(function (val, index) {
        if (finalpartnerarray.indexOf(val) > -1) {
            finalpartnerarray.splice(finalpartnerarray.indexOf(val), 1);
            finalnamearrary.splice(finalnamearrary.indexOf(val), 1);
        }
    });
    lenthofname = (finalpartnerarray.length + finalnamearrary.length);
    const rel = findRelation(lenthofname);
    return expansion(rel);
}
const findRelation = (length) => {
    let flamearray = 'FLAMES'.split('');
    const flamelength = flamearray.length;
    while (flamearray.length > 1) {
        if (length <= flamearray.length) {
            flamearray.splice(length - 1, 1);
            flamearray = swap(length - 1, flamearray);
        } else {
            const mod = length % flamearray.length;
            flamearray.splice(mod - 1, 1);
            flamearray = swap(mod - 1, flamearray);
        }
    }
    return flamearray[0];
}
const swap = (length, arr) => {
    const secarr = arr.splice(0, length);
    return arr.concat(secarr);
}
const expansion = (abbr) => {
    let result = '';
    switch (abbr) {
        case 'F':
            result = 'FRIEND';
            break;
        case 'L':
            result = 'LOVE';
            break;
        case 'A':
            result = 'AFFECTION';
            break;
        case 'M':
            result = 'MARRIAGE';
            break;
        case 'E':
            result = 'ENEMY';
            break;
        case 'S':
            result = 'SISTER';
            break;
    }
    return result;
}
module.exports = flames;
