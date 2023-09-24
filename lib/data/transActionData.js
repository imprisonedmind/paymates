export const transActionData = [
  {
    uid: "8ce865d2-5af3-11ee-8c99-0242ac120002", // This transAction UID identifier
    icon: "🛒",
    title: "Groceries",
    amount: [-200], // An array of amounts, this is we do equalisation
    from: "c2a9a2ee-5af3-11ee-8c99-0242ac120002", // A User UID
    to: ["c98937b4-5af3-11ee-8c99-0242ac120002"], // An array of user UID's
    timeAgo: 1695574395680, // ms epoch
  },
  {
    uid: "37b6a9d6-5afb-11ee-8c99-0242ac120002",
    icon: "🍺",
    title: "Beer",
    amount: [55],
    from: "c2a9a2ee-5af3-11ee-8c99-0242ac120002",
    to: ["c98937b4-5af3-11ee-8c99-0242ac120002"],
    timeAgo: 1695556800000,
  },
];
