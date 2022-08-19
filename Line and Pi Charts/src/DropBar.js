import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Dropbar.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name:'Time'
  },
  {
    id: 'cato',
    name: 'Speed',
  },
  {
    id: 'kvn',
    name: 'Distance',
  },
  {
    id: 'mooncake',
    name: 'Revenue',
  },
  {
    id: 'quinn',
    name: 'Subscribers',
  }
]

function DropBar() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="Drag">
      <header className="Drag-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="char">
            {(provided) => (
              <ul className="char" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default DropBar;