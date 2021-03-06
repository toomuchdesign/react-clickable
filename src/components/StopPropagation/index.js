// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
  className?: string
};

export default class StopPropagation extends React.Component<Props> {
  onClick = (event: Event): void => {
    event.stopPropagation();
  };

  onKeyDown: OnKeyDown = event => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      event.stopPropagation();
    }
  };

  render() {
    const { children, className } = this.props;
    return (
      <div
        style={{ cursor: 'default' }}
        role="button"
        tabIndex="-1"
        onKeyDown={this.onKeyDown}
        onClick={this.onClick}
        className={className}
      >
        {children}
      </div>
    );
  }
}
