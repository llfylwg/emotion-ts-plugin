import React from 'react'
import ReactDOM from 'react-dom'
import { css } from '@emotion/core'

const className = css({
  color: 'red',
  background: 'yellow',
})

export class SimpleComponent extends React.PureComponent {
  render() {
    return (
      <div css={className}>
        <span>hello</span>
      </div>
    )
  }
}

ReactDOM.render(<SimpleComponent />, document.querySelector('#app'))
