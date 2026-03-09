# 英语卡片学习 (English Flashcards)

儿童英语学习闪卡应用，通过图片、音标、例句和语音帮助孩子学习英语词汇。

## 功能特点

- 词汇卡片展示（图片 + 单词 + 音标）
- 例句学习
- 语音朗读（单词 / 句子）
- 多种交互方式：点击、滑动、键盘操作
- 元音颜色标记（辅助发音学习）

## 使用方法

直接用浏览器打开 `index.html` 即可使用。

## 项目结构

```
├── index.html      # 主页面
├── app.js          # 核心逻辑
├── cards-data.js   # 卡片数据
├── styles.css      # 样式
├── images/         # SVG 图片资源
└── audio/          # 音频文件
```

## 添加新卡片

### 1. 编辑卡片数据

在 `cards-data.js` 的 `cardsData` 数组中添加卡片对象：

```javascript
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
}
```

### 2. 创建SVG图片

在 `images/` 目录下创建对应的SVG文件。

**SVG要求：**
- 尺寸：200x150 像素（viewBox="0 0 200 150"）
- 命名：`{word}.svg`

**SVG示例模板：**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
  <rect width="200" height="150" fill="#87CEEB"/>
  <circle cx="100" cy="75" r="40" fill="#FFD700"/>
  <circle cx="90" cy="70" r="5" fill="black"/>
  <circle cx="110" cy="70" r="5" fill="black"/>
  <path d="M 90 85 Q 100 95 110 85" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

**SVG工具推荐：**
- 在线编辑器：https://svg-edit.github.io/svgedit/releases/latest/editor/svg-editor.html
- Figma/Sketch：导出为SVG格式
- Inkscape：矢量绘图软件

### 3. 生成音频文件

使用 Python 脚本生成音频文件。

**前置要求：**
```bash
pip install edge-tts
```

**生成单个音频文件：**
```python
import asyncio
import edge_tts

async def generate():
    communicate = edge_tts.Communicate('apple', 'en-US-JennyNeural')
    await communicate.save('audio/apple_word.mp3')
    
    communicate = edge_tts.Communicate('An apple is red', 'en-US-JennyNeural')
    await communicate.save('audio/apple_sentence.mp3')

asyncio.run(generate())
```

**批量生成所有音频：**
```bash
python generate-audio.py
```

### 4. 音标高亮

在 `phonetic` 字段中使用HTML标记高亮元音：

| 类名 | 用途 | 示例 |
|-------|--------|------|
| `vowel` | 短元音 | `<span class="vowel">æ</span>` |
| `long-vowel` | 长元音 | `<span class="long-vowel">iː</span>` |
| `diphthong` | 双元音 | `<span class="diphthong">eɪ</span>` |

颜色效果：短元音（粉色）、长元音（紫色）、双元音（橙色）

## 交互方式

- **点击卡片**：朗读单词
- **点击例句**：朗读句子
- **左右箭头 / 滑动**：切换卡片
- **空格键 / Enter**：朗读单词