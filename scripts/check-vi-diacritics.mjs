#!/usr/bin/env node
/**
 * Fails if locales/vi.json contains Vietnamese prose written without diacritics.
 *
 * The whole file was originally authored this way ("Trang chu" for "Trang chủ",
 * "Nen tang giup moi nguoi" for "Nền tảng giúp mọi người"). Once /vi became a
 * publicly indexable route that stopped being a cosmetic problem, so this guard
 * exists to keep it from coming back — an editor pasting unaccented copy fails
 * the check rather than shipping it.
 *
 * Detection is deliberately two-tier, because "is this ASCII string broken
 * Vietnamese or legitimate English?" has no clean answer:
 *
 *   Tier 1 — a token whose unaccented spelling is not itself a valid Vietnamese
 *            word ("nguoi", "thuoc", "benh"). One hit is conclusive.
 *   Tier 2 — two or more common function words ("va", "cua", "cho", "mot").
 *            Individually these are ambiguous or appear inside English text;
 *            two in one string is not a coincidence.
 *
 * Strings that are legitimately diacritic-free (brand names, English award
 * titles, percentages) pass both tiers on their own. ALLOWLIST is only for the
 * handful that would otherwise trip Tier 2.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
// Optional path argument so the guard can be pointed at a candidate file
// without touching the working copy.
const LOCALE_FILE = process.argv[2] ?? join(ROOT, "locales", "vi.json");

const DIACRITIC = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;

/**
 * Unaccented forms that are not valid Vietnamese words. One is enough.
 *
 * Only strings containing *no* diacritic at all reach this check, so a token
 * here cannot false-positive on correctly-written Vietnamese — that string
 * would carry an accent somewhere and be skipped. The real risk is collision
 * with English, so tokens that are also English words ("the", "ban", "can",
 * "man", "son") live in SUPPORTING instead.
 */
const CONCLUSIVE = new Set([
  "nguoi", "khoe", "thuoc", "benh", "duoc", "nhung", "khong", "giai", "phap",
  "suc", "viec", "hieu", "tiep", "viet", "quyet", "truong", "nghiep", "luong",
  "kham", "dien", "hoi", "moi", "noi", "doi", "tuong", "buoc", "chuc", "cuoc",
  "duong", "huong", "khuyen", "lieu", "mien", "muc", "ngheo", "nguon", "nhieu",
  "quoc", "thuong", "tien", "trien", "trieu", "tuoi", "uong", "xuong", "yeu",
  "diem", "gioi", "hanh", "khach", "kiem", "lich", "luoc", "nghien", "phuong",
  "thiet", "thuc", "tiem", "trung", "vien", "chiem", "buon", "chuyen", "cham",
  "danh", "dau", "dieu", "giup", "hop", "lien", "luu", "nang", "ngay", "phan",
  "quan", "tang", "thanh", "toan", "trach", "vong", "xuat",
  "chu", "cong", "nghe", "thuat", "ung", "chung", "toi", "quet", "ngu", "ky",
  "ghi", "chot", "te", "si", "tue", "hoc", "sinh", "cau", "mua", "gian",
  "phu", "nhac", "giam", "hoa", "hinh", "chinh", "tieng", "dong", "xac",
  "doanh", "nhanh",
]);

/** Ambiguous alone; two or more in one string means Vietnamese. */
const SUPPORTING = new Set([
  "va", "cua", "cho", "la", "cac", "tu", "den", "tren", "trong", "mot", "co",
  "ta", "ban", "khi", "nay", "nhu", "voi", "ve", "se", "da", "boi", "hay",
  "tai", "bang", "theo", "sau", "truoc", "ma", "thi", "de", "ra", "vao",
  "van", "lan", "thong", "dung", "tin", "minh", "nam", "don", "y", "so",
]);

/** Exact strings that are legitimately ASCII and would otherwise trip Tier 2. */
const ALLOWLIST = new Set([
  "MediFind+",
  "MediGPT",
  "Chatbot MediGPT",
  "GBA Business Challenge",
  "FWD SpringboardX Student Challenge",
]);

function tokenize(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function inspect(value) {
  if (DIACRITIC.test(value)) return null;
  if (ALLOWLIST.has(value.trim())) return null;

  const tokens = tokenize(value);
  const conclusive = tokens.filter((t) => CONCLUSIVE.has(t));
  if (conclusive.length > 0) return `Vietnamese word(s) missing diacritics: ${[...new Set(conclusive)].join(", ")}`;

  const supporting = [...new Set(tokens.filter((t) => SUPPORTING.has(t)))];
  if (supporting.length >= 2) return `reads as unaccented Vietnamese: ${supporting.join(", ")}`;

  return null;
}

function walk(node, path, failures) {
  if (typeof node === "string") {
    const reason = inspect(node);
    if (reason) failures.push({ path, value: node, reason });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => walk(item, `${path}[${i}]`, failures));
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, child] of Object.entries(node)) {
      walk(child, path ? `${path}.${key}` : key, failures);
    }
  }
}

const failures = [];
walk(JSON.parse(readFileSync(LOCALE_FILE, "utf8")), "", failures);

if (failures.length > 0) {
  console.error(`\n✗ ${failures.length} Vietnamese string(s) missing diacritics in locales/vi.json\n`);
  for (const { path, value, reason } of failures) {
    console.error(`  ${path}`);
    console.error(`    ${value}`);
    console.error(`    → ${reason}\n`);
  }
  process.exit(1);
}

console.log("✓ locales/vi.json — no unaccented Vietnamese strings");
