import { IPlantBase } from '../interfaces/IPlant';

export const plants: IPlantBase[] = [
  {
    name: 'Arbor Tree',
    growthRate: { value: 4.5, rate: 'cycle' },
    yield: 1500,
    variants: [
      {
        outputs: [
          { name: 'Lumber', value: 138.88, unit: 'g', rate: 'per second' },
        ],
      },
      {
        inputs: [
          { name: 'Dirt', value: 10, unit: 'kg', rate: 'per cycle' },
          { name: 'Polluted Water', value: 70, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Lumber', value: 555.55, unit: 'g', rate: 'per second' },
        ],
      },
    ],
  },
  {
    name: 'Bristle Blossom',
    growthRate: { value: 6, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [{ name: 'Water', value: 20, unit: 'kg', rate: 'per cycle' }],
        outputs: [
          {
            name: 'Bristle Berry',
            value: 1 / 6,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Dusk Cap',
    growthRate: { value: 7.5, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [{ name: 'Slime', value: 4, unit: 'kg', rate: 'per cycle' }],
        outputs: [
          { name: 'Mushroom', value: 1 / 7.5, unit: 'each', rate: 'per cycle' },
        ],
      },
    ],
  },
  {
    name: 'Mealwood',
    growthRate: { value: 3, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [{ name: 'Dirt', value: 10, unit: 'kg', rate: 'per cycle' }],
        outputs: [
          {
            name: 'Food',
            value: (1 / 3) * 600,
            unit: 'kcal',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Nosh Sprout',
    growthRate: { value: 21, rate: 'cycle' },
    yield: 12,
    variants: [
      {
        inputs: [
          { name: 'Ethanol', value: 20, unit: 'kg', rate: 'per cycle' },
          { name: 'Dirt', value: 5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Nosh Bean',
            value: 12 / 21,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Oxyfern',
    yield: 0,
    growthRate: { value: 0, rate: 'cycle' },
    variants: [
      {
        inputs: [
          {
            name: 'Carbon Dioxide',
            value: 0.15625,
            unit: 'g',
            rate: 'per second',
          },
        ],
        outputs: [
          { name: 'Oxygen', value: 7.8, unit: 'g', rate: 'per second' },
        ],
      },
      {
        inputs: [
          { name: 'Dirt', value: 4, unit: 'kg', rate: 'per cycle' },
          { name: 'Water', value: 19, unit: 'kg', rate: 'per cycle' },
          {
            name: 'Carbon Dioxide',
            value: 0.625,
            unit: 'g',
            rate: 'per second',
          },
        ],
        outputs: [
          { name: 'Oxygen', value: 31.3, unit: 'g', rate: 'per second' },
        ],
      },
    ],
  },
  {
    name: 'Pincha Pepperplant',
    growthRate: { value: 8, rate: 'cycle' },
    yield: 4,
    variants: [
      {
        inputs: [
          { name: 'Polluted Water', value: 35, unit: 'kg', rate: 'per cycle' },
          { name: 'Phosphorite', value: 1, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Pincha Peppernut',
            value: 125,
            unit: 'g',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Sleet Wheat',
    growthRate: { value: 18, rate: 'cycle' },
    yield: 18,
    variants: [
      {
        inputs: [
          { name: 'Water', value: 20, unit: 'kg', rate: 'per cycle' },
          { name: 'Dirt', value: 5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Sleet Wheat Grain',
            value: 1,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Waterweed',
    growthRate: { value: 12, rate: 'cycle' },
    yield: 12,
    variants: [
      {
        inputs: [
          { name: 'Salt Water', value: 5, unit: 'kg', rate: 'per cycle' },
          { name: 'Bleach Stone', value: 0.5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          { name: 'Lettuce', value: 1, unit: 'each', rate: 'per cycle' },
        ],
      },
    ],
  },
  {
    name: 'Balm Lily',
    growthRate: { value: 12, rate: 'cycle' },
    yield: 2,
    variants: [
      {
        inputs: [],
        outputs: [
          {
            name: 'Balm Lily Flower',
            value: 2 / 12,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Thimble Reed',
    growthRate: { value: 2, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Polluted Water', value: 160, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Reed Fiber',
            value: 1 / 2,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Dasha Saltvine',
    growthRate: { value: 6, rate: 'cycle' },
    yield: 65,
    variants: [
      {
        inputs: [
          { name: 'Sand', value: 7, unit: 'kg', rate: 'per cycle' },
          { name: 'Chlorine', value: 3.6, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Salt',
            value: 65 / 6,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Gas Grass',
    growthRate: { value: 4, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Chlorine', value: 0.5, unit: 'kg', rate: 'per cycle' },
          { name: 'Dirt', value: 25, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Harvested Gas Grass',
            value: 1 / 4,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Bog Bucket',
    growthRate: { value: 6.6, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Polluted Water', value: 40, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Bog Jelly',
            value: 1 / 6.6,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Grubfruit Plant',
    growthRate: { value: 8, rate: 'cycle' },
    yield: 8,
    variants: [
      {
        inputs: [
          { name: 'Sulfur', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Grubfruit',
            value: 8 / 8,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Spindly Grubfruit Plant',
    growthRate: { value: 4, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Sulfur', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Spindly Grubfruit',
            value: 1 / 4,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Saturn Critter Trap',
    growthRate: { value: 30, rate: 'cycle' },
    yield: 10,
    variants: [
      {
        inputs: [
          { name: 'Polluted Water', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        lifecycleInputs: [
          { name: 'Critter', value: 1, unit: 'each', rate: 'per lifecycle' },
        ],
        outputs: [
          {
            name: 'Plant Meat',
            value: 10 / 30,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
        constantOutputs: [
          {
            name: 'Hydrogen',
            value: 25,
            unit: 'g',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Wheezewort',
    growthRate: { value: 0, rate: 'cycle' },
    yield: 0,
    variants: [
      {
        inputs: [
          { name: 'Phosphorite', value: 4, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [],
      },
    ],
  },
  {
    name: 'Alveo Vera',
    growthRate: { value: 2, rate: 'cycle' },
    yield: 36,
    variants: [
      {
        inputs: [
          { name: 'Ice', value: 20, unit: 'kg', rate: 'per cycle' },
          { name: 'Carbon Dioxide', value: 1.2, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Oxylite',
            value: 36 / 2,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Pikeapple Bush',
    growthRate: { value: 3, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Phosphorite', value: 5, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Pikeapple',
            value: 1 / 3,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Plume Squash Plant',
    growthRate: { value: 9, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Ethanol', value: 15, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Plume Squash',
            value: 1 / 9,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Bonbon Tree (Wood)',
    growthRate: { value: 4.5, rate: 'cycle' },
    yield: 375,
    variants: [
      {
        inputs: [
          { name: 'Snow', value: 100, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Wood',
            value: 375 / 4.5,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Bonbon Tree (Nectar)',
    growthRate: { value: 0.25, rate: 'cycle' },
    yield: 20,
    variants: [
      {
        inputs: [
          { name: 'Snow', value: 100, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Nectar',
            value: 20 / 0.25,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Dew Dripper',
    growthRate: { value: 2, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Brine Ice', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Dewdrip',
            value: 1 / 2,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Lura Plant',
    growthRate: { value: 12, rate: 'cycle' },
    yield: 264,
    variants: [
      {
        inputs: [],
        lifecycleInputs: [
          { name: 'Critter', value: 1, unit: 'each', rate: 'per lifecycle' },
        ],
        outputs: [
          {
            name: 'Amber',
            value: 264 / 12,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Megafrond',
    growthRate: { value: 9, rate: 'cycle' },
    yield: 36,
    variants: [
      {
        inputs: [
          { name: 'Chlorine', value: 54, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Megafrond Grain',
            value: 36 / 9,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Mimika Bud',
    growthRate: { value: 5, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Dirt', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Mimillet',
            value: 1 / 5,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Ovagro Node',
    growthRate: { value: 3, rate: 'cycle' },
    yield: 24,
    variants: [
      {
        inputs: [
          { name: 'Water', value: 90, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Ovagro Fig',
            value: 24 / 3,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Seakomb',
    growthRate: { value: 5, rate: 'cycle' },
    yield: 50,
    variants: [
      {
        inputs: [
          { name: 'Polluted Dirt', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Seakomb Leaf',
            value: 50 / 5,
            unit: 'kg',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
  {
    name: 'Sweatcorn Stalk',
    growthRate: { value: 3, rate: 'cycle' },
    yield: 1,
    variants: [
      {
        inputs: [
          { name: 'Peat', value: 10, unit: 'kg', rate: 'per cycle' },
        ],
        outputs: [
          {
            name: 'Sweatcorn',
            value: 1 / 3,
            unit: 'each',
            rate: 'per cycle',
          },
        ],
      },
    ],
  },
];
