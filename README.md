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

## How to Use

1. Serve the file locally (Brave/Chromium blocks `file://`):
   ```bash
   python3 -m http.server 8080
   ```
2. Open `http://localhost:8080` in your browser
2. Set your **start date** and preferred **direction**
3. Check the surahs you've **already memorized** — these will be excluded from the plan
4. Check the surahs you want to **revise daily** — their pages will cycle throughout the plan
5. Click **"إنشاء الخطة"** (Generate Plan)
6. Browse the plan week by week — each day shows what to memorize and what to revise
7. Your settings are saved automatically in your browser (localStorage)

## Adjusting Your Plan

Click **"تعديل الخطة"** (Edit Plan) at any time to update your selections. The plan regenerates from your start date.

## Technical

- Pure HTML/CSS/JavaScript — zero dependencies
- Data stored in browser's localStorage (no external database)
- Uses the standard 604-page Madani Mushaf (مصحف المدينة المنورة) page numbering
- Works offline after first load

## License

MIT
