import Button from "./Button";

export default function HomeMain() {
  return (
    <div
      className="bg-[url('andrej-lisakov-3A4XZUopCJA-unsplash-new.jpg')]  bg-contain  bg-bottom bg-no-repeat h-[100vh] w-[1640px]
    grid place-content-center text-2xl"
    >
      <div>
        <h2>Hi, I'm David</h2>
        <p>Welcome to my site!</p>
        <p>take a look around.</p>
      </div>
      <Button />
    </div>
  );
}
