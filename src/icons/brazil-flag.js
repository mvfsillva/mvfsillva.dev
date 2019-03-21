import React from 'react'
import PropTypes from 'prop-types'
import { invert } from 'polished'

const BrazilFlag = ({ color, reverse, size }) => (
  <svg width={size} height={size} viewBox="0 0 480 480">
    <title>Português Brasileiro</title>
    <g>
      <path
        className="ptBr"
        fill={reverse ? invert(color) : color}
        d="M480,88H0v304h480V88z M240,381.1l-194-141l194-141l194,141L240,381.1z"
      />
      <path
        className="ptBr"
        fill={reverse ? invert(color) : color}
        d="M174.8,174.6c57.5,17,110.4,49.3,151.7,92.801c2.7-8.601,4.1-17.801,4.1-27.301c0-50.6-41-91.7-91.7-91.7C214,148.4,191.3,158.4,174.8,174.6z"
      />
      <path
        className="ptBr"
        fill={reverse ? invert(color) : color}
        d="M160.4,192.8c-8.3,13.8-13.1,30-13.1,47.3c0,50.6,41,91.7,91.7,91.7c32.9,0,61.7-17.3,77.9-43.399C275.1,242.199,220.6,208.8,160.4,192.8z"
      />
    </g>
  </svg>
)

BrazilFlag.defaultProps = {
  color: '#000',
  size: 50,
  reverse: false,
}

BrazilFlag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  reverse: PropTypes.bool,
}

export default BrazilFlag
