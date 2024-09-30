import React, { useContext, useEffect, useState } from "react";
import List from "../Components/List";
import AddStage from "../Components/AddStage";
import Cards from "../Components/Cards";
import { ContextCrm } from "../context/Context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Pipeline = () => {
  const { stage, setstage, leads } = useContext(ContextCrm);

  // const [StageState, setStageState] = useState([]);
  // const [LeadsState, setLeadsState] = useState([]);

  const [isLeadDragging, setIsLeadDragging] = useState(false);
  const [isStageragging, setisStageragging] = useState(false);

  useEffect(() => {
    // setStageState(stage);
    // setLeadsState(leads);
  }, []);

  const handleOnDragStart = (start) => {
    if (start.source.droppableId.startsWith("lead-")) {
      setIsLeadDragging(true);
    }
    if (start.source.droppableId.startsWith("stages")) {
      setisStageragging(true);
    }
  };

  const handleOnDragEnd = (result) => {
    setIsLeadDragging(false);
    setisStageragging(false);
  
    const { destination, source } = result;
  
    if (!destination) return;
  
    // Eğer stages alanı içerisindeyse (stage'ler arası sürükleme)
    if (source.droppableId === "stages" && destination.droppableId === "stages") {
      const newStage = [...stage];
      const [reorderedStage] = newStage.splice(source.index, 1);
      newStage.splice(destination.index, 0, reorderedStage);
      setstage(newStage);
      console.log("ok");
    }
  
    // Eğer lead'ler arasında bir değişiklik olduysa
    if (
      source.droppableId.startsWith("lead-") &&
      destination.droppableId.startsWith("lead-")
    ) {
      console.log("deyisdi");
    }
  };
  

  return (
    <section>
      <List />
      <div className="flex">
        <DragDropContext
          onDragStart={handleOnDragStart}
          onDragEnd={handleOnDragEnd}
        >
          <Droppable droppableId="stages" direction="horizontal">
            {(provided) => (
              <div
                className="flex  px-[20px]"
                {...(isLeadDragging ? {} : provided.droppableProps)}
                ref={provided.innerRef}
              >
                {stage &&
                  stage.map((OneMap, index) => (
                    <Draggable
                      key={OneMap.id}
                      draggableId={`stages-${OneMap.id}`}
                      index={index}
                      isDragDisabled={isLeadDragging}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...(isLeadDragging ? {} : provided.draggableProps)}
                          {...(isLeadDragging ? {} : provided.dragHandleProps)}
                          className="bg-white px-[12px]"
                        >
                          <Cards
                            Stage={OneMap}
                            Leads={leads}
                            isStageragging={isStageragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddStage />
      </div>
    </section>
  );
};

export default Pipeline;
