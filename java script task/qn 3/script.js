function clock() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    console.log(h, m, s)

}
clock()