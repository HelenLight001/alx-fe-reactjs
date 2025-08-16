export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1708658223534-f4a3db0ec7ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nbyUyMGZvciUyMHJlY2lwaWVzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to FlavorFusion
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover, share, and enjoy delicious recipes from all over the world.
        </p>
        <a
          href="/add-recipe"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
        >
          Add a Recipe
        </a>
      </div>
    </section>
  );
}
