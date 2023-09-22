import Page1 from "./page1";
import data from "../data";
import Navbar from "./navbar";
import { DndContext, closestCenter } from "@dnd-kit/core";
// import Dropbox from "./drop";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

function DragandDrop() {
  const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState("");
  // const addUser = () =
  const [query, setQuery] = useState("");

  const input = (inputValue) => {
    setQuery(inputValue);
  };
  console.log(query);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setUsers((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over.id);
      return arrayMove(users, oldIndex, newIndex);
    });
  };

  return (
    <div>
      <Navbar input={input} />
      {/* <Dropbox /> */}
      <div className="flex flex-col items-center mt-5 md:mt-10">
        <section className="grid grid-cols-2 gap-8 p-2 md:grid-cols-4 md:p-4 lg:p-8">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={users} strategy={rectSortingStrategy}>
              {users
                .filter((user) => {
                  return query.toLowerCase() === ""
                    ? users
                    : user.title.toLowerCase().includes(query.toLowerCase());
                })
                .map((item) => (
                  <Page1 key={item.id} item={item} />
                ))}
            </SortableContext>
          </DndContext>
        </section>
      </div>
    </div>
  );
}
export default DragandDrop;
