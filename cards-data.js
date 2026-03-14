/**
 * 英语卡片数据
 * 维护方式：直接编辑此文件添加/修改/删除卡片
 */

const cardsData = [
 // === 动物类 ===
 {
  letter: 'd',
  word: 'duck',
  phonetic: '/d<span class="vowel">ʌ</span>/',
  sentence: 'A duck says, "quack."',
  image: 'images/duck.svg',
  audioWord: 'duck',
  audioSentence: 'A duck says quack',
  audioWordFile: 'audio/duck_word.mp3',
  audioSentenceFile: 'audio/duck_sentence.mp3'
 },
 {
  letter: 'c',
  word: 'cat',
  phonetic: '/k<span class="vowel">æ</span>/',
  sentence: 'A cat says, "meow."',
  image: 'images/cat.svg',
  audioWord: 'cat',
  audioSentence: 'A cat says meow',
  audioWordFile: 'audio/cat_word.mp3',
  audioSentenceFile: 'audio/cat_sentence.mp3'
 },
 {
  letter: 'd',
  word: 'dog',
  phonetic: '/d<span class="vowel">ɔ</span>/',
  sentence: 'A dog says, "woof."',
  image: 'images/dog.svg',
  audioWord: 'dog',
  audioSentence: 'A dog says woof',
  audioWordFile: 'audio/dog_word.mp3',
  audioSentenceFile: 'audio/dog_sentence.mp3'
 },
 {
  letter: 'b',
  word: 'bee',
  phonetic: '/b<span class="long-vowel">iː</span>/',
  sentence: 'A bee says, "buzz."',
  image: 'images/bee.svg',
  audioWord: 'bee',
  audioSentence: 'A bee says buzz',
  audioWordFile: 'audio/bee_word.mp3',
  audioSentenceFile: 'audio/bee_sentence.mp3'
 },
 {
  letter: 'f',
  word: 'frog',
  phonetic: '/fr<span class="vowel">ɔ</span>/',
  sentence: 'A frog says, "ribbit."',
  image: 'images/frog.svg',
  audioWord: 'frog',
  audioSentence: 'A frog says ribbit',
  audioWordFile: 'audio/frog_word.mp3',
  audioSentenceFile: 'audio/frog_sentence.mp3'
 },
 {
  letter: 'c',
  word: 'cow',
  phonetic: '/k<span class="diphthong">aʊ</span>/',
  sentence: 'A cow says, "moo."',
  image: 'images/cow.svg',
  audioWord: 'cow',
  audioSentence: 'A cow says moo',
  audioWordFile: 'audio/cow_word.mp3',
  audioSentenceFile: 'audio/cow_sentence.mp3'
 },
 {
  letter: 'p',
  word: 'pig',
  phonetic: '/p<span class="vowel">ɪ</span>/',
  sentence: 'A pig says, "oink."',
  image: 'images/pig.svg',
  audioWord: 'pig',
  audioSentence: 'A pig says oink',
  audioWordFile: 'audio/pig_word.mp3',
  audioSentenceFile: 'audio/pig_sentence.mp3'
 },
 {
  letter: 'h',
  word: 'horse',
  phonetic: '/h<span class="long-vowel">ɔː</span>/',
  sentence: 'A horse says, "neigh."',
  image: 'images/horse.svg',
  audioWord: 'horse',
  audioSentence: 'A horse says neigh',
  audioWordFile: 'audio/horse_word.mp3',
  audioSentenceFile: 'audio/horse_sentence.mp3'
 },
 {
  letter: 's',
  word: 'sheep',
  phonetic: '/ʃ<span class="long-vowel">iː</span>/',
  sentence: 'A sheep says, "baa."',
  image: 'images/sheep.svg',
  audioWord: 'sheep',
  audioSentence: 'A sheep says baa',
  audioWordFile: 'audio/sheep_word.mp3',
  audioSentenceFile: 'audio/sheep_sentence.mp3'
 },
 {
  letter: 'l',
  word: 'lion',
  phonetic: '/l<span class="vowel">ɪ</span><span class="diphthong">aɪ</span><span class="vowel">ə</span>/',
  sentence: 'A lion says, "roar."',
  image: 'images/lion.svg',
  audioWord: 'lion',
  audioSentence: 'A lion says roar',
  audioWordFile: 'audio/lion_word.mp3',
  audioSentenceFile: 'audio/lion_sentence.mp3'
 },

 // === 食物类 ===
 {
  letter: 'a',
  word: 'apple',
  phonetic: '/<span class="vowel">æ</span>/',
  sentence: 'An apple is red.',
  image: 'images/apple.svg',
  audioWord: 'apple',
  audioSentence: 'An apple is red',
  audioWordFile: 'audio/apple_word.mp3',
  audioSentenceFile: 'audio/apple_sentence.mp3'
 },
 {
  letter: 'g',
  word: 'grape',
  phonetic: '/gr<span class="diphthong">eɪ</span>/',
  sentence: 'Grapes are purple.',
  image: 'images/grape.svg',
  audioWord: 'grape',
  audioSentence: 'Grapes are purple',
  audioWordFile: 'audio/grape_word.mp3',
  audioSentenceFile: 'audio/grape_sentence.mp3'
 },
 {
  letter: 'i',
  word: 'ice cream',
  phonetic: '/<span class="vowel">aɪ</span>/',
  sentence: 'I like ice cream.',
  image: 'images/icecream.svg',
  audioWord: 'ice cream',
  audioSentence: 'I like ice cream',
  audioWordFile: 'audio/icecream_word.mp3',
  audioSentenceFile: 'audio/icecream_sentence.mp3'
 },
 {
  letter: 'o',
  word: 'orange',
  phonetic: '/<span class="vowel">ɔ</span>/',
  sentence: 'An orange is juicy.',
  image: 'images/orange.svg',
  audioWord: 'orange',
  audioSentence: 'An orange is juicy',
  audioWordFile: 'audio/orange_word.mp3',
  audioSentenceFile: 'audio/orange_sentence.mp3'
 },
 {
  letter: 'j',
  word: 'jelly',
  phonetic: '/dʒ<span class="vowel">e</span>/',
  sentence: 'Jelly is wobbly.',
  image: 'images/jelly.svg',
  audioWord: 'jelly',
  audioSentence: 'Jelly is wobbly',
  audioWordFile: 'audio/jelly_word.mp3',
  audioSentenceFile: 'audio/jelly_sentence.mp3'
 },

 // === 自然类 ===
 {
  letter: 's',
  word: 'sun',
  phonetic: '/s<span class="vowel">ʌ</span>/',
  sentence: 'The sun is bright.',
  image: 'images/sun.svg',
  audioWord: 'sun',
  audioSentence: 'The sun is bright',
  audioWordFile: 'audio/sun_word.mp3',
  audioSentenceFile: 'audio/sun_sentence.mp3'
 },
 {
  letter: 'm',
  word: 'moon',
  phonetic: '/m<span class="long-vowel">uː</span>/',
  sentence: 'The moon shines at night.',
  image: 'images/moon.svg',
  audioWord: 'moon',
  audioSentence: 'The moon shines at night',
  audioWordFile: 'audio/moon_word.mp3',
  audioSentenceFile: 'audio/moon_sentence.mp3'
 },
 {
  letter: 't',
  word: 'tree',
  phonetic: '/tr<span class="long-vowel">iː</span>/',
  sentence: 'A tree gives us shade.',
  image: 'images/tree.svg',
  audioWord: 'tree',
  audioSentence: 'A tree gives us shade',
  audioWordFile: 'audio/tree_word.mp3',
  audioSentenceFile: 'audio/tree_sentence.mp3'
 },
 {
  letter: 'r',
  word: 'rainbow',
  phonetic: '/r<span class="diphthong">eɪ</span>/',
  sentence: 'A rainbow has seven colors.',
  image: 'images/rainbow.svg',
  audioWord: 'rainbow',
  audioSentence: 'A rainbow has seven colors',
  audioWordFile: 'audio/rainbow_word.mp3',
  audioSentenceFile: 'audio/rainbow_sentence.mp3'
 },
 {
  letter: 'w',
  word: 'water',
  phonetic: '/w<span class="long-vowel">ɔː</span>/',
  sentence: 'Water is life.',
  image: 'images/water.svg',
  audioWord: 'water',
  audioSentence: 'Water is life',
  audioWordFile: 'audio/water_word.mp3',
  audioSentenceFile: 'audio/water_sentence.mp3'
 },

 // === 物品类 ===
 {
  letter: 'u',
  word: 'umbrella',
  phonetic: '/<span class="vowel">ʌ</span>/',
  sentence: 'Use an umbrella in the rain.',
  image: 'images/umbrella.svg',
  audioWord: 'umbrella',
  audioSentence: 'Use an umbrella in the rain',
  audioWordFile: 'audio/umbrella_word.mp3',
  audioSentenceFile: 'audio/umbrella_sentence.mp3'
 },
 {
  letter: 'f',
  word: 'fish',
  phonetic: '/f<span class="vowel">ɪ</span>/',
  sentence: 'A fish can swim.',
  image: 'images/fish.svg',
  audioWord: 'fish',
  audioSentence: 'A fish can swim',
  audioWordFile: 'audio/fish_word.mp3',
  audioSentenceFile: 'audio/fish_sentence.mp3'
 },
 {
  letter: 'b',
  word: 'ball',
  phonetic: '/b<span class="long-vowel">ɔː</span>/',
  sentence: 'I can catch the ball.',
  image: 'images/ball.svg',
  audioWord: 'ball',
  audioSentence: 'I can catch the ball',
  audioWordFile: 'audio/ball_word.mp3',
  audioSentenceFile: 'audio/ball_sentence.mp3'
 },
 {
  letter: 'k',
  word: 'kite',
  phonetic: '/k<span class="vowel">aɪ</span>/',
  sentence: 'Fly a kite in the sky.',
  image: 'images/kite.svg',
  audioWord: 'kite',
  audioSentence: 'Fly a kite in the sky',
  audioWordFile: 'audio/kite_word.mp3',
  audioSentenceFile: 'audio/kite_sentence.mp3'
 },
 {
  letter: 'y',
  word: 'yoyo',
  phonetic: '/j<span class="diphthong">oʊ</span>/',
  sentence: 'A yoyo goes up and down.',
  image: 'images/yoyo.svg',
  audioWord: 'yoyo',
  audioSentence: 'A yoyo goes up and down',
  audioWordFile: 'audio/yoyo_word.mp3',
  audioSentenceFile: 'audio/yoyo_sentence.mp3'
 },

 // === 动物类（新增） ===
 {
  letter: 'e',
  word: 'elephant',
  phonetic: '/<span class="vowel">e</span>/',
  sentence: 'An elephant has a long trunk.',
  image: 'images/elephant.svg',
  audioWord: 'elephant',
  audioSentence: 'An elephant has a long trunk',
  audioWordFile: 'audio/elephant_word.mp3',
  audioSentenceFile: 'audio/elephant_sentence.mp3'
 },
 {
  letter: 'z',
  word: 'zebra',
  phonetic: '/z<span class="long-vowel">iː</span>/',
  sentence: 'A zebra has stripes.',
  image: 'images/zebra.svg',
  audioWord: 'zebra',
  audioSentence: 'A zebra has stripes',
  audioWordFile: 'audio/zebra_word.mp3',
  audioSentenceFile: 'audio/zebra_sentence.mp3'
 },
 {
  letter: 'n',
  word: 'nest',
  phonetic: '/n<span class="vowel">e</span>/',
  sentence: 'Birds live in a nest.',
  image: 'images/nest.svg',
  audioWord: 'nest',
  audioSentence: 'Birds live in a nest',
  audioWordFile: 'audio/nest_word.mp3',
  audioSentenceFile: 'audio/nest_sentence.mp3'
 },

 // === 新增单词 ===
 {
  letter: 'b',
  word: 'bird',
  phonetic: '/b<span class="long-vowel">ɜː</span>/',
  sentence: 'A bird can fly.',
  image: 'images/bird.svg',
  audioWord: 'bird',
  audioSentence: 'A bird can fly',
  audioWordFile: 'audio/bird_word.mp3',
  audioSentenceFile: 'audio/bird_sentence.mp3'
 },
 {
  letter: 'b',
  word: 'banana',
  phonetic: '/b<span class="vowel">ə</span>/',
  sentence: 'A banana is yellow.',
  image: 'images/banana.svg',
  audioWord: 'banana',
  audioSentence: 'A banana is yellow',
  audioWordFile: 'audio/banana_word.mp3',
  audioSentenceFile: 'audio/banana_sentence.mp3'
 },
 {
  letter: 'c',
  word: 'car',
  phonetic: '/k<span class="long-vowel">ɑː</span>/',
  sentence: 'A car goes fast.',
  image: 'images/car.svg',
  audioWord: 'car',
  audioSentence: 'A car goes fast',
  audioWordFile: 'audio/car_word.mp3',
  audioSentenceFile: 'audio/car_sentence.mp3'
 },
 {
  letter: 'a',
  word: 'ant',
  phonetic: '/<span class="vowel">æ</span>/',
  sentence: 'An ant is small.',
  image: 'images/ant.svg',
  audioWord: 'ant',
  audioSentence: 'An ant is small',
  audioWordFile: 'audio/ant_word.mp3',
  audioSentenceFile: 'audio/ant_sentence.mp3'
 },
 {
  letter: 't',
  word: 'tiger',
  phonetic: '/t<span class="vowel">aɪ</span>/',
  sentence: 'A tiger is big.',
  image: 'images/tiger.svg',
  audioWord: 'tiger',
  audioSentence: 'A tiger is big',
  audioWordFile: 'audio/tiger_word.mp3',
  audioSentenceFile: 'audio/tiger_sentence.mp3'
 },
 {
  letter: 'r',
  word: 'rabbit',
  phonetic: '/r<span class="vowel">æ</span>/',
  sentence: 'A rabbit hops.',
  image: 'images/rabbit.svg',
  audioWord: 'rabbit',
  audioSentence: 'A rabbit hops',
  audioWordFile: 'audio/rabbit_word.mp3',
  audioSentenceFile: 'audio/rabbit_sentence.mp3'
 },
 {
  letter: 'm',
  word: 'monkey',
  phonetic: '/m<span class="vowel">ʌ</span>/',
  sentence: 'A monkey climbs.',
  image: 'images/monkey.svg',
  audioWord: 'monkey',
  audioSentence: 'A monkey climbs',
  audioWordFile: 'audio/monkey_word.mp3',
  audioSentenceFile: 'audio/monkey_sentence.mp3'
 },
 {
  letter: 's',
  word: 'star',
  phonetic: '/st<span class="long-vowel">ɑː</span>/',
  sentence: 'A star shines.',
  image: 'images/star.svg',
  audioWord: 'star',
  audioSentence: 'A star shines',
  audioWordFile: 'audio/star_word.mp3',
  audioSentenceFile: 'audio/star_sentence.mp3'
 },

 // === 其他类 ===
 {
  letter: 'v',
  word: 'volcano',
  phonetic: '/v<span class="vowel">ɔ</span>/',
  sentence: 'A volcano erupts lava.',
  image: 'images/volcano.svg',
  'audioWord': 'volcano',
  audioSentence: 'A volcano erupts lava',
  audioWordFile: 'audio/volcano_word.mp3',
  audioSentenceFile: 'audio/volcano_sentence.mp3'
 },
 {
  letter: 'x',
  word: 'xylophone',
  phonetic: '/zaɪ<span class="vowel">ə</span>/',
  sentence: 'A xylophone makes music.',
  image: 'images/xylophone.svg',
  audioWord: 'xylophone',
  audioSentence: 'A xylophone makes music',
  audioWordFile: 'audio/xylophone_word.mp3',
  audioSentenceFile: 'audio/xylophone_sentence.mp3'
 },
 {
  letter: 'q',
  word: 'queen',
  phonetic: '/kw<span class="long-vowel">iː</span>/',
  sentence: 'The queen wears a crown.',
  image: 'images/queen.svg',
  audioWord: 'queen',
  audioSentence: 'The queen wears a crown',
  audioWordFile: 'audio/queen_word.mp3',
  audioSentenceFile: 'audio/queen_sentence.mp3'
 }
];