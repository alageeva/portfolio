# Портфолио Саши Агеевой

Полная статическая копия сайта находится в `public/`: HTML, CSS, JavaScript, изображения, видео и CV. Для работы ей не нужен прежний хостинг.

## Публикация

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Actions → **Publish portfolio** → Run workflow → main.
3. После успешной публикации проверьте https://alageeva.github.io/portfolio/ .
4. После проверки можно настроить Custom domain: `sashaa.art` и переключить DNS на GitHub Pages.

Текущий домен не переключён. Файлы в public можно изменять напрямую: push в main запускает публикацию.

## Локальный запуск

```sh
python -m http.server 8000 --directory public
```

Открыть http://localhost:8000 . Скрипт `scripts/build_pages.py` адаптирует пути для GitHub Pages. `scripts/site-manifest.json` хранит контрольные суммы первоначального экспорта; импорт был выполнен один раз, обычная публикация ничего не скачивает с прежнего сайта.
