<?php

namespace Benedikz\UserTunes\Listeners;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SaveUserAnthem
{
    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['anthemUrl'])) {
            // Ensure the actor is allowed to edit the user's anthem
            $actor->assertCan('editAnthem', $user);

            // Trim and sanitize the anthemUrl
            $anthemUrl = trim($attributes['anthemUrl']);

            // Save the anthem URL to the user's profile
            $user->anthem_url = $anthemUrl;

            // Optionally, raise an event if the anthem URL is changed
            if ($user->isDirty('anthem_url')) {
                $user->raise(new \Benedikz\UserTunes\Event\AnthemChanged($user));
            }
        }
    }
}