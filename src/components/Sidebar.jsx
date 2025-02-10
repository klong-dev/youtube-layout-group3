import items from "@/mocks/sidebar.json";

export const Sidebar = () => {
  const isExpanded = true;

  return (
    <>
      <div
        className={`fixed ${!isExpanded && "lg:w-[60px] gap-6 mt-4"} ${
          isExpanded && "lg:w-[180px] md:gap-6 lg:gap-0"
        } md:w-[100px] flex-col hidden md:flex md:ml-[-1.2rem] lg:ml-0 pt-16 fixed"`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`${!isExpanded && "flex-col gap-0"} flex ${
              isExpanded && "md:flex-col lg:flex-row lg:gap-4 md:gap-1"
            } items-center text-white lg:h-[48px]`}
          >
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            <span className="text-sm md:text-xs lg:text-sm line-clamp-1">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
