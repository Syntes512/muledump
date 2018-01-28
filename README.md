![Jakcodex/Muledump](https://img.shields.io/badge/jakcodex-muledump-blue.svg?style=flat-square)
[![Muledump Local](https://img.shields.io/badge/dynamic/json.svg?label=local&colorB=4286f4&prefix=v&suffix=&query=$.version&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjakcodex%2Fmuledump%2Fmaster%2Fpackage.json)](https://github.com/jakcodex/muledump/releases/)
[![Muledump Online](https://img.shields.io/badge/dynamic/json.svg?label=online&colorB=9e43f9&prefix=v&suffix=&query=$.version&uri=https%3A%2F%2Fjakcodex.github.io%2Fmuledump%2Fpackage.json)](https://jakcodex.github.io/muledump/muledump.html)
[![Muledump Preview](https://img.shields.io/badge/dynamic/json.svg?label=preview&colorB=5942f4&prefix=v&suffix=&query=$.version&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjakcodex%2Fmuledump-preview%2Fmaster%2Fpackage.json)](https://jakcodex.github.io/muledump-preview/muledump.html)

## Welcome

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

## Main Features

- Manage all of your ROTMG accounts from a single interface
- [SetupTools](docs/setuptools/index.md) - An easy to use, browser-based user interface for managing Muledump
- [Groups Manager](docs/setuptools/groups-manager/manager.md) - Account grouping and ordering utility to customize the Muledump accounts list
- [Muledump Online](https://jakcodex.github.io/muledump/muledump.html) - Load Muledump directly from Github using SetupTools
- MuleQueue - Task queuing to control the flow of requests from Muledump
- Vault display is now fully customizable and comes with four pre-defined layouts
- Full character skin and dye support in portraits
- Totals filtering on fame bonus, feed power, soulbound, ut, and st
- Character Sorting by fame, exp, total fame, class, active time, maxed stats, and custom lists
- Character Lists allow you to create custom Muledump account layouts showing only characters you specify 
- Exporting works with the following modes: text, csv, json, image, imgur
- Fully compliant with Deca rate limiting

## Not so obvious features

- click on item to filter accounts that hold it
- click on account name for individual options menu
- ctrl-click account name to temporarily hide it from totals
- logins thru muledump count towards daily login calendar
- account settings include automatic reload, login-only (daily calendar only), and cache disable

## Проверьте [часто задаваемые вопросы](https://github.com/Syntes512/muledump/wiki/Часто-задаваемые-вопросы) и просмотрите [wiki](https://github.com/Syntes512/muledump/wiki) для получения более подробной информации!

<a id="jakcodex-supportandcontributions"></a>
## Support and Contributions

Jakcodex/Muledump operates its own support Discord server - [https://discord.gg/JFS5fqW](https://discord.gg/JFS5fqW).

Feel free to join and ask for help getting setup, hear about new updates, offer your suggestions and feedback, or just say hi.

If you encounter a bug, have a feature request, or have any other feedback you can also check out the [issue tracker](https://github.com/jakcodex/muledump/issues) to see if it's already being discussed. If not then you can [submit a new issue](https://github.com/jakcodex/muledump/issues/new).

If you are interested in helping test new versions of this software before release then check out [Muledump Preview](https://github.com/jakcodex/muledump-preview/) for the recent stable development builds of Muledump.

Feel free to submit pull requests or patches if you have any Muledump changes you'd like to contribute. See [Contributing](https://github.com/jakcodex/muledump/wiki/Contributing) for more information.

## Version and Update Information

Muledump versions are described as x.y.p where x is the major version, y is the minor version, and p is the patch version.

All incrementes of x or y are published as an official Muledump Local release. Subsequent patches after release will not be published as a new release.

Muledump Online always runs the latest version of Muledump with all patches.

## Special Thanks

Muledump Renders and Constants are maintained by [tuvior](https://github.com/tuvior).

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
