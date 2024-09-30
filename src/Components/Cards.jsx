import React from "react";
import StageCard from "./StageCard";
import LeadsCard from "./LeadsCard";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Cards = ({ Stage, Leads, isStageragging }) => {
  return (
    <div>
      <StageCard Stage={Stage} />
      <Droppable droppableId={`lead-${Stage.id}`} direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...(isStageragging ? {} : provided.droppableProps)}
            className="flex flex-col"
          >
            {Leads &&
              Leads.filter((oneFilter) => oneFilter.stage_Id === Stage.id).map(
                (oneMap, index) => (
                  <Draggable
                    key={oneMap.id}
                    draggableId={`lead-${oneMap.id}`}
                    index={index}
                    isDragDisabled={isStageragging}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...(isStageragging ? {} : provided.draggableProps)}
                        {...(isStageragging ? {} : provided.dragHandleProps)}
                      >
                        <LeadsCard Leads={oneMap} />
                      </div>
                    )}
                  </Draggable>
                )
              )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Cards;
