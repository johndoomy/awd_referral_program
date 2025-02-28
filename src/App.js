import Main from './components/Main';

function App() {
  return (
    <div>
      <div className="flex justify-between h-16 px-4">
        <img
          src="https://content.app-sources.com/s/78612958735963643/uploads/Images/awdlogo-0006921.png?format=webp"
          alt="AWD Logo"
        />
        <a href="tel" className="my-auto underline text-blue-500">
          720-440-9751
        </a>
      </div>
      <div className="mt-4 flex justify-center">
        <Main />
      </div>
    </div>
  );
}

export default App;
