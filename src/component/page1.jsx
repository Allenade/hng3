import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Page1(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.item.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <>
      <div
        className="overflow-hidden bg-white rounded-lg shadow-md"
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
      >
        <img
          src={props.item.coverImg}
          alt="Cover Image"
          className="object-cover w-full h-auto max-h-40"
        />

        <div className="p-4">
          <p className="mb-2 text-lg font-bold">{props.item.title}</p>
          <p className="text-blue-500">From $136 / person</p>
        </div>
      </div>
    </>
  );
}
