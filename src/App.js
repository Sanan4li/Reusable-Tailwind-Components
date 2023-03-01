import { useState } from "react";
import { Modal, Table, Tabs } from "./components/shared";

function App() {
  const [showModal, setShowModal] = useState(false);
  const CustomerTabs = {
    CUSTOMER: "Customers",
    DRIVER: "Drivers",
  };
  const toggleShowModal = () => setShowModal((prev) => !prev);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="w-1/2">
        <Table />
      </div>
      <div className="mx-auto max-w-7xl  sm:px-6 md:px-5 md:py-5">
        <div>
          <Tabs tabs={CustomerTabs} defaultActive={CustomerTabs.DRIVER}>
            <div name={CustomerTabs.CUSTOMER}>
              <h1>First Tab</h1>
              <p>First Tab Content</p>
            </div>
            <div name={CustomerTabs.DRIVER}>
              <h1>Second Tab</h1>
              <p>First Tab Content</p>
            </div>
          </Tabs>
        </div>
      </div>
      <div className="flex items-center h-screen justify-center">
        <button
          className="px-4 py-2 bg-gradient-to-tl from-blue-300 to-red-300 rounded-md"
          onClick={toggleShowModal}
        >
          Learn More
        </button>
      </div>

      <Modal
        show={showModal}
        closeHandler={toggleShowModal}
        containerClassName="w-1/2 p-5"
        closeButton={true}
      >
        <h1 className="font-semibold text-xl">Title</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Modal>
    </div>
  );
}

export default App;
