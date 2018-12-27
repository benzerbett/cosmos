import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Heading, { StyledHeading } from '../../atoms/heading'
import Icon from '../../atoms/icon'
import { lastDayOfISOYear } from 'date-fns'

const List = props => {
  return (
    <List.Element {...Automation('list')} role="list" aria-label="Expandable data list example">
      {props.label ? (
        <List.Label>
          <Heading size={4}>{props.label}</Heading>
        </List.Label>
      ) : null}

      {React.Children.map(props.children, child => (
        <List.Item {...Automation('list.item')} aria-labelledby="example-id">
          {props.sortable ? (
            <List.Handle
              aria-expanded="true"
              aria-label="Toggle details"
              aria-labelledby="example-id button_id"
              id="button_id"
            >
              <Icon name="resize-vertical" size="16" color="blue" />
            </List.Handle>
          ) : null}

          <List.Content>{props.children}</List.Content>
          {/* add id="example-id" to the primary content */}

          {props.expandable ? (
            <List.Arrow>
              <Icon name="chevron-down" size="16" color="blue" />
            </List.Arrow>
          ) : null}

          {props.expandable ? (
            <List.Drawer hidden aria-label="Primary Content Details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
              consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem
              fringilla ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod temporellentesque. Risus ultricies
              tristique nulla aliquet enim. Proin libero nunc consequat interdum varius sit amet.
              Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu
              nonLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
              consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem
              fringilla ut morbi tincidunt. Tincidunt arcu non
            </List.Drawer>
          ) : null}
        </List.Item>
      ))}
    </List.Element>
  )
}

List.Element = styled.ul`
  ${containerStyles};
`

List.Item = styled.li`
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small};
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;

  &:hover {
    background-color: ${colors.list.backgroundHover};
  }
`

List.Content = styled.div`
  flex: 1;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > *:not(:last-child):not(:only-child) {
    margin-right: ${spacing.small};
  }

  /* if it has only one item inside we want it to fill all the avaliable space */
  > * {
    flex: 1;
  }
`
List.Header = styled.div`
  flex: 1;
  background-color: hotpink;
`

List.Body = styled.div`
  flex: 1.4;
  background-color: yellow;
  /* This is not mobile first, but it avoids negation of margin */
  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
    order: 1;
    margin-top: ${spacing.small};
  }
`

List.Footer = styled.div`
  background-color: orange;
  flex: none;
`

// Sortable List
List.Handle = styled.button`
  /* background-color: red; */
  border: none;
  padding: 0;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`

// Sortable List
List.Arrow = styled.button`
  /* background-color: red; */
  border: none;
  padding: 0;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`

List.Drawer = styled.section`
  background-color: papayawhip;
  flex: 1 0 100%;
  border-top: 1px solid ${colors.list.borderColor};

  margin-top: ${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};

  max-height: 200px;

  overflow-y: scroll;
`

List.Label = styled.div`
  padding: ${spacing.xsmall};

  ${StyledHeading[4]} {
    margin: 0;
  }
`

List.propTypes = {
  /** header for list */
  label: PropTypes.string,
  sortable: PropTypes.bool,
  expandable: PropTypes.bool
}

List.defaultProps = {}

export default List
