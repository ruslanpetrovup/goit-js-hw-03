const findBestEmployee = function (employees) {
    let senior = 0;
    let number = 0
    const objs = Object.values(employees);
    const developer = (Object.keys(employees))

    for (let i = 0; i < objs.length; i += 1) {
        if (senior < objs[i]) {
            senior = objs[i];
            number = i;
        }
    }
    return `${developer[number]} : ${senior}`;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
