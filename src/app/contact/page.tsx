"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n";

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

const formHelp = {
  en: {
    intro: "For business shipments and personal purchases. Start with your name and one contact method; add the cargo details you know.",
    customerLabel: "I am shipping for (optional)",
    customerUnspecified: "Select if helpful",
    business: "A business",
    personal: "A personal purchase",
    name: "Your name",
    company: "Company name (optional)",
    optional: "optional",
    placeholders: {
      contactPerson: "Your full name",
      companyName: "Leave blank for personal purchases",
      email: "you@example.com",
      phone: "+1 555 123 4567",
      origin: "Supplier city in China",
      destination: "Country, city and ZIP / postal code",
      cargoType: "e.g. furniture, lighting or machinery",
      weightVolume: "e.g. 200 kg / 2 m³, or carton dimensions",
      remarks: "Supplier links, number of cartons, ready date, delivery needs or your questions",
    },
    hints: {
      email: "Provide an email address or a WhatsApp / phone number.",
      phone: "Include the country code, for example +1 or +44.",
      origin: "Multiple suppliers? List their cities if known.",
      destination: "A country and city are enough to start if you do not know the postal code.",
      weightVolume: "Include units (kg / lb, m³ / ft³ or cm / in). Leave blank if unknown.",
      remarks: "For home delivery, mention stairs, road access or unloading needs. Photos and packing lists can be shared by email or WhatsApp.",
    },
    sending: "Sending your inquiry…",
    failed: "We could not confirm that your inquiry was sent. Your details are still here. Contact Chris by email or WhatsApp below, or try again.",
    timedOut: "The request took too long to confirm. It may still have reached us, so it has not been sent again automatically. Your details are still here; contact Chris to check before resending.",
    emailChris: "Email this inquiry",
    whatsappChris: "Send details on WhatsApp",
    privacy: "We use these details to respond to your inquiry.",
    privacyLink: "Privacy Policy",
  },
  zh: {
    intro: "企业出货和个人采购均可咨询。先填写姓名和一种联系方式，再补充您已知的货物信息。",
    customerLabel: "运输用途（选填）",
    customerUnspecified: "可按需选择",
    business: "企业出货",
    personal: "个人采购",
    name: "您的姓名",
    company: "公司名称（选填）",
    optional: "选填",
    placeholders: {
      contactPerson: "您的姓名",
      companyName: "个人采购可留空",
      email: "you@example.com",
      phone: "+86 152 0000 0000",
      origin: "供应商所在的中国城市",
      destination: "国家、城市及邮编",
      cargoType: "例如：家具、灯具或机器设备",
      weightVolume: "例如：200 kg / 2 m³，或外箱尺寸",
      remarks: "供应商链接、箱数、备货日期、派送需求或您的问题",
    },
    hints: {
      email: "邮箱和 WhatsApp / 电话至少填写一项。",
      phone: "请包含国家区号，例如 +86、+1 或 +44。",
      origin: "有多个供应商时，可填写已知的供应商城市。",
      destination: "暂时不知道邮编，可先填写国家和城市。",
      weightVolume: "请注明单位（kg / lb、m³ / ft³ 或 cm / in）；暂时不知道可留空。",
      remarks: "住宅派送请说明楼梯、车辆通行或卸货要求。照片及装箱单可通过邮箱或 WhatsApp 提供。",
    },
    sending: "正在发送询价…",
    failed: "暂时无法确认询价是否发送成功，已填写的信息仍然保留。您可以通过下方邮箱或 WhatsApp 联系 Chris，也可以重试。",
    timedOut: "等待发送结果超时。询价可能已经送达，系统没有自动重发，已填写的信息仍然保留。建议先联系 Chris 确认，再决定是否重发。",
    emailChris: "通过邮箱发送这些信息",
    whatsappChris: "通过 WhatsApp 发送信息",
    privacy: "我们将使用这些信息回复您的询价。",
    privacyLink: "隐私政策",
  },
} as const;

export default function ContactPage() {
  const { t, locale } = useI18n();
  const help = formHelp[locale];
  const [form, setForm] = useState<FormData>(initialForm);
  const [customerType, setCustomerType] = useState<"" | "business" | "personal">("");
  const customerChanged = useRef(false);
  const submittingRef = useRef(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<"" | "failed" | "timedOut">("");

  useEffect(() => {
    const customer = new URLSearchParams(window.location.search).get("customer");
    if (!customerChanged.current && (customer === "personal" || customer === "business")) {
      setCustomerType(customer);
    }
  }, []);

  const inquiryDetails = [
    customerType ? "Customer type: " + (customerType === "business" ? "Business" : "Personal purchase") : "",
    ...Object.entries(form).filter(([, value]) => value.trim()).map(([key, value]) => {
      const labels: Record<string, string> = { contactPerson: "Contact", companyName: "Company", email: "Email", phone: "Phone / WhatsApp", origin: "Origin", destination: "Destination", cargoType: "Cargo", weightVolume: "Weight / volume", remarks: "Details" };
      return labels[key] + ": " + value.trim();
    }),
  ].filter(Boolean).join("\n");
  const emailFallback = "mailto:sales@huanfalogistics.com?subject=" + encodeURIComponent("Shipping inquiry") + "&body=" + encodeURIComponent(inquiryDetails);
  const whatsappFallback = "https://wa.me/8615207122341?text=" + encodeURIComponent("Hello Chris, I would like a shipping quote.\n\n" + inquiryDetails);

  const setField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field] || ((field === "email" || field === "phone") && value.trim())) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        if (field === "email" || field === "phone") {
          delete next.email;
          delete next.phone;
        }
        return next;
      });
    }
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.contactPerson.trim()) errs.contactPerson = t.contactPage.form.requiredMsg;
    if (!form.email.trim() && !form.phone.trim()) {
      errs.email = t.contactPage.form.contactRequiredMsg;
      errs.phone = t.contactPage.form.contactRequiredMsg;
    } else if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = t.contactPage.form.emailInvalidMsg;
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setSubmitError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const payload = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()])) as FormData;
      if (customerType) {
        payload.remarks = ["Customer type: " + (customerType === "business" ? "Business" : "Personal purchase"), payload.remarks].filter(Boolean).join("\n");
      }
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error("Submission could not be confirmed");
      const data = await res.json();
      if (data.success !== true) throw new Error("Submission could not be confirmed");
      setSubmitted(true);
    } catch {
      setSubmitError(controller.signal.aborted ? "timedOut" : "failed");
    } finally {
      window.clearTimeout(timeout);
      submittingRef.current = false;
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
    autoComplete?: string;
  }> = [
    { key: "contactPerson", type: "text", required: true, autoComplete: "name" },
    { key: "companyName", type: "text", autoComplete: "organization" },
    { key: "email", type: "email", autoComplete: "email" },
    { key: "phone", type: "tel", autoComplete: "tel" },
    { key: "origin", type: "text" },
    { key: "destination", type: "text" },
    { key: "cargoType", type: "text" },
    { key: "weightVolume", type: "text" },
    { key: "remarks", type: "text", colSpan: "sm:col-span-2", isTextarea: true, rows: 4 },
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
                <div className="text-center py-12" role="status">
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
                  <p className="text-sm text-gray-600 mb-6">{help.intro}</p>

                  {submitError && (
                    <div role="alert" className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
                      <p>{help[submitError]}</p>
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3 font-semibold">
                        <a href={emailFallback} className="underline underline-offset-4">{help.emailChris}</a>
                        <a href={whatsappFallback} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{help.whatsappChris}</a>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-busy={submitting}>
                    <fieldset disabled={submitting} className="space-y-5">
                      <div>
                        <label htmlFor="customerType" className="mb-1.5 block text-sm font-medium text-gray-700">{help.customerLabel}</label>
                        <select id="customerType" name="customerType" value={customerType} onChange={(event) => { customerChanged.current = true; setCustomerType(event.target.value as typeof customerType); }} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none">
                          <option value="">{help.customerUnspecified}</option>
                          <option value="business">{help.business}</option>
                          <option value="personal">{help.personal}</option>
                        </select>
                      </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {fields.map((field) => {
                        const hint = help.hints[field.key as keyof typeof help.hints];
                        const describedBy = [hint ? `${field.key}-hint` : "", errors[field.key] ? `${field.key}-error` : ""].filter(Boolean).join(" ") || undefined;
                        return (
                        <div key={field.key} className={field.colSpan || ""}>
                          <label
                            htmlFor={field.key}
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            {field.key === "contactPerson" ? help.name : field.key === "companyName" ? help.company : t.contactPage.form[field.key]}
                            {field.required && <span className="text-red-400 ml-0.5">*</span>}
                            {!["contactPerson", "companyName", "email", "phone"].includes(field.key) && <span className="ml-1 font-normal text-gray-500">({help.optional})</span>}
                          </label>
                          {field.isTextarea ? (
                            <textarea
                              id={field.key}
                              name={field.key}
                              placeholder={help.placeholders[field.key]}
                              aria-invalid={!!errors[field.key]}
                              aria-describedby={describedBy}
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
                              name={field.key}
                              required={field.required}
                              autoComplete={field.autoComplete}
                              placeholder={help.placeholders[field.key]}
                              aria-invalid={!!errors[field.key]}
                              aria-describedby={describedBy}
                              value={form[field.key]}
                              onChange={(e) => setField(field.key, e.target.value)}
                              className={`w-full px-4 py-3 rounded-lg border text-sm focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all ${
                                errors[field.key] ? "border-red-300 bg-red-50" : "border-gray-200"
                              }`}
                            />
                          )}
                          {hint && <p id={`${field.key}-hint`} className="mt-1.5 text-xs leading-relaxed text-gray-500">{hint}</p>}
                          {errors[field.key] && (
                            <p id={`${field.key}-error`} className="mt-1 text-xs text-red-600">{errors[field.key]}</p>
                          )}
                        </div>
                      );})}
                    </div>
                    </fieldset>

                    <div className="pt-2">
                      <p className="mb-4 text-xs leading-relaxed text-gray-500">{help.privacy} <Link href="/privacy" className="font-medium text-brand-700 underline underline-offset-2">{help.privacyLink}</Link></p>
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
                        {submitting ? help.sending : t.contactPage.form.submit}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Contact info (unchanged) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h3 className="font-bold text-brand-800 mb-4">{t.contactPage.info.specialistTitle}</h3>
                <div>
                  <div className="font-bold text-gray-900">{t.contactPage.info.specialistName}</div>
                  <div className="text-sm text-gray-500 mb-4">{t.contactPage.info.specialistRole}</div>
                  <a
                    href="https://wa.me/8615207122341"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.83 14.12c-.25.7-1.45 1.33-2.01 1.38-.55.05-1.05.24-3.52-.73-2.97-1.17-4.87-4.16-5.02-4.36-.15-.2-1.2-1.6-1.2-3.05s.76-2.16 1.03-2.46c.27-.3.59-.37.78-.37h.56c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.54-.1.2-.15.33-.3.5-.15.18-.32.4-.45.54-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.53.31.15.49.13.67-.08.18-.2.78-.91.99-1.22.21-.31.42-.26.7-.15.29.1 1.84.87 2.16 1.03.32.15.53.23.6.36.08.13.08.77-.17 1.47z" />
                    </svg>
                    {t.contactPage.info.whatsapp}
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <h3 className="font-bold text-brand-800 mb-4">{t.contactPage.info.title}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{t.contactPage.info.phoneLabel}</div>
                      <a href="tel:+8615207122341" className="text-brand-700 hover:underline">{t.contactPage.info.phoneValue}</a>
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
                      <a href="mailto:sales@huanfalogistics.com" className="break-all text-brand-700 hover:underline">{t.contactPage.info.emailValue}</a>
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
