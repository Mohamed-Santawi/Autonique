import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

// Mock Firebase
vi.mock("../../firebase/config", () => ({
  db: {},
}));

// Mock Firebase Firestore
vi.mock("firebase/firestore", () => ({
  doc: vi.fn(),
  onSnapshot: vi.fn(() => vi.fn()), // Returns unsubscribe function
}));

describe("Footer Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the footer with company name", () => {
    render(<Footer />);
    expect(screen.getByText("Autonique")).toBeInTheDocument();
  });

  it("renders company description", () => {
    render(<Footer />);
    expect(
      screen.getByText(/شريككم الموثوق في الأمن السيبراني/)
    ).toBeInTheDocument();
  });

  it("renders copyright information", () => {
    render(<Footer />);
    expect(screen.getByText(/جميع الحقوق محفوظة/)).toBeInTheDocument();
  });

  it("renders current year in copyright", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(currentYear.toString(), { exact: false })).toBeInTheDocument();
  });

  it("renders services section", () => {
    render(<Footer />);
    expect(screen.getByText("الخدمات")).toBeInTheDocument();
  });

  it("renders solutions section", () => {
    render(<Footer />);
    expect(screen.getByText("الحلول")).toBeInTheDocument();
  });

  it("renders company section", () => {
    render(<Footer />);
    expect(screen.getByText("الشركة")).toBeInTheDocument();
  });

  it("renders support section", () => {
    render(<Footer />);
    expect(screen.getByText("الدعم")).toBeInTheDocument();
  });

  it("renders service links", () => {
    render(<Footer />);

    const expectedServices = [
      "إدارة الهوية والوصول",
      "تقنيات التشغيل الصناعية",
      "التوعية بالأمن السيبراني",
      "مدير أمن معلومات افتراضي",
    ];

    expectedServices.forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });

  it("renders solution links", () => {
    render(<Footer />);

    const expectedSolutions = [
      "إدارة الوصول المميز",
      "نظام كشف الاختراقات",
      "استخبارات التهديدات",
      "حماية الهوية الرقمية",
    ];

    expectedSolutions.forEach((solution) => {
      expect(screen.getByText(solution)).toBeInTheDocument();
    });
  });

  it("renders company links", () => {
    render(<Footer />);

    const expectedCompanyLinks = ["من نحن", "فريق العمل"];

    expectedCompanyLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("renders support links", () => {
    render(<Footer />);

    const expectedSupportLinks = [
      "الدعم الفني",
      "الأسئلة الشائعة",
      "تواصل معنا",
      "الخصوصية",
    ];

    expectedSupportLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("renders social media links", () => {
    render(<Footer />);

    // Social media links are rendered as icons, not text
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('all links have target="_blank" and rel="noopener noreferrer"', () => {
    render(<Footer />);

    const allLinks = screen.getAllByRole("link");

    allLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders social media icons", () => {
    render(<Footer />);

    // Check if social media icons are rendered (they should be SVG elements)
    const socialIcons = document.querySelectorAll("svg");
    expect(socialIcons.length).toBeGreaterThan(0);
  });

  it("has correct CSS classes for styling", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass(
      "bg-gradient-to-br",
      "from-gray-800",
      "via-gray-900",
      "to-gray-800"
    );
  });

  it("renders grid layout for sections", () => {
    render(<Footer />);

    const gridContainer = document.querySelector(".grid");
    expect(gridContainer).toHaveClass(
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-5"
    );
  });

  it("renders company info in first two columns", () => {
    render(<Footer />);

    const companySection = document.querySelector(".lg\\:col-span-2");
    expect(companySection).toBeInTheDocument();
  });

  it("renders social media buttons with correct styling", () => {
    render(<Footer />);

    const socialButtons = document.querySelectorAll(".w-10.h-10.bg-blue-600");
    expect(socialButtons.length).toBeGreaterThan(0);
  });

  it("renders bottom section with border", () => {
    render(<Footer />);

    const bottomSection = document.querySelector(".border-t.border-gray-700");
    expect(bottomSection).toBeInTheDocument();
  });

  it("renders copyright with gradient text", () => {
    render(<Footer />);

    const copyrightElement = document.querySelector(
      ".bg-gradient-to-r.from-blue-400.to-purple-400"
    );
    expect(copyrightElement).toBeInTheDocument();
  });

  it("renders responsive design classes", () => {
    render(<Footer />);

    const container = document.querySelector(".max-w-7xl");
    expect(container).toHaveClass("px-4", "sm:px-6", "lg:px-8");
  });

  it("renders motion animations", () => {
    render(<Footer />);

    // Check if motion elements are rendered (they have motion props)
    const motionElements = document.querySelectorAll("[initial]");
    expect(motionElements.length).toBeGreaterThan(0);
  });

  it("renders proper spacing between sections", () => {
    render(<Footer />);

    const sections = document.querySelectorAll(".space-y-8");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders proper text colors", () => {
    render(<Footer />);

    const whiteText = document.querySelectorAll(".text-white");
    const grayText = document.querySelectorAll(".text-gray-300");

    expect(whiteText.length).toBeGreaterThan(0);
    expect(grayText.length).toBeGreaterThan(0);
  });

  it("renders hover effects on links", () => {
    render(<Footer />);

    const linksWithHover = document.querySelectorAll(".hover\\:text-blue-300");
    expect(linksWithHover.length).toBeGreaterThan(0);
  });

  it("renders proper shadow effects", () => {
    render(<Footer />);

    const elementsWithShadow = document.querySelectorAll(".shadow-lg");
    expect(elementsWithShadow.length).toBeGreaterThan(0);
  });
});
