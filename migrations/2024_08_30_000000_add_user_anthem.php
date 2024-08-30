<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'anthem_url' => ['string', 'length' => 255, 'nullable' => true],
]);