const ArtistInfo = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-3 md:gap-4">
        <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          From Artist
        </h3>

        <div className="space-y-3 text-sm leading-6 text-[#34324f] sm:text-[15px] md:text-base">
          <p>
            Description ใช้สำหรับเล่าที่มาของชิ้นงาน แรงบันดาลใจ
            หรือมุมมองจาก artist เพื่อเพิ่มความรู้สึกเชื่อมโยงกับสินค้า
          </p>
          <p>
            บล็อกนี้เหมาะกับข้อความที่มีน้ำเสียงเป็นกันเอง
            และสะท้อนตัวตนของผู้สร้างงานมากกว่ารายละเอียดเชิงเทคนิค
          </p>
          <p>
            ตอนนี้ใส่เป็นข้อความตัวอย่างไว้ก่อนเพื่อเช็กจังหวะของ layout
            แล้วค่อยแทนที่ด้วยเนื้อหาจริงภายหลังได้เลย
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtistInfo;
