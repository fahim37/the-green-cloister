export default function StatsBar() {
  return (
    <div className="max-w-[770px] bg-white backdrop-blur-[70px] shadow-md py-8 px-4 rounded-[12px] w-[98%] lg:w-full mx-auto">
      <div className="grid grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
            10K
          </div>
          <div className="text-textPrimary text-lg md:text-xl lg:text-2xl font-semibold">
            Total Blogs
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
            5
          </div>
          <div className="text-textPrimary text-lg md:text-xl lg:text-2xl font-semibold">
            Total Categories
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
            $25M
          </div>
          <div className="text-textPrimary text-lg md:text-xl lg:text-2xl font-semibold">
            Total
          </div>
        </div>
      </div>
    </div>
  );
}
