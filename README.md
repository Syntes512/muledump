![Jakcodex/Muledump](https://img.shields.io/badge/jakcodex-muledump-blue.svg?style=flat-square)
[![Muledump Local](https://img.shields.io/badge/dynamic/json.svg?label=local&colorB=4286f4&prefix=v&suffix=&query=$.version&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjakcodex%2Fmuledump%2Fmaster%2Fpackage.json)](https://github.com/jakcodex/muledump/releases/)
[![Muledump Online](https://img.shields.io/badge/dynamic/json.svg?label=online&colorB=9e43f9&prefix=v&suffix=&query=$.version&uri=https%3A%2F%2Fjakcodex.github.io%2Fmuledump%2Fpackage.json)](https://jakcodex.github.io/muledump/muledump.html)
[![Muledump Preview](https://img.shields.io/badge/dynamic/json.svg?label=preview&colorB=5942f4&prefix=v&suffix=&query=$.version&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjakcodex%2Fmuledump-preview%2Fmaster%2Fpackage.json)](https://jakcodex.github.io/muledump-preview/muledump.html)

## Приветствие

Это переработка оригинального [Muledump](https://github.com/atomizer) от Atomizer, первоначальной идеей заключалось исправление некоторых ошибок.

Вы можете прочитать про причины создания новой версии в файле [upstream notes](UPSTREAM.md).

## Обзор

Этот инструмент позволяет вам отображать содержимое всех ваших учетных записей на одной странице (персонажей, их статистику и вещи, вещи в сундуках). Также он генерирует сводку всех предметов - вы, вероятно, видели скриншоты на торговом форуме ([пример](https://imgur.com/dDA2vC9)).

Основная цель игры - получать удовольствие. Как известно, мулинг - не является веселым занятием. Мы попытались увеличить общее соотношение удовольствия, уменьшив количество затрачиваемого времени на мулинг.

## Требования

В настоящее время из-за того, как Deca обрабатывают запросы к своим серверам мы вынуждены использовать специальное расширение.

Просмотрите файл [Requirements](REQUIREMENTS.md) для получения более полной информации.

### Перейдите к [инструкции по установке](https://github.com/Syntes512/muledump/wiki/Инструкция-по-установке) на вики, для более полного понимания всех деталей.

## Информация о релизе

Jakcodex/Muledump v9.1.6

Muledump Online доступен по [ссылке](https://jakcodex.github.io/muledump-preview/muledump.html).

Все выпущеные версии доступны [здесь](https://github.com/jakcodex/muledump/releases).

## Muledump Online Version

- Откройте **```https://jakcodex.github.io/muledump/muledump.html```**
- Опытные пользователи могут воспользоваться импортом accounts.js
- Новые пользователи могут воспользоваться инструкцией по установке.
- Эта версия будет использовать локальное хранилище вашего компьютера, все обновления будут вводиться как только выйдут.
- Вся информация, которая будет сохраняться в процессе работы, никогда не будет отправлена куда-либо.

## Muledump Local Version

- Разархивируйте последнюю версию
- Откройте файл **`muledump.html`**
- Новые пользователи могут воспользоваться инструкцией по установке.
- Опытные пользователи могут использовать импорт accounts.js

## Основные возможности

- Управляйте вашими аккаунтами на одной странице
- [SetupTools](docs/setuptools/index.md) - Простой в использовании пользовательский интерфейс на основе браузера для управления Muledump
- [Groups Manager](docs/setuptools/groups-manager/manager.md) - Утилита группировки учетных записей и собственной настройки списков учетных записей Muledump
- [Muledump Online](https://jakcodex.github.io/muledump/muledump.html) - Используйте Muledump не скачивания его на компьютер, все данные сохранятся в локальное хранилище
- MuleQueue - Целевая очередь на обновление аккаунтов для управления потоком запросов от Muledump
- Отображение Vault теперь полностью настраивается и поставляется с четырьмя заранее настроенными макетами
- Полная поддержка скинов и красок в аннотациях
- Сводка поддерживает фильтрацию предметов по количеству фида, по фейм-бонусу, по типу предмета: SB/ST/UT
- Сортировка персонажей по фейму, количеству опыта, по итогову фейму, по классам, по количеству активного времени, по максимальным характеристикам, либо же по собственному листу сортировки
- Листы персонажей позволят вам управлять отображением аккаунтов и создавать собственные макеты учетных записей Muledump
- Экспорт общей сводки работает в следующие форматы: text, csv, json, image, imgur
- Полностью совместим с ограничением запросов от Deca

## Не столь очевидные возможности

- Кликните на предмете, для того чтобы отфильтровать аккаунты, на которых он присутствует
- Кликните на имя аккаунта, для открытия персонального меню
- Ctrl + Click позволит вам на время скрыть аккаунт из общей сводки
- Обновление аккаунтов через Muledump позволит вам засчитать вход в игру
- Параметры учетных записей содержат разные параметры обновления, например автоматическая перезагрузка, либо же только-логин (для ежедневного календаря), а также есть возможность отключения кэширования.

## Проверьте [часто задаваемые вопросы](https://github.com/Syntes512/muledump/wiki/Часто-задаваемые-вопросы) и просмотрите [wiki](https://github.com/Syntes512/muledump/wiki) для получения более подробной информации!

<a id="jakcodex-supportandcontributions"></a>
## Поддержка и распространение

Jakcodex/Muledump имеет собственный сервер в [Discord](https://discord.gg/JFS5fqW).

Не стесняйтесь присоединяться и просите о помощи в настройке, узнайте о новых обновлениях, предложите свои предложения, напишите отзыв или просто скажите привет.

Если вы столкнулись с багом, имеете запрос на функцию или любой другой запрос, вы также можете проверить [баг-трекер](https://github.com/jakcodex/muledump/issues) чтобы узнать, есть ли это на пометке. Если вы не нашли темы по своему вопросу, то вы можете [создать новый запрос](https://github.com/jakcodex/muledump/issues/new).

Если вы заинтересованы в тестировании новых версий до их официального выхода, вы можете проверить [Muledump Preview](https://github.com/jakcodex/muledump-preview/), там вы найдете стабильные выпуски, в которых находятся новые функции, которые в будущем будут добавлены в оригинальный Muledump.

Не стесняйтесь отправлять запросы на добавления или исправления, если у вас есть какие-либо рекомендации по изменению Muledump, которые вы хотели бы внести. Смотрите [Contributing](https://github.com/jakcodex/muledump/wiki/Contributing) для полее полной информации.

## Версии и информация об обновлениях

Версия Muledump указывается по шаблону x.y.p где x это основная версия, y это второстепенная версия, и p это версия патча.

Все обновления x или y публикуются на официальном репозитории Muledump Local. Все изменения, которые сделаны в версиях патча, публикуются только в репозитории muledump-preview

Онлайн версия Muledump всегда запускается со всеми последними обновлениями.

## Специальная благодарность

Обновление изображений предметов и их описание ведет [tuvior](https://github.com/tuvior).

## FYI

The following paths are for Github Pages configuration and are not apart of the Muledump code: _layouts, assets, and _config.yml.

## Privacy Policy

Click to read more about our [Privacy Policy](privacy-policy.md).

## Jakcodex/Muledump License

Copyright 2017 [Jakcodex](https://github.com/jakcodex)

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
