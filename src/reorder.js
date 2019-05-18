// @flow

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;



export const reorderQuoteMap = ({
  quoteMap,
  source,
  destination,
}) => {
  const current = [...quoteMap[source.droppableId]];
  const next = [...quoteMap[destination.droppableId]];
  const target = current[source.index];
  let nextLastTarget = {};

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(
      current,
      source.index,
      destination.index,
    );
    const result = {
      ...quoteMap,
      [source.droppableId]: reordered,
    };
    return {
      quoteMap: result,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  // 从下一行往上一行移动
  if (Number(source.droppableId) > Number(destination.droppableId)) {
    // 把next行的最后一个拿出来，插入到current行的首位
    nextLastTarget = next.splice(next.length - 1, 1);
    current.splice(0, 0, ...nextLastTarget)
  } else {
    // 从上一行往下一行移动
    // 把next行的第一个拿出来，插入到current行的最后
    nextLastTarget = next.splice(0, 1);
    current.splice(current.length , 0, ...nextLastTarget)
  }

  

  const result = {
    ...quoteMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    quoteMap: result,
  };
};
