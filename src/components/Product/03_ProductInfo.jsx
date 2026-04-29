const ProductInfo = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex flex-col gap-4 border-b-2 border-[#6b648b] pb-4 md:pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold sm:text-4xl">Cybernecklace</h2>

            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border-2 border-[#7bdc27] bg-[#d9ffd8] sm:h-9 sm:w-9" />
              <p className="text-lg font-medium text-[#4b45a3] sm:text-xl">
                Starchaser
              </p>
              <div className="h-4 w-4 rounded-full bg-[#f5a18d]" />
            </div>
          </div>

          <p className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            #Cybercore
          </p>
        </div>

        <div className="space-y-3 text-sm leading-6 text-[#34324f] sm:text-[15px] md:text-base">
          <p>
            Description ใช้สำหรับแสดงรายละเอียดสินค้า ข้อมูลทั่วไปของชิ้นงาน
            และจุดเด่นที่อยากให้ผู้ชมเข้าใจก่อนตัดสินใจซื้อ
          </p>
          <p>
            สามารถวางเป็นข้อความตัวอย่างไว้ก่อนเพื่อดูการจัดวาง spacing ของ
            layout และค่อยเปลี่ยนเป็นข้อมูลจริงภายหลังได้
          </p>
          <p>
            ส่วนนี้ควรเป็นเนื้อหาของสินค้าโดยตรง เช่น วัสดุ ขนาด
            หรือคอนเซปต์ของงาน
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
