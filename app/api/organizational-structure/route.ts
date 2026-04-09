import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { OrganizationalStructureModel } from "@/models/OrganizationalStructure";

const DEFAULT_DATA = {
  sectionTitleAr: "الهيكل التنظيمي",
  sectionTitleEn: "Organizational Structure",
  sectionSubtitleAr: "الهيكل التنظيمي لكلية البريمي الجامعية",
  sectionSubtitleEn: "BUC Organizational Structure",
  chartTitleAr: "الهيكل التنظيمي لكلية البريمي الجامعية",
  chartTitleEn: "BUC Organizational Structure",
  chartImageAr: "/assets/69f7e84c76557c76b4de31e83615bf97bc78eef3.png",
  chartImageEn: "/assets/69f7e84c76557c76b4de31e83615bf97bc78eef3.png",
  aboutTitleAr: "عن الهيكل التنظيمي",
  aboutTitleEn: "About Organizational Structure",
  aboutTextAr:
    "يوضح الهيكل التنظيمي لكلية البريمي الجامعية التسلسل الإداري والأكاديمي للمؤسسة، بدءاً من مجلس الأمناء ومجلس الإدارة، مروراً بالعمادة وصولاً إلى مختلف الدوائر والأقسام الأكاديمية والإدارية. يهدف هذا الهيكل إلى ضمان الحوكمة الفعالة والتنسيق بين جميع الوحدات التنظيمية لتحقيق رؤية الكلية ورسالتها الأكاديمية.",
  aboutTextEn:
    "The organizational structure of Buraimi University College illustrates the administrative and academic hierarchy of the institution, starting from the Board of Trustees and Board of Directors, through the deanship, and reaching all academic and administrative departments. This structure aims to ensure effective governance and coordination across all organizational units to achieve the college vision and academic mission.",
};

async function ensureDoc() {
  let doc = await OrganizationalStructureModel.findOne({}).lean();
  if (!doc) {
    await OrganizationalStructureModel.create(DEFAULT_DATA);
    doc = await OrganizationalStructureModel.findOne({}).lean();
  }
  return doc;
}

export async function GET() {
  try {
    await dbConnect();
    const data = await ensureDoc();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const body = (await req.json()) as Record<string, unknown>;
    const payload = {
      sectionTitleAr: String(body.sectionTitleAr || "").trim(),
      sectionTitleEn: String(body.sectionTitleEn || "").trim(),
      sectionSubtitleAr: String(body.sectionSubtitleAr || "").trim(),
      sectionSubtitleEn: String(body.sectionSubtitleEn || "").trim(),
      chartTitleAr: String(body.chartTitleAr || "").trim(),
      chartTitleEn: String(body.chartTitleEn || "").trim(),
      chartImageAr: String(body.chartImageAr || "").trim(),
      chartImageEn: String(body.chartImageEn || "").trim(),
      aboutTitleAr: String(body.aboutTitleAr || "").trim(),
      aboutTitleEn: String(body.aboutTitleEn || "").trim(),
      aboutTextAr: String(body.aboutTextAr || "").trim(),
      aboutTextEn: String(body.aboutTextEn || "").trim(),
    };
    const data = await OrganizationalStructureModel.findOneAndUpdate(
      {},
      { $set: payload },
      { new: true, upsert: true },
    ).lean();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
