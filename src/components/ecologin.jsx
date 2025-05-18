export default function EcoLogin() {
  return (
    <div className="min-h-screen bg-ecoBackground flex items-center justify-center p-6 font-eco">
      <form className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-ecoGreen-dark mb-8 text-center">
          Eco Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-6 rounded-lg border-2 border-ecoGreen-light focus:border-ecoGreen focus:outline-none transition"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-8 rounded-lg border-2 border-ecoGreen-light focus:border-ecoGreen focus:outline-none transition"
        />
        <button
          type="submit"
          className="w-full bg-ecoGreen text-white font-semibold py-4 rounded-lg hover:bg-ecoGreen-dark transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
