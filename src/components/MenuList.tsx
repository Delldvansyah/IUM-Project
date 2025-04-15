import MenuCard from "./MenuCard";

const menuData = [
  {
    title: "Nasi Goreng",
    description: "Nasi goreng spesial dengan ayam dan telur.",
    imageUrl: "/images/NasiGoreng.jpg", // Ganti dengan path gambar sesuai
  },
  {
    title: "Mie Ayam",
    description: "Mie dengan ayam dan sayuran segar.",
    imageUrl: "/images/MieAyam.jpg", // Ganti dengan path gambar sesuai
  },
  // Tambah menu lainnya...
];

const MenuList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {menuData.map((menu, index) => (
        <MenuCard
          key={index}
          title={menu.title}
          description={menu.description}
          imageUrl={menu.imageUrl}
        />
      ))}
    </div>
  );
};

export default MenuList;
