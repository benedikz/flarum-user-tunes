<?php

/*
 * This file is part of benedikz/flarum-user-tunes.
 *
 * Copyright (c) 2024 Tomáš Benedikt.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) use ($schema) {
            if (!$schema->hasColumn('users', 'anthem_url')) {
                $table->string('anthem_url', 255)->nullable();
            }
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->dropColumn('anthem_url');
        });
    },
];