import { grid, grid11, grid14, grid15, grid17, grid3 } from "../assets";

const cards = [
  {
    image: grid,
    title: "Land Restoration and Climate Action.",
    buttonText: "Read More",
    link: "/programs",
  },
  {
    image: grid11,
    title: "Education for Sustainable Development.",
    buttonText: "Read More",
    link: "/programs",
  },
  {
    image: grid15,
    title: "Urbanism, Circular Economy and Sustainable Development.",
    buttonText: "Read More",
    link: "/programs",
  },
  {
    image: grid14,
    title: "Advocacy and Awareness, Community Engagement and Participation.",
    buttonText: "Read More",
    link: "/programs",
  },
  {
    image: grid3,
    title: "Gender, Children, Youth and Climate Action.",
    buttonText: "Read More",
    link: "/programs",
  },
];

const CardGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    {cards.map((card, index) => (
      <div
        key={index}
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700"
      >
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={card.image}
            alt={card.title}
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {card.title}
          </h5>
          <a
            className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-md focus:bg-green-600 focus:shadow-md focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-md cursor-pointer"
            href={card.link}
          >
            {card.buttonText}
          </a>
        </div>
      </div>
    ))}
  </div>
);

export default CardGrid;
