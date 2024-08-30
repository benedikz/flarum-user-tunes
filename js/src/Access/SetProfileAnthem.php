<?php

namespace Benedikz\ProfileAnthems\Access;

use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class SetProfileAnthem extends AbstractPolicy
{
    protected $model = User::class;

    public function setProfileAnthem(User $actor, User $user)
    {
        return $actor->hasPermission('setProfileAnthem') && $actor->id === $user->id
            ? $this->allow()
            : $this->deny();
    }
}