export default function Navbar() {
  return (
    <div className="text-white bg-black w-screen fixed text-xl flex justify-between px-24 h-12 items-center ">
      <h2>David Kapteyn</h2>
      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
