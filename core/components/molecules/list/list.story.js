import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { List, Switch, StackLayout, Button } from '@auth0/cosmos'

storiesOf('List', module).add('default', () => (
  <Example title="default">
    <List label="Short List" sortable expandable>
      <List.Header>Header</List.Header>
      <List.Body>Body</List.Body>
      <List.Footer>Action</List.Footer>
    </List>
  </Example>
))

storiesOf('List', module).add('with stack', () => (
  <Example title="with stack">
    <List label="Social">
      <StackLayout>
        <div>github</div>
        <div>GitHub</div>
        <Switch on />
      </StackLayout>
      <StackLayout>
        <div>google-oauth2</div>
        <div>Google</div>
        <Switch />
      </StackLayout>
    </List>
  </Example>
))

storiesOf('List', module).add('stressed', () => (
  <Example title="stressed - 739 characters per row">
    <List label="Short List">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </div>
    </List>
  </Example>
))
