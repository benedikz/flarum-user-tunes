<?php

namespace Benedikz\UserTunes\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;

class SaveUserAnthem
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addUserAnthem']);
    }

    public function addUserAnthem(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['anthemUrl'] = $event->model->anthem_url;
        }
    }
}