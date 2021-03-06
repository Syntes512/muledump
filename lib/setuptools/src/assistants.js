//  help users with account administrative issues
setuptools.app.assistants.account = function(url, extraopts, callback) {

    //  if it isn't defined then it is an unknown type
    if ( !extraopts.type || typeof setuptools.state.assistant[extraopts.type] !== 'boolean' ) {

        window.techlog('MD/accountAssistant encountered unknown type ' + extraopts.type, 'force');
        return;

    }

    //  set this assistant to active (2 or more occurrences will cause the subsequent ones to be ignored)
    if ( extraopts.type === 'ageVerify' && setuptools.state.assistant[extraopts.type] === false ) {

        setuptools.lightbox.build('muledump-account-assistant', ' \
				Вам необходимо подтвердить свой возраст для использования аккаунта. \
				<br><br>Пожалуйста, перейдите по ссылке: <a href="' + url + '" target="_blank">' + url + '</a> \
				<br><br>Когда будете готовы <a href="#" class="setuptools app link popupComplete">нажмите здесь</a> для продолжения. \
				<br><br>Вы можете отключить помощника в <a href="#" class="setuptools app link settingsmanager">настройках</a>. \
			');
        setuptools.lightbox.settitle('muledump-account-assistant', 'Kongregate Age Verification');
        setuptools.lightbox.drawhelp('muledump-account-assistant', 'docs/muledump/ageVerify', 'Age Verification Help');

    } else if ( extraopts.type === 'tos' && setuptools.state.assistant[extraopts.type] === false ) {

        setuptools.lightbox.build('muledump-account-assistant', ' \
				Вы должны принять условия соглашения для использования аккаунта. \
				<br><br>Пожалуйста, перейдите по ссылке: <a href="' + url + '" target="_blank">' + url + '</a> \
				<br><br>Когда будете готовы <a href="#" class="setuptools app link popupComplete">нажмите здесь</a> для продолжения. \
				<br><br>Вы можете отключить помощника в <a href="#" class="setuptools app link settingsmanager">настройках</a>. \
			');
        setuptools.lightbox.settitle('muledump-account-assistant', 'TOS Verification');
        setuptools.lightbox.drawhelp('muledump-account-assistant', 'docs/muledump/tos', 'TOS Verification Help');

    } else if ( extraopts.type === 'migration' && setuptools.state.assistant[extraopts.type] === false ) {

        setuptools.lightbox.build('muledump-account-assistant', ' \
				Вы должны окончить перенос аккаунта для его использования. \
				<br><br>Пожалуйста, перейдите по ссылке: <a href="' + url + '" target="_blank">' + url + '</a> \
				<br><br>Когда будете готовы <a href="#" class="setuptools app link popupComplete">нажмите здесь</a> для продолжения. \
				<br><br>Внимание: перенос аккаунта может быть более не доступен!. \
				<br><br>Вы можете отключить помощника в <a href="#" class="setuptools app link settingsmanager">настройках</a>. \
			');
        setuptools.lightbox.settitle('muledump-account-assistant', 'Account Migration');
        setuptools.lightbox.drawhelp('muledump-account-assistant', 'docs/muledump/migration', 'Account Migration Help');

    } else {

        //  hmm

    }

    setuptools.lightbox.display('muledump-account-assistant', {variant: 'setuptools-medium', actionClose: function() { setuptools.state.assistant[extraopts.type] = false; }});
    setuptools.state.assistant[extraopts.type] = true;
    $('.setuptools.link.settingsmanager').click(function() { setuptools.app.config.settings('accountAssistant'); });
    if ( typeof callback === 'function' ) $('.setuptools.link.popupComplete').click(callback);

};

//  help users with network or cors issues
setuptools.app.assistants.cors = function(force) {

    if ( setuptools.data.config.corsAssistant === 0 && force !== true ) return;
    if ( setuptools.state.assistant.cors === true && force !== true ) return;
    setuptools.state.assistant.cors = true;

    setuptools.lightbox.build('muledump-cors', ' \
        Кажется, что у вас возникают проблемы с подключением к серверам ROTMG. Давайте попробуем исправить это.\
        <br><br><strong>Можете ли вы подключиться к игре?</strong> \
        <br>Попробуйте загрузить данную ссылку в браузере: <a \
            href="' + window.BASEURL + '" target="_blank">\
                ' + window.BASEURL + '\
            </a> \
        <br><br>Если у вас не получается, значит проблемы на стороне серверов, либо с вашим интернет-соединением. \
        <br><br><strong>Вы уверены что настроили CORS верно?</strong> \
        <br>Проверьте секцию Требования в <a \
            href="https://github.com/Syntes512/muledump/wiki/Инструкция-по-установке#требования" target="_blank">\
                Инструкции по установке и настройке\
            </a> \
        для визуального понимания по шагам. \
        <br><br><strong style="color: #da281e">CORS может сломаться!</strong> \
        <br>Если вы используете Chrome, нажмите значок CORS в правом верхнем углу вашего браузера. \
        <br><br>Попробуйте выключить и снова включить CORS, если это не помогает, то удалите ссылку из Inercepted URLs и заново вставьте. \
        <br><br><strong>Все еще возникают проблемы?</strong> \
        <br>Перейдите на страничку GitHub <a href="https://jakcodex.github.io/muledump/#jakcodex-supportandcontributions" target="_blank">поддержки</a> или же воспользуйтесь <a href="https://discord.gg/JFS5fqW" target="_blank">Discord</a>. \
    ');
    if ( setuptools.data.config.corsAssistant === 1 ) setuptools.lightbox.build('muledump-cors', ' \
        <br><br>Вы можете выключить <strong>помощника CORS</strong> в <a href="#" class="setuptools link settings noclose">настройках</a>.</strong>\
    ');
    setuptools.lightbox.settitle('muledump-cors', 'Устранение проблем');
    setuptools.lightbox.display('muledump-cors', {variant: 'select'});
    $('.setuptools.link.settings').click(function() {
        setuptools.app.config.settings('corsAssistant');
    });

};

//  prompt the user to download a backup if a certain time period has passed
setuptools.app.assistants.backups = function(manual) {

    if ( setuptools.data.config.backupAssistant === 0 || setuptools.state.notifier === true ) return;
    var lastBackup = setuptools.storage.read('backupAssistant');
    if ( manual === true || !lastBackup || (Date.now()-lastBackup >= (setuptools.data.config.backupAssistant*86400000)) ) {

        setuptools.lightbox.build('backup-assistant', ' \
            Хорошей практикой считается периодическое скачивание резервной копии Muledump.\
             \
            <br><br><div class="setuptools link downloadBackup menuStyle menuSmall cfleft textCenter">Скачать резервную копию</div> \
            <div class="setuptools link cancel menuStyle menuSmall negative cfright">Отмена</div> \
            \
            <div class="fleft cboth"><br>Помощник резервного копирования может быть отключен в <a href="#" class="setuptools app link settingsmanager">настройках</a>.</div> \
        ');

        setuptools.lightbox.settitle('backup-assistant', 'Backup Assistant');
        setuptools.lightbox.display('backup-assistant', {variant: 'setuptools-small'});

        setuptools.storage.write('backupAssistant', Date.now());

        $('.setuptools.link.downloadBackup').click(function() {

            var BackupList = setuptools.app.backups.listAll();
            if ( BackupList.length > 0 ) {

                setuptools.lightbox.override('backups-download', 'goback', function() {
                    setuptools.app.assistants.backups(true);
                });
                BackupList = BackupList[BackupList.length - 1];
                setuptools.app.backups.download(BackupList[1], BackupList[4]);

            } else {

                setuptools.lightbox.override('backups-create', 'goback', function() {
                    setuptools.app.assistants.backups(true);
                });
                setuptools.app.backups.create();

            }

        });

        $('.setuptools.link.settingsmanager').click(function () {

            setuptools.lightbox.override('settings', 'goback', function() {
                setuptools.app.assistants.backups(true);
            });

            setuptools.app.config.settings('backupAssistant');

        });

    }

};

//  assist in updating renders-related files
setuptools.app.assistants.rendersupdate = function(data) {

    setuptools.lightbox.build('rendersupdate-assistant', ' \
        Найдено обновление текстур!\
        <br><br>Нажмите, чтобы сохранить эти файлы поверх существующих, а затем перезагрузите!\
        <br><br>\
        <div class="w100">\
            <div class="cfleft" style="width: 25%;"><strong>Текущая версия</strong></div> \
            <div class="fleft">' + data.currentRenders + '</div>\
        </div>\
        <div class="w100">\
            <div class="cfleft" style="width: 25%;"><strong>Актуальная версия</strong></div> \
            <div class="fleft">' + data.latestRenders + '</div>\
        </div>\
        <br><br>&nbsp;\
        <div class="flex-container">\
            <a download="renders.png" href="' + setuptools.config.githubRawUrl + '/' + data.commit.sha + '/lib/renders.png"><div class="setuptools link menuStyle menuSmall noclose textCenter">\
                /lib/renders.png\
            </div></a>\
            <a download="constants.js" href="' + setuptools.config.githubRawUrl + '/' + data.commit.sha + '/lib/constants.js"><div class="setuptools link menuStyle menuSmall noclose textCenter">\
                /lib/constants.js\
            </div></a>\
            <a download="sheets.js" href="' + setuptools.config.githubRawUrl + '/' + data.commit.sha + '/lib/sheets.js"><div class="setuptools link menuStyle menuSmall noclose textCenter mr0">\
                /lib/sheets.js\
            </div></a>\
        </div>\
    ');
    setuptools.lightbox.settitle('rendersupdate-assistant', 'Найдено обновление текстур');
    setuptools.lightbox.drawhelp('rendersupdate-assistant', 'docs/muledump/rendersupdate', 'Renders Update Help');
    setuptools.lightbox.display('rendersupdate-assistant', {variant: 'select'});

};

//  assist the user in upgrading to the new Jakcodex/Muledump CORS Adapter extension
setuptools.app.assistants.jakcodexcors = function() {

    var variant = '';
    if ( setuptools.browser === 'chrome' ) variant = 'Chrome';
    if ( setuptools.browser === 'Opera' ) variant = 'Opera';
    if ( variant === '' ) return;

    setuptools.lightbox.build('jakcodexcors-extension-notice', " \
        Muledump с радостью представляет новое расширение CORS!\
        <br><br>\
        <div class='flex-container'>\
            <a href='https://chrome.google.com/webstore/detail/jakcodexmuledump-cors-ada/iimhkldbldnmapepklmeeinclchfkddd' target='_blank'>\
                <div class='menuStyle formStyle textCenter mr0 cboth' style='width: 300px;'>Jakcodex/Muledump CORS Adapter</div>\
            </a>\
        </div>\
        <br>Начиная с добавления аналитики, мы теперь знаем, что 65% пользователей ежедневно испытывают проблемы с CORS. Многие пользователи испытывают это несколько раз за день. Это просто неприемлемо.\
        <br><br>Это новое расширение всегда включено и не требует настройки. Удалите старое расширение, установите новое, и вы готовы к работе! \
        <br><br>Более подробно вы сможете узнать на <a href='https://github.com/Syntes512/muledump/wiki/CORS-Adapter' target='_blank'>Muledump CORS Adapter</a>. \
    ");
    setuptools.lightbox.settitle('jakcodexcors-extension-notice', 'Новое ' + variant + ' расширение');
    setuptools.lightbox.display('jakcodexcors-extension-notice', {variant: 'fl-Notice'});

};

//  assist the user by recommending they upgrade their browser
setuptools.app.assistants.browser = function() {

    setuptools.lightbox.build('browser-assistant', ' \
            <div>Ваш браузер не поддерживает все возможности Muledump.<br><br></div> \
            <div class="w100 flex-container"> \
                <a href="https://www.google.com/chrome/" target="_blank"> \
                    <div class="setuptools menuStyle textCenter">Скачать Google Chrome</div> \
                </a> \
            </div> \
            <div><br>Мы рекомендуем вам переключиться на браузер Google Chrome или Mozilla Firefox, когда вы будете готовы, вы можете просмотреть <a href="https://github.com/Syntes512/muledump/wiki/Инструкция-по-установке" target="_blank">инструкцию по установке</a> для более полного понимания.</div> \
        ');
    setuptools.lightbox.settitle('browser-assistant', 'Muledump Error');
    setuptools.lightbox.display('browser-assistant', {variant: 'fl-Notice'});

};

//  assist the user by recommending muledump configuration changes to help their browser performance
setuptools.app.assistants.performance = function(queueIndex) {

    setuptools.lightbox.build('perf-assistant', ' \
            <div>При отображении всех анимаций Muledump ваш компьютер может иметь проблемы с производительностью. \
            <br><br>Вы должны рассмотреть возможность установки анимации на «Урезанная», если у вас возникнут проблемы с производительностью.<br><br></div> \
            <div class="w100 flex-container" style="justify-content: space-between;"> \
                <div class="setuptools link acknowledge menuStyle negative textCenter">Принять и закрыть</div>\
                <div class="setuptools link settingsManager menuStyle textCenter">Settings Manager</div> \
            </div> \
        ');
    setuptools.lightbox.settitle('perf-assistant', 'Performance Assistant');
    setuptools.lightbox.display('perf-assistant', {variant: 'fl-Notice'});

    $('.setuptools.link.settingsManager').click(function() {
        setuptools.app.config.settings('animations');
    })

    $('.setuptools.link.acknowledge').click(function() {

        setuptools.data.acknowledge.assistants.performance = true;
        setuptools.app.config.save('Assistant/Performance acknowledged');
        setuptools.app.muledump.notices.remove(queueIndex)

    });

};
