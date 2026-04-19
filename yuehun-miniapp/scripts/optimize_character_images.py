from pathlib import Path
from PIL import Image

SRC_DIR = Path('/home/ubuntu/repos/Jingsai_repo/yuehun-miniapp/client/public/characters')
MAX_WIDTH = 720
MAX_HEIGHT = 1280
QUALITY = 82

for src in sorted(SRC_DIR.glob('*.png')):
    with Image.open(src) as im:
        im = im.convert('RGBA')
        im.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
        dst = src.with_suffix('.webp')
        im.save(dst, format='WEBP', quality=QUALITY, method=6)
        print(f'{src.name} -> {dst.name}')
