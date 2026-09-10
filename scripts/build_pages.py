"""Prepare GitHub Pages output, including project-URL support."""
import os
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
out = root / "_site"
if out.exists():
    shutil.rmtree(out)
shutil.copytree(root / "public", out)
base = os.environ.get("PAGES_BASE_PATH", "").rstrip("/")
if base:
    for f in out.rglob("*"):
        if not f.is_file() or f.suffix not in {".html", ".js", ".css", ".json"}:
            continue
        text = f.read_text()
        for prefix in ("/assets/", "/style.css", "/app.js", "/videos.js", "/interactions.json"):
            text = text.replace(prefix, base + prefix)
        text = text.replace('href="/', 'href="' + base + '/')
        # Asset hrefs were already changed above.
        text = text.replace(base + base + "/", base + "/")
        if f.name == "app.js":
            text = text.replace("location.pathname.replace(", "location.pathname.slice(" + str(len(base)) + ").replace(")
            text = text.replace("location.replace('/')", "location.replace('" + base + "/')")
        f.write_text(text)
print("Prepared Pages output at", base or "/")
