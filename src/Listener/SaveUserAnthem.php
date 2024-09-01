<?php

namespace Benedikz\UserTunes\Listener;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;

class SaveUserAnthem
{
    public function handle(Saving $event)
    {
        // Log that the SaveUserAnthem listener has been triggered
        Log::info('SaveUserAnthem listener called.');

        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        // Log the attributes received
        Log::info('Attributes received in SaveUserAnthem:', $attributes);

        if (isset($attributes['anthemUrl'])) {
            // Log before checking permissions
            Log::info('Anthem URL is set, checking permissions.');

            // Ensure the actor is allowed to edit the user's anthem
            try {
                $actor->assertCan('editAnthem', $user);
                Log::info('Permission check passed.');
            } catch (\Exception $e) {
                Log::error('Permission check failed:', ['exception' => $e]);
                return;
            }

            // Trim and sanitize the anthemUrl
            $anthemUrl = trim($attributes['anthemUrl']);
            Log::info('Sanitized anthem URL:', ['anthemUrl' => $anthemUrl]);

            // Save the anthem URL to the user's profile
            $user->anthem_url = $anthemUrl;

            // Log before checking if the URL is dirty
            Log::info('Checking if anthem URL is dirty.');

            // Optionally, raise an event if the anthem URL is changed
            if ($user->isDirty('anthem_url')) {
                Log::info('Anthem URL has changed, raising event.');
                $user->raise(new \Benedikz\UserTunes\Event\AnthemChanged($user));
            }

            // Explicitly save the user to ensure changes are persisted
            try {
                $user->save();
                Log::info('User saved successfully with new anthem URL.');
            } catch (\Exception $e) {
                Log::error('Failed to save user with new anthem URL:', ['exception' => $e]);
            }
        } else {
            Log::info('No anthem URL provided.');
        }
    }
}