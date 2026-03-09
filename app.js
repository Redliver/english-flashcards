/**
 * 英语卡片学习网站 - JavaScript
 * 功能：语音播放、卡片滑动切换
 * 卡片数据维护：编辑 cards-data.js 文件
 */

// ===== 状态变量 =====
let currentIndex = 0;
let isAnimating = false;
let touchStartX = 0;
let touchEndX = 0;

// ===== DOM 元素 =====
const card = document.getElementById('currentCard');
const letterMarker = document.getElementById('letterMarker');
const cardImage = document.getElementById('cardImage');
const wordText = document.getElementById('wordText');
const phoneticText = document.getElementById('phoneticText');
const fullSentence = document.getElementById('fullSentence');
const currentIndexEl = document.getElementById('currentIndex');
const totalCountEl = document.getElementById('totalCount');
const cardDots = document.getElementById('cardDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playWordBtn = document.getElementById('playWordBtn');
const playSentenceBtn = document.getElementById('playSentenceBtn');

// ===== 初始化 =====
function init() {
  // 更新总数量
  totalCountEl.textContent = cardsData.length;

  // 创建指示点
  createCardDots();

  // 加载第一张卡片
  loadCard(0);

  // 绑定事件
  bindEvents();
}

// ===== 创建卡片指示点 =====
function createCardDots() {
  cardDots.innerHTML = cardsData.map((_, index) =>
  `<div class="card-dot${index === 0 ? ' active' : ''}" data-index="${index}"></div>`
  ).join('');

  // 绑定点击事件
  cardDots.querySelectorAll('.card-dot').forEach(dot => {
  dot.addEventListener('click', () => {
   const index = parseInt(dot.dataset.index);
   if (index !== currentIndex && !isAnimating) {
    goToCard(index);
   }
  });
  });
}

// ===== 加载卡片 =====
function loadCard(index) {
  const cardData = cardsData[index];

  // 更新字母标识
  letterMarker.textContent = cardData.letter;

  // 更新图片
  cardImage.src = cardData.image;
  cardImage.alt = cardData.word;

  // 更新单词（首字母红色）
  wordText.innerHTML = `<span class="first-letter">${cardData.letter}</span>${cardData.word.slice(1)}`;

  // 更新音标（元音高亮）
  phoneticText.innerHTML = cardData.phonetic;

  // 更新完整句子（单词高亮）
  const highlightedSentence = cardData.sentence.replace(
  cardData.word,
  `<span class="highlight-word">${cardData.word}</span>`
  );
  fullSentence.innerHTML = highlightedSentence;

  // 更新进度
  currentIndexEl.textContent = index + 1;

  // 更新指示点
  updateCardDots(index);
}

// ===== 更新卡片指示点 =====
function updateCardDots(activeIndex) {
  cardDots.querySelectorAll('.card-dot').forEach((dot, index) => {
  dot.classList.toggle('active', index === activeIndex);
  });
}

// ===== 切换到指定卡片 =====
function goToCard(index, direction = 'next') {
  if (isAnimating) return;
  if (index < 0 || index >= cardsData.length) return;
  if (index === currentIndex) return;

  isAnimating = true;

  // 添加退出动画
  card.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');

  setTimeout(() => {
   // 加载新卡片
   currentIndex = index;
   loadCard(currentIndex);

   // 移除退出动画，添加进入动画
   card.classList.remove('slide-out-left', 'slide-out-right');
   card.classList.add(direction === 'next' ? 'slide-in-right' : 'slide-in-left');

   setTimeout(() => {
    card.classList.remove('slide-in-left', 'slide-in-right');
    isAnimating = false;
   }, 300);
  }, 300);
}

// ===== 上一张卡片 =====
function prevCard() {
  if (currentIndex > 0) {
  goToCard(currentIndex - 1, 'prev');
  } else {
  // 循环：第一张时右滑到最后一张
  goToCard(cardsData.length - 1, 'prev');
  }
}

// ===== 下一张卡片 =====
function nextCard() {
  if (currentIndex < cardsData.length - 1) {
  goToCard(currentIndex + 1, 'next');
  } else {
  // 循环：最后一张时左滑到第一张
  goToCard(0, 'next');
  }
}

// ===== 语音播放 =====
let speechInit = false;
let speechEngineReady = false;
 
function initSpeech() {

  // 检查是否支持 Web Speech API
  if (!('speechSynthesis' in window)) {
   console.warn('浏览器不支持语音合成');
   if (onComplete) onComplete(false);
   return false;
  }

  if (speechInit || !('speechSynthesis' in window)) return;

  console.log('初始化语音引擎...');

  try {
   // 多次初始化以确保引擎准备好
   const initUtterance = () => {
    const u = new SpeechSynthesisUtterance(' ');
    u.lang = 'en-US';
    u.volume = 0.01;
    u.rate = 0.1;
    window.speechSynthesis.speak(u);
    window.speechSynthesis.cancel();
   };
   speechInit = true;
   speechEngineReady = true;
   console.log('语音引擎初始化完成');
  } catch (e) {
   console.error('语音初始化失败:', e);
  }
}

function speak(text, rate = 0.9) {
  console.log('speak 被调用:', text);


  // 初始化语音
  if (!speechInit) {
   initSpeech();
  }
 
  const synth = window.speechSynthesis;
  // 获取英语语音
  const availableVoices = synth.getVoices();
  const englishVoice = availableVoices.find(v => v.lang.startsWith('en-US'));

  // 创建语音
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (englishVoice) utterance.voice = englishVoice;

  // 直接播放，不等待事件
  console.log('播放:', text, 'voice:', englishVoice ? englishVoice.name : 'default');

  //synth.cancel()
  //synth.resume()
  synth.speak(utterance)

  return true;
}

function playLocalAudio(audioFile) {
  speechEnable = false;
  console.log('播放本地音频:', audioFile);
  const audio = new Audio(audioFile);
  audio.play().catch(e => {
   console.error('本地音频播放失败:', e);
   speak(text, 0.9);
  });
}

// ===== 播放单词 =====
function playWord() {
  console.log('=== playWord 被调用 ===');
  const cardData = cardsData[currentIndex];
  const text = cardData.audioWord || cardData.word;
  console.log('当前卡片:', cardData.word);
  playLocalAudio(cardData.audioWordFile);
  card.classList.add('playing');
  setTimeout(() => card.classList.remove('playing'), 200);
}

// ===== 播放句子 =====
function playSentence() {
  console.log('=== playSentence 被调用 ===');
  const cardData = cardsData[currentIndex];
  const text = cardData.audioSentence || cardData.sentence.replace(/"/g, '');
  playLocalAudio(cardData.audioSentenceFile);
  fullSentence.classList.add('playing');
  setTimeout(() => fullSentence.classList.remove('playing'), 200);
}

// ===== 触摸事件处理 =====
let touchStartY = 0;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchEndX = touchStartX;
}

function handleTouchMove(e) {
  touchEndX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  const touchEndY = e.changedTouches[0].clientY;
  const swipeThreshold = 50;
  const diffX = touchStartX - touchEndX;
  const diffY = Math.abs(touchStartY - touchEndY);

  // 只有水平滑动且垂直偏移不大时才切换
  if (Math.abs(diffX) > swipeThreshold && diffY < 100) {
  if (diffX > 0) {
    // 左滑 - 下一张
    nextCard();
  } else {
    // 右滑 - 上一张
    prevCard();
  }
  }
}

// ===== 鼠标拖拽事件处理 =====
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;

function handleMouseDown(e) {
  // 只响应鼠标左键
  if (e.button !== 0) return;

  // 如果点击的是控制按钮，不处理拖拽
  if (e.target.closest('.controls')) return;

  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);

  // 防止默认拖拽行为
  e.preventDefault();
}

function handleMouseMove(e) {
  if (!isDragging) return;

  const diffX = e.clientX - dragStartX;
  const diffY = Math.abs(e.clientY - dragStartY);

  // 如果水平移动超过 50px 且垂直移动不大，视为滑动
  if (Math.abs(diffX) > 50 && diffY < 100) {
  isDragging = false;
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);

  if (diffX > 0) {
    // 右滑 - 上一张
    prevCard();
  } else {
    // 左滑 - 下一张
    nextCard();
  }
  }
}

function handleMouseUp(e) {
  isDragging = false;
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
}

// ===== 键盘事件处理 =====
function handleKeyDown(e) {
  switch (e.key) {
  case 'ArrowLeft':
   prevCard();
   break;
  case 'ArrowRight':
   nextCard();
   break;
  case ' ':
  case 'Enter':
   e.preventDefault();
   playWord();
   break;
  }
}

// ===== 绑定事件 =====
function bindEvents() {
  // 第一次点击页面时初始化语音引擎
  document.addEventListener('click', () => {
  console.log('页面点击 - 初始化语音引擎');
  initSpeech();
  }, { once: true });

  // 按钮事件
  prevBtn.addEventListener('click', prevCard);
  nextBtn.addEventListener('click', nextCard);
  playWordBtn.addEventListener('click', () => {
  console.log('=== 播放按钮点击 ===');
  playWord();
  });
  playSentenceBtn.addEventListener('click', () => {
  console.log('=== 句子播放按钮点击 ===');
  playSentence();
  });

  // 卡片点击播放单词
  card.addEventListener('click', (e) => {
  console.log('=== 卡片点击 ===');
  // 如果点击的是控制按钮，不触发卡片点击
  if (e.target.closest('.controls')) {
    console.log('点击的是控制按钮，不播放');
    return;
  }
  playWord();
  });

  // 句子区域点击播放句子
  fullSentence.addEventListener('click', playSentence);

  // 触摸滑动事件
  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchmove', handleTouchMove, { passive: true });
  document.addEventListener('touchend', handleTouchEnd);

  // 鼠标拖拽事件
  card.addEventListener('mousedown', handleMouseDown);

  // 键盘事件
  document.addEventListener('keydown', handleKeyDown);

  // 语音列表加载完成事件
  if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    // 语音列表已更新
  };
  }
}

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', init);

// ===== 页面卸载前清理 =====
window.addEventListener('beforeunload', () => {
  if (window.speechSynthesis) {
  window.speechSynthesis.cancel();
  }
});
