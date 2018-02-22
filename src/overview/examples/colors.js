import React from 'react'
import styled from 'styled-components'

import Section from '../ov-components/section'
import { colors, spacing } from '../../tokens'

const Swatch = styled.span`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: ${prop => prop.color};
  margin: ${spacing.xsmall} ${spacing.xsmall} 0 0;
`

const Colors = () => (
  <Section title="Colors">
    <div>
      <Swatch color={colors.base.default} />
      <Swatch color={colors.base.grayDark} />
      <Swatch color={colors.base.grayMedium} />
      <Swatch color={colors.base.grayLight} />
      <Swatch color={colors.base.grayLightest} />
    </div>
    <div>
      <Swatch color={colors.base.blue} />
      <Swatch color={colors.base.orange} />
      <Swatch color={colors.base.green} />
    </div>
  </Section>
)

export default Colors