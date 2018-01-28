## Settings Manager

### Muledump Settings

#### ```Персонажи отображаемые в линию```
Максимальное количество персонажей, которое будет отображаться на странице в линию.

#### ```Включить логин в один клик```
Включает или отключает поддержку muledump:// links.

#### ```Price Display in Tooltips```
Отображает информацию о "ценности" в аннотации к предмету

#### ```Использовать умную сетку```
Используется или же нет Masonry для генерации страницы.

#### ```Testing```
Переключает метод отправления запросов, независимо от того какой продукт вы используете, готовый или тестовый.

### SetupTools Settings

#### ```Помощник активен```
Использовать функции SetupTools или же использовать традиционный формат accounts.js.

#### ```Задержка загрузки аккаунтов```
Задержка перед следующим отправлением запроса на перезагрузку, нужна для того, чтобы не получать ограничение от Deca.

Установка на показатель "Automatic" будет ориентироваться на количество ваших аккаунтов.

#### ```Автоматическое резервное копирование```
Автоматически создает резервную копию конфигурации каждый день.

#### ```Журнал отладки```
Записывает лог для отладки, используется разработчиками

#### ```Режим менеджера групп```
В каком режиме работает менеджер групп. Возможные режимы::

##### Off
Конфигурация не загружается.

##### On, Parallel
Учетные записи диспетчера групп объединены с сохраненным порядком.

Example: [a, b, c] + [d, e, f] + [g, h, i] = [a, d, g, b, e, h, c, f, i]

##### On, Serial
Учетные записи диспетчера групп объединены по порядку.

Example: [a, b, c] + [d, e, f] + [g, h, i] = [a, b, c, d, e, f, g, h, i]

#### ```Длительность нажатия```
Нажатие ЛКМ для активации.

#### ```Максимум резервных копий```
В SetupTools хранятся резервные копии в локальном хранилище вашего браузера. Это использует дисковое пространство на вашем компьютере. Эта функция ограничивает максимальное количество открытых резервных копий до автоматического удаления самого старого.

#### ```Позиция меню```
Позиция Muledump меню.

#### ```Заранее скачивать обновления```
При загрузке данных из SetupTools эта функция запрещает вам случайно загружать резервную копию конфиденциальной информации учетной записи в папку «Загрузки».

### Assistants Settings

#### ```Account Assistant```
Displays an assistant when account issues are detected (TOS, migration, age verification).

#### ```Backup Assistant```
Displays a reminder to download a backup if a certain period of time has gone by since last download.

#### ```CORS Assistant```
Displays an assistant to help resolve CORS problems when they are detected. 

### System Settings

#### ```Erase SetupTools```
Erases all SetupTools-specific configuration and restores Muledump to its original state.

#### ```Erase Cached Data```
Erases all cached account data for Muledump. Useful when account data appears to be bad.

#### ```Erase All Data```
Erases all Muledump data including SetupTools, options, accounts, groups, backups, etc.

#### ```Reset to Default Settings```
Restore all settings to the default SetupTools configuration.
