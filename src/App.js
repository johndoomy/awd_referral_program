import Main from './components/Main';

function App() {
  return (
    <div>
      <div className="flex justify-between h-12 mx-4 my-2">
        <img
          src="https://content.app-sources.com/s/78612958735963643/uploads/Images/awdlogo-0432870.jpeg"
          alt="AWD Logo"
        />

        <a href="tel:+17204409751" className="my-auto underline text-blue-500">
          720-440-9751
        </a>
      </div>
      <div className="mt-2 sm:mx-12 md:mx-24 lg:mx-80 flex justify-center">
        <Main />
      </div>
    </div>
  );
}

export default App;
