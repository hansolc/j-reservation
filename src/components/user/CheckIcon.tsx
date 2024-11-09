import cls from "classnames";

const CheckIcon = () => (
  <div
    className={cls(
      "w-5 h-5 rounded-full bg-primary flex justify-center items-center text-white"
    )}
  >
    <span className="material-symbols-outlined text-xl">&#xf88b;</span>
  </div>
);

export default CheckIcon;
