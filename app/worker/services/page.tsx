function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  );
}

export default function WorkerServices() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">
                Trusted services, powered by cooperation.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 lg:flex">
            <a href="/worker/dashboard" className="hover:text-green-700">
              Dashboard
            </a>
            <a href="#" className="hover:text-green-700">
              Bookings
            </a>
            <a href="/worker/services" className="font-semibold text-green-700">
              Services
            </a>
            <a href="#" className="hover:text-green-700">
              Earnings
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Rahul Sharma</p>
              <div className="flex items-center justify-end gap-1 text-xs text-green-700">
                <CheckIcon />
                Verified Worker
              </div>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
              RS
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Breadcrumb + Title */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
              <a href="/worker/dashboard" className="hover:text-green-700">
                Dashboard
              </a>
              <span>/</span>
              <span className="text-gray-800">My Services</span>
            </div>

            <h2 className="text-2xl font-bold">My Services</h2>

            <p className="mt-2 text-gray-500">
              Manage the services you offer to customers.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800">
            <PlusIcon />
            Add New Service
          </button>
        </div>

        {/* Service Summary */}
        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Services</p>
            <p className="mt-2 text-2xl font-bold">5</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active Services</p>
            <p className="mt-2 text-2xl font-bold text-green-700">5</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Service Area</p>
            <p className="mt-2 text-lg font-bold">Local & nearby</p>
          </div>
        </div>

        {/* Services Table */}
        <section className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-6">
            <h3 className="text-lg font-bold">Active Services</h3>
            <p className="mt-1 text-sm text-gray-500">
              These services are currently visible to customers.
            </p>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Starting Price</th>
                  <th className="px-6 py-4 font-medium">Duration</th>
                  <th className="px-6 py-4 font-medium">Availability</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 text-right font-medium">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-5 font-semibold">Electrical Repair</td>
                  <td className="px-6 py-5">₹299</td>
                  <td className="px-6 py-5 text-gray-500">1–2 hours</td>
                  <td className="px-6 py-5 text-gray-500">Mon–Sat</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50">
                        <EditIcon />
                        Edit
                      </button>
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        Disable
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">Wiring & Installation</td>
                  <td className="px-6 py-5">₹699</td>
                  <td className="px-6 py-5 text-gray-500">2–3 hours</td>
                  <td className="px-6 py-5 text-gray-500">Mon–Sat</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50">
                        <EditIcon />
                        Edit
                      </button>
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        Disable
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">Fan Installation</td>
                  <td className="px-6 py-5">₹499</td>
                  <td className="px-6 py-5 text-gray-500">1 hour</td>
                  <td className="px-6 py-5 text-gray-500">Mon–Sat</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50">
                        <EditIcon />
                        Edit
                      </button>
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        Disable
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">
                    Switch & Socket Repair
                  </td>
                  <td className="px-6 py-5">₹299</td>
                  <td className="px-6 py-5 text-gray-500">1 hour</td>
                  <td className="px-6 py-5 text-gray-500">Mon–Sat</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50">
                        <EditIcon />
                        Edit
                      </button>
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        Disable
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">
                    Appliance Connection
                  </td>
                  <td className="px-6 py-5">₹399</td>
                  <td className="px-6 py-5 text-gray-500">1–2 hours</td>
                  <td className="px-6 py-5 text-gray-500">Mon–Sat</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50">
                        <EditIcon />
                        Edit
                      </button>
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                        Disable
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-gray-100 md:hidden">
            {[
              ["Electrical Repair", "₹299", "1–2 hours"],
              ["Wiring & Installation", "₹699", "2–3 hours"],
              ["Fan Installation", "₹499", "1 hour"],
              ["Switch & Socket Repair", "₹299", "1 hour"],
              ["Appliance Connection", "₹399", "1–2 hours"],
            ].map(([name, price, duration]) => (
              <div key={name} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {duration} · Mon–Sat
                    </p>
                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                    Active
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-semibold">{price}</p>

                  <div className="flex gap-2">
                    <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                      Edit
                    </button>
                    <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                      Disable
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Service */}
        <section className="mt-7 rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold">Electrical Repair</h3>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  Active
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                Electrical troubleshooting and repair services for common
                household electrical issues, switches, sockets, fans, and
                appliance connections.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium hover:bg-gray-50">
                <EditIcon />
                Edit
              </button>

              <button className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Disable
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-4">
            <div>
              <p className="text-xs text-gray-500">Starting Price</p>
              <p className="mt-1 font-semibold">₹299</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="mt-1 font-semibold">1–2 hours</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Availability</p>
              <p className="mt-1 font-semibold">Mon–Sat</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Status</p>
              <p className="mt-1 font-semibold text-green-700">Active</p>
            </div>
          </div>
        </section>

        {/* Add New Service */}
        <section className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold">Add New Service</h3>
            <p className="mt-1 text-sm text-gray-500">
              Add another service that you can provide to customers.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Service Name</label>
              <input
                type="text"
                placeholder="e.g. Appliance Installation"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Category</label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600">
                <option>Home Appliance</option>
                <option>Home Maintenance</option>
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Cleaning</option>
                <option>Carpentry</option>
                <option>Painting</option>
                <option>Other Community Services</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                rows={3}
                placeholder="Describe the service..."
                className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Starting Price (₹)
              </label>
              <input
                type="number"
                placeholder="399"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Estimated Duration
              </label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600">
                <option>1–2 hours</option>
                <option>1 hour</option>
                <option>2–3 hours</option>
                <option>3–4 hours</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">
                Service Availability
              </label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600">
                <option>Mon–Sat · 9 AM – 7 PM</option>
                <option>Mon–Fri · 9 AM – 6 PM</option>
                <option>All Days · 9 AM – 7 PM</option>
              </select>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
              <div>
                <p className="text-sm font-medium">Service Active</p>
                <p className="mt-1 text-xs text-gray-500">
                  Make this service visible to customers.
                </p>
              </div>

              <div className="h-6 w-11 rounded-full bg-green-700 p-1">
                <div className="ml-auto h-4 w-4 rounded-full bg-white" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3 border-t border-gray-100 pt-5">
            <button className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Cancel
            </button>

            <button className="rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800">
              Add Service
            </button>
          </div>
        </section>

        {/* Cooperative Message */}
        <section className="mt-7 rounded-2xl border border-green-100 bg-green-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-green-700">
              S
            </div>

            <div>
              <h3 className="font-semibold text-green-900">
                Build your cooperative livelihood
              </h3>

              <p className="mt-1 max-w-3xl text-sm leading-6 text-green-800">
                Keep your services updated so customers can easily find the
                work you provide. Every service creates opportunities for
                trusted local cooperative workers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}