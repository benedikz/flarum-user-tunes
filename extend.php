<?php

/*
 * This file is part of benedikz/flarum-user-tunes.
 *
 * Copyright (c) 2024 Tomáš Benedikt.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Benedikz\UserTunes;

use Flarum\Extend as Flarum;
use Flarum\User\User;
use Benedikz\UserTunes\Access\UserPolicy;

return [
    
    (new Flarum\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    //   ->css(__DIR__.'/less/forum.less'),

    (new Flarum\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    //   ->css(__DIR__.'/less/admin.less'),

    new Flarum\Locales(__DIR__.'/locale'),
    
    //(new Flarum\Policy())
    //    ->modelPolicy(User::class, Access\UserPolicy::class),
];
