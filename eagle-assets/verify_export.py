#!/usr/bin/env python3
"""Verify the complete Eagle export after `git lfs pull`. No dependencies required."""
import hashlib
import json
import pathlib
import sys

root = pathlib.Path(__file__).resolve().parent
items = json.loads((root / 'metadata/items.json').read_text())
errors = []
for item in items:
    path = root / item['file']
    if not path.is_file():
        errors.append(f"缺少文件：{item['file']}")
        continue
    h = hashlib.sha256()
    with path.open('rb') as f:
        first = f.read(128)
        if first.startswith(b'version https://git-lfs.github.com/spec/v1'):
            errors.append(f"尚未下载 LFS 原文件：{item['file']}")
            continue
        h.update(first)
        for block in iter(lambda: f.read(1024 * 1024), b''):
            h.update(block)
    if path.stat().st_size != item['bytes'] or h.hexdigest() != item['sha256']:
        errors.append(f"校验失败：{item['file']}")
if errors:
    print('\n'.join(errors))
    print('若看到 LFS 指针文件，请在仓库目录运行 git lfs pull 后重试。')
    sys.exit(1)
print(f"已通过 SHA-256 校验：{len(items)} / {len(items)} 个 Eagle 原文件。")
