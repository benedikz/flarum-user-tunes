import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';

interface AnthemSettingsAttrs {}

export default class AnthemSettings extends Component<AnthemSettingsAttrs> {
  anthemUrl!: Stream<string>;

  oninit(vnode: any) {
    super.oninit(vnode);

    this.anthemUrl = Stream(app.session.user?.attribute('anthemUrl') || '');
  }

  view() {
    return (
      <div className="AnthemSettings">
        <div className="Form-group">
          <label>{app.translator.trans('flarum-user-tunes.forum.anthem_settings_label')}</label>
          <input
            className="FormControl"
            type="text"
            bidi={this.anthemUrl}
            placeholder={app.translator.trans('flarum-user-tunes.forum.anthem_settings_placeholder')}
          />
        </div>
        <Button className="Button Button--primary" onclick={this.saveAnthem.bind(this)}>
          {app.translator.trans('flarum-user-tunes.forum.save_button')}
        </Button>
      </div>
    );
  }

  saveAnthem() {
    app.session.user!
      .save({ anthemUrl: this.anthemUrl() })
      .then(() => {
        app.alerts.show({ type: 'success' }, app.translator.trans('flarum-user-tunes.forum.save_success'));
      });
  }
}