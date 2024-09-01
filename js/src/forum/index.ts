import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import AnthemSettings from './components/AnthemSettings';
import UserCard from 'flarum/forum/components/UserCard';
import UserProfileAnthem from './components/UserProfileAnthem';

app.initializers.add('benedikz/flarum-user-tunes', () => {
  // Add the anthem settings to the user settings page
  extend(SettingsPage.prototype, 'settingsItems', function (items: any) {
    items.add('anthem', m(AnthemSettings as any), 100);
  });

  // Add the anthem player to the user's profile card if an anthem URL is set
  extend(UserCard.prototype, 'infoItems', function (items: any) {
    const user = (this.attrs as any).user; // Get the user object
    const anthemUrl = user?.attribute('anthemUrl'); // Fetch the anthem URL

    // Only add the anthem player if the user has an anthem URL set
    //if (anthemUrl) {
    items.add('anthem', m(UserProfileAnthem, { user }), 1); // Lower priority to ensure it shows last
  });
});