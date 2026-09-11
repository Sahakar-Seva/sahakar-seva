function BellIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

function WorkerIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

export default function AdminWorkers() {
  const workers = [
    {
      name: "Rahul Sharma",
      service: "Electrical Services",
      phone: "+91 98765 43210",
      joined: "12 Aug 2026",
      bookings: 86,
      rating: "4.9",
      status: "Verified",
      initials: "RS",
    },
    {
      name: "Suresh Kumar",
      service: "Plumbing",
      phone: "+91 98123 45678",
      joined: "10 Aug 2026",
      bookings: 74,
      rating: "4.8",
      status: "Verified",
      initials: "SK",
    },
    {
      name: "Vikram Singh",
      service: "Home Cleaning",
      phone: "+91 97654 32109",
      joined: "08 Aug 2026",
      bookings: 63,
      rating: "4.7",
      status: "Verified",
      initials: "VS",
    },
    {
      name: "Ramesh Gupta",
      service: "Plumbing",
      phone: "+91 98989 11223",
      joined: "18 Sep 2026",
      bookings: 0,
      rating: "—",
      status: "Pending",
      initials: "RG",
    },
    {
      name: "Manoj Kumar",
      service: "Carpentry",
      phone: "+91 98711 22334",
      joined: "18 Sep 2026",
      bookings: 0,
      rating: "—",
      status: "Pending",
      initials: "MK",
    },
    {
      name: "Deepak Sharma",
      service: "Electrical",
      phone: "+91 98111 44556",
      joined: "17 Sep 2026",
      bookings: 0,
      rating: "—",
      status: "Pending",
      initials: "DS",
    },
    {
      name: "Anil Yadav",
      service: "Electrical Services",
      phone: "+91 99887 66554",
      joined: "02 Aug 2026",
      bookings: 51,
      rating: "4.6",
      status: "Verified",
      initials: "AY",
    },
    {
      name: "Sunil Verma",
      service: "Appliance Repair",
      phone: "+91 99001 22334",
      joined: "28 Jul 2026",
      bookings: 42,
      rating: "4.5",
      status: "Suspended",
      initials: "SV",
    },
  ];

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
                Cooperative services platform
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-gray-600 lg:flex">
            <a href="/admin/dashboard" className="hover:text-green-700">
              Dashboard
            </a>

            <a href="/admin/workers" className="font-semibold text-green-700">
              Workers
            </a>

            <a href="#" className="hover:text-green-700">
              Customers
            </a>

            <a href="#" className="hover:text-green-700">
              Bookings
            </a>

            <a href="#" className="hover:text-green-700">
              Services
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
              <BellIcon />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-500">
                Platform Administrator
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Title */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <a href="/admin/dashboard" className="hover:text-green-700">
              Dashboard
            </a>
            <span>/</span>
            <span className="text-gray-800">Workers</span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-bold">Worker Management</h2>

              <p className="mt-2 text-gray-500">
                Manage, verify, and monitor cooperative workers.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800">
              <WorkerIcon />
              Add Worker
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Workers</p>
            <p className="mt-2 text-2xl font-bold">248</p>
            <p className="mt-2 text-xs text-gray-500">
              Registered on platform
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Verified Workers</p>
            <p className="mt-2 text-2xl font-bold text-green-700">216</p>
            <p className="mt-2 text-xs text-green-700">
              87.1% of all workers
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending Verification</p>
            <p className="mt-2 text-2xl font-bold text-yellow-700">8</p>
            <p className="mt-2 text-xs text-gray-500">
              Requires admin review
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active Workers</p>
            <p className="mt-2 text-2xl font-bold">203</p>
            <p className="mt-2 text-xs text-gray-500">
              Currently accepting work
            </p>
          </div>
        </div>

        {/* Verification Alert */}
        <section className="mt-7 rounded-2xl border border-yellow-100 bg-yellow-50 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-yellow-700">
                <WorkerIcon />
              </div>

              <div>
                <h3 className="font-semibold text-yellow-900">
                  8 workers are waiting for verification
                </h3>

                <p className="mt-1 text-sm text-yellow-800">
                  Review their details and documents before approving them
                  on the platform.
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-yellow-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-yellow-700">
              Review Requests
            </button>
          </div>
        </section>

        {/* Worker Table */}
        <section className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-gray-100 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-bold">All Workers</h3>
              <p className="mt-1 text-sm text-gray-500">
                View and manage registered workers.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 sm:w-64">
                <SearchIcon />

                <input
                  type="text"
                  placeholder="Search workers..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FilterIcon />
                Filter
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b border-gray-100 px-6 py-4">
            <button className="rounded-full bg-green-700 px-4 py-2 text-xs font-semibold text-white">
              All Workers
            </button>

            <button className="rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200">
              Verified
            </button>

            <button className="rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200">
              Pending
            </button>

            <button className="rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200">
              Suspended
            </button>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Worker</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Joined</th>
                  <th className="px-6 py-4 font-medium">Bookings</th>
                  <th className="px-6 py-4 font-medium">Rating</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {workers.map((worker) => (
                  <tr key={worker.name} className="hover:bg-gray-50/70">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                          {worker.initials}
                        </div>

                        <div>
                          <p className="font-semibold">{worker.name}</p>
                          <p className="mt-1 text-xs text-gray-400">
                            {worker.phone}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {worker.service}
                    </td>

                    <td className="px-6 py-5 text-gray-500">
                      {worker.joined}
                    </td>

                    <td className="px-6 py-5 font-medium">
                      {worker.bookings}
                    </td>

                    <td className="px-6 py-5">
                      {worker.rating === "—" ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <span className="font-medium">
                          ★ {worker.rating}
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          worker.status === "Verified"
                            ? "bg-green-50 text-green-700"
                            : worker.status === "Pending"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                        }`}
                      >
                        {worker.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50">
                          View
                        </button>

                        {worker.status === "Pending" && (
                          <button className="rounded-lg bg-green-700 px-3 py-2 text-xs font-semibold text-white hover:bg-green-800">
                            Verify
                          </button>
                        )}

                        {worker.status === "Verified" && (
                          <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50">
                            Manage
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-gray-100 md:hidden">
            {workers.map((worker) => (
              <div key={worker.name} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                      {worker.initials}
                    </div>

                    <div>
                      <p className="font-semibold">{worker.name}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {worker.service}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      worker.status === "Verified"
                        ? "bg-green-50 text-green-700"
                        : worker.status === "Pending"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-red-50 text-red-700"
                    }`}
                  >
                    {worker.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 rounded-xl bg-gray-50 p-3">
                  <div>
                    <p className="text-xs text-gray-400">Bookings</p>
                    <p className="mt-1 text-sm font-semibold">
                      {worker.bookings}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="mt-1 text-sm font-semibold">
                      {worker.rating}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Joined</p>
                    <p className="mt-1 text-sm font-semibold">
                      {worker.joined.split(" ")[0]}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                    View
                  </button>

                  {worker.status === "Pending" && (
                    <button className="flex-1 rounded-lg bg-green-700 px-3 py-2 text-xs font-semibold text-white">
                      Verify
                    </button>
                  )}

                  {worker.status === "Verified" && (
                    <button className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                      Manage
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              Showing <span className="font-medium">1–8</span> of{" "}
              <span className="font-medium">248</span> workers
            </p>

            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-400">
                Previous
              </button>

              <button className="rounded-lg bg-green-700 px-3 py-2 text-xs font-semibold text-white">
                1
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                2
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                3
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium">
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Verification Info */}
        <section className="mt-7 rounded-2xl border border-green-100 bg-green-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-green-700">
              <CheckIcon />
            </div>

            <div>
              <h3 className="font-semibold text-green-900">
                Verified workers build trust
              </h3>

              <p className="mt-1 max-w-3xl text-sm leading-6 text-green-800">
                Verify worker identity, skills, and required documents before
                allowing them to provide services through Sahakar Seva.
                Verified workers help customers feel confident while supporting
                a trusted cooperative ecosystem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}