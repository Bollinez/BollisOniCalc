import { IIOEntityBase } from '../interfaces/IIOEntity';

// Extended interface to include the additional critter properties
export interface IExtendedCritterBase extends IIOEntityBase {
  source?: 'ONI' | 'SO' | 'FPP' | 'PPP';
  maxAge?: number;
  spaceRequired?: number;
  happyEggRate?: number;
  incubationTime?: number;
  rawEgg?: number;
  lime?: number;
  dietType?: 'Solid' | 'Plant' | 'Gas' | 'Mixed' | 'Critters';
  defaultDiet?: string;
}

export const critters: IExtendedCritterBase[] = [
  // Sweetle
  {
    name: 'Sweetle',
    source: 'SO',
    maxAge: 75,
    spaceRequired: 12,
    happyEggRate: 0.20,
    incubationTime: 0.07,
    rawEgg: 1,
    lime: 1,
    dietType: 'Solid',
    defaultDiet: 'Sulfur',
    variants: [
      {
        inputs: [
          { name: 'Sulfur', value: 20, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Sucrose', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Grubgrub
  {
    name: 'Grubgrub',
    source: 'SO',
    maxAge: 150,
    spaceRequired: 16,
    happyEggRate: 0.10,
    incubationTime: 0.03,
    rawEgg: 1,
    lime: 1,
    dietType: 'Solid',
    defaultDiet: 'Sulfur',
    variants: [
      {
        inputs: [
          { name: 'Sulfur', value: 50, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Mud', value: 5, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Sucrose', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Mud', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Drecko
  {
    name: 'Drecko',
    source: 'ONI',
    maxAge: 150,
    spaceRequired: 12,
    happyEggRate: 0.10,
    incubationTime: 0.035,
    rawEgg: 1,
    lime: 1,
    dietType: 'Plant',
    defaultDiet: 'Balm Lily',
    variants: [
      {
        inputs: [
          { name: 'Pincha Pepperplant', value: 0.75, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Phosphorite', value: 10, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.26, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Balm Lily', value: 0.75, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Phosphorite', value: 10, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.26, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Mealwood', value: 0.75, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Phosphorite', value: 10, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.26, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Glossy Drecko
  {
    name: 'Glossy Drecko',
    source: 'ONI',
    maxAge: 150,
    spaceRequired: 12,
    happyEggRate: 0.10,
    incubationTime: 0.035,
    rawEgg: 1,
    lime: 1,
    dietType: 'Plant',
    defaultDiet: 'Mealwood',
    variants: [
      {
        inputs: [
          { name: 'Mealwood', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Phosphorite', value: 9, unit: 'kg', rate: 'per cycle' },
          { name: 'Plastic', value: 50, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bristle Blossom', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Phosphorite', value: 9, unit: 'kg', rate: 'per cycle' },
          { name: 'Plastic', value: 50, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Pip
  {
    name: 'Pip',
    source: 'ONI',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Plant',
    defaultDiet: 'Arbor Tree',
    variants: [
      {
        inputs: [
          { name: 'Arbor Tree', value: 0.08, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 20, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Thimble Reed', value: 0.4, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 20, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bonbon Tree (Wood)', value: 0.08, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 20, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Cuddle Pip
  {
    name: 'Cuddle Pip',
    source: 'ONI',
    maxAge: 100,
    spaceRequired: 4,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Plant',
    defaultDiet: 'Thimble Reed',
    variants: [
      {
        inputs: [
          { name: 'Arbor Tree', value: 0.1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 12.5, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Thimble Reed', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 12.5, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bonbon Tree (Wood)', value: 0.1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 12.5, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Sanishell
  {
    name: 'Sanishell',
    source: 'ONI',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Solid',
    defaultDiet: 'Polluted Dirt',
    variants: [
      {
        inputs: [
          { name: 'Polluted Dirt', value: 70, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Sand', value: 35, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Rot Pile', value: 70, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Sand', value: 35, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Slime', value: 70, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Sand', value: 35, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Pokeshell
  {
    name: 'Pokeshell',
    source: 'ONI',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Solid',
    defaultDiet: 'Polluted Dirt',
    variants: [
      {
        inputs: [
          { name: 'Polluted Dirt', value: 70, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Sand', value: 35, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Rot Pile', value: 70, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Sand', value: 35, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Puft
  {
    name: 'Puft',
    source: 'ONI',
    maxAge: 75,
    spaceRequired: 16,
    happyEggRate: 0.20,
    incubationTime: 0.0666,
    rawEgg: 0.25,
    lime: 0.25,
    dietType: 'Gas',
    defaultDiet: 'Polluted Oxygen',
    variants: [
      {
        inputs: [
          { name: 'Polluted Oxygen', value: 50, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Slime', value: 47.5, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Puft Prince
  {
    name: 'Puft Prince',
    source: 'ONI',
    maxAge: 75,
    spaceRequired: 16,
    happyEggRate: 0.20,
    incubationTime: 0.0666,
    rawEgg: 0.25,
    lime: 0.25,
    dietType: 'Gas',
    defaultDiet: 'Polluted Oxygen',
    variants: [
      {
        inputs: [
          { name: 'Polluted Oxygen', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Slime', value: 3, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Chlorine', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bleach Stone', value: 3, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Oxygen', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Oxylite', value: 3, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Squeaky Puft
  {
    name: 'Squeaky Puft',
    source: 'ONI',
    maxAge: 75,
    spaceRequired: 16,
    happyEggRate: 0.20,
    incubationTime: 0.0666,
    rawEgg: 0.25,
    lime: 0.25,
    dietType: 'Gas',
    defaultDiet: 'Chlorine',
    variants: [
      {
        inputs: [
          { name: 'Chlorine', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bleach Stone', value: 28.5, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Dense Puft
  {
    name: 'Dense Puft',
    source: 'ONI',
    maxAge: 75,
    spaceRequired: 16,
    happyEggRate: 0.20,
    incubationTime: 0.0666,
    rawEgg: 0.25,
    lime: 0.25,
    dietType: 'Gas',
    defaultDiet: 'Oxygen',
    variants: [
      {
        inputs: [
          { name: 'Oxygen', value: 50, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Oxylite', value: 47.5, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Slickster
  {
    name: 'Slickster',
    source: 'ONI',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Gas',
    defaultDiet: 'Carbon Dioxide',
    variants: [
      {
        inputs: [
          { name: 'Carbon Dioxide', value: 20, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Crude Oil', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Molten Slickster
  {
    name: 'Molten Slickster',
    source: 'ONI',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Gas',
    defaultDiet: 'Carbon Dioxide',
    variants: [
      {
        inputs: [
          { name: 'Carbon Dioxide', value: 20, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Petroleum', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Bammoth
  {
    name: 'Bammoth',
    source: 'FPP',
    maxAge: 200,
    spaceRequired: 16,
    happyEggRate: 0.075,
    incubationTime: 0.025,
    rawEgg: 4,
    lime: 4,
    dietType: 'Mixed',
    defaultDiet: 'Plume Squash Plant',
    variants: [
      {
        inputs: [
          { name: 'Plume Squash Plant', value: 4.0, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.50, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Plume Squash', value: 0.4445, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.50, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Nosh Sprout', value: 3.0, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.50, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Nosh Bean', value: 1.6, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.50, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Squash Fries', value: 0.25, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
          { name: 'Reed Fiber', value: 0.50, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Regal Bammoth
  {
    name: 'Regal Bammoth',
    source: 'FPP',
    maxAge: 200,
    spaceRequired: 16,
    happyEggRate: 0.075,
    incubationTime: 0.025,
    rawEgg: 4,
    lime: 4,
    dietType: 'Mixed',
    defaultDiet: 'Squash Fries',
    variants: [
      {
        inputs: [
          { name: 'Plume Squash Plant', value: 4.0, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Plume Squash', value: 0.4445, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Nosh Sprout', value: 3.0, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Nosh Bean', value: 1.6, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Squash Fries', value: 0.25, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bammoth Patty', value: 30, unit: 'kg', rate: 'per cycle' },
          { name: 'Gold Amalgam', value: 25, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Flox
  {
    name: 'Flox',
    source: 'FPP',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Mixed',
    defaultDiet: 'Pikeapple Bush',
    variants: [
      {
        inputs: [
          { name: 'Pikeapple Bush', value: 0.6, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 5, unit: 'kg', rate: 'per cycle' },
          { name: 'Wood', value: 60, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Pikeapple', value: 0.2, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 5, unit: 'kg', rate: 'per cycle' },
          { name: 'Wood', value: 60, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bristle Blossom', value: 0.6, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 5, unit: 'kg', rate: 'per cycle' },
          { name: 'Wood', value: 60, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bristle Berry', value: 0.1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Dirt', value: 5, unit: 'kg', rate: 'per cycle' },
          { name: 'Wood', value: 60, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Spigot Seal
  {
    name: 'Spigot Seal',
    source: 'FPP',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 1,
    lime: 1,
    dietType: 'Mixed',
    defaultDiet: 'Bonbon Tree (Nectar)',
    variants: [
      {
        inputs: [
          { name: 'Bonbon Tree (Nectar)', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Ethanol', value: 40, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Sucrose', value: 30.8, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Ethanol', value: 40, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Dartle
  {
    name: 'Dartle',
    source: 'PPP',
    maxAge: 50,
    spaceRequired: 4,
    happyEggRate: 0.30,
    incubationTime: 0.10,
    rawEgg: 1,
    lime: 1,
    dietType: 'Mixed',
    defaultDiet: 'Dewdrip',
    variants: [
      {
        inputs: [
          { name: 'Dewdrip', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Bleach Stone', value: 10, unit: 'kg', rate: 'per cycle' },
          { name: 'Chlorine', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Gnit
  {
    name: 'Gnit',
    source: 'PPP',
    maxAge: 10,
    spaceRequired: 4,
    happyEggRate: 0.28,
    incubationTime: 0.50,
    rawEgg: 0,
    lime: 0,
    dietType: 'Critters',
    defaultDiet: 'Gnit Stings',
    variants: [
      {
        inputs: [
          { name: 'Stings', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Jawbo
  {
    name: 'Jawbo',
    source: 'PPP',
    maxAge: 100,
    spaceRequired: 12,
    happyEggRate: 0.15,
    incubationTime: 0.05,
    rawEgg: 2,
    lime: 2,
    dietType: 'Solid',
    defaultDiet: 'Pacu Fillet',
    variants: [
      {
        inputs: [
          { name: 'Pacu Fillet', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Rust', value: 60, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Lumb
  {
    name: 'Lumb',
    source: 'PPP',
    maxAge: 200,
    spaceRequired: 16,
    happyEggRate: 0.075,
    incubationTime: 0.025,
    rawEgg: 4,
    lime: 4,
    dietType: 'Mixed',
    defaultDiet: 'Ovagro Fig',
    variants: [
      {
        inputs: [
          { name: 'Ovagro Fig', value: 4, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Peat', value: 200, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bristle Berry', value: 0.8125, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Peat', value: 200, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Bog Jelly', value: 0.706552, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Peat', value: 300, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },

  // Rhex
  {
    name: 'Rhex',
    source: 'PPP',
    maxAge: 200,
    spaceRequired: 16,
    happyEggRate: 0.075,
    incubationTime: 0.025,
    rawEgg: 4,
    lime: 4,
    dietType: 'Solid',
    defaultDiet: 'Meat (Live Critter)',
    variants: [
      {
        inputs: [
          { name: 'Meat (Live Critter)', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Brine Ice', value: 128, unit: 'kg', rate: 'per cycle' },
          { name: 'Feather Fiber', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Tough Meat (Live Critter)', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Brine Ice', value: 128, unit: 'kg', rate: 'per cycle' },
          { name: 'Feather Fiber', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Meat', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Brine Ice', value: 64, unit: 'kg', rate: 'per cycle' },
          { name: 'Feather Fiber', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
      },
      {
        inputs: [
          { name: 'Tough Meat', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Brine Ice', value: 64, unit: 'kg', rate: 'per cycle' },
          { name: 'Feather Fiber', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
      },
    ],
  },
];