const { toVoice, voices } = require("edge-tts-nodejs");
const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir);
  console.log('创建 audio 目录');
}

console.log('开始生成音频文件...\n');

const cardsDataFile = fs.readFileSync(path.join(__dirname, 'cards-data.js'), 'utf-8');

const cardsData = [];

const cardMatches = cardsDataFile.matchAll(/\{\s*letter:\s*['"]([^'"]+)['"],\s*word:\s*['"]([^'"]+)['"],[\s\S]*?audioWord:\s*['"]([^'"]+)['"],\s*audioSentence:\s*['"]([^'"]+)['"][\s\S]*?\}/g);

for (const match of cardMatches) {
  const letter = match[1];
  const word = match[2];
  const audioWord = match[3];
  const audioSentence = match[4];
  
  cardsData.push({ letter, word, audioWord, audioSentence });
}

console.log(`找到 ${cardsData.length} 个卡片\n`);

for (const card of cardsData) {
  const wordFile = path.join(audioDir, `${card.word}_word.mp3`);
  const sentenceFile = path.join(audioDir, `${card.word}_sentence.mp3`);
  
  try {
    if (card.audioWord) {
      toVoice(card.audioWord, wordFile, {
        voice: "en-US-JennyNeural"
      });
      console.log(`✓ ${card.word}_word.mp3`);
    }
    
    if (card.audioSentence) {
      toVoice(card.audioSentence, sentenceFile, {
        voice: "en-US-JennyNeural"
      });
      console.log(`✓ ${card.word}_sentence.mp3`);
    }
  } catch (error) {
    console.error(`✗ ${card.word} 生成失败:`, error.message);
  }
}

console.log('\n全部生成完成！');
