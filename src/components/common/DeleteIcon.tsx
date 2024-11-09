import cls from "classnames";

const DeleteIcon = () => (
  <div
    className={cls(
      "w-5 h-5 rounded-full bg-warn flex justify-center items-center text-white"
    )}
  >
    <span className="material-symbols-outlined text-xl">&#xe5cd;</span>
  </div>
);

export default DeleteIcon;
