<?php

namespace Benedikz\UserTunes\Listener;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;
use Psr\Log\LoggerInterface;

class SaveUserAnthem
{
    protected $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function handle(Saving $event)
    {
        // Log that the SaveUserAnthem listener has been triggered
        $this->logger->info('SaveUserAnthem listener called.');

        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        // Log the attributes received
        $this->logger->info('Attributes received in SaveUserAnthem:', $attributes);

        if (isset($attributes['anthemUrl'])) {
            // Log before checking permissions
            $this->logger->info('Anthem URL is set, checking permissions.');

            // Ensure the actor is allowed to edit the user's anthem
            try {
                $actor->assertCan('editAnthem', $user);
                $this->logger->info('Permission check passed.');
            } catch (\Exception $e) {
                $this->logger->error('Permission check failed:', ['exception' => $e]);
                return;
            }

            // Trim and sanitize the anthemUrl
            $anthemUrl = trim($attributes['anthemUrl']);
            $this->logger->info('Sanitized anthem URL:', ['anthemUrl' => $anthemUrl]);

            // Save the anthem URL to the user's profile
            $user->anthem_url = $anthemUrl;

            // Log before checking if the URL is dirty
            $this->logger->info('Checking if anthem URL is dirty.');

            // Optionally, raise an event if the anthem URL is changed
            if ($user->isDirty('anthem_url')) {
                $this->logger->info('Anthem URL has changed, raising event.');
                $user->raise(new \Benedikz\UserTunes\Event\AnthemChanged($user));
            }

            // Explicitly save the user to ensure changes are persisted
            try {
                $user->save();
                $this->logger->info('User saved successfully with new anthem URL.');
            } catch (\Exception $e) {
                $this->logger->error('Failed to save user with new anthem URL:', ['exception' => $e]);
            }
        } else {
            $this->logger->info('No anthem URL provided.');
        }
    }
}