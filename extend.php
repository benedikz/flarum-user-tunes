<?php

/*
 * This file is part of benedikz/flarum-user-tunes.
 *
 * Copyright (c) 2024 Tomáš Benedikt.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

//namespace Benedikz\\UserTunes;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),
    
    (new Extend\Policy())
        ->modelPolicy(\Flarum\User\User::class, SetProfileAnthem::class),

    (new Extend\Permission())
        ->permission('setProfileAnthem', 'custom-group-id')
        ->registerPermission(),
];
