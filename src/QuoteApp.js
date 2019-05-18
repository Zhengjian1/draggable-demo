// @flow
import React, { Component } from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { DragDropContext } from 'react-beautiful-dnd';
import AuthorList from './primatives/author-list';
import { grid } from './constants';
import { reorderQuoteMap } from './reorder';

const Root = styled.div`
  background-color: ${colors.B200};
  box-sizing: border-box;
  padding: ${grid * 2}px;
  min-height: 100vh;

  /* flexbox */
  display: flex;
  flex-direction: column;
`;


export default class QuoteApp extends Component{
  /* eslint-disable react/sort-comp */

  state = {
    quoteMap: this.props.initial,
  };

  onDragEnd = (result) => {
    // // dropped outside the list
    if (!result.destination) {
      return;
    }

    console.log(result)

    this.setState(
      reorderQuoteMap({
        quoteMap: this.state.quoteMap,
        source: result.source,
        destination: result.destination,
      }),
    );
  };

  render() {
    const { quoteMap } = this.state;
    console.log(quoteMap)

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {/* <Root> */}
          {Object.keys(quoteMap).map((key) => (
            <AuthorList
              key={key}
              listId={key}
              listType="CARD"
              quotes={quoteMap[key]}
            />
          ))}
        {/* </Root> */}
      </DragDropContext>
    );
  }
}
