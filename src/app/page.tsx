export default function Home() {
  return (
    <div className="p-5 bg-white w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="banner w-full h-[100%] rounded-lg overflow-hidden relative">
        <header style={{transform:""}}></header>

        <img
          className="w-full object-cover h-full"
          src="/banner.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
}
