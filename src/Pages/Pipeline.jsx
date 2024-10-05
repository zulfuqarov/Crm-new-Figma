import React, { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import StageCard from "../Components/StageCard";
import { ContextCrm } from "../context/Context";
import LeadsCard from "../Components/LeadsCard";
import { Link } from "react-router-dom";
import AddStage from "../Components/AddStage";
import List from "../Components/List";
import LeadsList from "../Components/LeadsList";

const Pipeline = () => {
  const { stage, setstage, leads, setleads, handleChangeLeadsStage } =
    useContext(ContextCrm);

  const onDragEnd = (result) => {
    const { source, destination, type, draggableId } = result;

    if (!destination) return;

    if (type === "Stage") {
      const newStage = [...stage];
      const [reorderedStage] = newStage.splice(source.index, 1);
      newStage.splice(destination.index, 0, reorderedStage);
      setstage(newStage);
      console.log("ok");
      return;
    }

    if (type === "Leads") {
      const newLeads = leads.map((oneMap) =>
        oneMap.id === Number(draggableId)
          ? { ...oneMap, stage_Id: Number(destination.droppableId) }
          : { ...oneMap }
      );

      setleads(newLeads);

      handleChangeLeadsStage(draggableId, destination.droppableId);
    }
  };

  const [showListLeads, setshowListLeads] = useState(false);
  const toggleListAndGrid = () => {
    setshowListLeads(!showListLeads);
  };

  if (showListLeads) {
    return (
      <div>
        <List
          toggleListAndGrid={toggleListAndGrid}
          showListLeads={showListLeads}
        />
        <LeadsList />
      </div>
    );
  } else {
    return (
      <div>
        <List
          toggleListAndGrid={toggleListAndGrid}
          showListLeads={showListLeads}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="categories"
            type="Stage"
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
                          type="Leads"
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
                                    (oneLeads) =>
                                      oneLeads.stage_Id === Onestage.id
                                  )
                                  .map((OneMap, indexs) => (
                                    <Draggable
                                      key={OneMap.id}
                                      draggableId={OneMap.id.toString()}
                                      index={indexs}
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
      </div>
    );
  }
};

export default Pipeline;
