"""Import the existing portfolio once; verify every file before committing."""
import hashlib
import json
from pathlib import Path
import subprocess
from urllib.parse import quote
from concurrent.futures import ThreadPoolExecutor

ROOT = Path(__file__).resolve().parents[1]
def download(item):
    path = item["path"]
    if path.startswith("/") or ".." in Path(path).parts:
        raise ValueError(path)
    target = ROOT / "public" / path
    if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest() == item["sha256"]:
        return
    data = subprocess.check_output(["curl", "--fail", "--silent", "--show-error", "--max-time", "120", "https://sashaa.art/" + quote(path)])
    if hashlib.sha256(data).hexdigest() != item["sha256"]:
        raise ValueError("Checksum mismatch: " + path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    print("Imported", path, flush=True)

with ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(download, json.loads((ROOT / "scripts/site-manifest.json").read_text())))
(ROOT / "public/.nojekyll").touch()
print("All website files verified")
