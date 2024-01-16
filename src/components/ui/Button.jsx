const Button = ({ text, color }) => {
  return (
    <div
      className={`cp-btn cp-btn--${color} text-xl font-semibold leading-110% md:px-14 md:my-4 px-8 py-3 text-zinc-700 md:mx-0 hover:bg-transparent duration-200 w-fit hover:text-white`}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
