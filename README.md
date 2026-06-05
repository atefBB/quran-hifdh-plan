# خطة حفظ القرآن الكريم / Quran Hifdh Plan

A general-purpose web application for planning and tracking Quran memorization (hifdh) and daily revision (muraja'a).

## Features

- **Personalized Setup** — Select which surahs you've already memorized and which you want to revise
- **Date-Based Planning** — Choose a start date and get a day-by-day plan with actual calendar dates
- **Dual Direction** — Memorize forward (الفاتحة → الناس) or backward (الناس → الفاتحة)
- **Daily Schedule** — 1 new page for memorization + 2 pages for revision, 6 days/week (Friday off)
- **Auto-Progress** — Tracks where you should be based on today's date
- **Fully Offline** — Single HTML file, no server or internet needed
- **Dark Mode** — Beautiful emerald & gold theme, RTL Arabic-first design
- **Ramadan Mode** — Set Ramadan dates; days become revision-only (no new memorization), including Fridays
- **Eid Vacations** — Set vacation dates for Eid al-Fitr and Eid al-Adha (7 full days off each)
- **Emergency Day-Off** — Mark any day (past or future) as an emergency vacation to skip it
- **Export/Import Plan** — Save your plan as a JSON file and restore it anytime
- **Progress Reports** — View weekly, monthly, or custom-period reports with memorization statistics and progress tracking
- **Auto-Current Week** — Automatically opens to the week containing today's date

## How to Use

1. Serve the file locally (Brave/Chromium blocks `file://`):
   ```bash
   python3 -m http.server 8080
   ```
2. Open `http://localhost:8080` in your browser
2. Set your **start date** and preferred **direction**
3. Check the surahs you've **already memorized** — these will be excluded from the plan
4. Check the surahs you want to **revise daily** — their pages will cycle throughout the plan
5. Optionally set **Ramadan dates** (revision-only period) and **Eid vacation** start dates in the "الإجازات والعطل" section
6. Click **"إنشاء الخطة"** (Generate Plan)
7. Browse the plan week by week — the app automatically jumps to the current week
8. Your settings are saved automatically in your browser (localStorage)
9. **Export** your plan via the **"تصدير/استيراد JSON"** button to back up or transfer your progress
10. View **progress reports** via the **"التقارير"** button — filter by week, month, or custom date range

## Adjusting Your Plan

Click **"تعديل الخطة"** (Edit Plan) at any time to update your selections. The plan regenerates from your start date.

## Emergency Day-Off

If you miss a day (past or future), click the **"🚫 إجازة طارئة"** (Emergency Vacation) button on any day in your plan to mark it as skipped. The day will be greyed out and your schedule continues normally from the next day.

- Works on **past, current, and future** dates
- Click **"↩️ إلغاء الإجازة"** to undo and restore the day
- Marked days show a ⚠️ badge and are excluded from progress calculations

## Ramadan (Revision-Only Mode)

In the "الإجازات والعطل" section, set a start and end date for Ramadan. During this period:
- **No new memorization** — only revision (2 pages/day)
- **Fridays become revision days** instead of rest days
- Days are highlighted in green with a 🌙 رمضان badge
- Leave the fields empty if you don't want to schedule Ramadan

## Eid Vacations

Set the start date for each Eid (al-Fitr and al-Adha) in the setup screen. Each Eid gets **7 full days off**:
- No memorization and no revision during these days
- Days are highlighted in gold with a 🎉 عيد badge
- Your schedule resumes normally after the vacation ends
- Leave the fields empty if you don't want scheduled Eid breaks

## Reports

Click **"التقارير"** (Reports) to open the reports screen. You can:
- View **weekly** progress (defaults to the current week)
- View **monthly** progress across all months of your plan
- Choose a **custom date range**
- See completion percentages and day-by-day breakdowns

## Export & Import

Use **"تصدير/استيراد JSON"** (Export/Import JSON) to back up your plan or transfer it to another device:
- **Export** downloads a `.json` file with your entire plan data
- **Import** restores a previously exported plan from a `.json` file

## Technical

- Pure HTML/CSS/JavaScript — zero dependencies
- Data stored in browser's localStorage (no external database)
- Uses the standard 604-page Madani Mushaf (مصحف المدينة المنورة) page numbering
- Works offline after first load

## License

وقف لله تعالى
