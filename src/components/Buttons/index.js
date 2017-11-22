import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from 'lodash'

const sizeStyles = {
  small: `
    min-width: 40px;
    min-height: 24px;
  `,
  standard: `
    min-width: 60px;
    min-height: 40px;
  `,
  max: `
    min-width: 72px;
    min-height: 60px;
  `
}

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 16px;
  min-height: 40px;
  min-width: 144px;
  margin: 5px 10px;

  &:disabled {
    opacity: 0.5;
  }
  &:hover{
    background-color: #2e6da4;
  }

  ${props => get(sizeStyles, get(props, 'size'))}
`

Button.propTypes = {
  // btnType: PropTypes.oneOf(['primary', 'secondary', 'link', 'linkDark', 'step']),
  size: PropTypes.oneOf(['small', 'standard', 'max'])
}

Button.displayName = 'Button'

export default Button
