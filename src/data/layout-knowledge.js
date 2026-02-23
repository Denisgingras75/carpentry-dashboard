// Layout knowledge encyclopedia — the WHERE and HOW MUCH behind every cut.
// From reading a tape measure to squaring a foundation, this is the geometry of the trade.

const layoutTopics = [

  // ═══════════════════════════════════════════════
  // FUNDAMENTALS
  // ═══════════════════════════════════════════════

  {
    slug: 'reading-measuring-tools',
    name: 'Reading Measuring Tools',
    category: 'fundamentals',
    difficulty: 1,
    summary: 'Tape measures, folding rules, and combination squares — reading them accurately is where every project starts.',
    description: `A tape measure reads in fractions: each inch divides into 16ths. The big marks are inches, then half, quarter, eighth, sixteenth. Every 16" is marked in red — that's your stud and joist spacing. The hook on the end is loose on purpose: it slides exactly its own thickness so inside and outside measurements both read true.

A combination square checks 90° and 45°, measures depth, and scribes lines. A folding rule with a brass extension measures inside openings without bending. Learn to read from the 1" mark and subtract — avoids hook error on critical measurements.`,
    keyPrinciples: [
      'Read the tape at eye level and straight on — parallax causes misreads.',
      'The 1" burn method: hook at 1", read the measurement, subtract 1". Eliminates hook slop.',
      'Red marks at 16" intervals = stud/joist layout. Black diamonds at 19.2" = truss spacing for 5 per 8\'.',
      'Always use the same tape for the same project. Two tapes can disagree by 1/16".',
    ],
    commonMistakes: [
      'Bending the tape on inside measurements — use a folding rule or add the case length',
      'Not accounting for the hook\'s play on precise work',
      'Reading the wrong side of a fraction mark — always count from the nearest inch',
      'Mixing metric and imperial tapes on the same project',
    ],
    tools: [
      { tool: '25\' tape measure', note: 'Stanley FatMax or similar with a 1" blade. The wider blade stands out farther.' },
      { tool: 'Combination square', note: 'Starrett or iGaging. Check it for square before you trust it.' },
      { tool: '6\' folding rule', note: 'With brass slide extension for inside measurements. The cabinetmaker\'s choice.' },
    ],
    steps: [
      'Identify the smallest graduation on your tape — most are 1/16", some are 1/32".',
      'Practice reading fractions: 3/16", 5/8", 11/16". Speed comes from pattern recognition.',
      'Check your combo square against a known straight edge — drop it, it goes out.',
      'Measure twice, mark once. Not a cliché — it\'s the cheapest insurance in the shop.',
    ],
    tips: [
      'Write measurements as fractions, never decimals. The tape reads fractions.',
      'For repetitive cuts, set a stop block instead of measuring each piece.',
    ],
    relatedTopics: ['marking-knife-vs-pencil', 'transferring-measurements'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  {
    slug: 'marking-knife-vs-pencil',
    name: 'Marking Knife vs. Pencil',
    category: 'fundamentals',
    difficulty: 1,
    summary: 'A pencil line has width. A knife line has position. Knowing when to use each separates rough from fine work.',
    description: `A pencil is fast and visible — perfect for framing layout, rough cuts, and marks you need to see from across the shop. But a pencil line is 1/32" wide at best, and that ambiguity adds up. A marking knife severs wood fibers at an exact location, leaving a razor-thin line that a chisel or saw can register against.

Use a pencil for rough work and initial layout. Switch to a knife when you're marking a joint line, a baseline for dovetails, or anywhere the saw needs to split the line perfectly. The knife wall also prevents tearout — the severed fibers give the saw a clean start.`,
    keyPrinciples: [
      'Knife for joinery, pencil for construction. The tool matches the tolerance.',
      'A knife line creates a physical wall the chisel or saw registers against.',
      'Always knife on the waste side, with the flat of the blade against the reference.',
      'Use a sharp 0.5mm mechanical pencil for layout that needs to be visible but precise.',
    ],
    commonMistakes: [
      'Using a dull knife — drags instead of cutting, wanders off the square',
      'Knifing on the keep side — the bevel pushes the blade away from the rule',
      'Marking with a thick carpenter\'s pencil on fine joinery — 1/32" error built in',
      'Not deepening the knife wall before chiseling — chisel wanders',
    ],
    tools: [
      { tool: 'Marking knife', note: 'Single-bevel (flat on one side) for registering against a square. Spear-point for marking both directions.' },
      { tool: 'Mechanical pencil (0.5mm)', note: 'Sharp, consistent line. Better than a carpenter\'s pencil for bench work.' },
      { tool: 'Carpenter\'s pencil', note: 'For framing and rough carpentry. Flat shape won\'t roll off a rafter.' },
    ],
    steps: [
      'Set your square or straightedge on the reference face.',
      'For pencil: tilt the pencil into the straightedge, draw in one stroke.',
      'For knife: place the flat back of the blade against the straightedge, draw toward you with light pressure.',
      'Deepen the knife line with a second pass if you\'re chiseling to it.',
      'For saw work, widen the knife wall with a chisel to create a groove the saw drops into.',
    ],
    tips: [
      'A knife line disappears under finish. A pencil line doesn\'t. Plan accordingly.',
      'V-mark your waste side so you always know which side of the line to cut on.',
    ],
    relatedTopics: ['reference-faces-edges', 'laying-out-dovetails'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['dovetail', 'mortise-tenon'],
  },

  {
    slug: 'reference-faces-edges',
    name: 'Reference Faces & Edges',
    category: 'fundamentals',
    difficulty: 1,
    summary: 'Every measurement and every joint starts from a reference face and edge. Get these wrong and nothing fits.',
    description: `Before you mark anything, you need two known-true surfaces: a face and an edge, dead flat and square to each other. Every measurement, every gauge setting, every machine fence registration starts from these two surfaces. Mark them — traditionally a squiggle on the face and a V pointing to the face on the edge.

This is the single most important habit in woodworking. If your reference face is cupped or your edge isn't square, every measurement you take from them compounds the error. In timber framing, the reference face is the side that faces the layout — all joinery is measured from it.`,
    keyPrinciples: [
      'Face first, then edge. The face must be flat before you can square an edge to it.',
      'All measurements come FROM the reference surfaces. Never measure from an untrued surface.',
      'Mark your reference surfaces clearly — face mark and edge mark, every piece, every time.',
      'When assembling, keep reference faces oriented consistently (all facing out, or all facing up).',
    ],
    commonMistakes: [
      'Measuring from different faces on different pieces — cumulative error',
      'Not marking the reference face — you forget which side you trued',
      'Trueing the face but not checking the edge for square',
      'Referencing off a rough-sawn edge instead of a jointed one',
    ],
    tools: [
      { tool: 'Winding sticks', note: 'Two parallel straightedges — sight across them to check for twist in the face.' },
      { tool: 'Straightedge', note: 'Check for cupping and bowing across and along the face.' },
      { tool: 'Try square', note: 'Check that the edge is 90° to the face.' },
    ],
    steps: [
      'Check the board for twist using winding sticks. Plane or joint until the face is flat.',
      'Mark the face with a traditional face mark (a cursive loop).',
      'Joint one edge square to the face. Check with a try square.',
      'Mark the edge with a V pointing toward the face mark.',
      'All subsequent layout and machine setups reference FROM these two surfaces.',
    ],
    tips: [
      'In production work, run the reference face against the jointer fence, then the planer bed.',
      'For timber framing, the "layout face" is traditionally the face visible when the frame goes up.',
    ],
    relatedTopics: ['squaring-stock', 'center-line-vs-face-layout'],
    relatedTechniques: ['hand-planing', 'marking-layout'],
    relatedJoints: [],
  },

  {
    slug: 'squaring-stock',
    name: 'Squaring Stock',
    category: 'fundamentals',
    difficulty: 2,
    summary: 'Turning a rough board into a perfect rectangular prism — flat, square, parallel, and to dimension.',
    description: `Squaring stock is the six-step process of turning rough lumber into a precise rectangle: face, edge, second edge (parallel), second face (parallel), then crosscut both ends square. Skip or rush any step and your joinery suffers. This is the discipline that separates furniture from firewood.

By hand, you flatten one face with a jack plane, joint one edge square to it, gauge thickness and width, then plane to the gauge lines. By machine, the jointer flattens the face and squares the edge, the planer makes the opposite face parallel, and the table saw rips to width. Either way, the sequence matters.`,
    keyPrinciples: [
      'The sequence is sacred: face → edge → width → thickness → ends.',
      'Each step references the previously trued surface. Skip one and errors cascade.',
      'Use a marking gauge to scribe the final dimension — plane or machine TO the gauge line.',
      'Check for twist, bow, cup, and crook. Each defect has a different fix.',
    ],
    commonMistakes: [
      'Running a cupped board through the planer before flattening one face — the planer follows the cup',
      'Squaring the edge before the face is flat — you\'re squaring to a curve',
      'Planing past the gauge line — can\'t add wood back',
      'Not letting rough lumber acclimate before milling — it moves after you cut it',
    ],
    tools: [
      { tool: 'Jack plane (#5 or #5-1/2)', note: 'For rough flattening. Cambered iron takes heavy shavings.' },
      { tool: 'Jointer plane (#7 or #8)', note: 'For truing edges and final face flattening. Length bridges the hollows.' },
      { tool: 'Marking gauge', note: 'Scribe the final thickness and width from the reference surfaces.' },
    ],
    steps: [
      'Check the board for defects: twist (winding sticks), bow, cup, crook.',
      'Flatten one face with a jack plane, working diagonal, then with the grain.',
      'Joint one edge square to the flat face. Check with a try square.',
      'Set the marking gauge to final width, scribe from the jointed edge, rip to the line.',
      'Set the marking gauge to final thickness, scribe from the flat face, plane to the line.',
      'Crosscut both ends square to the face and edge.',
    ],
    tips: [
      'Let rough lumber sit in your shop for a week before milling. Wood moves as it acclimates.',
      'Mill slightly oversize, let it sit overnight, then take final passes. Stress relief causes movement.',
    ],
    relatedTopics: ['reference-faces-edges', 'reading-measuring-tools'],
    relatedTechniques: ['hand-planing', 'marking-layout', 'sawing-to-a-line'],
    relatedJoints: [],
  },

  {
    slug: 'transferring-measurements',
    name: 'Transferring Measurements',
    category: 'fundamentals',
    difficulty: 2,
    summary: 'Don\'t measure twice when you can transfer once. Story sticks, dividers, and direct marking eliminate errors.',
    description: `Every time you read a number off a tape and write it down, you introduce error. The best layout avoids numbers entirely — hold the piece in place and mark it directly, or use a story stick that captures all the dimensions once. Dividers step off equal divisions without math. A marking gauge transfers a setting to every piece identically.

In traditional work, a "rod" or story stick was a piece of wood with every critical dimension marked on it — the master reference for the whole project. The tape measure only gets used once, to make the rod. After that, everything transfers directly from the rod to the work.`,
    keyPrinciples: [
      'Direct transfer beats a number every time. Hold the piece in place and mark it.',
      'A story stick captures dimensions once. Every subsequent piece copies from the stick.',
      'Dividers step off equal divisions without math — no fractions, no rounding errors.',
      'When you must use numbers, measure to the same reference point every time.',
    ],
    commonMistakes: [
      'Measuring each piece individually instead of using a stop block or story stick',
      'Accumulating tape errors by measuring incrementally instead of from one end',
      'Using different measuring tools on the same project',
      'Not verifying the story stick against the actual opening before cutting stock',
    ],
    tools: [
      { tool: 'Story stick', note: 'A straight stick of wood — mark dimensions on it directly. No numbers needed.' },
      { tool: 'Dividers / wing dividers', note: 'Step off equal spaces. Essential for dovetail spacing and column fluting.' },
      { tool: 'Marking gauge', note: 'Sets one dimension and repeats it perfectly on every piece.' },
    ],
    steps: [
      'Determine whether you can mark directly (piece against opening) or need a story stick.',
      'For a story stick: mark all critical dimensions, label each mark clearly.',
      'Transfer marks from the stick to the workpiece with a knife or sharp pencil.',
      'For equal divisions: set dividers by trial, walk them across. Adjust until they land perfectly.',
      'Verify the first piece before cutting the rest of the batch.',
    ],
    tips: [
      'Number your story sticks and keep them until the project is done. They\'re your backup.',
      'For cabinets, make one rod for heights and one for widths.',
    ],
    relatedTopics: ['story-poles', 'reading-measuring-tools', 'laying-out-dovetails'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  {
    slug: 'three-four-five-triangle',
    name: '3-4-5 Triangle',
    category: 'fundamentals',
    difficulty: 1,
    summary: 'The Pythagorean theorem with a tape measure. 3-4-5 (or 6-8-10, 9-12-15) checks square at any scale.',
    description: `If one side measures 3, the adjacent side measures 4, and the diagonal measures 5, the corner is exactly 90°. This works at any multiple: 6-8-10 for a shed, 9-12-15 for a room, 30-40-50 for a foundation. It's the most useful geometry in the trades and it requires nothing but a tape measure and a helper.

Use it to check walls for square, verify foundation corners, set deck ledgers, and anywhere a framing square is too small. Bigger triangles are more accurate — a 3-4-5 in feet catches errors that a 3-4-5 in inches would miss. For foundations, go as large as your tape allows.`,
    keyPrinciples: [
      '3² + 4² = 5² (9 + 16 = 25). Any multiple works: 6-8-10, 12-16-20, 15-20-25.',
      'Bigger triangles catch smaller errors. Use the largest multiple your tape allows.',
      'Measure from the same corner point for both legs.',
      'Equal diagonals on a rectangle confirm square. 3-4-5 confirms a single corner.',
    ],
    commonMistakes: [
      'Using too small a triangle — a 3-4-5 in inches won\'t catch 1/4" error over 20 feet',
      'Measuring the 3 and 4 from different points instead of the same corner',
      'Not pulling the tape tight — sag in the tape gives a false reading',
      'Forgetting to check BOTH diagonals of a rectangle',
    ],
    tools: [
      { tool: 'Two tape measures', note: 'One for each leg of the diagonal. A helper makes this much easier.' },
      { tool: 'Framing square', note: 'For small-scale square checks. 3-4-5 is for when the square isn\'t big enough.' },
    ],
    steps: [
      'Mark a corner point where you need to verify 90°.',
      'Measure 3 units along one side (e.g., 6\' for a 6-8-10 triangle).',
      'Measure 4 units along the adjacent side from the same corner.',
      'Measure the diagonal between the two endpoints. It should equal 5 units (10\' for 6-8-10).',
      'If the diagonal is long, the angle is greater than 90°. Short means less than 90°. Adjust.',
    ],
    tips: [
      'For foundations, use 30-40-50 or larger. Accuracy scales with size.',
      'String lines and a plumb bob beat a tape for long-distance checks.',
    ],
    relatedTopics: ['squaring-foundation', 'batter-boards', 'level-plumb-square'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  // ═══════════════════════════════════════════════
  // FURNITURE & CABINET LAYOUT
  // ═══════════════════════════════════════════════

  {
    slug: 'laying-out-dovetails',
    name: 'Laying Out Dovetails',
    category: 'furniture-scale',
    difficulty: 3,
    summary: 'Spacing tails and pins by eye or dividers. The layout is the whole game — the sawing just follows the lines.',
    description: `Dovetail layout starts with scribing a baseline on both pieces at a depth equal to the mating board's thickness. Then you mark the tails — either by dividing the board evenly with dividers (the traditional method) or by eye with a sliding bevel set to your preferred angle, typically 1:6 for softwood or 1:8 for hardwood.

Mark tails first, cut them, then use the cut tails to transfer directly onto the pin board. This "tails first" method uses the actual cut geometry as the template — no measuring, no accumulated error. The layout is everything: if the lines are right, you just saw to them.`,
    keyPrinciples: [
      'Scribe the baseline with a marking gauge set to the thickness of the mating board.',
      'Tail angles: 1:8 for hardwood, 1:6 for softwood. Steeper = more mechanical strength.',
      'Half-pins at the edges should be at least half the thickness of the board.',
      'Transfer directly from tails to pins — don\'t measure the pin board independently.',
    ],
    commonMistakes: [
      'Not scribing the baseline deep enough — the chisel has nothing to register against',
      'Transferring pins with the pieces misaligned — everything shifts',
      'Cutting on the wrong side of the line — cut on the waste side, always',
      'Making the half-pins too small — they\'ll break when you assemble',
    ],
    tools: [
      { tool: 'Marking gauge', note: 'Set to the exact thickness of the mating board for the baseline.' },
      { tool: 'Dovetail marker or sliding bevel', note: 'Set to 1:6 or 1:8. A dedicated marker is faster.' },
      { tool: 'Dividers', note: 'For spacing tails evenly. Walk them across until the spacing is even.' },
    ],
    steps: [
      'Gauge the baseline on both boards at the thickness of the mating piece.',
      'Mark tail spacing with dividers — half-pin, full tail, full tail, half-pin.',
      'Set a sliding bevel to your angle (1:6 or 1:8) and mark the tail slopes.',
      'Hatch the waste areas so you know which side to saw.',
      'Cut the tails, chop the waste, and use the cut tails to mark the pin board directly.',
    ],
    tips: [
      'Use a sharp knife to deepen the baseline after gauging — it\'s the most critical line.',
      'Blue painter\'s tape on the pin board makes the transferred knife lines easier to see.',
    ],
    relatedTopics: ['marking-knife-vs-pencil', 'transferring-measurements'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line', 'chopping', 'paring'],
    relatedJoints: ['dovetail'],
  },

  {
    slug: 'laying-out-mortise-tenon',
    name: 'Laying Out Mortise & Tenon',
    category: 'furniture-scale',
    difficulty: 3,
    summary: 'The rule of thirds, gauge lines, and shoulder layout for the strongest joint in woodworking.',
    description: `A mortise-and-tenon starts with the rule of thirds: the tenon is roughly one-third the thickness of the stock, centered. On 3/4" stock, that's a 1/4" tenon. Choose a chisel that matches the mortise width — then set your mortise gauge to that chisel, centered on the stock. This way the chisel fits the mortise perfectly.

Mark the mortise length on the mortised piece, and the tenon shoulders and cheeks on the tenon piece, always gauging from the reference face. Tenon length equals mortise depth minus 1/16" (room for glue). Shoulders can be equal on all four sides, or the face shoulder can be wider for a reveal.`,
    keyPrinciples: [
      'Size the mortise to match an available chisel. Don\'t make a mortise you can\'t chop.',
      'One gauge setting marks both the mortise and tenon cheeks — guaranteed alignment.',
      'Gauge from the reference face on both pieces. Always the same face.',
      'Tenon length = mortise depth minus 1/16". Leave room for glue, not a gap you can see.',
    ],
    commonMistakes: [
      'Gauging from different faces on the mortise and tenon pieces — offset joint',
      'Making the tenon too tight — it splits the mortise during assembly',
      'Not accounting for the haunch when laying out haunched tenons',
      'Mortise too close to the end of the piece — it blows out under clamping pressure',
    ],
    tools: [
      { tool: 'Mortise gauge', note: 'Two pins, one setting. Marks both cheek lines in one pass.' },
      { tool: 'Try square', note: 'For shoulder lines. These must be dead square to the edge.' },
      { tool: 'Marking knife', note: 'Knife the shoulder lines — the saw registers in the knife wall.' },
    ],
    steps: [
      'Select a mortise chisel. Set the mortise gauge pins to match the chisel width.',
      'Center the gauge on the stock by testing from both faces — adjust until both readings match.',
      'Gauge the mortise walls on the mortise piece, working from the reference face.',
      'Mark the mortise length — typically 2/3 to 3/4 of the rail width.',
      'Gauge the tenon cheeks on the tenon piece from the same reference face.',
      'Knife the shoulder lines square around the tenon piece.',
    ],
    tips: [
      'Cut the mortise first. It\'s easier to fine-tune the tenon to fit.',
      'For haunched tenons, mark the haunch depth at 1/3 the full tenon width.',
    ],
    relatedTopics: ['reference-faces-edges', 'marking-knife-vs-pencil'],
    relatedTechniques: ['marking-layout', 'chopping', 'paring', 'boring-drilling', 'sawing-to-a-line'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'case-construction-layout',
    name: 'Case Construction Layout',
    category: 'furniture-scale',
    difficulty: 3,
    summary: 'Laying out a bookcase, cabinet, or chest — dado locations, shelf spacing, and keeping the whole carcass square.',
    description: `Case construction layout is about establishing a system: decide on shelf heights, dado depths, and back-panel rabbets before you cut anything. Use a story stick — mark every shelf location, dado depth, and rabbet on one stick, then transfer to all four sides. This guarantees matching dado positions on both sides of the case.

Standard dado depth is one-third to one-half the side thickness. Adjustable shelf holes are drilled on 32mm European spacing or 1" American spacing. Verify the case is square by checking diagonals before the glue sets — equal diagonals mean square.`,
    keyPrinciples: [
      'Story stick captures every dimension once. Transfer to all pieces from the same stick.',
      'Dado depth: 1/3 to 1/2 the panel thickness. Deeper is stronger but weakens the side.',
      'Back panel rabbets: 3/8" x 3/8" is standard for 1/4" plywood backs.',
      'Check diagonals during glue-up. Equal = square. Rack the case with clamp pressure to adjust.',
    ],
    commonMistakes: [
      'Measuring shelf positions individually on each side — they won\'t match',
      'Cutting dadoes before verifying shelf dimensions — shelves may not be consistent width',
      'Forgetting to account for face frame overlay when laying out dado positions',
      'Not checking for square until after the glue sets',
    ],
    tools: [
      { tool: 'Story stick', note: 'One for height layout, one for width. Mark everything.' },
      { tool: 'Marking gauge', note: 'For consistent dado depth layout on every piece.' },
      { tool: 'Diagonal measuring sticks', note: 'Two sticks that overlap — clamp and compare for equal diagonals.' },
    ],
    steps: [
      'Determine all interior dimensions: shelf heights, dado locations, rabbet depths.',
      'Make a story stick and mark every position. Label clearly.',
      'Transfer all marks from the stick to both side panels simultaneously.',
      'Mark dado depth lines on the inside faces with a marking gauge.',
      'Dry-fit the case, check diagonals, then glue up with cauls and clamps.',
    ],
    tips: [
      'Lay out the bottom shelf higher than you think — 3-4" off the floor looks right on most bookcases.',
      'For adjustable shelves, make a drilling jig from pegboard — every hole lands on center.',
    ],
    relatedTopics: ['story-poles', 'transferring-measurements', 'drawer-layout'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['dado', 'rabbet', 'dovetail'],
  },

  {
    slug: 'drawer-layout',
    name: 'Drawer Layout',
    category: 'furniture-scale',
    difficulty: 3,
    summary: 'Sizing drawers to their openings, planning reveals and runner clearances, and dividing a case into graduated drawers.',
    description: `Drawer layout starts with the opening, not the drawer. Measure the opening, subtract clearances (1/16" per side for wood runners, 1/2" per side for ball-bearing slides), and that's your drawer width. Drawer height is the opening minus 1/16" top and bottom. The drawer front covers the math — overlay fronts hide a multitude of sins.

For graduated drawers (the classic look), the traditional rule is that each drawer gets progressively taller from top to bottom. A simple method: divide the total height by the number of drawers, then steal 1/2" from each upper drawer and add it to the one below.`,
    keyPrinciples: [
      'Build to the opening. Measure the case, not the plan, for final drawer dimensions.',
      'Clearances: 1/16" per side for wood runners, 1/2" per side for slide hardware.',
      'Drawer depth (front to back) should leave 1" behind the drawer for air circulation.',
      'Graduated drawers: each lower drawer is taller than the one above.',
    ],
    commonMistakes: [
      'Building drawers to plan dimensions instead of measuring the actual opening',
      'Forgetting slide hardware clearance — the drawer won\'t close',
      'Making all drawers the same height — looks wrong on traditional furniture',
      'Not accounting for drawer bottom groove when sizing the sides',
    ],
    tools: [
      { tool: 'Story stick', note: 'Mark all drawer opening heights on one stick from the case.' },
      { tool: 'Folding rule with extension', note: 'For measuring inside the case opening accurately.' },
      { tool: 'Marking gauge', note: 'For consistent groove layout on drawer sides for the bottom panel.' },
    ],
    steps: [
      'Measure the actual case opening height, width, and depth.',
      'Subtract clearances for your runner system to get drawer box dimensions.',
      'If graduated, divide total height and adjust each drawer taller toward the bottom.',
      'Mark groove location for drawer bottom — typically 1/4" up from bottom edge.',
      'Cut and dry-fit one drawer first. Verify fit before building the rest.',
    ],
    tips: [
      'Make the drawer bottom from 1/4" plywood with grain running side-to-side. It won\'t sag.',
      'Wax the runners before final assembly — drawers should glide without effort.',
    ],
    relatedTopics: ['case-construction-layout', 'laying-out-dovetails'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['dovetail', 'dado', 'rabbet'],
  },

  {
    slug: 'table-layout',
    name: 'Table Layout',
    category: 'furniture-scale',
    difficulty: 2,
    summary: 'Apron setbacks, leg placement, and top overhang — the geometry that makes a table look right and stand solid.',
    description: `Table layout balances proportion with structure. Standard dining height is 29-30", with the apron dropping 4-5" below the top. The legs set in from the edge — typically 1" to 2" — and the top overhangs the aprons by 1" to 1-1/2". These numbers aren't arbitrary: the setback provides knee clearance, and the overhang creates a shadow line that visually grounds the top.

Apron-to-leg joinery is typically mortise and tenon. Lay out the mortises so the tenon shoulders leave a small reveal (1/16" to 1/8") at the outside face of the leg — this hides imperfect shoulder cuts. For breadboard ends, lay out the tongue-and-groove centered on the top's thickness and slot the outer pins for seasonal wood movement.`,
    keyPrinciples: [
      'Dining table height: 29-30". Coffee table: 16-18". End table: 24-26".',
      'Apron setback from the leg\'s outside face: 1/16" to 1/8" reveal.',
      'Top overhang: 1" to 1-1/2" on all sides. More looks heavy, less looks pinched.',
      'Seat clearance: at least 12" from top of chair seat to underside of apron.',
    ],
    commonMistakes: [
      'Not accounting for the apron depth when sizing the leg — chairs won\'t fit under',
      'Placing legs at the very corner of the top — no overhang, looks wrong',
      'Mortising too close to the top of the leg — the short grain breaks out',
      'Forgetting seasonal movement — a solid top needs elongated screw holes or clips',
    ],
    tools: [
      { tool: 'Marking gauge', note: 'For consistent mortise layout on all four legs.' },
      { tool: 'Story stick', note: 'Capture leg length, mortise positions, and apron heights on one stick.' },
      { tool: 'Combination square', note: 'For marking apron shoulder lines and checking reveals.' },
    ],
    steps: [
      'Determine table height, top dimensions, and overhang.',
      'Calculate leg length: table height minus top thickness minus any leveler.',
      'Mark mortise positions on all four legs — use a story stick for consistency.',
      'Lay out tenons on the aprons: tenon length equals mortise depth minus 1/16".',
      'Plan top attachment: elongated holes in the apron or tabletop clips for movement.',
    ],
    tips: [
      'Tape all four legs together and mark mortise positions across them simultaneously.',
      'A full-size drawing on plywood or paper reveals proportion problems before you cut wood.',
    ],
    relatedTopics: ['laying-out-mortise-tenon', 'proportion-golden-ratio'],
    relatedTechniques: ['marking-layout', 'chopping', 'boring-drilling'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'laying-out-curves',
    name: 'Laying Out Curves',
    category: 'furniture-scale',
    difficulty: 2,
    summary: 'Bending battens, trammel points, and French curves — drawing fair curves that the eye reads as right.',
    description: `A "fair" curve has no bumps, flat spots, or sudden direction changes — the eye catches these instantly. The simplest tool is a thin batten (a flexible strip of clear wood) bent between nails or points and traced with a pencil. It naturally forms a smooth curve. For arcs, trammel points on a beam compass swing a consistent radius at any scale.

For more complex shapes — ogees, S-curves, cabriole legs — make a half-template from stiff cardboard or 1/4" hardboard. Lay out one half, cut it, flip it, and trace the mirror image. This guarantees symmetry. If the curve must be tangent to a straight line, use a French curve or flexible ruler to blend the transition smoothly.`,
    keyPrinciples: [
      'Fair curves have no flat spots or sudden changes in direction.',
      'A flexible batten bent between three points produces a naturally fair curve.',
      'For arcs of known radius, use a trammel beam. A string stretches — don\'t use it.',
      'Always make a template for complex curves. Cut the template, check it, then trace to the workpiece.',
    ],
    commonMistakes: [
      'Using string as a compass — it stretches and the arc isn\'t consistent',
      'Not enough control points — the batten wobbles between two nails',
      'Cutting the curve without making a template first — can\'t undo a bad cut',
      'Ignoring grain direction — curves across short grain break easily',
    ],
    tools: [
      { tool: 'Thin batten', note: '1/8" x 3/4" clear pine or ash, 3-4\' long. Bends fair curves between points.' },
      { tool: 'Trammel points', note: 'Adjustable points on a beam for large-radius arcs. More accurate than a string compass.' },
      { tool: 'French curves / ship curves', note: 'For blending transitions between straight lines and curves.' },
    ],
    steps: [
      'Define the curve: endpoints, height of arc, and any tangent constraints.',
      'Set nails or pins at the control points. Bend a batten against them.',
      'Trace the curve with the pencil held against the batten. One smooth stroke.',
      'Make a template from hardboard. Check it by eye — sight down the edge for fairness.',
      'Trace the template onto the workpiece, aligning it with the reference edge.',
    ],
    tips: [
      'Sight down the curve\'s edge like sighting down a board — flat spots jump out.',
      'For symmetrical curves, make a half-template and flip it.',
    ],
    relatedTopics: ['proportion-golden-ratio', 'marking-knife-vs-pencil'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: [],
  },

  {
    slug: 'proportion-golden-ratio',
    name: 'Proportion & the Golden Ratio',
    category: 'furniture-scale',
    difficulty: 2,
    summary: 'Why some furniture looks right and some looks awkward. Simple ratios and the golden rectangle as a design layout tool.',
    description: `Good proportion isn't mysterious — it's math the eye already knows. The golden ratio (1:1.618) shows up everywhere in furniture that "looks right": a tabletop that's 36" wide is about 58" long, a drawer bank where each drawer is 1.618x the height of the one above. You don't need to calculate it precisely — the ratios 3:5, 5:8, and 8:13 are close enough.

Whole-number ratios work well too. A bookcase 2x as tall as it is wide (2:1) looks stable. A box with sides in 2:3 proportion looks balanced. These aren't rules — they're starting points. Lay out the piece on paper or cardboard at full scale, stand back, and trust your eye. If it looks wrong, it is wrong, no matter what the math says.`,
    keyPrinciples: [
      'Golden ratio: 1:1.618. Approximate with 3:5, 5:8, or 8:13.',
      'Rule of odds: three or five shelves looks better than two or four.',
      'Visual weight settles at the bottom — wider base, heavier lower drawers.',
      'Full-size drawings catch proportion problems before you waste wood.',
    ],
    commonMistakes: [
      'Slavishly following the golden ratio instead of trusting the eye',
      'Equal spacing on everything — graduated spacing almost always looks better',
      'Top-heavy designs — the visual center of gravity should be below center',
      'Not making a full-size drawing before cutting — proportion only reads at actual size',
    ],
    tools: [
      { tool: 'Sector or proportional dividers', note: 'Sets any ratio mechanically. One setting, transfer everywhere.' },
      { tool: 'Full-scale drawing (rod)', note: 'Brown paper or plywood. Draw it life-size and stand back.' },
      { tool: 'Calculator', note: 'Width × 1.618 = length. Height / 1.618 = visual midpoint.' },
    ],
    steps: [
      'Determine the primary dimension (usually the largest: height or length).',
      'Derive secondary dimensions using simple ratios: 1:1.618, 2:3, 3:5.',
      'Draw the piece full-size on paper or cardboard. Tape it to the wall.',
      'Stand back 6-8 feet. Adjust what looks wrong — trust your eye over the numbers.',
    ],
    tips: [
      'The "thirds" rule: put the visual focus at 1/3 or 2/3 of the height, not dead center.',
      'Graduating drawer heights by the golden ratio: bottom drawer × 0.618 = next drawer up.',
    ],
    relatedTopics: ['table-layout', 'case-construction-layout', 'drawer-layout'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  // ═══════════════════════════════════════════════
  // CARPENTRY LAYOUT
  // ═══════════════════════════════════════════════

  {
    slug: 'stud-wall-layout',
    name: 'Stud Wall Layout',
    category: 'carpentry-layout',
    difficulty: 2,
    summary: 'Marking plates for 16" or 24" OC stud spacing with king studs, trimmers, and cripples at every opening.',
    description: `Wall layout happens on the plates — the top and bottom plate laid side by side on the deck, with stud locations marked across both simultaneously. Standard spacing is 16" on center (OC), meaning the CENTER of each stud is 16" from the center of the next. The first stud is 15-1/4" from the end of the plate to the edge, so the center hits 16".

Every window and door gets a king stud (full height, nailed to the trimmer), a trimmer (supports the header), a header, and cripples above or below. Mark these on the plates with a big "X" for studs, "K" for kings, "T" for trimmers, and "C" for cripples. Your marks ARE your instructions to the framer.`,
    keyPrinciples: [
      '16" OC means 15-1/4" to the edge of the first stud, then 16" center-to-center after that.',
      'Layout both plates simultaneously — place them side by side and mark across.',
      'King studs are full height. Trimmers are cut to header height minus 1-1/2" for each plate.',
      'Every layout stud (16" OC regular spacing) stays, even if it falls inside an opening — move it to the side of the opening.',
    ],
    commonMistakes: [
      'Measuring 16" to the edge of the first stud instead of 15-1/4" — drywall joints miss the stud',
      'Removing layout studs when they fall inside an opening instead of relocating them',
      'Not marking both plates at the same time — studs won\'t align top to bottom',
      'Confusing king studs and trimmers — the king is full height, the trimmer is short',
    ],
    tools: [
      { tool: 'Tape measure', note: 'Red marks at every 16" help. Some tapes mark stud layout automatically.' },
      { tool: 'Speed square', note: 'Strike lines across both plates simultaneously. Faster than a framing square.' },
      { tool: 'Lumber crayon or Sharpie', note: 'Big marks that are visible after the wall is tipped up.' },
    ],
    steps: [
      'Cut top and bottom plates to wall length. Lay them side by side, ends flush.',
      'Hook your tape at one end. Mark at 15-1/4", then every 16" after (31-1/4", 47-1/4"...).',
      'Draw an X on the side of the line where the stud goes. Be consistent.',
      'Mark all openings: king studs, trimmers, headers, sills, and cripples.',
      'Separate the plates and frame the wall on the deck, studs between the marks.',
    ],
    tips: [
      'Write "TOP" on the top plate before separating. You will forget which is which.',
      'Snap a chalk line on the deck to align the bottom plate when you tip the wall up.',
    ],
    relatedTopics: ['rough-opening-layout', 'floor-joist-layout', 'level-plumb-square'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: ['butt-joint'],
  },

  {
    slug: 'stair-layout',
    name: 'Stair Layout',
    category: 'carpentry-layout',
    difficulty: 4,
    summary: 'Dividing total rise into equal risers, calculating run, and stepping off a stringer with a framing square.',
    description: `Stair layout starts with total rise — the vertical distance from finished floor to finished floor. Divide by 7 to 7-3/4" (ideal riser height) to get the number of risers. Total rise ÷ number of risers = exact riser height. Total run = (number of risers - 1) × tread depth. Code says: risers 7-3/4" max, treads 10" min, and rise + run should equal about 17-18".

Step off the stringer with a framing square using stair gauges clamped at the rise and run. The bottom riser gets shortened by one tread thickness (the "drop"), because the finished floor adds that height back. The top riser is automatically right if you measured total rise correctly. Three or more risers means you need a handrail.`,
    keyPrinciples: [
      'Total rise ÷ ideal riser (7-7.75") = number of risers. Round to whole number, recalculate.',
      'Number of treads = number of risers minus 1. The top "tread" is the landing/floor.',
      'Rise + run should equal 17-18". The 7-11 rule: 7" rise, 11" run is comfortable.',
      'Drop the bottom of the stringer by one tread thickness to account for the finished floor.',
    ],
    commonMistakes: [
      'Measuring total rise from subfloor to subfloor and forgetting finished floor thickness',
      'Not dropping the stringer — first step is one tread thickness too tall',
      'Inconsistent risers — even 1/4" difference is a trip hazard and a code violation',
      'Calculating run as number of risers instead of risers minus 1',
    ],
    tools: [
      { tool: 'Framing square with stair gauges', note: 'Gauges clamp to the square at rise and run. Step off the stringer without measuring each time.' },
      { tool: 'Calculator', note: 'Get the riser height to 1/16" precision. Rounding = tripping.' },
      { tool: 'Level (4\')', note: 'Check that the stringer sits plumb and level after cutting.' },
    ],
    steps: [
      'Measure total rise: finished floor to finished floor, plumb.',
      'Divide by ideal riser height (7.5"). Round to nearest whole number of risers.',
      'Recalculate: total rise ÷ number of risers = exact riser height.',
      'Determine tread depth (10-11" min). Verify rise + run is 17-18".',
      'Clamp stair gauges to framing square at rise and run. Step off the stringer.',
      'Drop the bottom of the stringer by one tread thickness. Cut the stringer.',
    ],
    tips: [
      'Make one stringer, test-fit it, then use it as a template for the rest.',
      'If your total rise gives you an ugly riser, add or subtract one riser and recalculate.',
    ],
    relatedTopics: ['level-plumb-square', 'three-four-five-triangle'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['butt-joint', 'housed-joint'],
  },

  {
    slug: 'common-rafter-layout',
    name: 'Common Rafter Layout',
    category: 'carpentry-layout',
    difficulty: 4,
    summary: 'Using pitch, span, and a framing square to lay out the plumb cut, bird\'s mouth, and tail on a common rafter.',
    description: `A common rafter runs from the ridge to the wall plate at a consistent pitch. Pitch is expressed as rise over 12" of run — a 6/12 roof rises 6" for every 12" of horizontal run. Total run is half the building span (ridge to outside wall). The rafter length = total run × the factor from the rafter table on your framing square, or just calculate it: √(rise² + run²).

Three cuts define the rafter: the plumb cut at the ridge (vertical when installed), the bird's mouth where it sits on the wall plate, and the tail cut at the eave. All are laid out with the framing square set to the pitch. The bird's mouth seat cut should not exceed 2/3 of the rafter depth, or you weaken it.`,
    keyPrinciples: [
      'Pitch = rise per 12" run. A 6/12 roof rises 6" for every foot of horizontal run.',
      'Total rafter run = half the span minus half the ridge thickness.',
      'Bird\'s mouth seat cut: no more than 2/3 the rafter depth. Code enforces this.',
      'The rafter tables on the framing square give length per foot of run — multiply by total run in feet.',
    ],
    commonMistakes: [
      'Measuring run to the center of the ridge instead of accounting for half the ridge thickness',
      'Cutting the bird\'s mouth too deep — weakens the rafter at its bearing point',
      'Not accounting for the fascia and soffit when laying out the tail length',
      'Confusing pitch (rise/12) with slope (rise/run as a fraction of span)',
    ],
    tools: [
      { tool: 'Framing square', note: 'Rise on the tongue (short side), run on the blade (long side). Read the rafter tables on the blade.' },
      { tool: 'Stair gauges', note: 'Clamp to the square at rise and 12 for consistent plumb/level marks.' },
      { tool: 'Speed square', note: 'Has a pitch scale — set it to the roof pitch for quick plumb and level cuts.' },
    ],
    steps: [
      'Determine roof pitch (e.g., 6/12) and measure the building span.',
      'Calculate total run: half span minus half ridge thickness.',
      'Find rafter length from the rafter table or calculate: total run × rafter factor.',
      'Mark the plumb cut at the ridge end using the framing square (rise on tongue, 12 on blade).',
      'Step off the rafter length along the top edge. Mark the bird\'s mouth plumb line.',
      'From the plumb line, mark the level seat cut for the bird\'s mouth (wall plate width).',
    ],
    tips: [
      'Cut one rafter, test-fit it, then use it as a pattern for the rest.',
      'A speed square set to the pitch angle is faster than a framing square for production cuts.',
    ],
    relatedTopics: ['roof-pitch-geometry', 'hip-valley-rafter-layout', 'level-plumb-square'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['birds-mouth'],
  },

  {
    slug: 'hip-valley-rafter-layout',
    name: 'Hip & Valley Rafter Layout',
    category: 'carpentry-layout',
    difficulty: 5,
    summary: 'The hardest layout in stick framing — hip and valley rafters run at 45° in plan, which changes everything.',
    description: `Hip and valley rafters run diagonally across the building corner at 45° in plan view. Because they travel farther than a common rafter to reach the same height, their pitch is shallower and their calculations use 17" (the diagonal of a 12" square) instead of 12" on the framing square. A 6/12 common roof becomes a 6/17 hip roof — set the square to 6 on the tongue and 17 on the blade.

The hip also requires compound angle cuts: the cheek cuts at the ridge are beveled (typically 45°) so the hip meets two ridge planes. Jack rafters are shortened commons that land on the hip — each one is shorter than the next by a consistent amount (the "common difference") found in the rafter tables. This is the layout that separates journeymen from apprentices.`,
    keyPrinciples: [
      'Hip/valley run uses 17 instead of 12 — the diagonal of a 12" square is 16.97", rounded to 17.',
      'Set the framing square to rise/17 for all hip/valley plumb and level lines.',
      'Cheek cuts at the ridge are compound angles: plumb cut plus a 45° side bevel.',
      'Jack rafter common difference = length difference between consecutive jacks, from the rafter table.',
    ],
    commonMistakes: [
      'Using 12 instead of 17 on the framing square — hip will be too short',
      'Forgetting the compound cheek cut at the ridge — a simple plumb cut won\'t fit',
      'Not backing or dropping the hip — it stands proud of the jack rafter plane if you don\'t',
      'Laying out jack rafters from the wrong direction — jacks shorten as they approach the hip',
    ],
    tools: [
      { tool: 'Framing square with rafter tables', note: 'The second line on the rafter table gives hip/valley length per foot of common run.' },
      { tool: 'Angle finder / protractor', note: 'For verifying compound cheek cut angles.' },
      { tool: 'Calculator', note: 'Hip rafter length = common run × hip rafter factor from the table.' },
    ],
    steps: [
      'Determine the common rafter pitch (e.g., 6/12).',
      'Set the framing square to rise/17 for hip layout (e.g., 6 and 17).',
      'Calculate hip rafter length using the hip/valley rafter table on the framing square.',
      'Lay out the ridge plumb cut, then mark the compound cheek cut angle (45° side bevel).',
      'Lay out the bird\'s mouth and tail, adjusting for hip backing or dropping.',
      'Calculate jack rafter common difference and lay out each jack from the longest to shortest.',
    ],
    tips: [
      'Build a scale model from cardboard before cutting expensive lumber on your first hip roof.',
      'The compound angle for a 45° hip on any pitch: cut the plumb cut, then bevel 45° on the cheeks.',
    ],
    relatedTopics: ['common-rafter-layout', 'roof-pitch-geometry'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['birds-mouth'],
  },

  {
    slug: 'deck-framing-layout',
    name: 'Deck Framing Layout',
    category: 'carpentry-layout',
    difficulty: 2,
    summary: 'Ledger attachment, post spacing, beam layout, and joist spacing for a solid, code-compliant deck.',
    description: `Deck layout starts at the house. The ledger bolts to the rim joist, with its top edge set so the finished deck surface is 1" below the door threshold (prevents water intrusion). From the ledger, establish the deck perimeter using 3-4-5 triangles to square the corners. Post spacing depends on beam size and span — a doubled 2x10 beam spans about 8' between posts.

Joist spacing is typically 16" OC for 2x8 or 2x10 joists, 12" OC for composite decking or diagonal deck boards. Mark the joist layout on both the ledger and the beam simultaneously, just like wall plates. Crown all joists up — the load will flatten the crown over time.`,
    keyPrinciples: [
      'Ledger top edge: finished deck surface minus decking thickness, positioned 1" below the threshold.',
      'Square the layout from the ledger using 3-4-5 triangle (or larger multiple).',
      'Joist spacing: 16" OC standard, 12" OC for composite decking or diagonal boards.',
      'Post spacing depends on beam size and load. Check the span tables.',
    ],
    commonMistakes: [
      'Ledger too high — water runs back toward the house through the door',
      'Not flashing the ledger — the #1 cause of deck rot and house damage',
      'Posts not plumb — the deck looks drunk and loads are eccentric',
      'Not crowning joists up — the sag goes the wrong way',
    ],
    tools: [
      { tool: 'Chalk line', note: 'Snap joist layout on the ledger and beam. Use blue chalk — red is permanent.' },
      { tool: 'String lines and stakes', note: 'Establish the perimeter before setting posts.' },
      { tool: 'Water level or laser level', note: 'Transfer the ledger height to the post locations for beam height.' },
    ],
    steps: [
      'Establish ledger position: finished height minus decking thickness, 1" below threshold.',
      'Bolt the ledger to the rim joist with proper flashing.',
      'Set string lines for the deck perimeter. Square with 3-4-5.',
      'Mark post locations based on beam span tables. Set and plumb the posts.',
      'Mark joist layout on the ledger and beam — 16" OC, starting at 15-1/4" to the first joist edge.',
      'Crown joists up, hang them, and brace everything before decking.',
    ],
    tips: [
      'Use stainless or hot-dipped galvanized fasteners. Coated screws rust in treated lumber.',
      'Start decking from the house outward — the last board at the edge is the most visible, adjust spacing to avoid a ripped sliver.',
    ],
    relatedTopics: ['floor-joist-layout', 'three-four-five-triangle', 'level-plumb-square'],
    relatedTechniques: ['marking-layout', 'boring-drilling'],
    relatedJoints: ['butt-joint'],
  },

  {
    slug: 'crown-molding-angles',
    name: 'Crown Molding Angles',
    category: 'carpentry-layout',
    difficulty: 4,
    summary: 'Spring angles, compound miters, and coping — the geometry that makes crown molding fit tight in real (never square) rooms.',
    description: `Crown molding sits at a "spring angle" — the angle between the back of the molding and the wall, typically 38° or 45°. This angle determines the compound miter settings for inside and outside corners. For 38° crown on a 90° wall: miter saw set to 31.6° with a 33.9° bevel. Most carpenters skip the math and cope inside corners instead.

Coping means cutting the profile on one piece to fit over the face of the other. Cut the first piece square into the corner. On the mating piece, make a 45° miter cut, then cope along the exposed profile line with a coping saw. This method accommodates out-of-square corners and seasonal wood movement better than any miter.`,
    keyPrinciples: [
      'Know your spring angle: 38° and 45° are most common. It\'s printed on the molding or measure it.',
      'Cope inside corners — they open less than miters when the wood moves.',
      'For outside corners, measure the actual angle. Walls are never exactly 90°.',
      'Nest the crown upside down in the miter saw — the fence is the ceiling, the table is the wall.',
    ],
    commonMistakes: [
      'Assuming walls are square — measure every corner with a bevel gauge or angle finder',
      'Mitering inside corners instead of coping — they gap when humidity changes',
      'Nesting crown wrong in the saw — the spring angle must be correct or the cut is wrong',
      'Not back-cutting the cope — leaves material that prevents the joint from closing',
    ],
    tools: [
      { tool: 'Miter saw (compound)', note: 'For mitered outside corners and the initial miter cut for coping.' },
      { tool: 'Coping saw', note: 'For cutting the profile on inside corners. Fine blade, 15+ TPI.' },
      { tool: 'Angle finder', note: 'Measure the actual corner angle. Divide by 2 for each piece\'s miter setting.' },
    ],
    steps: [
      'Measure the room and plan the installation sequence — longest walls first, work toward the door.',
      'First piece in each corner goes in square-cut. The mating piece gets coped to fit.',
      'For the cope: miter the piece at 45° to expose the profile line.',
      'Cut along the profile line with a coping saw, back-cutting 5-10°.',
      'Test-fit, adjust with a round file, and install.',
    ],
    tips: [
      'Color the mitered profile edge with a pencil — the graphite line shows exactly where to cope.',
      'Practice coping on scrap pieces. Nobody gets it right the first time.',
    ],
    relatedTopics: ['level-plumb-square', 'roof-pitch-geometry'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['miter', 'butt-joint'],
  },

  {
    slug: 'rough-opening-layout',
    name: 'Rough Opening Layout',
    category: 'carpentry-layout',
    difficulty: 2,
    summary: 'Sizing headers, king studs, trimmers, and sills for windows and doors — the math that makes everything fit.',
    description: `The rough opening (RO) is the framed hole in the wall that receives the window or door unit. The manufacturer specifies the RO size — typically the unit size plus 1/2" in width and height for shimming and adjustment. A 36" door needs a 37-1/2" to 38" wide RO. Always check the spec sheet; don't guess.

The header spans the opening and transfers the load above to the king studs. Header size depends on span and load — typically doubled 2x for openings up to 4', doubled 2x10 or 2x12 for wider spans. Trimmers (jack studs) support the header from below and define the RO height. Mark everything on the plates: K for king, T for trimmer, C for cripples above the header and below the sill.`,
    keyPrinciples: [
      'Always use the manufacturer\'s specified RO dimensions. Don\'t calculate from the unit size.',
      'King studs are full-height layout studs. Trimmers are cut to RO height.',
      'Header size is determined by span AND load above. Check the tables or ask the engineer.',
      'Cripples above the header and below the sill maintain the 16" OC stud spacing for drywall.',
    ],
    commonMistakes: [
      'Guessing the RO instead of checking the manufacturer\'s spec sheet',
      'Undersizing the header — a structural failure waiting to happen',
      'Forgetting cripple studs — the drywall has nothing to nail to above the header',
      'Measuring RO height from the subfloor instead of the finished floor — door is too short',
    ],
    tools: [
      { tool: 'Tape measure', note: 'Measure the actual opening after framing. Check it against the spec.' },
      { tool: 'Level (4-6\')', note: 'Check king studs for plumb and header for level.' },
      { tool: 'Speed square', note: 'Mark cut lines on trimmers and cripples.' },
    ],
    steps: [
      'Get the RO dimensions from the manufacturer spec sheet.',
      'Mark the RO location on the plates. Mark king studs (K) and trimmers (T).',
      'Calculate trimmer height: RO height + bottom plate thickness (if cutting the plate out for a door).',
      'Size the header for the span and load. Build and install the header on the trimmers.',
      'Install cripple studs above the header and below the window sill, maintaining 16" OC layout.',
    ],
    tips: [
      'Write the window/door model number on the header with a Sharpie. When the inspector asks, you know.',
      'Rough openings for doors include the bottom plate — you cut it out after the wall is stood up.',
    ],
    relatedTopics: ['stud-wall-layout', 'level-plumb-square'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line'],
    relatedJoints: ['butt-joint'],
  },

  {
    slug: 'floor-joist-layout',
    name: 'Floor Joist Layout',
    category: 'carpentry-layout',
    difficulty: 2,
    summary: 'Spacing joists at 16" or 12" OC, doubling under walls, and heading off openings for stairs and mechanicals.',
    description: `Floor joist layout follows the same 16" OC logic as stud walls — mark the sill plate or rim joist at 15-1/4" to the first joist edge, then 16" center-to-center thereafter. This spacing ensures 4' plywood sheets always land on a joist. Joists under parallel bearing walls get doubled. Joists under perpendicular bearing walls need blocking or a beam below.

Stairwell openings, chimneys, and HVAC chases require "heading off" — cutting joists short and framing a header to transfer the load to doubled trimmer joists on either side. The header is sized like a beam, based on span. Mark all of this on the sill plate before you start nailing — clear layout prevents expensive mistakes.`,
    keyPrinciples: [
      'Joist layout matches stud layout — 16" OC so walls and subfloor land on joists.',
      'Crown joists up. The crown goes toward the load.',
      'Double joists under parallel bearing walls. Use blocking under perpendicular walls.',
      'Head off openings with doubled trimmers and properly sized headers.',
    ],
    commonMistakes: [
      'Joist layout not aligned with stud layout above — concentrated point loads on single joists',
      'Not crowning joists — some crown down and create a dip in the floor',
      'Forgetting to double the trimmers at stair openings — header has no support',
      'Cutting a joist for mechanicals without adding a header — the load path is broken',
    ],
    tools: [
      { tool: 'Chalk line', note: 'Snap layout on the sill plate. Use blue chalk for temporary layout.' },
      { tool: 'Tape measure', note: 'Hook at the end of the sill plate for consistent layout.' },
      { tool: 'Speed square', note: 'Mark joist locations across the sill plate.' },
    ],
    steps: [
      'Mark layout on both sill plates (or rim joists) simultaneously — 15-1/4" to first, then 16" OC.',
      'Identify bearing walls above and double joists beneath parallel walls.',
      'Mark stair openings, chases, and any other penetrations that require heading off.',
      'Frame headers for openings: doubled trimmers on each side, header sized for span.',
      'Crown all joists up and install with the crown facing the load (usually up).',
    ],
    tips: [
      'Use an "X" on the layout side of the line, same as stud walls. Consistency prevents mistakes.',
      'If the joist span is borderline, go to the next size up. A bouncy floor is a callback.',
    ],
    relatedTopics: ['stud-wall-layout', 'stair-layout', 'deck-framing-layout'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: ['butt-joint'],
  },

  {
    slug: 'roof-pitch-geometry',
    name: 'Roof Pitch Geometry',
    category: 'carpentry-layout',
    difficulty: 3,
    summary: 'Understanding pitch, slope, rise, run, and the rafter tables stamped on every framing square.',
    description: `Roof pitch is rise over run, expressed as inches of rise per 12 inches of horizontal run. A 6/12 pitch rises 6" for every foot of run. The framing square has rafter tables stamped on the blade — they give the rafter length per foot of run for common, hip, valley, and jack rafters. For a 6/12 common rafter, the table reads 13.42" — multiply by total run in feet to get rafter length.

The relationship between pitch and angle: a 6/12 pitch equals 26.57°. A 12/12 pitch is 45°. Steeper pitches shed snow better but use more material. Lower pitches need better waterproofing. Most residential roofs are 4/12 to 12/12. Anything under 3/12 is considered low-slope and needs membrane roofing.`,
    keyPrinciples: [
      'Pitch = rise per 12" run. The number before the slash is inches of rise.',
      'Rafter tables: first line = common rafter length per foot of run. Multiply by total run.',
      'Pitch to angle conversion: arctan(rise/12) = roof angle. 6/12 = 26.57°.',
      'Minimum pitch for standard shingles: 4/12. Below 3/12 = membrane roofing required.',
    ],
    commonMistakes: [
      'Confusing pitch with angle — 6/12 pitch is NOT 6 degrees, it\'s 26.57°',
      'Reading the wrong line on the rafter table — line 1 is commons, line 2 is hips/valleys',
      'Not accounting for ridge thickness when calculating total run',
      'Assuming both sides of a roof have the same pitch on additions — they often don\'t',
    ],
    tools: [
      { tool: 'Framing square', note: 'The rafter tables are stamped on the face of the blade. Learn to read them.' },
      { tool: 'Pitch finder / angle gauge', note: 'Hold against an existing rafter or roof surface to read the pitch directly.' },
      { tool: 'Construction calculator', note: 'Built-in rafter calculations. Worth the $40 on any roof job.' },
    ],
    steps: [
      'Determine the desired pitch based on style, snow load, and roofing material.',
      'Read the rafter table on the framing square for your pitch.',
      'Calculate total run (half span minus half ridge).',
      'Multiply the per-foot factor by total run to get rafter length.',
      'Verify by calculating: √(total rise² + total run²) = theoretical rafter length.',
    ],
    tips: [
      'A construction calculator with a "roof" key saves hours on complex roofs.',
      'To measure an existing roof\'s pitch: hold a level against a rafter, measure 12" horizontal, then measure the vertical rise.',
    ],
    relatedTopics: ['common-rafter-layout', 'hip-valley-rafter-layout'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: ['birds-mouth'],
  },

  {
    slug: 'level-plumb-square',
    name: 'Level, Plumb & Square',
    category: 'carpentry-layout',
    difficulty: 1,
    summary: 'The three axes of construction layout. Everything you build is measured against gravity and the horizon.',
    description: `Level is horizontal (parallel to the earth). Plumb is vertical (aligned with gravity). Square is 90° where they meet. These three relationships define every building and most furniture. A spirit level checks level and plumb — flip it end-for-end to verify accuracy. A plumb bob checks vertical by hanging a weight on a string — pure gravity, no calibration needed.

Nothing in construction is optional about these three. A wall out of plumb leans. A floor out of level rolls furniture. Corners out of square give you tapered rooms. Check early, check often, and trust the level over your eyes — the eye is easily fooled by context.`,
    keyPrinciples: [
      'Level = horizontal. Plumb = vertical. Square = 90° where they meet.',
      'Always verify your level by flipping it end-for-end. If it reads the same both ways, it\'s accurate.',
      'A plumb bob is the most accurate vertical reference — pure gravity, never needs calibration.',
      'Over long distances, use a string line or laser. A 4\' level can\'t check a 20\' wall.',
    ],
    commonMistakes: [
      'Using an unchecked level — drop it once and it reads wrong until you verify',
      'Checking plumb with a short level on a bowed stud — the stud is plumb, the wall isn\'t',
      'Assuming "close enough" on level and plumb — errors compound across the whole structure',
      'Not establishing a level reference line at the start of the project',
    ],
    tools: [
      { tool: '4\' spirit level', note: 'The workhorse. Check it for accuracy regularly.' },
      { tool: 'Plumb bob', note: 'A pointed weight on a string. The most accurate vertical reference there is.' },
      { tool: 'Laser level', note: 'For establishing level reference lines across a room. Self-leveling types are worth the money.' },
    ],
    steps: [
      'Check your level for accuracy: place it on a surface, read the bubble, flip it end-for-end, read again.',
      'Establish a level reference line at working height. Everything measures from this line.',
      'Check walls for plumb in both directions (face and edge). Shim or adjust as needed.',
      'Check corners for square using a 3-4-5 triangle or by measuring diagonals.',
    ],
    tips: [
      'In remodel work, find level once and mark it everywhere with a laser. Old floors aren\'t level.',
      'A plumb bob in wind is useless. Use water or a laser outdoors.',
    ],
    relatedTopics: ['three-four-five-triangle', 'squaring-foundation', 'stud-wall-layout'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  // ═══════════════════════════════════════════════
  // TIMBER FRAME LAYOUT
  // ═══════════════════════════════════════════════

  {
    slug: 'timber-frame-layout-basics',
    name: 'Timber Frame Layout Basics',
    category: 'framing-layout',
    difficulty: 3,
    summary: 'Reference faces, layout lines, and the rule system that lets you cut a building on the ground and raise it in a day.',
    description: `Timber frame layout is a complete system: every timber gets a reference face (the "layout face"), and all joinery is measured from that face. The layout face is typically the side that will be visible when the frame goes up. Timbers are marked with marriage marks that identify their position in the frame — no guessing during the raise.

The key concept is the "rule" or reference line. In the "square rule" system, you imagine a perfect rectangular timber inside the imperfect real timber, and all joinery is laid out to that inner reference. This means timbers can vary in size and still fit — the joints are all measured from the same virtual reference points, not the actual surface.`,
    keyPrinciples: [
      'Every timber has a layout face. All joinery measurements start from this face.',
      'Square rule: layout to an idealized inner timber so naturally tapered timbers still fit.',
      'Scribe rule: each timber is custom-fitted to its mate. More precise but less forgiving.',
      'Mark every timber with its position and orientation before cutting. Marriage marks are your map.',
    ],
    commonMistakes: [
      'Not establishing the layout face before marking joints — measurements reference the wrong surface',
      'Mixing up square rule and scribe rule on the same project',
      'Not marking timbers with their position in the frame — chaos during the raise',
      'Failing to account for shrinkage in green timber — joints loosen as the wood dries',
    ],
    tools: [
      { tool: 'Framing square', note: 'The primary layout tool for every timber joint.' },
      { tool: 'Combination square', note: 'For transferring marks around corners of the timber.' },
      { tool: 'Chalk line', note: 'Snap reference lines down the length of the timber.' },
    ],
    steps: [
      'Select the layout face on each timber — the best face, or the face that will show.',
      'Snap a chalk line down the center of the layout face if using center-line layout.',
      'Mark all joint locations from the plans, measuring from a reference end.',
      'Mark the timber with marriage marks: bent number, position (N/S/E/W), and top.',
      'Lay out each joint using a framing square from the layout face.',
    ],
    tips: [
      'Take a photo of every timber\'s layout marks before cutting. If you lose a piece, you can rebuild it.',
      'Use a lumber crayon for marks that need to survive handling. Pencil rubs off on green timber.',
    ],
    relatedTopics: ['center-line-vs-face-layout', 'marriage-marks', 'reference-faces-edges'],
    relatedTechniques: ['marking-layout', 'hewing'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'laying-out-timber-mortise-tenon',
    name: 'Timber Mortise & Tenon Layout',
    category: 'framing-layout',
    difficulty: 4,
    summary: 'Laying out 2" and 3" mortise-and-tenon joints in large timbers — housing, drawbore offset, and peg layout.',
    description: `Timber frame mortise-and-tenon layout follows the same principles as furniture joinery, but at a larger scale. A typical post-and-beam joint uses a 2" wide mortise, 3" long, 4" deep, with a 2" × 3" tenon and 1" oak pegs. The mortise is always laid out from the layout face using a combination square and framing square.

The critical detail is the drawbore offset. The peg hole through the tenon is drilled 1/16" to 1/8" closer to the shoulder than the hole through the mortise. When the tapered oak peg is driven through, it pulls the tenon shoulder tight against the post — a mechanical clamp that holds forever without glue.`,
    keyPrinciples: [
      'Mortise layout from the layout face only. Gauge from the same face on both pieces.',
      'Standard drawbore offset: 1/16" to 1/8" toward the shoulder on the tenon hole.',
      'Tenon thickness: typically 2" for softwood frames, centered or offset depending on the system.',
      'Housing (a shallow recess around the mortise) seats the beam shoulder and resists racking.',
    ],
    commonMistakes: [
      'Drawbore offset in the wrong direction — the peg pushes the shoulder away instead of pulling it tight',
      'Mortise too close to the edge of the timber — the cheek blows out under peg pressure',
      'Not accounting for housing depth when calculating tenon shoulder-to-shoulder length',
      'Drilling peg holes off-center — the peg misses the offset and the joint is loose',
    ],
    tools: [
      { tool: 'Framing square', note: 'For layout lines across the timber face.' },
      { tool: 'Combination square', note: 'Set to mortise depth for consistent layout on every joint.' },
      { tool: 'Timber framing chisels (2" and 1-1/2")', note: 'Heavy chisels for chopping mortise walls to the layout lines.' },
    ],
    steps: [
      'Mark the mortise centerline on the layout face. Transfer to all four faces.',
      'Set a combination square to half the mortise width. Mark both cheeks from the centerline.',
      'Mark the mortise length (typically 3" for a 2" × 3" tenon).',
      'Mark the mortise depth — typically half the timber width or per the plan.',
      'On the tenon piece: mark the shoulder lines, cheek lines, and tenon length.',
      'Drill and mark the drawbore peg hole — offset 1/16" to 1/8" toward the shoulder on the tenon.',
    ],
    tips: [
      'Drill the mortise peg hole first through the assembled joint, then mark the tenon offset from that hole.',
      'A sharp 2" timber chisel does 80% of the work on every mortise. Keep it razor sharp.',
    ],
    relatedTopics: ['timber-frame-layout-basics', 'laying-out-mortise-tenon'],
    relatedTechniques: ['marking-layout', 'chopping', 'paring', 'boring-drilling'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'bent-layout',
    name: 'Bent Layout',
    category: 'framing-layout',
    difficulty: 4,
    summary: 'Laying out a cross-frame (bent) — posts, beams, braces, and girts that assemble flat and raise as a unit.',
    description: `A bent is a cross-section of the frame: two posts, a tie beam across the top, a connecting girt or summer beam, and braces at the corners. The whole bent is laid out and assembled flat on the ground, then raised as a unit. The layout starts with a full-size drawing on the shop floor or on plywood — every joint location, every brace angle, every peg hole marked on the drawing.

Each timber is placed on the drawing, and joint locations are transferred directly from the floor to the timber. This eliminates measurement error — you're transferring positions, not numbers. Once every timber in the bent is cut and test-fitted on the floor, you mark it with marriage marks and disassemble for the raise.`,
    keyPrinciples: [
      'A full-size floor drawing is the master reference. Everything transfers from the drawing to the timber.',
      'All timbers in the bent are laid out and test-fitted flat before the raise.',
      'Brace angles are typically 45° or match the plan. Measure from the floor drawing, not a protractor.',
      'Raising order matters: bents go up first, then plates and girts connect them.',
    ],
    commonMistakes: [
      'Not making a full-size drawing — accumulated measurement errors show up at the raise',
      'Laying out joints on the wrong face of the timber — the bent won\'t assemble flat',
      'Cutting braces before test-fitting the bent — the angles never match the plan exactly',
      'Forgetting to account for housing depth in the overall timber lengths',
    ],
    tools: [
      { tool: 'Chalk line', note: 'Snap the full-size bent drawing on the shop floor or deck.' },
      { tool: 'Framing square', note: 'For laying out joint locations and checking square during test assembly.' },
      { tool: 'String lines', note: 'For establishing long straight reference lines on the floor drawing.' },
    ],
    steps: [
      'Draw the bent full-size on the floor: post positions, beam heights, brace angles.',
      'Place each timber on the drawing. Transfer joint locations directly from the drawing.',
      'Cut all joints: mortises, tenons, housings, brace pockets.',
      'Assemble the bent dry on the floor drawing. Check every joint for fit.',
      'Mark marriage marks on every timber. Disassemble and stack for the raise.',
    ],
    tips: [
      'Use a different color chalk for each bent if you\'re drawing multiple bents on the same floor.',
      'Number the bents and label every timber clearly — during the raise, you need to find pieces fast.',
    ],
    relatedTopics: ['timber-frame-layout-basics', 'brace-layout', 'marriage-marks'],
    relatedTechniques: ['marking-layout', 'chopping', 'boring-drilling'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'plate-sill-layout',
    name: 'Plate & Sill Layout',
    category: 'framing-layout',
    difficulty: 3,
    summary: 'Laying out the horizontal timbers — sills on the foundation, plates on top of the posts — that tie the whole frame together.',
    description: `Sills sit on the foundation and carry the posts. Plates sit on top of the posts and carry the rafters. Both are laid out the same way: mark every post location, every girt mortise, every brace pocket, and every joist or rafter bearing point along the timber. In a square-rule frame, these locations reference the idealized inner timber, not the rough surface.

Sill layout starts with the building footprint. Transfer the foundation dimensions to the sill timbers, accounting for corner joinery (typically half-laps or scarf joints). Plate layout mirrors the sill — same post spacing — but adds rafter layout on top. Every rafter seat gets marked on the plate, usually at 24" OC for timber frames.`,
    keyPrinciples: [
      'Sill layout matches the foundation plan exactly. Post locations transfer from the foundation.',
      'Plates mirror sills for post spacing but add rafter bearing layout on the top face.',
      'Corner joints on sills: half-lap, scarf, or housed mortise-and-tenon, depending on the system.',
      'Sills must be level and square before anything goes on top. This is the base for everything.',
    ],
    commonMistakes: [
      'Not checking the foundation for square before laying out the sills',
      'Sill joints landing over the anchor bolts instead of between them',
      'Forgetting to lay out the joist pockets on the sill — you can\'t mortise them after the frame is up',
      'Plate rafter layout not aligned with the wall stud/post spacing below',
    ],
    tools: [
      { tool: 'Framing square', note: 'For laying out mortise and joint locations on the timber.' },
      { tool: 'Chalk line', note: 'Snap reference lines down the center of the sill.' },
      { tool: 'Level (6-8\')', note: 'Check sills for level in both directions. Shim as needed.' },
    ],
    steps: [
      'Verify the foundation is square (diagonals) and level (transit or water level).',
      'Transfer post and bent locations from the plans to the sill timbers.',
      'Mark all mortise locations for posts, joist pockets, and any through-tenons.',
      'Lay out corner joints — half-laps, scarfs, or through-tenons at the corners.',
      'For plates: mirror the post layout from the sill and add rafter bearing points on top.',
    ],
    tips: [
      'Shim the sill on the foundation to get it perfect. The first course sets the tone for the whole frame.',
      'If the sill has a natural curve, put the crown up and let the building load straighten it.',
    ],
    relatedTopics: ['timber-frame-layout-basics', 'squaring-foundation', 'scarf-joint-layout'],
    relatedTechniques: ['marking-layout', 'chopping'],
    relatedJoints: ['mortise-tenon', 'lap-joint'],
  },

  {
    slug: 'brace-layout',
    name: 'Brace Layout',
    category: 'framing-layout',
    difficulty: 3,
    summary: 'Laying out diagonal braces — the members that keep a timber frame from racking — with the right angles and tenon geometry.',
    description: `Braces are the diagonal members that triangulate the frame and resist racking (sideways forces). Typically set at 45°, they connect posts to beams or posts to sills. The brace tenon is usually housed — the shoulder sits in a shallow pocket chopped into the post and beam, providing a bearing surface and resisting lateral movement.

The tricky part is laying out the compound shoulders. The brace meets the post at one angle and the beam at another. If the brace is truly at 45° and the post and beam are square, both shoulders are 45°. But real timbers may not be perfectly square, so measure the actual angles from the floor drawing or the test-fitted bent.`,
    keyPrinciples: [
      'Standard brace angle: 45° with equal run on the post and beam (typically 3\' to 4\' from the corner).',
      'Brace tenons are housed: a 1/2" to 3/4" housing recess provides bearing and resists shear.',
      'Measure brace length from the floor drawing or the assembled bent — don\'t calculate from plans.',
      'Brace shoulders must match the actual angle of the joint, not the theoretical angle.',
    ],
    commonMistakes: [
      'Calculating brace length instead of measuring from the actual assembly — accumulated error',
      'Cutting the brace tenons before test-fitting the bent — the angles may be slightly off',
      'Housing pocket too deep — weakens the post or beam at the connection point',
      'Installing braces in compression only (coming down from the post) — they should also work in tension',
    ],
    tools: [
      { tool: 'Sliding bevel gauge', note: 'Capture the actual angle from the floor drawing or assembled bent.' },
      { tool: 'Framing square', note: 'For 45° layout. Equal measurements on tongue and blade = 45°.' },
      { tool: 'Timber framing chisel (1-1/2")', note: 'For chopping the housing pockets in the post and beam.' },
    ],
    steps: [
      'Mark the brace bearing points on the post and beam — typically 3\' from the corner.',
      'From the floor drawing or bent assembly, measure the actual brace length shoulder-to-shoulder.',
      'Capture the shoulder angles with a sliding bevel gauge from the actual assembly.',
      'Lay out the tenons on both ends of the brace using the captured angles.',
      'Chop the housing pockets in the post and beam to match the brace shoulder dimensions.',
    ],
    tips: [
      'Cut the brace tenons slightly long and pare to fit. Short braces leave a gap at the shoulder.',
      'On a 45° brace in a square frame, the brace length is the run × √2 (times 1.414).',
    ],
    relatedTopics: ['bent-layout', 'timber-frame-layout-basics'],
    relatedTechniques: ['marking-layout', 'chopping', 'paring', 'sawing-to-a-line'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'scarf-joint-layout',
    name: 'Scarf Joint Layout',
    category: 'framing-layout',
    difficulty: 4,
    summary: 'Joining timbers end-to-end when one piece isn\'t long enough — the geometry of scarfs, bladed scarfs, and lapped scarfs.',
    description: `When a timber isn't long enough to span the full distance, a scarf joint joins two pieces end-to-end. The simplest is the half-lap scarf: each timber is halved for 18-24" and they overlap. The bladed scarf adds interlocking steps that resist both tension and compression. A through-bolted or keyed scarf adds mechanical fastening.

Scarf layout is fussy work. The mating surfaces must be dead flat and the steps must match exactly — any gap becomes a hinge point under load. Lay out the scarf with a marking gauge and framing square, cut slightly proud, and pare to a perfect fit. Scarfs in sills should land over a foundation support point, never in an unsupported span.`,
    keyPrinciples: [
      'Scarf overlap: minimum 2x the timber depth. A 6" deep sill gets at least 12" of scarf.',
      'Scarfs must land over a bearing point (foundation wall, post, or pier).',
      'Both halves of the scarf must be dead flat where they meet — any gap is a failure point.',
      'Bladed or stepped scarfs resist tension; simple lap scarfs rely on fasteners.',
    ],
    commonMistakes: [
      'Scarf landing in an unsupported span — it opens under load',
      'Surfaces not flat — the joint hinges at the high point and opens at the low point',
      'Scarf too short — not enough glue surface or peg engagement',
      'Not accounting for the key or bolt when laying out the step geometry',
    ],
    tools: [
      { tool: 'Framing square', note: 'For laying out the steps and verifying square shoulders.' },
      { tool: 'Marking gauge', note: 'Set to half the timber depth for a simple halved scarf.' },
      { tool: 'Wide chisel (2")', note: 'For paring the scarf faces flat.' },
    ],
    steps: [
      'Determine the scarf location — it must land over a bearing point.',
      'Mark the scarf length on both timbers (minimum 2x timber depth).',
      'Lay out the halving or step geometry with marking gauge and framing square.',
      'Cut the cheeks with a saw, chop and pare the shoulders.',
      'Test-fit: the faces must mate with no light showing through. Pare until they do.',
      'Mark peg or bolt hole locations. Drill and assemble.',
    ],
    tips: [
      'Number or letter both halves of the scarf so you know which piece mates with which.',
      'Wax the mating surfaces on the first test fit — they\'ll slide apart easier.',
    ],
    relatedTopics: ['plate-sill-layout', 'timber-frame-layout-basics'],
    relatedTechniques: ['marking-layout', 'sawing-to-a-line', 'paring', 'chopping'],
    relatedJoints: ['lap-joint'],
  },

  // ═══════════════════════════════════════════════
  // SITE & FOUNDATION LAYOUT
  // ═══════════════════════════════════════════════

  {
    slug: 'batter-boards',
    name: 'Batter Boards',
    category: 'site-layout',
    difficulty: 2,
    summary: 'Temporary frames set outside the foundation corners that hold the string lines defining the building footprint.',
    description: `Batter boards are L-shaped or straight boards nailed to stakes, set 3-4' outside each building corner. String lines stretched between them define the exact building footprint — the corners, the edges, the diagonals. When you pull the strings off to dig, you can put them back in exactly the same position because the batter boards haven't moved.

Set the batter boards level with each other using a transit, water level, or laser. This gives you a level reference plane for the entire foundation. Cut or mark the string positions into the top edge of the batter boards so you can restring without re-measuring. The strings cross at the exact building corners — drop a plumb bob from the intersection to mark the ground.`,
    keyPrinciples: [
      'Batter boards are set OUTSIDE the building footprint — 3-4\' back from each corner.',
      'All batter boards must be at the same height — they establish a level reference plane.',
      'Cut notches or drive nails for string positions so you can restring without re-measuring.',
      'String intersections mark corner points. Drop a plumb bob to transfer to the ground.',
    ],
    commonMistakes: [
      'Setting batter boards too close to the foundation — the excavator knocks them out',
      'Not leveling all batter boards to the same height — the reference plane is wrong',
      'Using stretchy string — mason\'s line is non-stretch. Nylon stretches.',
      'Not checking diagonals after setting the strings — the building could be a parallelogram',
    ],
    tools: [
      { tool: 'Stakes and crosspieces', note: '2x4 stakes with 1x4 crosspieces. Drive them deep and brace them.' },
      { tool: 'Mason\'s line', note: 'Non-stretch nylon or polyester string. Bright color for visibility.' },
      { tool: 'Transit or laser level', note: 'For setting all batter boards to the same height.' },
    ],
    steps: [
      'Drive stakes 3-4\' beyond each building corner, in pairs forming an L or straight run.',
      'Nail crosspieces at a consistent height — use a transit or laser to level them all.',
      'Stretch mason\'s line between opposing batter boards, aligned with the building edges.',
      'Adjust strings until diagonals are equal (building is square).',
      'Cut notches in the batter boards where the strings land so you can restring exactly.',
    ],
    tips: [
      'Paint the string notches a bright color. When it\'s muddy and dark, you\'ll thank yourself.',
      'Double-check diagonals after any disturbance. One bumped batter board ruins the whole layout.',
    ],
    relatedTopics: ['squaring-foundation', 'three-four-five-triangle', 'grade-and-slope'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  {
    slug: 'squaring-foundation',
    name: 'Squaring a Foundation',
    category: 'site-layout',
    difficulty: 3,
    summary: 'Using diagonals, 3-4-5, and precise string work to make a foundation perfectly square before pouring concrete.',
    description: `A square foundation has four right angles and equal diagonals. You establish one reference line (usually the longest wall, parallel to the road or property line), then build the rectangle from there. Set the first string, measure to the second string using 3-4-5 to establish perpendicular, then set all four strings. Check diagonals — if they're equal, the foundation is square.

For large foundations, use the largest 3-4-5 multiple your tape allows — 30-40-50 at minimum. A transit or total station is more accurate for big buildings. Check the diagonals from corner to corner — they should match within 1/4" for residential work, 1/8" for post-and-beam. Adjust the strings on the batter boards until the diagonals match.`,
    keyPrinciples: [
      'Start with one reference line — the longest wall, usually parallel to the street.',
      'Use 3-4-5 (or a larger multiple) to establish perpendicular from the reference line.',
      'Equal diagonals = square. Measure both diagonals and adjust until they match.',
      'Tolerance: 1/4" diagonal difference for residential, 1/8" for timber frame.',
    ],
    commonMistakes: [
      'Using too small a 3-4-5 triangle — at 3-4-5 in feet, 1/4" error is invisible',
      'Not pulling the tape tight when checking diagonals — sag adds 1/2" on a 50\' span',
      'Checking square at the strings but not at the actual foundation after pouring',
      'Assuming the property line is straight — survey it or verify with the plat',
    ],
    tools: [
      { tool: 'Two 100\' tape measures', note: 'For checking diagonals. Two tapes let one person hook both corners.' },
      { tool: 'Transit or builder\'s level', note: 'For establishing perpendicular lines precisely. A laser line works too.' },
      { tool: 'Mason\'s line', note: 'Non-stretch string on batter boards defines the foundation edges.' },
    ],
    steps: [
      'Establish the reference line (longest wall) on batter boards.',
      'Measure the perpendicular offset for the adjacent wall using 3-4-5.',
      'Set all four corner strings on batter boards.',
      'Measure both diagonals. Adjust strings until diagonals are equal.',
      'Verify final dimensions: length, width, and both diagonals.',
      'Transfer corner positions to the ground with a plumb bob or stakes.',
    ],
    tips: [
      'Check diagonals twice — once with strings, once after the forms are set. Forms shift.',
      'For a timber frame, check diagonals again on top of the sills. This is your last chance before the frame goes up.',
    ],
    relatedTopics: ['batter-boards', 'three-four-five-triangle', 'level-plumb-square'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  {
    slug: 'grade-and-slope',
    name: 'Grade & Slope',
    category: 'site-layout',
    difficulty: 2,
    summary: 'Reading and establishing the slope of the ground — drainage, foundation height, and keeping water away from the building.',
    description: `Grade is the elevation of the ground relative to a reference point, usually expressed as a percentage slope: 2% means 2' of fall over 100' of run, or about 1/4" per foot. Foundation drainage requires a minimum 6" drop in the first 10' away from the building (5% slope). Getting this wrong means water in the basement — the most common and most preventable construction failure.

Establish grade with a transit, builder's level, or laser. Take shots at regular intervals to map the existing terrain, then plan the cut-and-fill to achieve proper drainage. The finished floor elevation is set relative to the highest adjacent grade — you need at least 8" of foundation wall exposed above grade per code.`,
    keyPrinciples: [
      'Drainage: minimum 6" drop in first 10\' from the foundation (5% slope).',
      'Minimum 8" of exposed foundation above finished grade per code.',
      'Slope away from the building in all directions. Flat spots = puddles = problems.',
      '1% slope = 1/8" per foot. 2% slope = 1/4" per foot. These are your numbers.',
    ],
    commonMistakes: [
      'Grading toward the building — water pools against the foundation',
      'Not accounting for settlement — fill soil compacts 10-15% over the first year',
      'Setting the finished floor too close to grade — no room for drainage slope',
      'Ignoring the uphill side of the building — that\'s where water comes from',
    ],
    tools: [
      { tool: 'Builder\'s level or transit', note: 'For reading elevations across the site. Accurate to 1/8" over 100\'.' },
      { tool: 'Grade rod (story pole)', note: 'A tall pole with feet/inch marks for reading height from the instrument.' },
      { tool: 'Laser level', note: 'Rotating laser and detector for one-person grading. Essential for big sites.' },
    ],
    steps: [
      'Set up a transit or laser at a central point. Establish a benchmark elevation.',
      'Take grade shots at the building corners and at 10\' intervals around the perimeter.',
      'Determine finished floor elevation: at least 8" above the highest adjacent grade.',
      'Plan the drainage slope: 6" drop in the first 10\' from the building, 2% beyond that.',
      'Stake the finished grade at each point. Cut and fill to achieve the plan.',
    ],
    tips: [
      'Mark a grade stake with the target elevation AND the cut/fill amount. Saves the operator from recalculating.',
      'After rough grading, let it rain. Walk the site and see where water goes. Then adjust.',
    ],
    relatedTopics: ['batter-boards', 'squaring-foundation'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  // ═══════════════════════════════════════════════
  // REFERENCE SYSTEMS
  // ═══════════════════════════════════════════════

  {
    slug: 'story-poles',
    name: 'Story Poles',
    category: 'reference-systems',
    difficulty: 2,
    summary: 'A stick with every critical dimension marked on it — the master reference that eliminates tape measure errors across an entire project.',
    description: `A story pole (or rod) is a straight piece of wood with every critical vertical or horizontal dimension marked directly on it. For a kitchen, one pole captures counter height, upper cabinet bottom, upper cabinet top, soffit, and ceiling. For a window, the pole captures sill height, head height, trim reveals, and stool. You use the tape once — to make the pole — then everything else is transferred from the pole to the work.

The genius of story poles is that they capture the ACTUAL dimensions — the real distance from floor to ceiling, not the number on the plan. In remodel work, where nothing is plumb, level, or the dimension the plan says, the story pole is how you deal with reality.`,
    keyPrinciples: [
      'One measurement tool, one source of truth. The tape is only used to make the pole.',
      'Story poles capture actual dimensions from the real building, not the plans.',
      'Mark every critical elevation on one pole: floor to sill, sill to head, head to plate, etc.',
      'Label every mark clearly. A story pole that you can\'t read is a liability.',
    ],
    commonMistakes: [
      'Using a warped or bowed stick as a story pole — it gives false measurements',
      'Not labeling the marks — you forget what each line represents',
      'Making a story pole from the plans instead of the actual building dimensions',
      'Only making one pole when you need a height pole AND a width pole',
    ],
    tools: [
      { tool: 'Clear, straight stick', note: '1x2 or 3/4" square stock, longer than the tallest dimension. Must be straight.' },
      { tool: 'Sharp pencil or knife', note: 'Mark precisely. Use a knife for critical dimensions.' },
      { tool: 'Tape measure', note: 'Used once — to set the dimensions on the pole. Then put the tape away.' },
    ],
    steps: [
      'Select a straight, clear stick longer than the dimension you\'re capturing.',
      'Hold the pole in position (against the wall, in the opening) and mark directly from the real conditions.',
      'Label each mark: "finished floor," "counter top," "upper cab bottom," etc.',
      'Transfer marks from the pole to each workpiece. The pole IS the reference.',
      'Keep the pole for the duration of the project. You\'ll need it for trim, too.',
    ],
    tips: [
      'A story pole for a staircase captures every riser height — faster and more accurate than a calculator.',
      'For repetitive trim work, make a pole for each window/door type. One setup, infinite accuracy.',
    ],
    relatedTopics: ['transferring-measurements', 'case-construction-layout'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: [],
  },

  {
    slug: 'center-line-vs-face-layout',
    name: 'Center-Line vs. Face Layout',
    category: 'reference-systems',
    difficulty: 3,
    summary: 'Two systems for locating joinery on timbers — center-line measures from the middle, face layout measures from the surface.',
    description: `In center-line layout, you snap a chalk line down the center of the timber and measure all joint locations from that line. This works well when timbers vary in width — the joints stay centered regardless of the timber's actual dimension. It's the dominant system in modern timber framing.

In face layout (or "scribe rule"), all measurements come from the reference face — the actual surface of the timber. This means every joint is custom-fitted to its specific mating timber. More accurate for individual joints, but less forgiving if timbers get mixed up. The choice between systems depends on the frame design, the timber consistency, and the framing tradition you're working in.`,
    keyPrinciples: [
      'Center-line: joints stay centered regardless of timber width. More tolerant of size variation.',
      'Face layout: joints reference the actual surface. More precise but less interchangeable.',
      'Center-line works best with square-rule framing. Face layout is the scribe-rule method.',
      'Pick one system for the whole frame. Mixing them guarantees misaligned joints.',
    ],
    commonMistakes: [
      'Mixing center-line and face layout on the same frame — joints don\'t align',
      'Center line not actually centered — the chalk line must bisect the timber accurately',
      'Face layout from different faces on mating timbers — the joint is offset',
      'Not accounting for timber taper when using center-line layout',
    ],
    tools: [
      { tool: 'Chalk line', note: 'Snap the center line down the full length of the timber. Use blue chalk — it rubs off.' },
      { tool: 'Center-finding rule', note: 'Reads center directly. Or measure width, divide by two.' },
      { tool: 'Combination square', note: 'For face layout — set and transfer dimensions from the reference face.' },
    ],
    steps: [
      'Choose your system: center-line or face layout. Communicate this to the whole crew.',
      'For center-line: measure timber width at both ends, mark center, snap a chalk line.',
      'For face layout: identify the layout face and mark it. All measurements reference this face.',
      'Lay out all joint locations from your reference (center line or face) using a framing square.',
      'Verify critical joints by dry-fitting before cutting the full frame.',
    ],
    tips: [
      'Center-line layout is more forgiving for beginners. Face layout rewards experienced framers.',
      'On rough timbers, snap the center line on the flattest face for accuracy.',
    ],
    relatedTopics: ['timber-frame-layout-basics', 'reference-faces-edges'],
    relatedTechniques: ['marking-layout', 'hewing'],
    relatedJoints: ['mortise-tenon'],
  },

  {
    slug: 'marriage-marks',
    name: 'Marriage Marks',
    category: 'reference-systems',
    difficulty: 1,
    summary: 'The numbering system that tells every timber where it goes in the frame — cut in with a chisel, readable for centuries.',
    description: `Marriage marks are identification marks cut or stamped into each timber that tell you its position in the frame: which bent, which side, and which piece. Traditional marks use Roman numerals chiseled into the wood — chisel marks don't wear off like pencil or crayon. Bent I, post east (IE), bent II, tie beam (II-T), and so on. Every timber gets marked before the frame is disassembled.

The system must be unambiguous. Common conventions: Roman numerals for the bent number, compass direction or a letter for position (N/S/E/W or A/B), and an abbreviation for the member type (P=post, T=tie, B=brace, G=girt, R=rafter). Mark them on the layout face so they're visible during assembly. Without marriage marks, a timber raising becomes a puzzle with no picture on the box.`,
    keyPrinciples: [
      'Every timber gets a unique mark: bent number + position + member type.',
      'Chisel the marks into the wood. Pencil and crayon wear off during handling and weather.',
      'Mark on the layout face (visible during assembly) before disassembling the test fit.',
      'Use a consistent system that the whole crew understands before the raise.',
    ],
    commonMistakes: [
      'Using pencil or crayon for marks on green timber — they smear off in the rain',
      'Inconsistent marking system — the crew can\'t read each other\'s marks',
      'Marking after disassembly instead of during the test fit — you\'ve already forgotten which is which',
      'Not marking the "up" or "top" face — the timber goes in upside down during the raise',
    ],
    tools: [
      { tool: 'Wide chisel (1" or 1-1/2")', note: 'For cutting Roman numeral marks into the timber face.' },
      { tool: 'Lumber crayon (backup)', note: 'For temporary marks during layout. Not a substitute for chiseled marks.' },
      { tool: 'Race knife or timber scribe', note: 'For fine identification marks that won\'t be confused with layout lines.' },
    ],
    steps: [
      'Establish the marking convention with the whole crew: numbering, position codes, member types.',
      'During the test fit (bent assembly on the floor), mark each timber with its identifier.',
      'Mark the top face with a "T" or arrow pointing up.',
      'Chisel Roman numerals clearly: I, II, III, IV, V. Deep enough to read at arm\'s length.',
      'Record the marking system on the plans. Take photos of each marked timber.',
    ],
    tips: [
      'Roman numerals are traditional because they\'re easy to chisel: just straight lines.',
      'Mark a reference photo board with each timber\'s mark and position — post it at the raise site.',
    ],
    relatedTopics: ['timber-frame-layout-basics', 'bent-layout'],
    relatedTechniques: ['marking-layout'],
    relatedJoints: ['mortise-tenon'],
  },
]

export default layoutTopics

export const LAYOUT_CATEGORIES = {
  'fundamentals': { label: 'Layout Fundamentals', description: 'The principles that apply at every scale' },
  'furniture-scale': { label: 'Furniture & Cabinet Layout', description: 'Precise layout for fine woodworking' },
  'carpentry-layout': { label: 'Carpentry Layout', description: 'Finding measurements for walls, stairs, roofs, and trim' },
  'framing-layout': { label: 'Timber Frame Layout', description: 'From sill to ridge — laying out a timber frame' },
  'site-layout': { label: 'Site & Foundation Layout', description: 'Getting it right before the first timber goes up' },
  'reference-systems': { label: 'Reference Systems', description: 'How the old-timers kept everything square' },
}

export const LAYOUT_CATEGORY_ORDER = ['fundamentals', 'furniture-scale', 'carpentry-layout', 'framing-layout', 'site-layout', 'reference-systems']

export function getLayoutTopicBySlug(slug) { return layoutTopics.find(t => t.slug === slug) }
export function getLayoutTopicsByCategory(cat) { return layoutTopics.filter(t => t.category === cat) }
