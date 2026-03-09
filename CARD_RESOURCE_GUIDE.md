# 卡片资源生成操作说明

本文档说明如何为英语卡片学习网站添加新的单词卡片，包括创建SVG图片和生成音频文件。

---

## 一、添加新卡片的步骤

### 1. 编辑 `cards-data.js`

在 `cards-data.js` 文件中添加新的卡片对象：

```javascript
{
  letter: 'a',                    // 单词首字母
  word: 'ant',                    // 单词
  phonetic: '/<span class="vowel">æ</span>/nt/',  // 音标（可使用HTML标记高亮元音）
  sentence: 'An ant is small.',     // 例句
  image: 'images/ant.svg',         // 图片路径
  audioWord: 'ant',               // 单词发音文本
  audioSentence: 'An ant is small',  // 句子发音文本
  audioWordFile: 'audio/ant_word.mp3',      // 单词音频文件路径
  audioSentenceFile: 'audio/ant_sentence.mp3'  // 句子音频文件路径
}
```

### 2. 创建SVG图片

在 `images/` 目录下创建对应的SVG文件。

#### SVG图片要求

- **尺寸**：200x150 像素（viewBox="0 0 200 150"）
- **格式**：SVG格式
- **命名**：`{word}.svg`（例如：ant.svg）

#### SVG示例模板

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
  <!-- 背景 -->
  <rect width="200" height="150" fill="#87CEEB"/>
  
  <!-- 物体主体 -->
  <circle cx="100" cy="75" r="40" fill="#FFD700"/>
  
  <!-- 细节（眼睛、嘴巴等） -->
  <circle cx="90" cy="70" r="5" fill="black"/>
  <circle cx="110" cy="70" r="5" fill="black"/>
  <path d="M 90 85 Q 100 95 110 85" stroke="black" stroke-width="2" fill="none"/>
</svg>
```

#### SVG设计建议

1. **背景色**：使用浅色背景（如 #87CEEB 天蓝色）
2. **主体颜色**：使用明亮、对比度高的颜色
3. **线条**：使用 `stroke-linecap="round"` 使线条更圆润
4. **居中**：主要元素应位于画面中央（约 x=100, y=75）

#### SVG工具推荐

- **在线编辑器**：https://svg-edit.github.io/svgedit/releases/latest/editor/svg-editor.html
- **Figma/Sketch**：导出为SVG格式
- **手绘**：使用Inkscape等矢量绘图软件

### 3. 生成音频文件

使用 Python 脚本生成音频文件。

#### 前置要求

1. 安装 Python 3.10+
2. 安装 edge-tts 库：

```bash
pip install edge-tts
```

#### 生成单个音频文件

```python
import asyncio
import edge_tts

async def generate():
    # 生成单词音频
    communicate = edge_tts.Communicate('ant', 'en-US-JennyNeural')
    await communicate.save('audio/ant_word.mp3')
    
    # 生成句子音频
    communicate = edge_tts.Communicate('An ant is small', 'en-US-JennyNeural')
    await communicate.save('audio/ant_sentence.mp3')

asyncio.run(generate())
```

#### 批量生成所有音频

使用项目提供的生成脚本：

```bash
python generate-audio.py
```

#### 音频参数说明

- **语音**：`en-US-JennyNeural`（美国英语，女声）
- **其他可选语音**：
  - `en-US-GuyNeural`（男声）
  - `en-US-AriaNeural`（女声，更自然）
  - `en-US-EmmaMultilingualNeural`（多语言支持）

查看所有可用语音：

```python
import edge_tts
print(edge_tts.list_voices())
```

---

## 二、完整示例

假设要添加 "ant"（蚂蚁）这个单词：

### 1. 编辑 cards-data.js

```javascript
const cardsData = [
  // ... 其他卡片 ...
  {
    letter: 'a',
    word: 'ant',
    phonetic: '/<span class="vowel">æ</span>/nt/',
    sentence: 'An ant is small.',
    image: 'images/ant.svg',
    audioWord: 'ant',
    audioSentence: 'An ant is small',
    audioWordFile: 'audio/ant_word.mp3',
    audioSentenceFile: 'audio/ant_sentence.mp3'
  }
];
```

### 2. 创建 ant.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
  <!-- 背景 -->
  <rect width="200" height="150" fill="#87CEEB"/>
  <ellipse cx="100" cy="135" rx="80" ry="15" fill="#90EE90"/>
  
  <!-- 蚂蚁身体 -->
  <ellipse cx="100" cy="80" rx="25" ry="15" fill="#8B4513"/>
  <ellipse cx="70" cy="85" rx="15" ry="10" fill="#8B4513"/>
  <ellipse cx="130" cy="85" rx="15" ry="10" fill="#8B4513"/>
  
  <!-- 蚂蚁腿 -->
  <line x1="90"ari y1="90" x2="85" y2="105" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
  <line x1="110" y1="90" x2="115" y2="105" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
  <line x1="65" y1="92" x2="60" y2="105" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
  <line x1="75" y1="92" x2="70" y2="105" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
  <line x1="125" y1="92" x2="130" y2="105" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
  <line x1="135" y1="92" x2="140" y2="105" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
  
  <!-- 蚂蚁触角 -->
  <line x1="90" y1="70" x2="80" y2="55" stroke="#8B4513" stroke-width="2" stroke-linecap="round"/>
  <line x1="110" y1="70" x2="120" y2="55" stroke="#8B4513" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### 3. 生成音频

```bash
python -c "
import asyncio
import edge_tts

async def generate():
    c1 = edge_tts.Communicate('ant', 'en-US-JennyNeural')
    await c1.save('audio/ant_word.mp3')
    print('[OK] ant_word.mp3')
    
    c2 = edge_tts.Communicate('An ant is small', 'en-US-JennyNeural')
    await c2.save('audio/ant_sentence.mp3')
    print('[OK] ant_sentence.mp3')

asyncio.run(generate())
"
```

---

## 三、音标高亮说明

在 `phonetic` 字段中可以使用HTML标记来高亮元音：

| 类名 | 用途 | 示例 |
|-------|--------|------|
| `vowel` | 短元音 | `<span class="vowel">æ</span>` |
| `long-vowel` | 长元音 | `<span class="long-vowel">iː</span>` |
| `diphthong` | 双元音 | `<span class="diphthong">eɪ</span>` |

颜色效果：
- 短元音：粉色
- 长元音：紫色
- 双元音：橙色

---

## 四、常见问题

### Q1: 音频生成失败怎么办？

**A:** 可能是网络问题或服务暂时不可用。可以：
1. 等待一段时间后重试
2. 检查网络连接
3. 尝试更换语音

### Q2: SVG图片显示不正确？

**A:** 检查：
1. viewBox 属性是否正确（应为 "0 0 200 150"）
2. SVG 语法是否正确
3. 文件名是否与卡片数据中的 `word` 一致

### Q3: 如何批量重新生成所有音频？

**A:** 运行项目提供的脚本：

```bash
python generate-audio.py
```

### Q4: 生成的音频文件太大？

**A:** edge-tts 生成的 MP3 文件通常在 10-30KB 之间，这是正常的。如果需要压缩，可以使用音频编辑软件。

---

## 五、文件结构

```
to-do-demo/
├── index.html              # 主页面
├── app.js                 # 应用逻辑
├── cards-data.js          # 卡片数据
├── generate-audio.py      # 音频生成脚本
├── audio/                 # 音频文件目录
│   ├── duck_word.mp3
│   ├── duck_sentence.mp3
│   └── ...
└── images/                # 图片文件目录
    ├── duck.svg
    ├── cat.svg
    └── ...
```

---

## 六、测试

完成以上步骤后：

1. 刷新浏览器页面
2. 导航到新添加的卡片
3. 点击卡片或播放按钮测试语音
4. 检查图片和音标显示是否正确

---

**注意**：所有修改完成后，记得刷新浏览器以查看更新。
