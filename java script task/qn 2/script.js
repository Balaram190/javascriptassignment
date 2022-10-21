const pie = 3.1415
const volume = (rad, height) => {

    return (pie * rad * rad * height);
}
let finalVolume = volume(7, 8);
console.log(finalVolume.toFixed(4))