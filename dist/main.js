let money = 1000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000)
                resolve("can buy: " + car);
            else
                reject("do not enough money ");
        }, 100);
    }));
};
money = 1001;
const promise = buyACar("VinFast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map