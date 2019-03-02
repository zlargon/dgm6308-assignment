const menu = {};
menu.width = '200';
menu.height = '300';
menu.title = 'My menu';

const isNumeric = (num) => !Number.isNaN(Number(num));

const multiplyNumeric = (obj) => {
  for (const k in obj) {
    const v = obj[k];

    if (isNumeric(v)) {
      obj[k] = Number(v) * 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu); // { width: 400, height: 600, title: "My menu" }
