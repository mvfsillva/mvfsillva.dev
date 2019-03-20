import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

const timeout = 500
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

const Transition = ({ location, children }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {status => <div style={{ ...getTransitionStyles[status] }}>{children}</div>}
      </ReactTransition>
    </TransitionGroup>
  )
}

Transition.propTypes = {
  location: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
}

export default Transition
