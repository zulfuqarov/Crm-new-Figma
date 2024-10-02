import React, { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import StageCard from "../Components/StageCard";
import { ContextCrm } from "../context/Context";
import LeadsCard from "../Components/LeadsCard";
import { Link } from "react-router-dom";
import AddStage from "../Components/AddStage";

const Pipeline = () => {
  const { stage, setstage, leads } = useContext(ContextCrm);

  const onDragEnd = (result) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (type === "category") {
      const newStage = [...stage];
      const [reorderedStage] = newStage.splice(source.index, 1);
      newStage.splice(destination.index, 0, reorderedStage);
      setstage(newStage);
      console.log("ok");
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="categories"
        type="category"
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <div
            className={`w-full flex   transition-colors duration-200 ${
              snapshot.isDraggingOver
                ? "bg-gray-100 border-2 border-dashed border-gray-200"
                : ""
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {stage.map((Onestage, index) => (
              <Draggable
                key={Onestage.id}
                draggableId={Onestage.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    className="w-full px-[8px] bg-white"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                    }}
                  >
                    <StageCard Stage={Onestage} />
                    <Droppable
                      droppableId={Onestage.id.toString()}
                      type="product"
                    >
                      {(provided, snapshot) => (
                        <div
                          className={`w-full   transition-colors duration-200 ${
                            snapshot.isDraggingOver
                              ? "bg-gray-100 border-2 border-dashed border-gray-200"
                              : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          style={{
                            minHeight: "150px",
                          }}
                        >
                          {leads &&
                            leads
                              .filter(
                                (oneLeads) => oneLeads.stage_Id === Onestage.id
                              )
                              .map((OneMap, indexs) => (
                                <Draggable
                                  key={OneMap.id}
                                  draggableId={OneMap.id.toString() + 1}
                                  index={OneMap.id}
                                >
                                  {(provided) => (
                                    <Link
                                      to={`/Leads/${OneMap.id}`}
                                      className="mb-[10px] inline-block w-full !cursor-pointer"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <LeadsCard Leads={OneMap} />
                                    </Link>
                                  )}
                                </Draggable>
                              ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <AddStage />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Pipeline;
