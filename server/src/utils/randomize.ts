import { v4 } from 'uuid';

// generate uuid
export function generateID() {
  return v4();
}

// generate random number
export function randomNumberGenerator(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random Word Generator
export function randomWordGenerator(length = randomNumberGenerator(5, 10)) {
  const words = [
    'apple',
    'banana',
    'orange',
    'grape',
    'strawberry',
    'watermelon',
    'melon',
    'peach',
    'pear',
    'cherry',
    'kiwi',
    'mango',
    'lemon',
    'lime',
    'coconut',
    'avocado',
    'tomato',
    'potato',
    'carrot',
    'onion',
    'garlic',
    'ginger',
    'cucumber',
    'broccoli',
    'spinach',
    'lettuce',
    'asparagus',
    'pea',
    'bean',
    'corn',
    'mushroom',
    'pepper',
    'eggplant',
    'zucchini',
    'pumpkin',
    'radish',
    'sweet potato',
    'yam',
    'turnip',
    'beet',
    'celery',
    'artichoke',
    'brussels sprout',
    'cauliflower',
    'cabbage',
    'chili pepper',
    'garlic',
    'ginger',
    'leek',
    'onion',
    'shallot',
    'scallion',
    'sweet potato',
    'turnip',
    'yam',
    'broccoli',
    'cabbage',
  ];
  const word = Array.from({ length: length }, () => {
    return words[randomNumberGenerator(0, words.length - 1)];
  }).join(' ');
  return word;
}
