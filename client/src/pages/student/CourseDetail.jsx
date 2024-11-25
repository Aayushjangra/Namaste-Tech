const CourseDetail = () => {
  return (
    <div className=" mt-16 space-y-5">
      <div className="bg-[#2D2F31] text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">Course Title</h1>
          <p className="text-base md:text-lg">Course Sub-title</p>
          <p>Created By{""}<span className="text-[#C0C4FC] underline italic">
         Aayush Jangra
        </span></p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
