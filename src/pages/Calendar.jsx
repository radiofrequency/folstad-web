// 2026–2027 Academic Year Calendar
// Rows = months (Aug 2026 – Jul 2027)
// Columns = SAT SUN MON TUE WED THU FRI repeating (up to 5 weeks = 35 columns)

const THAI_HOLIDAYS = new Set([
  // 2026
  '2026-01-01', '2026-01-02', '2026-02-26', '2026-04-06',
  '2026-04-13', '2026-04-14', '2026-04-15', '2026-05-01',
  '2026-05-04', '2026-05-22', '2026-06-03', '2026-07-20',
  '2026-07-21', '2026-08-12', '2026-10-13', '2026-10-23',
  '2026-12-05', '2026-12-10', '2026-12-31',
  // 2027
  '2027-01-01', '2027-02-15', '2027-04-06',
  '2027-04-13', '2027-04-14', '2027-04-15', '2027-05-01',
  '2027-05-04', '2027-05-11', '2027-06-03', '2027-07-09',
  '2027-08-12', '2027-10-13', '2027-10-23',
  '2027-12-05', '2027-12-10', '2027-12-31',
]);

const SPECIAL_EVENTS = {
  '2026-08-03': 'First Day of School',
  '2027-08-02': 'First Day of School 2027',
};

// Months in the school year: Aug 2026 → Jul 2027
const SCHOOL_MONTHS = [
  { year: 2026, month: 7 },  // month is 0-indexed: 7 = August
  { year: 2026, month: 8 },
  { year: 2026, month: 9 },
  { year: 2026, month: 10 },
  { year: 2026, month: 11 },
  { year: 2027, month: 0 },
  { year: 2027, month: 1 },
  { year: 2027, month: 2 },
  { year: 2027, month: 3 },
  { year: 2027, month: 4 },
  { year: 2027, month: 5 },
  { year: 2027, month: 6 },
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Column headers: SAT SUN MON TUE WED THU FRI, repeated 5 times = 35 columns
// day-of-week mapping: 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
const WEEK_COLS = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
// Maps column index within a week (0..6) to JS day-of-week
const COL_TO_DOW = [6, 0, 1, 2, 3, 4, 5]; // SAT=6, SUN=0, MON=1..FRI=5

const NUM_WEEKS = 5;
const TOTAL_COLS = NUM_WEEKS * 7; // 35

function pad(n) {
  return String(n).padStart(2, '0');
}

function toKey(year, month1, day) {
  return `${year}-${pad(month1)}-${pad(day)}`;
}

/**
 * For a given month, build an array of 35 cell entries.
 * Each cell is { date: Date|null, type: 'school'|'holiday'|'weekend'|'special'|'empty' }
 * Layout rule: week starts with SAT (col 0 = SAT).
 * We find which SAT (or earlier col) the 1st of the month falls on to start placement.
 */
function buildMonthCells(year, month0) {
  const cells = Array(TOTAL_COLS).fill(null).map(() => ({ date: null, type: 'empty', label: null }));

  const firstDay = new Date(year, month0, 1);
  const daysInMonth = new Date(year, month0 + 1, 0).getDate();
  const firstDow = firstDay.getDay(); // 0=Sun..6=Sat

  // Column index for the first day:
  // Our col order within a week: SAT(6) SUN(0) MON(1) TUE(2) WED(3) THU(4) FRI(5)
  // colInWeek for a DOW: SAT→0, SUN→1, MON→2, TUE→3, WED→4, THU→5, FRI→6
  const dowToColInWeek = [1, 2, 3, 4, 5, 6, 0]; // index by JS DOW
  const startCol = dowToColInWeek[firstDow];

  for (let d = 1; d <= daysInMonth; d++) {
    const colIdx = startCol + (d - 1);
    if (colIdx >= TOTAL_COLS) break; // safety: won't happen for standard months

    const dow = COL_TO_DOW[colIdx % 7]; // JS day of week for this column
    const month1 = month0 + 1;
    const key = toKey(year, month1, d);
    const date = new Date(year, month0, d);

    let type;
    if (SPECIAL_EVENTS[key]) {
      type = 'special';
    } else if (dow === 0 || dow === 6) {
      type = 'weekend';
    } else if (THAI_HOLIDAYS.has(key)) {
      type = 'holiday';
    } else {
      type = 'school';
    }

    cells[colIdx] = { date, day: d, type, label: SPECIAL_EVENTS[key] || null };
  }

  return cells;
}

function getCellClasses(type) {
  switch (type) {
    case 'school':
      return 'bg-amber-400 text-navy font-semibold';
    case 'holiday':
      return 'bg-navy text-white font-semibold';
    case 'weekend':
      return 'bg-gray-100 text-gray-400';
    case 'special':
      return 'bg-red-500 text-white font-bold ring-2 ring-red-300';
    default:
      return 'bg-transparent text-transparent';
  }
}

// Group months by year label
const YEAR_GROUPS = [
  { label: '2026', months: SCHOOL_MONTHS.filter((m) => m.year === 2026) },
  { label: '2027', months: SCHOOL_MONTHS.filter((m) => m.year === 2027) },
];

const LEGEND = [
  { color: 'bg-amber-400', label: 'School Day (Mon–Fri)' },
  { color: 'bg-navy', label: 'Thai Public Holiday' },
  { color: 'bg-gray-200', label: 'Weekend' },
  { color: 'bg-red-500', label: 'Special Event' },
];

export default function Calendar() {
  // Pre-compute all months' cells
  const monthData = SCHOOL_MONTHS.map(({ year, month }) => ({
    year,
    month,
    name: MONTH_NAMES[month],
    cells: buildMonthCells(year, month),
  }));

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-sage/20 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-amber-300 font-body font-semibold text-sm uppercase tracking-widest mb-4">
            Academic Year
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            School Calendar
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto leading-relaxed">
            2026&ndash;2027 Academic Year
          </p>
        </div>
      </section>

      {/* Calendar section */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Annual Calendar</h2>
            <p className="text-navy/60 font-body text-sm">
              Thai public holidays observed. School Mon&ndash;Fri.
            </p>
          </div>

          {/* Scrollable calendar wrapper */}
          <div className="overflow-x-auto rounded-2xl shadow-card border border-navy/10">
            <table className="border-collapse" style={{ minWidth: '1200px' }}>
              <thead>
                <tr>
                  {/* Year label column + Month name column */}
                  <th className="w-8 bg-navy" aria-hidden="true" />
                  <th
                    className="bg-navy text-white font-body font-bold text-xs uppercase tracking-widest px-4 py-3 text-left whitespace-nowrap"
                    style={{ minWidth: '96px' }}
                  >
                    Month
                  </th>
                  {/* 35 day columns */}
                  {Array.from({ length: NUM_WEEKS }).map((_, wi) =>
                    WEEK_COLS.map((dayLabel, di) => {
                      const isWeekend = di < 2; // SAT, SUN
                      return (
                        <th
                          key={`${wi}-${di}`}
                          className={`py-3 px-0 text-center text-xs font-body font-bold uppercase tracking-wider w-8 ${
                            isWeekend
                              ? 'bg-navy/80 text-white/50'
                              : 'bg-navy text-amber-300'
                          }`}
                          style={{ minWidth: '32px' }}
                        >
                          {dayLabel}
                        </th>
                      );
                    })
                  )}
                </tr>
              </thead>
              <tbody>
                {YEAR_GROUPS.map(({ label, months }) => {
                  const monthRows = monthData.filter((m) => m.year === parseInt(label, 10));
                  return monthRows.map((m, rowIdx) => (
                    <tr
                      key={`${m.year}-${m.month}`}
                      className="border-t border-navy/10 hover:bg-navy/[0.02] transition-colors"
                    >
                      {/* Vertical year label — only rendered as a visual, first row of each group */}
                      {rowIdx === 0 ? (
                        <td
                          rowSpan={months.length}
                          className="bg-navy text-white text-xs font-display font-bold tracking-widest text-center w-8"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', padding: '8px 4px' }}
                        >
                          {label}
                        </td>
                      ) : null}

                      {/* Month name */}
                      <td className="px-4 py-2 font-body font-semibold text-sm text-navy whitespace-nowrap bg-navy/5">
                        {m.name}
                      </td>

                      {/* 35 day cells */}
                      {m.cells.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`text-center p-0 w-8`}
                          title={
                            cell.date
                              ? cell.label
                                ? `${cell.label} – ${m.name} ${cell.day}`
                                : `${m.name} ${cell.day}`
                              : ''
                          }
                        >
                          {cell.date ? (
                            <div
                              className={`mx-auto my-0.5 w-7 h-7 rounded-md flex items-center justify-center text-xs leading-none transition-transform hover:scale-110 cursor-default ${getCellClasses(cell.type)}`}
                            >
                              {cell.day}
                            </div>
                          ) : (
                            <div className="mx-auto my-0.5 w-7 h-7" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            {LEGEND.map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-md flex-shrink-0 ${color} border border-navy/10`} />
                <span className="text-sm font-body text-navy/70">{label}</span>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-xs font-body text-navy/40">
            Thai public holidays observed. School Mon&ndash;Fri. Dates subject to change.
          </p>
        </div>
      </section>
    </>
  );
}
