import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import AnthemSettings from './components/AnthemSettings';
import UserCard from 'flarum/forum/components/UserCard';
import UserProfileAnthem from './components/UserProfileAnthem';

app.initializers.add('benedikz/flarum-user-tunes', () => {
  extend(SettingsPage.prototype, 'settingsItems', function (items: any) {
    items.add('anthem', m(AnthemSettings as any), 100);
  });
  extend(UserCard.prototype, 'infoItems', function (items: any) {
    const user = (this.attrs as any).user; // Cast this.attrs to any to bypass type check
    items.add('anthem', m(UserProfileAnthem, { user }), 100);
  });
});