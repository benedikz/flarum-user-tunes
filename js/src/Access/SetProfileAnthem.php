<?php

namespace Benedikz\ProfileAnthems\Access;

use Flarum\User\AbstractPolicy;
use Flarum\User\User;
use Flarum\Group\Group;

class SetProfileAnthem extends AbstractPolicy
{
    protected $model = User::class;

    public function setProfileAnthem(User $actor, User $user)
    {
        if ($actor->hasPermission('setProfileAnthem') && $actor->id === $user->id) {
            return $this->allow();
        }

        return $this->deny();
    }
}

?>