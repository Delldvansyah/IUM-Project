import MenuList from "../components/MenuList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center p-6">
        <h1 className="text-3xl">Katalog Menu Restoran</h1>
      </header>

      <main className="p-4">
        <MenuList />
      </main>
    </div>
  );
};

export default Home;
