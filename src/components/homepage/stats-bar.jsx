export default function StatsBar() {
  return (
    <div className="max-w-[770px] bg-[#606060] py-8 px-4 rounded-[12px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-primary text-4xl font-bold">1.5M+</div>
          <div className="text-textPrimary text-[20px] font-semibold">
            Members,supports and activits
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-primary text-4xl font-bold">19:1</div>
          <div className="text-textPrimary text-[20px] font-semibold">
            Student to Teacher Ratio
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-primary text-4xl font-bold">$25M</div>
          <div className="text-textPrimary text-[20px] font-semibold">
            Total Financial Aid Offered to Eten Student
          </div>
        </div>
      </div>
    </div>
  );
}
