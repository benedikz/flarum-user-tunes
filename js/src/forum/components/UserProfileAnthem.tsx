import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import User from 'flarum/common/models/User';
import type Mithril from 'mithril';

interface UserProfileAnthemAttrs {
  user: User;
}

export default class UserProfileAnthem extends Component<UserProfileAnthemAttrs> {
    view(vnode: Mithril.Vnode<UserProfileAnthemAttrs>) {
        const { user } = vnode.attrs;
        const anthemUrl = user?.attribute('anthemUrl') || '';
        
        // If the user has an anthemUrl set, render the audio player
        if (anthemUrl) {
            return (
                <div className="UserProfileAnthem">
                    <h4>{app.translator.trans('flarum-user-tunes.forum.anthem_heading')}</h4>
                    <audio controls>
                        <source src={anthemUrl} type="audio/ogg" />
                        {app.translator.trans('flarum-user-tunes.forum.audio_not_supported')}
                    </audio>
                </div>
            );
        }

        return null;
    }
}