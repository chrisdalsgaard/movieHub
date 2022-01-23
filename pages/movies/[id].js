import Bottom from "../../components/Bottom";
import Center from "../../components/Center";
import Header from "../../components/Header";

export default function id() {
  const backgroundImage = `bg-[url('/demo.jpeg')]`;

  return (
    <div>
      <main
        className={` bg-cover bg-center ${backgroundImage} bg-black/20 bg-blend-darken w-full min-h-screen m-0 p-0`}
      >
        <Header />
        <div className="mx-20 my-20 space-y-20">
          <Center />
          <Bottom />
        </div>
      </main>
    </div>
  );
}
