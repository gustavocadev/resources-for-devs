type Props = {
  img: string;
  title: string;
  description: string;
  link: string;
};

const Card = ({ img, title, description, link }: Props) => {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-[#202020] dark:text-gray-100">
      <img
        src={img}
        alt={description}
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-100">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Ir al recurso
        </a>
      </div>
    </div>
  );
};
export default Card;
