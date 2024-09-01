<?php

namespace Benedikz\UserTunes\Event;

use Flarum\User\User;

class AnthemChanged
{
    /**
     * @var User
     */
    public $user;

    /**
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}