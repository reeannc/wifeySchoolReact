export const AREA = {
  sex_and_sexuality: ["book", "hnkjdns"],
  health_and_fitness: ["book", "etc", "qwerty"],
  polarity: ["book", "polarity"],
  dating_and_relationships: ["book", "book"],
};

export const BOOK = {
  strength_power: [3, 8],
};

export const EXERCISES = {
  barbell_bench_press: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      incline:
        "With a bench inclined between 30 and 45 degrees, hold the bar directly above your chest.",
      flat: "Perform this exercise on a horizontal bench.",
      decline:
        "Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.",
      underhand:
        "Lying on a flat bench, grab the bar with a reversed underhand grip, so that you are now holding the barbell thumbs pointing outwards. Be sure to reduce the weight when performing this variation of the exercise.",
    },
    unit: "reps", //vs duration
    muscles: ["chest"],
    description:
      "Ensure your scapula are retracted when performing the bench press, arms 2 palm widths wider than shoulder width. Lower the bar with your elbows flared at a 45 degree angle from your torso, touching the bar down to your chest at your nipple line.",
    substitutes: ["pushups", "dumbbell bench press", "floor press"],
    //have general description first and specific one second
  },
  prayer_press: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      incline:
        "Press your hands away from you at a 45 degree angle above horizontal.",
      horizontal:
        "Press your hands away from you at a 45 degree angle from horizontal.",
      decline:
        "Press your hands away from you at a -30 degree angle below horizontal.",
    },
    unit: "reps", //vs duration
    muscles: ["chest"],
    description:
      "Place a light, weighted plate between the palms of your hands (as if your were praying), and while keeping your scapula retracted, press your hands together while pushing the plate away from you.",
    substitutes: ["palm prayer press"],
  },
  pec_dec: {
    type: "accessory",
    meta: {
      environment: "gym", //if it has home, have to specify equipment
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      high: "Place the seat height so that your hands meet in the same horizontal plane as your mouth/chin.",
      standard:
        "Place the seat height so that your hands meet in the same horizontal plane as your nipple height",
      decline:
        "Place the seat height as high as possible so that the hand holds are below nipple height while sitting.",
    },
    unit: "reps", //vs duration        muscles: ['chest'],
    muscles: ["chest"],
    description:
      "Ensure your scapula is retracted and try to puff our your chest while performing this exercise. Make sure you bring the handles together so they touch, and the range of motion should be no more than 90 degrees either side.",
    substitutes: ["cable chest fly"],
  },
};
