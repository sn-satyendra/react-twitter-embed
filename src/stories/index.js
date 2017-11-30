import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../index';
import TwitterTimelineEmbed from '../components/TwitterTimelineEmbed';
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={action('button clicked')}>Hello</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={style}>Hello</Button>
    );
  });


storiesOf('Twitter Embed', module)
  .add('Timeline Profile', withInfo({
    text: 'Watch twitter user timeline with given username',
  })(() => (
    <div style={{ width: 250, height: 600 }}>
      <TwitterTimelineEmbed
        sourceType={'profile'}
        screenName={'saurabhnemade'}
        options={{ height: 400 }}
      />
    </div>
  )
    ));

