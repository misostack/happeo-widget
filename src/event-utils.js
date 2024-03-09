let eventGuid = 0;
var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

export const INITIAL_EVENTS = [];

for (let i = 0; i < 30; i++) {
  const working_location =
    Math.floor(Math.random() * 10) % 2 === 0 ? "home" : "office";
  INITIAL_EVENTS.push({
    id: createEventId(),
    title: `${working_location}`,
    start: new Date(y, m, i),
    allDay: true,
    className: `event working-location-${working_location}`,
    groupId: working_location,
  });
}

export const calendarsTypes = [
  { key: "myCalendar", name: "My Calendar", clinicId: 0 },
  { key: "clinic1", name: "Clinic 1", clinicId: 1 },
  { key: "clinic2", name: "Clinic 2", clinicId: 2 },
  { key: "clinic3", name: "Clinic 3", clinicId: 3 },
  { key: "clinic4", name: "Clinic 4", clinicId: 4 },
  { key: "clinic5", name: "Clinic 5", clinicId: 5 },
  { key: "clinic6", name: "Clinic 6", clinicId: 6 },
  { key: "clinic7", name: "Clinic 7", clinicId: 7 },
  { key: "clinic8", name: "Clinic 8", clinicId: 8 },
  { key: "clinic9", name: "Clinic 9", clinicId: 9 },
  { key: "clinic10", name: "Clinic 10", clinicId: 10 },
];

// const clinicsEvents = [
//   {
//     clinicId: 1, events: [{
//       id: createEventId(),
//       title: `Event ${i + 1} - Travel`,
//       start: new Date(y, 4, 2),
//       end: new Date(y, 4, 2),
//     }]
//   }
// ]

// for i clinics
// clinics[i].events.map(e => {
//   events.push({
//     ...e,
//     className: `event event-group${i+1}`,
//     allDay:true
//   })
// })

export function createEventId() {
  return String(eventGuid++);
}
