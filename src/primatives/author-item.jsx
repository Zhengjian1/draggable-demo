// @flow
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { grid } from '../constants';

const Div = styled.div`
  width: 330px;
  height: 200px;
  font-size:20px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 50%;
  margin-right: ${grid}px;
  border-color: ${({ isDragging }) => (isDragging ? colors.G50 : colors.N0)};
  border-style: solid;
  border-width: ${grid}px;
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N200}` : 'none'};

  &:focus {
    /* disable standard focus color */
    outline: none;

    /* use our own awesome one */
    border-color: ${({ isDragging }) =>
      isDragging ? colors.G50 : colors.B200};
  }
`;

const style = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  marginRight: '20px',
  borderColor: 'pink',
  borderStyle: 'solid',
  boxShadow: '2px 2px 1px green',
  fontSize: '20px',
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',

}


export default class AuthorItem extends Component{
  render() {
    const id = this.props.id;
    const provided = this.props.provided;
    const snapshot = this.props.snapshot;

    return (
      // <Avatar
      //   ref={ref => provided.innerRef(ref)}
      //   {...provided.draggableProps}
      //   {...provided.dragHandleProps}
      //   src={author.avatarUrl}
      //   alt={author.id}
      //   isDragging={snapshot.isDragging}
      // />
      <Div
        ref={ref => provided.innerRef(ref)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        // src={author.avatarUrl}
        // alt={author.name}
        // isDragging={snapshot.isDragging}
      >{
        id
      }</Div>
    );
  }
}
