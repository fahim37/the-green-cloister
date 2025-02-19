export default function StatsBar() {
  return (
    <div className="max-w-[770px] bg-white backdrop-blur-[70px] shadow-md py-8 px-4 rounded-[12px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-primary text-4xl font-bold">10K</div>
          <div className="text-textPrimary text-[20px] font-semibold">
            Total Blogs
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-primary text-4xl font-bold">5</div>
          <div className="text-textPrimary text-[20px] font-semibold">
            Total Categories
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-primary text-4xl font-bold">$25M</div>
          <div className="text-textPrimary text-[20px] font-semibold">
            Total
          </div>
        </div>
      </div>
    </div>
  );
}
