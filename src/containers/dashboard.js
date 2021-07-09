import React from "react";
import NavbarAuthenticated from "../components/NavbarAuthenticated";
import DropdownButton from "../components/DropdownButton";
import RecentlyEdited from "../components/RecentlyEdited";

const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

// if userisAuthenticated
/*
If the user is authenticated, you would have user boject in redux
SO in your main route file, you should render the roeutes only if user 
object is present otherwise show 404 page
*/

const Dashboard = (props) => (
  <div>
    <NavbarAuthenticated />
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <p className="text-center mt-20">
                <p>Welcome </p>
                <DropdownButton />
              </p>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Last 30 days
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
              >
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5">
            Recently Added Content
          </h3>

          <RecentlyEdited />
        </div>
      </section>
    </div>
  </div>
);

export default Dashboard;
