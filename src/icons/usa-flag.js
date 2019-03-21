import React from 'react'
import PropTypes from 'prop-types'
import { invert } from 'polished'

const UsaFlag = ({ color, reverse, size }) => (
  <svg width={size} height={size} viewBox="0 0 464 464">
    <title>English</title>
    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="256"
        y="96"
        width="176"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="256"
        y="128"
        width="176"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="256"
        y="160"
        width="176"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="256"
        y="192"
        width="176"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="256"
        y="224"
        width="176"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="32"
        y="256"
        width="400"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="32"
        y="288"
        width="400"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="32"
        y="320"
        width="400"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="32"
        y="352"
        width="400"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="32"
        y="96"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="96"
        y="96"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="160"
        y="96"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="64"
        y="128"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="128"
        y="128"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="192"
        y="128"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="32"
        y="160"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="96"
        y="160"
        width="16"
        height="16"
      />
    </g>

    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="160"
        y="160"
        width="16"
        height="16"
      />
    </g>
    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="64"
        y="192"
        width="16"
        height="16"
      />
    </g>
    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="128"
        y="192"
        width="16"
        height="16"
      />
    </g>
    <g>
      <rect
        className="en"
        fill={reverse ? invert(color) : color}
        x="192"
        y="192"
        width="16"
        height="16"
      />
    </g>
    <g>
      <path
        className="en"
        fill={reverse ? 'none' : color}
        d="M240,64H0v176v160h464V64H240z M16,80h208v144H16V80z M448,384H16V240h224V80h208V384z"
      />
    </g>
  </svg>
)

UsaFlag.defaultProps = {
  color: '#000',
  size: 50,
  reverse: false,
}

UsaFlag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  reverse: PropTypes.bool,
}

export default UsaFlag
