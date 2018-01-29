//
//  application
//

//  greet new users with accounts.js files in their folders
setuptools.app.introduction = function() {

    //  cleanup for a fresh start
    delete setuptools.tmp.SelectedBackupID;
    setuptools.lightbox.overrides = {};

    setuptools.lightbox.build('introduction', ' \
        Добро пожаловать в мастер настройки Muledump! Это новый набор функций, предназначенные для упрощения конфигурации Muledump.\
        <br><br><h3>Особенности:</h3> \
        <br>&middot; Браузерное управление всеми учетными записями Mannedump и настройками \
        <br>&middot; Включение и отключение учетных записей для упрощения управления \
        <br>&middot; Группировка для управления большим количеством учетных записей (в скором времени) \
        <br>&middot; Резервное копирование и восстановление конфигурации (автоматическое) \
        <br>&middot; Экспортирование полной копии аккаунтов XML в JSON формате. \
        <br>&middot; Импортирование accounts.js \
        <br><br>Для получения дополнительной информации см. <a href="' + setuptools.config.url + '/docs/setuptools/index" class="setuptools noclose" target="_blank">SetupTools</a> в документах. \
        <br><br>Также вы можете посетить wiki страницу: <a href="' + setuptools.config.source + '/muledump/wiki/инструкция-по-установке" class="setuptools noclose" target="_blank">Инструкция по установке и настройке</a>. \
        <br><br>Удостоверьтесь что вы проверили <a href="' + setuptools.config.url + '/REQUIREMENTS" target="_blank" class="red">требования</a> перед началом. \
        <br><br>Готовы начать? \
        <br><br> \
    ');

    if ( typeof setuptools.originalAccountsJS === 'object' ) {

        if ( setuptools.app.config.validateFormat(setuptools.originalAccountsJS, 0) === true ) {

            setuptools.lightbox.build('introduction', ' \
                <div class="setuptools link import local menuStyle cfleft" style="width: 175px;">Да, поехали!</div> \
                <div class="setuptools link cancel menuStyle negative cfright" style="width: 175px;">Нет, закрыть мастер установки</div> \
            ');

        } else {

            setuptools.lightbox.build('introduction', ' \
                Файл accounts.js найден, но в нем нет доступных аккаунтов. \
                <br><br>Вы можете <a href="#" class="setuptools app intro import upload">импортировать другой accounts.js</a> \
            ');

        }

    } else {

        setuptools.lightbox.build('introduction', ' \
            Перейдите к <a href="#" class="setuptools app intro accounts">менеджеру аккаунтов</a> для начала работы. \
        ');

    }

    setuptools.lightbox.override('accounts-accountsjs-import', 'goback', setuptools.app.introduction);
    setuptools.lightbox.override('accounts-accountsjs-import', 'cancel', setuptools.app.introduction);
    setuptools.lightbox.drawhelp('introduction', 'docs/setuptools/index', 'SetupTools Introduction');
    setuptools.lightbox.settitle('introduction', 'Muledump SetupTools Introduction');
    setuptools.lightbox.display('introduction', {variant: 'fl-Introduction'});

    //  import user settings from accounts.js if they exist
    $('.setuptools.link.import').click(function() {

        for ( var i in setuptools.copy.config )
            if ( setuptools.copy.config.hasOwnProperty(i) )
                if ( typeof window[i] !== 'undefined' )
                    setuptools.data.config[i] = window[i];

        setuptools.data.config.enabled = true;

    });

    $('.setuptools.app.intro.accounts').click(setuptools.app.accounts.manager);
    $('.setuptools.link.import.local').click(setuptools.app.accounts.AccountsJSImportLocal);
    $('.setuptools.app.intro.import.upload').click(setuptools.app.accounts.AccountsJSImportUpload);

};

//  start page for setup tools
setuptools.app.index = function(config) {

    if ( typeof config !== 'object' ) config = {};

    //  cleanup for a fresh start
    delete setuptools.tmp.SelectedBackupID;
    setuptools.lightbox.overrides = {};

    //  look for a fresh configuration
    var variant;
    if ( setuptools.app.checknew() === true ) {

        variant = 'fl-Index';
        setuptools.lightbox.build('main', ' \
            Добро пожаловать в менеджер подготовки аккаунтов Muledump! \
            <br><br>Похоже, вы здесь новичок. Инструменты настройки помогут вам начать работу с Muledump. Независимо от того, являетесь ли вы новым пользователем или опытным. \
            <br><br><a href="' + setuptools.config.url + '" class="setuptools noclose" target="_blank">Обзор</a> | \
                <a href="#" class="setuptools app intro">Введение</a> | \
                <a href="https://github.com/Syntes512/muledump/wiki/Инструкция-по-установке" class="setuptools noclose" target="_blank">Инструкция по установке и настройке</a>\
            <br><br>Удостоверьтесь что вы прочли <a href="' + setuptools.config.url + '/REQUIREMENTS" target="_blank" class="red">требования</a> перед началом работы. \
            <br><br>Новые пользователи могут <a href="#" class="setuptools accounts manage">кликнуть здесь</a> для добавления аккаунтов. \
            <br><br>Опытные пользователи могут <a href="#" class="setuptools config restore">загрузить резервную копию</a>. \
            <br><br>Если у вас имеется файл с аккаунтами, то <a href="#" class="setuptools config import">вы можете импортировать его</a>! \
        ');

    } else {

        if ( setuptools.state.loaded === false && setuptools.app.config.validateFormat(setuptools.data.accounts, 1) === false ) {

            setuptools.app.introduction();
            return;

        }

        variant = 'fl-IndexCentered';
        setuptools.lightbox.build('main', ' \
            <div class="w100 textCenter">\
                Добро пожаловать в мастер настройки Muledump! \
                <br><br>Выберите один из следующих вариантов. \
                <br><br>\
                <div class="setuptools link accounts manage menuStyle menuSmall mr5 cfleft">Аккаунты</div> \
                <div class="setuptools link accounts groups menuStyle menuSmall mr0 cfright">Группы</div> \
                <div class="setuptools link config settings menuStyle menuSmall mt5 mr5 notice cfleft">Настройки</div> \
                <div class="setuptools link config backup menuStyle menuSmall mt5 mr0 notice cfright">Резервные копии</div> \
            </div> \
        ');

    }

    //  display the built lightbox and register click action
    setuptools.lightbox.settitle('main', 'Muledump SetupTools');
    setuptools.lightbox.override('accounts-manager', 'goback', setuptools.app.index);
    if ( setuptools.app.checknew() === true ) {
        setuptools.lightbox.drawhelp('main', 'docs/setuptools/help/first-time', 'SetupTools Help');
    } else setuptools.lightbox.drawhelp('main', 'docs/setuptools/help/index', 'SetupTools Help');
    setuptools.lightbox.display('main', $.extend(true, {}, config, {'variant': variant}));
    $('.setuptools.accounts.manage').click(setuptools.app.accounts.manager);
    $('.setuptools.accounts.groups').click(setuptools.app.groups.manager);
    $('.setuptools.config.restore').click(setuptools.app.backups.index);
    $('.setuptools.config.backup').click(setuptools.app.backups.index);
    $('.setuptools.config.settings').click(setuptools.app.config.settings);
    $('.setuptools.config.import').click(setuptools.app.accounts.AccountsJSImport);
    $('.setuptools.app.intro').click(setuptools.app.introduction);

};

//  check if this is a new user
setuptools.app.checknew = function() {

    //  check if a stored configuration is present
    if ( setuptools.config.devForcePoint != 'newuser' && setuptools.state.firsttime === false && setuptools.storage.read('configuration') ) return false;

    //  check if any other account data is present
    return (
        //  check if force point set for this position
        setuptools.config.devForcePoint === 'newuser' ||

        //  first time user detected already
        setuptools.state.firsttime === true ||

        //  accounts object missing
        typeof setuptools.window.accounts === 'undefined' ||

        //  accounts variable present but not an object
        typeof setuptools.window.accounts !== 'object' ||

        //  accounts object present and in the default state
        (typeof setuptools.window.accounts === 'object' &&
        Object.keys(setuptools.window.accounts).length < 3 &&
        setuptools.window.accounts.email && setuptools.window.accounts.email2)
    ) ? true : false;

};

//  provide a linking service into muledump using the location hash
setuptools.app.hashnav = function() {

    //  don't run if any notifier is running
    if ( setuptools.state.notifier === true || location.hash === '#' ) return;

    //  parse the request path
    var matches = location.hash.match(setuptools.config.regex.hashnav);
    if ( !matches ) return;

    //  navigation links that require setuptools be loaded
    if ( setuptools.state.loaded === true ) {

        //  groups manager
        if ( matches[0] === 'groups' ) {

            setuptools.lightbox.close();
            location.hash = '#';

            if ( matches[1] === 'create' ) {

                setuptools.app.groups.create();

            } else if ( matches[1] === 'select' ) {

                setuptools.app.groups.manager();
                $('div.setuptools.groupControls > div.groupSelect').click();

                if ( matches[2] === 'all' ) {

                    $('div.setuptools.menu a.selectAll').click();

                } else if ( matches[2] === 'enabled' ) {

                    $('div.setuptools.menu a.selectEnabled').click();

                } else if ( matches[2] === 'disabled' ) {

                    $('div.setuptools.menu a.selectDisabled').click();

                }

            } else if ( matches[1] === 'enableAll' ) {

                $('div.groups.enableAll.toggle').click();

            } else if ( matches[1] === 'disableAll' ) {

                $('div.groups.disableAll.toggle').click();

            } else setuptools.app.groups.manager();

        }
        //  accounts manager
        else if ( matches[0] === 'accounts' ) {

            setuptools.lightbox.close();
            location.hash = '#';
            if ( matches[1] === 'mass' || matches[1] === 'massSwitch') {

                setuptools.app.accounts.manager();
                $('.editor.control.massSwitch').click();

            } else if ( matches[1] === 'export' ) {

                setuptools.app.accounts.AccountsJSExport();

            } else setuptools.app.accounts.manager();

            return;

        }
        //  backups manager
        else if ( matches[0] === 'backups' ) {

            if ( matches[1] === 'create' ) {

                setuptools.lightbox.close();
                location.hash = '#';
                setuptools.app.backups.create();
                return;

            }

        }

    }
    //  navigation links that require setuptools be unloaded
    else {



    }

    //  import local or uploaded accounts.js file
    if ( matches[0] === 'accountsjs' ) {

        setuptools.lightbox.close();
        location.hash = '#';
        if ( !matches[1] ) setuptools.app.accounts.AccountsJSImport();
        if ( matches[1] === 'upload' ) setuptools.app.accounts.AccountsJSImportUpload();

    }
    //  settings takes two arguments, highlight and section
    else if ( matches[0] === 'settings' ) {

        setuptools.lightbox.close();
        location.hash = '#';
        setuptools.app.config.settings(matches[1], matches[2]);

    }
    //  open about menu
    else if ( matches[0] === 'about' ) {

        setuptools.lightbox.close();
        location.hash = '#';
        $('#about').ready(function() {
            $('#about').click();
        });

    }
    //  backups manager
    else if ( matches[0] === 'backups' ) {

        setuptools.lightbox.close();
        location.hash = '#';
        if ( matches[1] === 'upload' ) {

            setuptools.app.backups.upload();

        } else if ( matches[1] === 'restore' ) {

            //  we'll push them to the latest backup otherwise fallback on the upload page
            var BackupList = setuptools.app.backups.listAll();
            if ( BackupList.length > 0 ) {

                var BackupMeta = BackupList[BackupList.length-1];
                setuptools.app.backups.restoreConfirm(BackupMeta[1], BackupMeta[5] || BackupMeta[4]);

            } else setuptools.app.backups.upload();

        } else if ( !matches[1] ) setuptools.app.backups.manager();

    }
    //  assistance
    else if ( matches[0] === 'help' ) {

        if ( matches[1] === 'cors' ) {

            setuptools.lightbox.close();
            location.hash = '#';
            setuptools.app.assistants.cors(true);

        }

    }

};

//  wrap analytics var
setuptools.app.ga = function(command, action, value1, value2, value3, value4, value5) {

    //  don't run if local or disabled
    var analytics = window[setuptools.config.gaFuncName];
    if (
        typeof analytics !== 'function' ||
        setuptools.state.hosted === false ||
        setuptools.data.config.ga === false
    ) return;

    //  initial events to trigger
    if ( command === 'init' ) {

        if ( setuptools.state.loaded === true && (setuptools.data.userid === false || !setuptools.data.userid.match(setuptools.config.regex.gaUserId)) ) {

            setuptools.app.muledump.notices.add('Review new Usage Analytics options', setuptools.app.gaReview);
            setuptools.data.userid = $.sha256(Date.now()).toString('hex');
            setuptools.data.userid = setuptools.data.userid.substr(0, 10) + setuptools.data.userid.substr(setuptools.data.userid.length-10, 10);
            setuptools.app.config.save('UsageAnalytics/first-run');
            return;

        }

        if ( setuptools.state.loaded === true ) analytics('set', 'userId', setuptools.data.userid);
        analytics('create', setuptools.config.ga);
        analytics('send', 'pageview');
        setuptools.tmp.gaInterval = setInterval(setuptools.app.ga, setuptools.config.gaInterval, 'send', {hitType: 'pageview', page: '#ping'});

        if ( setuptools.state.loaded === true ) {

            if (setuptools.data.config.gaTotals === true) analytics('send', 'event', {
                eventCategory: 'totals',
                eventAction: 'accounts',
                eventValue: Object.keys(setuptools.data.accounts.accounts).length
            });

            if (setuptools.data.config.gaTotals === true) analytics('send', 'event', {
                eventCategory: 'totals',
                eventAction: 'totalGroups',
                eventValue: setuptools.data.groups.groupList.length
            });

            analytics('send', 'event', {
                eventCategory: 'runtimeMode',
                eventAction: 'loaded'
            });

        } else {

            analytics('send', 'event', {
                eventCategory: 'runtimeMode',
                eventAction: 'newUser'
            });

        }

        return;

    }

    //  at least these two arguments are required
    if ( !command && !action ) return;

    //  if the userid isn't generated or the user optioned out thru the notice panel we'll disable analytics
    if ( setuptools.data.userid === false || setuptools.data.userid === 0 ) return;

    //  run any additional commands (must be explicitly approved below)
    if (
        ( action === 'event' && ['rateLimited', 'corsError', 'accountBanned', 'genericServerError', 'export-imgur-error', 'export-imgur-networkError', 'export-imgur-httpError', 'export-img-loadError'].indexOf(value1.eventAction) > -1 && setuptools.data.config.gaErrors === true ) ||
        ( action === 'event' && ['staleCache', 'charSortCustom', 'wawawa', 'export-txt', 'export-csv', 'export-json', 'export-img', 'export-imgur', 'export-html2canvas'].indexOf(value1.eventAction) > -1 && setuptools.data.config.gaOptions === true ) ||
        ( action === 'event' && ['reloadSingle', 'reloadAll', 'runtimeMode'].indexOf(value1.eventCategory) > -1 ) ||
        ( typeof action === 'object' && action.hitType === 'pageview' && action.page === '#ping' && setuptools.data.config.gaPing === true ) ||
        ( typeof action === 'object' && action.hitType === 'pageview' && action.page !== '#ping' )
    ) analytics(command, action, value1, value2, value3, value4, value5);

};

//  explain analytics to users
setuptools.app.gaReview = function() {

    setuptools.lightbox.build('gaReview', '\
        <div class="fleft cboth" style="text-align: justify;">\
            Аналитика использования - новая функция в Muledump v9.0.0. Она предоставляет анонимную информацию с помощью Google Analytics, чтобы помочь нам улучшить качество и добавить новые функции в Muledump. \
            Вы можете узнать больше о собираемых данных, прочитав <a href="' + setuptools.config.url + '/privacy-policy" target="_blank">политику конфиденциальности</a> page. \
            <br><br>Участие в аналитике использования является необязательным. Вы можете контролировать сбор информации, для этого посетите мастер настройки.\
            <br>&nbsp;\
        </div>\
        <div class="setuptools link gaOptOut fleft menuStyle negative cfright textCenter">Отказ от аналитики</div> \
        <div class="setuptools link gaSettings fleft menuStyle cfleft textCenter">Проверка настроек аналитики</div> \
    ');
    setuptools.lightbox.settitle('gaReview', 'Usage Analytics Information');
    setuptools.lightbox.display('gaReview', {variant: 'fl-Introduction'});

    $('.setuptools.link.gaOptOut').click(function() {

        setuptools.data.config.ga = false;
        setuptools.app.config.save('UsageAnalytics/opt-out');
        setuptools.lightbox.build('gaReview-optOut', 'Usage Analytics have been disabled.');
        setuptools.lightbox.settitle('gaReview-optOut', 'Usage Analytics Opt-out');
        setuptools.lightbox.display('gaReview-optOut');

    });

    $('.setuptools.link.gaSettings').click(function() {
        setuptools.app.config.settings('none', 'system');
    });

};

setuptools.app.checkperf = function() {

    if (
        setuptools.data.config.animations === true &&
        ( window && window.performance && window.performance.timing && (window.performance.timing.domComplete-window.performance.timing.connectStart) > setuptools.config.perfLoadTime ) ||
        (typeof navigator === 'object' && navigator.hardwareConcurrency < setuptools.config.perfMinCPUs)
    ) setuptools.app.muledump.notices.add('Consider changing animations settings', setuptools.app.assistants.performance);

};
