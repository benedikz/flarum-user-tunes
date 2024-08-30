<?php

namespace Benedikz\UserTunes\Access;

use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    public function editAnthem(User $actor, User $user)
    {
        if (($actor->id === $user->id
                && $actor->hasPermission('flarum-user-tunes.editOwn')
                && !$this->isSuspended($user))
            || $actor->hasPermission('flarum-user-tunes.editAny')) {
            return $this->allow();
        }

        return $this->deny();
    }
}