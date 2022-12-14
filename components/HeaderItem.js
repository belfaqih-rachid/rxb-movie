function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20">
      <Icon className="group-hover:animate-bounce h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
