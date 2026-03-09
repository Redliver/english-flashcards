import asyncio
import edge_tts
import os
import re

audio_dir = os.path.join(os.path.dirname(__file__), 'audio')
if not os.path.exists(audio_dir):
    os.makedirs(audio_dir)
    print('Created audio directory')

# Read cards-data.js
with open(os.path.join(os.path.dirname(__file__), 'cards-data.js'), 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all cards
pattern = r"\{\s*letter:\s*'([^']+)',\s*word:\s*'([^']+)',[\s\S]*?audioWord:\s*'([^']+)',\s*audioSentence:\s*'([^']+)'"
matches = re.findall(pattern, content)

print(f'Found {len(matches)} cards\n')

async def generate_audio():
    for letter, word, audio_word, audio_sentence in matches:
        word_file = os.path.join(audio_dir, f'{word}_word.mp3')
        sentence_file = os.path.join(audio_dir, f'{word}_sentence.mp3')
        
        try:
            if audio_word:
                communicate = edge_tts.Communicate(audio_word, 'en-US-JennyNeural')
                await communicate.save(word_file)
                print(f'[OK] {word}_word.mp3')
            
            if audio_sentence:
                communicate = edge_tts.Communicate(audio_sentence, 'en-US-JennyNeural')
                await communicate.save(sentence_file)
                print(f'[OK] {word}_sentence.mp3')
        except Exception as e:
            print(f'[FAIL] {word}: {e}')
    
    print('\nAll audio files generated!')

asyncio.run(generate_audio())
