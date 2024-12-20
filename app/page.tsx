import Hello from "./components/hello";

export default function Home() {
  console.log('Where am I?')
  return (
    <>
      <h1 className="text-3xl">Test NextJS</h1>
      <Hello/>
    </>
  
  );
}
 