# APP board

[Живая страница](https://luxplanjay.github.io/webpack-starter-kit/) после деплоя
через `npm run deploy`.

### Dev и Prod

- `npm start` - запускает режим разработки с дев-сервером
- `npm run build` - запускает режим сборки в прод, создастся папка `build`

### Deployment

`npm run deploy` - запускает сборку в прод, после чего деплоит проект на GitHub
Pages в репозиторий из свойства `homepage` в `package.json`. Автоматически
создает ветку `gh-pages` в репозитории.
