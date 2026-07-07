"use client";

import { useState, FormEvent } from "react";
import { useT } from "@/i18n";

type FormData = {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  cargoType: string;
  weightVolume: string;
  remarks: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  cargoType: "",
  weightVolume: "",
  remarks: "",
};

export default function ContactPage() {
  const t = useT();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const setField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.companyName.trim()) errs.companyName = t.contactPage.form.requiredMsg;
    if (!form.contactPerson.trim()) errs.contactPerson = t.contactPage.form.requiredMsg;
    if (!form.email.trim()) {
      errs.email = t.contactPage.form.requiredMsg;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.contactPage.form.emailInvalidMsg;
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setSubmitError("");
  };

  const fields: Array<{
    key: keyof FormData;
    type: string;
    required?: boolean;
    colSpan?: string;
    isTextarea?: boolean;
    rows?: number;
  }> = [
    { key: "companyName", type: "text", required: true },
    { key: "contactPerson", type: "text", required: true },
    { key: "email", type: "email", required: true },
    { key: "phone", type: "tel" },
    { key: "origin", type: "text" },
    { key: "destination", type: "text" },
    { key: "cargoType", type: "text" },
    { key: "weightVolume", type: "text" },
    { key: "remarks", type: "text", colSpan: "sm:col-span-2 lg:col-span-3", isTextarea: true, rows: 4 },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{t.contactPage.page.title}</h1>
            <p className="text-lg text-blue-100/80">{t.contactPage.page.desc}</p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 lg:p-10">
              {submitted ? (
                /* Success state */
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-800 mb-2">{t.contactPage.form.successTitle}</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">{t.contactPage.form.successDesc}</p>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {t.contactPage.form.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brand-800 mb-2">{t.contactPage.form.title}</h2>
                  <p className="text-sm text-gray-500 mb-8">{t.contactPage.form.desc}</p>

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {fields.map((field) => (
                        <div key={field.key} className={field.colSpan || ""}>
                          <label
                            htmlFor={field.key}
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            {t.contactPage.form[field.key]}
                            {field.required && <span className="text-red-400 ml-0.5">*</span>}
                          </label>
                          {field.isTextarea ? (
                            <textarea
                              id={field.key}
                              rows={field.rows || 4}
                              value={form[field.key]}
                              onChange={(e) => setField(field.key, e.target.value)}
                              className={`w-full px-4 py-3 rounded-lg border text-sm focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none ${
                                errors[field.key] ? "border-red-300 bg-red-50" : "border-gray-200"
                              }`}
                            />
                          ) : (
                            <input
                              type={field.type}
                              id={field.key}
                              value={form[field.key]}
                              onChange={(e) => setField(field.key, e.target.value)}
                              className={`w-full px-4 py-3 rounded-lg border text-sm focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all ${
                                errors[field.key] ? "border-red-300 bg-red-50" : "border-gray-200"
                              }`}
                            />
                          )}
                          {errors[field.key] && (
                            <p className="mt-1 text-xs text-red-500">{errors[field.key]}</p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center justify-center gap-2"
                      >
                        {submitting && (
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                        )}
                        {t.contactPage.form.submit}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Contact info (unchanged) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h3 className="font-bold text-brand-800 mb-4">{t.contactPage.info.title}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{t.contactPage.info.addressLabel}</div>
                      <div className="text-gray-500">{t.contactPage.info.addressValue}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{t.contactPage.info.phoneLabel}</div>
                      <div className="text-gray-500">{t.contactPage.info.phoneValue}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{t.contactPage.info.emailLabel}</div>
                      <div className="text-gray-500">{t.contactPage.info.emailValue}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{t.contactPage.info.hoursLabel}</div>
                      <div className="text-gray-500">{t.contactPage.info.hoursValue}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
