"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const [notifications, setNotifications] = useState({
    newBookings: true,
    workerVerification: true,
    customerIssues: true,
    bookingUpdates: true,
    weeklyReports: false,
    systemAlerts: true,
  });

  const [settings, setSettings] = useState({
    platformName: "Sahakar Seva",
    supportEmail: "support@sahakarseva.in",
    supportPhone: "+91 98765 43210",
    bookingApproval: "Automatic",
    workerVerification: "Admin Approval",
    maintenanceMode: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold">Sahakar Seva</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-lg p-2 hover:bg-gray-100">
              <span className="text-xl">🔔</span>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-500">Platform Manager</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold">Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your admin profile, platform preferences and notifications.
          </p>
        </div>

        {/* Save Message */}
        {saved && (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            ✓ Settings saved successfully.
          </div>
        )}

        {/* Admin Profile */}
        <section className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <SectionHeading
            icon="👤"
            title="Admin Profile"
            description="Manage your administrator account information."
          />

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-green-700">
              A
            </div>

            <div className="grid flex-1 gap-5 sm:grid-cols-2">
              <InputField
                label="Full Name"
                value="Admin"
                readOnly
              />

              <InputField
                label="Role"
                value="Platform Manager"
                readOnly
              />

              <InputField
                label="Email"
                value="admin@sahakarseva.in"
                type="email"
              />

              <InputField
                label="Phone"
                value="+91 98765 43210"
                type="tel"
              />
            </div>
          </div>
        </section>

        {/* Platform Settings */}
        <section className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <SectionHeading
            icon="⚙️"
            title="Platform Settings"
            description="Configure basic Sahakar Seva platform preferences."
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <InputField
              label="Platform Name"
              value={settings.platformName}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  platformName: value,
                }))
              }
            />

            <InputField
              label="Support Email"
              value={settings.supportEmail}
              type="email"
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  supportEmail: value,
                }))
              }
            />

            <InputField
              label="Support Phone"
              value={settings.supportPhone}
              type="tel"
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  supportPhone: value,
                }))
              }
            />

            <SelectField
              label="Booking Approval"
              value={settings.bookingApproval}
              options={["Automatic", "Admin Approval"]}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  bookingApproval: value,
                }))
              }
            />

            <SelectField
              label="Worker Verification"
              value={settings.workerVerification}
              options={["Admin Approval", "Automatic Verification"]}
              onChange={(value) =>
                setSettings((prev) => ({
                  ...prev,
                  workerVerification: value,
                }))
              }
            />
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <SectionHeading
            icon="🔔"
            title="Notification Preferences"
            description="Choose which platform events should notify administrators."
          />

          <div className="mt-6 divide-y">
            <NotificationToggle
              title="New Bookings"
              description="Get notified when a new service booking is created."
              enabled={notifications.newBookings}
              onToggle={() => toggleNotification("newBookings")}
            />

            <NotificationToggle
              title="Worker Verification"
              description="Get notified when a worker submits verification documents."
              enabled={notifications.workerVerification}
              onToggle={() => toggleNotification("workerVerification")}
            />

            <NotificationToggle
              title="Customer Issues"
              description="Receive alerts about customer complaints and reported issues."
              enabled={notifications.customerIssues}
              onToggle={() => toggleNotification("customerIssues")}
            />

            <NotificationToggle
              title="Booking Updates"
              description="Receive important updates about ongoing bookings."
              enabled={notifications.bookingUpdates}
              onToggle={() => toggleNotification("bookingUpdates")}
            />

            <NotificationToggle
              title="Weekly Reports"
              description="Receive weekly platform performance summaries."
              enabled={notifications.weeklyReports}
              onToggle={() => toggleNotification("weeklyReports")}
            />

            <NotificationToggle
              title="System Alerts"
              description="Receive important platform and system notifications."
              enabled={notifications.systemAlerts}
              onToggle={() => toggleNotification("systemAlerts")}
            />
          </div>
        </section>

        {/* Security */}
        <section className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <SectionHeading
            icon="🛡️"
            title="Security"
            description="Manage account security and administrative access."
          />

          <div className="mt-6 space-y-3">
            <SecurityRow
              title="Password"
              description="Update your administrator account password."
              button="Change Password"
            />

            <SecurityRow
              title="Two-Factor Authentication"
              description="Add an extra layer of security to your account."
              button="Enable 2FA"
            />

            <SecurityRow
              title="Active Sessions"
              description="Review devices currently signed in to this account."
              button="View Sessions"
            />
          </div>
        </section>

        {/* Maintenance */}
        <section className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-yellow-900">
                Maintenance Mode
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-yellow-800">
                Temporarily disable customer-facing platform features while
                maintenance is being performed.
              </p>
            </div>

            <button
              onClick={() =>
                setSettings((prev) => ({
                  ...prev,
                  maintenanceMode: !prev.maintenanceMode,
                }))
              }
              className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                settings.maintenanceMode
                  ? "bg-yellow-500"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  settings.maintenanceMode
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>
          </div>

          {settings.maintenanceMode && (
            <div className="mt-4 rounded-xl border border-yellow-200 bg-white/60 px-4 py-3 text-sm text-yellow-800">
              ⚠️ Maintenance mode is currently enabled.
            </div>
          )}
        </section>

        {/* Save */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={() => window.location.reload()}
            className="rounded-xl border bg-white px-6 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Reset
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}

function SectionHeading({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-lg">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  type = "text",
  readOnly = false,
  onChange,
}: {
  label: string;
  value: string;
  type?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-green-500 ${
          readOnly ? "bg-gray-50 text-gray-500" : "bg-white"
        }`}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-green-500"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function NotificationToggle({
  title,
  description,
  enabled,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {description}
        </p>
      </div>

      <button
        onClick={onToggle}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          enabled ? "bg-green-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function SecurityRow({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>

      <button className="w-full rounded-lg border px-4 py-2 text-xs font-medium hover:bg-gray-50 sm:w-auto">
        {button}
      </button>
    </div>
  );
}