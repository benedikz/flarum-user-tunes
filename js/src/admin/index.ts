import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import PermissionGrid from 'flarum/admin/components/PermissionGrid';

app.initializers.add('benedikz/flarum-user-tunes', () => {
  console.log('[benedikz/flarum-user-tunes] Hello, admin!');
  extend(PermissionGrid.prototype, 'startItems', (items) => {
    items.add('setProfileAnthem', {
      icon: 'fas fa-music',
      label: app.translator.trans('flarum-user-tunes.admin.permissions.set_profile_anthem'),
      permission: 'setProfileAnthem'
    });
  });
});
