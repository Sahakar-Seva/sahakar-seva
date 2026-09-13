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

function WalletIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M2 6V5a2 2 0 0 1 2-2h14" />
      <path d="M17 13h5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function WorkerEarnings() {
  const weeklyEarnings = [
    { week: "Week 1", amount: "₹3,850", width: "72%" },
    { week: "Week 2", amount: "₹4,200", width: "79%" },
    { week: "Week 3", amount: "₹5,100", width: "91%" },
    { week: "Week 4", amount: "₹5,300", width: "95%" },
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

            <a href="/worker/services" className="hover:text-green-700">
              Services
            </a>

            <a href="/worker/earnings" className="font-semibold text-green-700">
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
        {/* Title */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
              <a href="/worker/dashboard" className="hover:text-green-700">
                Dashboard
              </a>
              <span>/</span>
              <span className="text-gray-800">My Earnings</span>
            </div>

            <h2 className="text-2xl font-bold">My Earnings</h2>

            <p className="mt-2 text-gray-500">
              Track earnings from your completed cooperative services.
            </p>
          </div>

          <button className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            This Month ▾
          </button>
        </div>

        {/* Summary Cards */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
              <WalletIcon />
            </div>

            <p className="mt-5 text-sm text-gray-500">Total Earnings</p>

            <p className="mt-1 text-2xl font-bold">₹18,450</p>

            <p className="mt-2 text-xs text-green-700">
              This month
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
              <CalendarIcon />
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Completed Services
            </p>

            <p className="mt-1 text-2xl font-bold">86</p>

            <p className="mt-2 text-xs text-gray-500">
              Successfully completed
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
              <WalletIcon />
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Pending Payments
            </p>

            <p className="mt-1 text-2xl font-bold">₹2,100</p>

            <p className="mt-2 text-xs text-yellow-700">
              Processing
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
              <span className="text-lg font-bold">₹</span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Average per Service
            </p>

            <p className="mt-1 text-2xl font-bold">₹498</p>

            <p className="mt-2 text-xs text-gray-500">
              Based on completed services
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_340px]">
          {/* Earnings Overview */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Earnings Overview</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Weekly earnings for this month
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
                ₹18,450 total
              </span>
            </div>

            <div className="mt-8 space-y-6">
              {weeklyEarnings.map((item) => (
                <div key={item.week}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{item.week}</span>
                    <span className="font-semibold">{item.amount}</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-green-600"
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-4 gap-2 border-t border-gray-100 pt-6">
              <div className="text-center">
                <p className="text-xs text-gray-400">W1</p>
                <p className="mt-1 text-sm font-semibold">₹3,850</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400">W2</p>
                <p className="mt-1 text-sm font-semibold">₹4,200</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400">W3</p>
                <p className="mt-1 text-sm font-semibold">₹5,100</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400">W4</p>
                <p className="mt-1 text-sm font-semibold">₹5,300</p>
              </div>
            </div>
          </section>

          {/* Payment Summary */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Payment Summary</h3>

            <p className="mt-1 text-sm text-gray-500">
              Your upcoming payout
            </p>

            <div className="mt-6 rounded-xl bg-green-50 p-5">
              <p className="text-sm text-green-800">Next Payout</p>

              <p className="mt-2 text-3xl font-bold text-green-900">
                ₹2,100
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Processing
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Completed payments</span>
                <span className="font-medium">₹18,450</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pending payments</span>
                <span className="font-medium">₹2,100</span>
              </div>

              <div className="flex justify-between border-t border-gray-100 pt-4 text-sm">
                <span className="font-medium">Current balance</span>
                <span className="font-bold">₹2,100</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Recent Transactions */}
        <section className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 p-6">
            <div>
              <h3 className="text-lg font-bold">Recent Earnings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Recent completed and pending service payments
              </p>
            </div>

            <button className="text-sm font-semibold text-green-700 hover:text-green-800">
              View All
            </button>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-5 font-semibold">Amit Verma</td>
                  <td className="px-6 py-5 text-gray-600">
                    Electrical Repair
                  </td>
                  <td className="px-6 py-5 text-gray-500">
                    18 Sep 2026
                  </td>
                  <td className="px-6 py-5 font-semibold">₹499</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">Priya Mehta</td>
                  <td className="px-6 py-5 text-gray-600">
                    Fan Installation
                  </td>
                  <td className="px-6 py-5 text-gray-500">
                    18 Sep 2026
                  </td>
                  <td className="px-6 py-5 font-semibold">₹699</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">Neha Kapoor</td>
                  <td className="px-6 py-5 text-gray-600">
                    Switch & Socket Repair
                  </td>
                  <td className="px-6 py-5 text-gray-500">
                    16 Sep 2026
                  </td>
                  <td className="px-6 py-5 font-semibold">₹299</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">Rohit Kumar</td>
                  <td className="px-6 py-5 text-gray-600">
                    Wiring & Installation
                  </td>
                  <td className="px-6 py-5 text-gray-500">
                    15 Sep 2026
                  </td>
                  <td className="px-6 py-5 font-semibold">₹699</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-gray-100 md:hidden">
            {[
              ["Amit Verma", "Electrical Repair", "18 Sep 2026", "₹499", "Paid"],
              ["Priya Mehta", "Fan Installation", "18 Sep 2026", "₹699", "Paid"],
              ["Neha Kapoor", "Switch & Socket Repair", "16 Sep 2026", "₹299", "Paid"],
              ["Rohit Kumar", "Wiring & Installation", "15 Sep 2026", "₹699", "Pending"],
            ].map(([customer, service, date, amount, status]) => (
              <div key={customer} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{customer}</p>
                    <p className="mt-1 text-sm text-gray-500">{service}</p>
                    <p className="mt-1 text-xs text-gray-400">{date}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">{amount}</p>

                    <span
                      className={`mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
                        status === "Paid"
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Insight */}
        <section className="mt-7 rounded-2xl border border-green-100 bg-green-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-green-700">
              ₹
            </div>

            <div>
              <h3 className="font-semibold text-green-900">
                Your earnings are growing
              </h3>

              <p className="mt-1 max-w-3xl text-sm leading-6 text-green-800">
                Your weekly earnings have steadily increased this month.
                Keep providing reliable service and building strong
                customer relationships through Sahakar Seva.
              </p>
            </div>
          </div>
        </section>

        {/* Cooperative Message */}
        <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 font-bold text-green-700">
              S
            </div>

            <div>
              <h3 className="font-semibold">
                Earnings powered by cooperation
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Sahakar Seva helps local cooperative workers earn through
                trusted community services.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}