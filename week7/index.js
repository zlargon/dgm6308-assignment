// 1. Handle Component
const createHandle = (ele) => {
  const map = {
    mousedown:  'img/handle_down.jpg',
    mouseup:    'img/handle_up.jpg',
    mouseover:  'img/handle_over.jpg',
    mouseleave: 'img/handle_up.jpg'
  }

  for (const event in map) {
    const img = map[event];
    ele.addEventListener(event, e => { e.target.src = img });
  }

  return {
    onClick: (cb) => {
      ele.addEventListener('click', cb);
    }
  }
}

// 2. Slot Component (class)
class Slot {
  static types = ['clover', 'heart', 'star'];

  constructor(ele) {
    this.ele = ele;
  }

  setType(type) {
    if (!Slot.types.includes(type)) {
      throw new Error(`Unknown slot type: ${type} (${Slot.types})`);
    }

    this.type = type;
    this.ele.src = `img/${type}.jpg`;
  }
}

// 3. Slot Machine Component
const createSlotMachine = (selector) => {
  const root = document.getElementById(selector);
  const ele = {
    header: root.querySelector('.header'),
    handle: root.querySelector('.handle'),
    slots: root.querySelectorAll('.slot')
  }

  // slots (objcet instances)
  const slots = [];
  for (const e of ele.slots) {
    slots.push(new Slot(e));  // create new Slot Instances and add into 'slots' array
  }

  // header display function
  const headerTypes = ['win', 'start'];
  const display = (name) => {
    if (!headerTypes.includes(name)) {
      throw new Error(`Unknown display header: ${name} (${headerTypes})`);
    }

    // set header image source
    ele.header.src = `img/display_${name}.jpg`;
  }

  return {
    display,
    handle: createHandle(ele.handle),
    slots
  }
}

// START: creat a new slot machine component by element id
const machine = createSlotMachine('slot_machine');
machine.handle.onClick(() => {

  // when the user click the handle, random the new slots
  machine.slots.forEach(slot => {
    const num = Math.round(Math.random() * 100) % Slot.types.length;  // random number: 0, 1, 2
    const type = Slot.types[num]; // get the slot type by index: 'clover', 'heart', 'star'
    slot.setType(type);           // set the new slot type
  });

  // put all slot types in a SET
  // Note: SET is a data structure that can store unique (not repeated) values, without any particular order.
  const slotSet = new Set(machine.slots.map(x => x.type));

  // if the SET size is 1, which means all the slot types are the same, then display 'JACKPOT!!'
  // otherwise, display starting title.
  machine.display(slotSet.size === 1 ? 'win' : 'start');
});
