
function all() {
  function random() {
    return Math.ceil(Math.random() * 50);
  }
  function sum() {
    return +prompt("Sonni kirting");
  }
  let oxiri = 1;
  let quti = "";
  let d = sum();
  let son = 1;
  let a = random();
  while (son < 10) {
    oxiri++;
    son++;
    d = +prompt(`${son}-imkoniyat  `);
    if (a != d) {
      d;
      quti = d;
    } else {
      alert(`${a} = ${d} `);
    }
    if (oxiri == 10) {
      alert(`Togri javob ${a}`);
    }
  }
}
all()