<?php

namespace Benedikz\UserTunes\Api\Serializer;

use Flarum\Api\Serializer\UserSerializer as BaseUserSerializer;

class UserSerializer extends BaseUserSerializer
{
    protected function getDefaultAttributes($user)
    {
        $attributes = parent::getDefaultAttributes($user);
        $attributes['anthemUrl'] = $user->anthem_url;

        return $attributes;
    }
}