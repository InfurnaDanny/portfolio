document.addEventListener("DOMContentLoaded", () => {
  const door = document.querySelector(".doors");
  const left_doors = document.querySelectorAll(".door-left");
  const right_doors = document.querySelectorAll(".door-right");

  let multiplyerDoorLeft = 1;
  let multiplyerDoorRight = 1;

  /* Al click apro le porte di "my Skills" */
  door.addEventListener("click", () => {
    console.log(document.querySelector(".left"));
    if (left_doors[0].style.transform !== "") {
      closeDoors();
    } else openDoors();

    multiplyerDoorLeft = 0;
    multiplyerDoorRight = 0;
  });

  function openDoors() {
    for (let i = left_doors.length - 1; i >= 0; i--) {
      setTimeout(() => {
        left_doors[i].style.transform = "translate(-550px)";
      }, multiplyerDoorLeft * 200);

      multiplyerDoorLeft++;
    }
    for (let i = 0; i < right_doors.length; i++) {
      setTimeout(() => {
        right_doors[i].style.transform = "translate(550px)";
      }, multiplyerDoorRight * 200);

      multiplyerDoorRight++;
    }
  }

  function closeDoors() {
    for (let i = left_doors.length - 1; i >= 0; i--) {
      setTimeout(() => {
        left_doors[i].style.transform = "translate(0px)";
        right_doors[i].style.transform = "translate(0px)";
      }, multiplyerDoorLeft * 200);
    }
    multiplyerDoorLeft = 0;
    multiplyerDoorRight = 0;
  }
});
