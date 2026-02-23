// Curated technique encyclopedia — the HOW behind every joint.
// Each technique links to the joints that use it.

const techniques = [
  {
    slug: 'paring',
    name: 'Paring',
    category: 'chisel-work',
    difficulty: 2,
    summary: 'Controlled chisel cuts using hand pressure only. The precision finishing technique for every joint.',
    description: `Paring is chisel work without a mallet — you push the chisel with your hands, controlling the cut with body weight and grip. It's the finishing technique: after you've chopped or sawed the rough shape, paring brings the joint to final fit.

The key is control. Your dominant hand provides forward pressure while your guide hand steers the blade. Most of the force comes from your body leaning into the cut, not from arm strength. Long, controlled strokes that shave thin curls — never gouge.

Paring is how you sneak up on a perfect fit. Cut a little, test the joint, cut a little more. You can't add wood back, so patience here is the whole game.`,
    keyPrinciples: [
      'Sharp chisel, light cuts. If you\'re pushing hard, your chisel is dull.',
      'Bevel down for flat surfaces, bevel up for end grain.',
      'Let your body weight do the work. Lock your arms, lean forward.',
      'Reference the flat back of the chisel against the surface you\'re paring to. The back IS the reference.',
      'Never pare toward your body. Always push away or sideways.',
    ],
    commonMistakes: [
      'Too much force — gouge instead of a controlled shave',
      'Chisel not sharp enough — tears the grain instead of cutting',
      'Not using the flat back as a reference — creates a curved surface',
      'Taking too much material at once — overshoot the line',
      'Paring across the grain without scoring first — wood splits ahead of the cut',
    ],
    toolsNeeded: [
      { tool: 'Bench chisels (sharp!)', note: 'Bevel-edge chisels work best — the beveled sides let you reach into corners.' },
      { tool: 'Flat surface / reference board', note: 'For paring cheeks flat — rest the work on a known-flat surface.' },
    ],
    videos: [
      { id: 'aBodzmUGtdw', title: 'Chisel Paring Technique', channel: 'Paul Sellers' },
    ],
    usedInJoints: ['mortise-tenon', 'dovetail', 'bridle-joint', 'half-blind-dovetail', 'sliding-dovetail', 'haunched-tenon'],
    relatedTechniques: ['chopping', 'sharpening'],
  },
  {
    slug: 'chopping',
    name: 'Chopping',
    category: 'chisel-work',
    difficulty: 2,
    summary: 'Mallet-driven chisel work for removing waste. The power technique for mortises and dovetail baselines.',
    description: `Chopping is the heavy-lifting partner to paring. You strike the chisel with a mallet to drive it into the wood, removing waste material in controlled chunks. This is how you cut mortises, chop dovetail baselines, and remove the bulk material that paring then refines.

The technique is about rhythm and reading the wood. You chop to a line (never past it), working from both sides toward the middle. Each strike should remove a predictable amount of material. The mallet provides power; your chisel hand provides direction.

In timber framing, chopping is a daily activity — every mortise starts with chopping out the waste after drilling.`,
    keyPrinciples: [
      'Chop to the waste side of the line. Never ON the line — the chisel will push past it.',
      'Work from both sides toward the middle to prevent blowout.',
      'Vertical chisel, vertical mallet strike. Angled strikes send the chisel sideways.',
      'Clear chips frequently. Packed waste prevents the chisel from reaching full depth.',
      'For mortises: drill out most of the waste first, then chop to clean up the walls.',
    ],
    commonMistakes: [
      'Chopping right on the layout line — chisel compresses wood past the line',
      'Not clearing waste chips — builds pressure and splits the wood',
      'All strikes from one side — blows out the back face',
      'Using a metal hammer on chisels — mushrooms the handle. Use a wooden mallet.',
      'Trying to chop too deep in one pass — work in 1/4" increments',
    ],
    toolsNeeded: [
      { tool: 'Bench chisels or mortise chisels', note: 'Mortise chisels are heavier and designed for mallet work. Bench chisels work but may chip on heavy strikes.' },
      { tool: 'Wooden mallet', note: 'A joiner\'s mallet (flat faces) or a carver\'s mallet (round). 12-16 oz for bench work, heavier for timber framing.' },
      { tool: 'Brace and bit / drill', note: 'For hogging out mortise waste before chopping to the line.' },
    ],
    videos: [
      { id: 'q_NXq7_TILA', title: 'Chopping a Mortise by Hand', channel: 'Paul Sellers' },
    ],
    usedInJoints: ['mortise-tenon', 'dovetail', 'through-dovetail', 'housed-joint', 'bridle-joint', 'dado'],
    relatedTechniques: ['paring', 'boring', 'sharpening'],
  },
  {
    slug: 'sawing-to-a-line',
    name: 'Sawing to a Line',
    category: 'sawing',
    difficulty: 3,
    summary: 'The fundamental hand-saw skill. Every joint starts with a saw cut — the quality of that cut determines everything.',
    description: `Sawing to a line is THE skill in hand-tool joinery. If you can saw straight, square, and exactly to a line, you can cut any joint. If you can't, no amount of paring will save you.

The technique: start the cut with short pull strokes at the far edge of the board, establishing the kerf. Then lengthen your strokes, using the full length of the saw. Your arm should swing like a pendulum — the saw does the cutting, you just guide it.

You should be able to split a pencil line with a handsaw. When you can split a KNIFE line, you're there.`,
    keyPrinciples: [
      'Let the saw do the work. If you\'re pushing hard, something is wrong.',
      'Start the cut with your thumb against the blade as a guide, using short pull strokes.',
      'Watch TWO lines simultaneously — the face line AND the edge line. Drift happens when you only watch one.',
      'Saw on the waste side of the line. Leave the line on your workpiece.',
      'Your body position matters — stand so your forearm swings in line with the cut.',
    ],
    commonMistakes: [
      'Pushing too hard — the saw wanders. Light grip, long strokes.',
      'Only watching the face line — you drift on the edge and don\'t notice until it\'s too late',
      'Starting in the middle of the board — start at the far edge and work toward you',
      'Dull saw — a sharp saw tracks straight; a dull saw wanders',
      'Wrong saw for the job — rip teeth for cutting with the grain, crosscut for across',
    ],
    toolsNeeded: [
      { tool: 'Dovetail saw', note: 'Fine-tooth (15+ TPI), rip-filed. For dovetails and fine joinery.' },
      { tool: 'Tenon saw', note: 'Medium-tooth (12-14 TPI), crosscut or rip. For tenon cheeks and shoulders.' },
      { tool: 'Marking knife', note: 'A knife line gives the saw a track to follow. Pencil lines are too wide for precision.' },
      { tool: 'Bench hook', note: 'Holds the work steady while sawing. Essential for controlled cuts.' },
    ],
    videos: [
      { id: '3DJOzceQlWo', title: 'How to Saw Straight by Hand', channel: 'Paul Sellers' },
    ],
    usedInJoints: ['dovetail', 'through-dovetail', 'half-blind-dovetail', 'mortise-tenon', 'bridle-joint', 'box-joint', 'lap-joint', 'miter', 'scarf-joint'],
    relatedTechniques: ['marking-layout', 'sharpening'],
  },
  {
    slug: 'marking-layout',
    name: 'Marking & Layout',
    category: 'layout',
    difficulty: 2,
    summary: 'Transferring dimensions to wood with precision. The difference between a 1mm gap and a 0mm gap starts here.',
    description: `Layout is where joints are won or lost. A perfectly cut joint starts with a perfectly marked joint. Every millimeter of error in your layout becomes a millimeter of gap in your finished joint.

The core principle: mark from a reference face, never from a measurement. Use a marking gauge to transfer the actual thickness of the mating piece, not a number from a ruler. Use a knife, not a pencil — a knife line is 0.1mm wide, a pencil line is 0.5mm.

In timber framing, layout is done with a framing square and chalk line on large timbers. The principles are the same, just at a bigger scale.`,
    keyPrinciples: [
      'Pick a face side and face edge. Mark them. ALWAYS reference from these two surfaces.',
      'Transfer dimensions from the actual workpiece, not from a ruler.',
      'Knife lines > pencil lines. A marking gauge > a ruler and pencil.',
      'Measure once, mark twice. Check your layout before cutting.',
      'Square from the face edge. If the edge isn\'t square, nothing downstream will be.',
    ],
    commonMistakes: [
      'Measuring instead of transferring — set your marking gauge from the actual piece',
      'Switching reference faces — all marks must come from the same face side and face edge',
      'Using a pencil for joinery layout — too thick, too imprecise',
      'Not verifying square — check your square is actually square (5-12-13 triangle)',
      'Marking too lightly — a faint knife line is worse than none; it\'s invisible when you need it',
    ],
    toolsNeeded: [
      { tool: 'Marking gauge', note: 'Wheel-cutting type preferred. Set it from the actual workpiece, not a ruler.' },
      { tool: 'Marking knife', note: 'Spear point or striking knife. Creates a wall for the saw to track against.' },
      { tool: 'Combination square', note: 'Must be accurate. Test it: mark a line, flip the square, mark again. Lines should overlap.' },
      { tool: 'Bevel gauge', note: 'For dovetail angles and any non-90° layout.' },
      { tool: 'Dividers', note: 'For spacing dovetail pins evenly. Step off the distance — no measuring needed.' },
    ],
    videos: [
      { id: 'A3LShz5cPoA', title: 'Layout Essentials for Joinery', channel: 'Rob Cosman' },
    ],
    usedInJoints: ['dovetail', 'mortise-tenon', 'through-dovetail', 'half-blind-dovetail', 'mitered-dovetail', 'box-joint', 'keyed-scarf', 'tusk-tenon'],
    relatedTechniques: ['sawing-to-a-line', 'paring'],
  },
  {
    slug: 'sharpening',
    name: 'Sharpening',
    category: 'foundational',
    difficulty: 2,
    summary: 'The meta-skill. Sharp tools cut clean; dull tools tear, wander, and fight you. Sharpen before every session.',
    description: `Sharpening isn't a separate skill — it's the prerequisite for everything. A sharp chisel pares a whisper-thin shaving. A dull chisel tears the grain and requires force. A sharp saw tracks straight. A dull saw wanders.

The system matters less than the consistency. Japanese water stones, diamond plates, sandpaper on glass — they all work if you use them correctly and regularly. Most woodworkers sharpen too rarely and too hastily.

The test: your chisel should shave arm hair. If it doesn't, it's not sharp enough for joinery. That sounds extreme until you feel the difference a truly sharp edge makes.`,
    keyPrinciples: [
      'Flatten the back first. A chisel\'s back IS the reference surface. If it\'s not flat, nothing works.',
      'Consistent angle matters more than specific angle. 25° primary, 30° micro-bevel is standard.',
      'Strop between sharpenings. A few strokes on a leather strop with compound keeps the edge going.',
      'Sharpen BEFORE you need to. If you notice the tool is dull, you\'ve been fighting it for the last 10 cuts.',
      'The burr tells you when to stop. Raise a burr on the back, remove it, done.',
    ],
    commonMistakes: [
      'Not flattening the back — creates a double bevel that makes paring impossible',
      'Rocking the chisel during sharpening — rounds the bevel, creates an inconsistent edge',
      'Skipping grits — going from 1000 straight to polishing. Use 1000 → 4000 → 8000 or 1000 → 6000.',
      'Sharpening too rarely — resharpening a very dull tool takes 10 minutes. Maintaining a keen edge takes 30 seconds.',
      'Pressing too hard — let the stone do the work. Heavy pressure creates heat and dish the stone.',
    ],
    toolsNeeded: [
      { tool: 'Sharpening stones (1000 / 6000 grit)', note: 'Shapton, Naniwa, or King water stones. Or DMT diamond plates for zero-maintenance.' },
      { tool: 'Honing guide', note: 'Veritas Mk.II is the gold standard. Consistent angle every time.' },
      { tool: 'Leather strop + green compound', note: 'For maintaining between full sharpenings. A few strokes restores the edge.' },
      { tool: 'Flattening plate', note: 'For keeping water stones flat. A dished stone creates a convex bevel.' },
    ],
    videos: [
      { id: 'MYMHD_e6aUE', title: 'Sharpening a Chisel Perfectly', channel: 'Paul Sellers' },
    ],
    usedInJoints: ['mortise-tenon', 'dovetail', 'through-dovetail', 'half-blind-dovetail', 'paring', 'chopping'],
    relatedTechniques: ['paring', 'chopping', 'sawing-to-a-line'],
  },
  {
    slug: 'boring',
    name: 'Boring & Drilling',
    category: 'timber-frame',
    difficulty: 2,
    summary: 'Removing waste with a drill before chisel work. In timber framing, every mortise starts with a bored hole.',
    description: `Boring is the fast way to remove waste material from a mortise. Instead of chopping out an entire mortise with a chisel (which takes forever in hardwood), you drill overlapping holes to hog out the bulk, then clean up the walls with chisels.

In timber framing, boring is done with a heavy-duty auger bit in a brace, or a big drill press/boring machine. The brace and bit gives you feel — you know when the bit grabs, when it hits a knot, when you're through. Power drills are faster but offer less feedback.

For drawboring, the peg hole alignment is critical. The offset between the mortise hole and the tenon hole (1/16" to 3/32") is what pulls the joint tight.`,
    keyPrinciples: [
      'Bore straight. Use a sight line or guide block to keep the bit perpendicular.',
      'Clear chips frequently on deep holes. Back the bit out every inch to eject waste.',
      'For mortises: bore a series of overlapping holes, then clean up with a chisel.',
      'Bore from both sides on through-mortises to prevent blowout.',
      'Mark your depth with tape on the bit. Going too deep weakens the timber.',
    ],
    commonMistakes: [
      'Not boring straight — a crooked hole means a crooked peg or a mortise wall you can\'t clean up',
      'Blowout on the exit side — bore from both sides to prevent this',
      'Wrong bit size for the mortise — leave 1/8" for chisel cleanup on each wall',
      'Drawbore offset too large — splits the tenon or breaks the peg',
    ],
    toolsNeeded: [
      { tool: 'Brace and bits', note: 'A quality brace (Millers Falls, Stanley 923) with sharp auger bits. The traditional timber framing tool.' },
      { tool: 'Auger bits (various sizes)', note: 'Irwin or Jennings pattern. Keep them sharp — file the spurs and cutting lips.' },
      { tool: 'Drill guide / boring jig', note: 'For ensuring perpendicular holes. Critical for drawboring.' },
    ],
    videos: [
      { id: 'R6eywTsNJzs', title: 'Using a Brace and Bit', channel: 'Wood By Wright' },
    ],
    usedInJoints: ['mortise-tenon', 'timber-frame-peg', 'dowel-joint', 'housed-joint', 'tusk-tenon'],
    relatedTechniques: ['chopping', 'paring'],
  },
  {
    slug: 'drawboring',
    name: 'Drawboring',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'Offsetting peg holes to mechanically pull a joint tight. The timber framer\'s secret to joints that never loosen.',
    description: `Drawboring is what makes timber frame joints stay tight for centuries. Here's the trick: you bore the peg hole through the mortise and tenon separately. The hole in the tenon is offset slightly toward the shoulder (1/16" to 3/32"). When you drive a tapered hardwood peg through both holes, the offset forces the tenon to pull tight against the mortise.

It's a mechanical clamp that never releases. No glue needed. The wood and the geometry do all the work.

The technique requires drilling the mortise hole first, assembling the joint dry, marking the tenon hole through the mortise hole, then disassembling and re-drilling the tenon hole with the offset. A drawbore pin (a metal test pin) lets you verify the joint pulls tight before committing a wooden peg.`,
    keyPrinciples: [
      '1/16" offset for softwood, up to 3/32" for hardwood. More than that risks splitting.',
      'The offset goes TOWARD the shoulder — pulling the joint closed.',
      'Taper the first inch of the peg. It needs to find the offset hole and bend into it.',
      'Use drawbore pins to test before driving the real peg.',
      'Rive your pegs — never saw them. Riven pegs follow the grain and are stronger.',
    ],
    commonMistakes: [
      'Offset too large — splits the tenon cheek or breaks the peg',
      'Offset in the wrong direction — pushes the joint open instead of closed',
      'Peg not tapered — jams at the offset instead of bending through it',
      'Using sawn pegs — grain runout causes breakage. Rive from straight stock.',
      'Not testing with a drawbore pin first — committed peg in a bad hole is very hard to fix',
    ],
    toolsNeeded: [
      { tool: 'Brace and auger bit', note: 'Sized to your peg diameter. 1" bit for 1" pegs.' },
      { tool: 'Drawbore pins (metal)', note: 'Tapered steel pins for test-fitting. Buy a set or make from mild steel rod.' },
      { tool: 'Froe and mallet', note: 'For riving pegs from straight-grained oak or locust billets.' },
      { tool: 'Peg shaving jig or lathe', note: 'For rounding riven pegs to consistent diameter.' },
    ],
    videos: [
      { id: 'YCZ-qRcV6jE', title: 'Drawboring Explained', channel: 'Wood By Wright' },
    ],
    usedInJoints: ['timber-frame-peg', 'mortise-tenon', 'wedged-through-tenon'],
    relatedTechniques: ['boring', 'peg-riving'],
  },
  {
    slug: 'peg-riving',
    name: 'Peg Riving',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'Splitting wood along the grain to make pegs. Riven pegs are stronger than sawn because the grain is continuous.',
    description: `Riving is splitting wood along the grain rather than sawing it. A riven peg follows the natural grain of the tree, which means there's no grain runout — the fibers run the full length of the peg. This makes riven pegs dramatically stronger than sawn pegs, where the saw inevitably cuts across grain fibers.

The traditional method: start with a straight-grained oak or locust billet, split it with a froe into rough blanks, then shave the blanks round on a shaving horse with a drawknife. The result is a peg that's stronger than the timber it's driven into.

This is one of the most satisfying processes in timber framing. You start with a log and end with a finished structural fastener using nothing but hand tools.`,
    keyPrinciples: [
      'Start with the straightest-grained stock you can find. Spiral grain won\'t rive clean.',
      'Split in halves: billet → halves → quarters → eighths → peg blanks.',
      'Always split through the center. Off-center splits follow the thicker piece.',
      'White oak and black locust are the traditional peg woods. Both are hard, rot-resistant, and rive well.',
      'Dry the pegs before use. Green pegs shrink and can loosen in the joint.',
    ],
    commonMistakes: [
      'Selecting wood with spiral or interlocked grain — won\'t split clean',
      'Not splitting through the center — one piece gets all the grain, the other gets nothing',
      'Using green (wet) pegs in dry timber — pegs shrink and loosen',
      'Pegs too round — a slightly octagonal peg (from drawknife work) is fine and actually grips better',
    ],
    toolsNeeded: [
      { tool: 'Froe', note: 'The splitting tool. A blade driven with a mallet that levers the wood apart.' },
      { tool: 'Froe mallet (club)', note: 'Heavy, short-handled mallet for driving the froe.' },
      { tool: 'Shaving horse', note: 'A foot-operated clamping bench for drawknife work.' },
      { tool: 'Drawknife', note: 'For shaping rough blanks into round pegs.' },
    ],
    usedInJoints: ['timber-frame-peg', 'mortise-tenon', 'wedged-through-tenon', 'tusk-tenon'],
    relatedTechniques: ['drawboring', 'boring'],
  },
  {
    slug: 'planing',
    name: 'Hand Planing',
    category: 'foundational',
    difficulty: 3,
    summary: 'Flattening, smoothing, and dimensioning wood with a hand plane. The foundation of accurate joinery.',
    description: `A hand plane does three things: flattens surfaces, smooths them, and brings boards to precise dimensions. Before you can lay out a joint, the wood must have a flat face and a square edge. The plane is how you get there.

The three planes you need: a jack plane (#5) for rough flattening and removing twist, a jointer (#7 or #8) for creating dead-flat edges and faces, and a smoothing plane (#4) for final surface finish. That's it. Everything else is optional.

Planing is also how you fit joints. A shaving off a tenon cheek, a pass on a shoulder, a whisper off an edge — these are the final adjustments that take a joint from "close" to "perfect."`,
    keyPrinciples: [
      'Read the grain before planing. Plane WITH the grain (downhill). Against the grain tears out.',
      'Skew the plane for a slicing cut on difficult grain. Diagonal strokes cut cleaner.',
      'Check for flat constantly. Winding sticks for twist, straight edge for concavity.',
      'Set a light cut for finish work. You should see continuous, translucent shavings.',
      'Sharpen the iron frequently. A dull plane is a paperweight.',
    ],
    commonMistakes: [
      'Planing against the grain — tearout. Flip the board or skew the plane.',
      'Too heavy a cut — creates ridges and burns calories. Light cuts are faster overall.',
      'Not checking for flat — you can plane a perfect curve if you don\'t check.',
      'Ignoring the sole — a plane with a convex sole can\'t create a flat surface. Check and lap it.',
    ],
    toolsNeeded: [
      { tool: 'Jack plane (#5)', note: 'For rough dimensioning and removing twist. Slightly cambered blade.' },
      { tool: 'Jointer plane (#7)', note: 'For creating dead-flat surfaces and edges. Long sole bridges over hollows.' },
      { tool: 'Smoothing plane (#4)', note: 'For final surface finish. Tight mouth, light cut, zero tearout.' },
      { tool: 'Block plane', note: 'For end grain, chamfers, and one-handed work.' },
      { tool: 'Router plane', note: 'For flattening the bottom of dadoes, grooves, and housings to consistent depth.' },
    ],
    videos: [
      { id: 'YvkzZ86_D70', title: 'How to Use a Hand Plane', channel: 'Paul Sellers' },
    ],
    usedInJoints: ['mortise-tenon', 'miter', 'tongue-groove', 'rabbet', 'butt-joint'],
    relatedTechniques: ['sharpening', 'marking-layout'],
  },
  {
    slug: 'hewing',
    name: 'Hewing',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'Shaping timber with an axe or adze. Converting round logs to square timbers — the oldest woodworking skill.',
    description: `Hewing is the process of shaping a round log into a square (or rectangular) timber using a broad axe or adze. It's the oldest form of woodworking — every timber frame in history started with hewing before sawmills existed.

The process: snap a chalk line on the log, score vertical cuts to the line with a felling axe (juggling), then split off the waste with a broad axe, working along the grain. The broad axe has a flat side that rides against the timber, creating a reasonably flat surface. An adze refines the surface further.

Modern timber framers rarely need to hew (we have sawmills), but understanding the technique connects you to the tradition and is essential for restoration work on historic frames.`,
    keyPrinciples: [
      'Score to the line first. Don\'t try to hew to a line in one pass.',
      'The flat side of the broad axe faces the timber. This is non-negotiable.',
      'Work downhill (with the grain). Reading grain direction saves enormous effort.',
      'Stance matters — stand beside the log, axe swinging parallel to your body.',
      'The adze is for refinement. The broad axe does the heavy work.',
    ],
    commonMistakes: [
      'Broad axe backwards — the flat side MUST face the timber surface',
      'Not scoring deep enough — waste pieces don\'t break off cleanly',
      'Working against the grain — the axe dives into the log instead of splitting along the surface',
      'Standing in the wrong position — dangerous. Your feet should never be in the swing path.',
    ],
    toolsNeeded: [
      { tool: 'Broad axe', note: 'A single-bevel axe with a flat side. This is the primary hewing tool.' },
      { tool: 'Felling axe', note: 'For scoring (juggling) cuts perpendicular to the log.' },
      { tool: 'Adze', note: 'For refining the hewn surface. Gutter adze for concave surfaces.' },
      { tool: 'Chalk line', note: 'For snapping reference lines on the log.' },
    ],
    usedInJoints: [],
    relatedTechniques: ['boring', 'peg-riving'],
  },
  {
    slug: 'chisel-selection',
    name: 'Choosing the Right Chisel',
    category: 'chisel-work',
    difficulty: 1,
    summary: 'Different chisels for different jobs. Using the wrong chisel is like using a screwdriver as a hammer.',
    description: `Not all chisels are the same, and using the wrong one makes the work harder. Here's the breakdown:

**Bench chisels** — your everyday chisel. Light, bevel-edged, versatile. Use for paring, light chopping, fitting joints, and general work. The bevel edges let you reach into dovetail corners.

**Mortise chisels** — heavy, thick, built for mallet abuse. The extra mass behind the edge lets you lever waste out of deep mortises without flexing. Don't use a bench chisel for mortise work — it'll flex and chip.

**Firmer chisels** — the middle ground. Thicker than bench chisels but lighter than mortise chisels. Good all-around choice if you can only buy one set.

**Timber framing chisels** — oversized (1.5" to 3") versions of the above, plus the slick — a giant chisel used with two-handed pressure, no mallet.`,
    keyPrinciples: [
      'Bench chisels for paring and light chopping. Mortise chisels for mortise work.',
      'The slick is pushed, never struck. Two hands, body weight, shaving cuts.',
      'Width matters: use a chisel narrower than the mortise to avoid widening it.',
      'Bevel-edge chisels reach into acute angles. Square-edge chisels are stronger for heavy work.',
      'Buy fewer, better chisels. Four sizes (1/4", 1/2", 3/4", 1") cover 90% of work.',
    ],
    commonMistakes: [
      'Using bench chisels for heavy mortise work — they flex and can chip',
      'Using a mortise chisel for paring — too heavy, too thick, no feel',
      'Buying a huge set — you only need 4-5 sizes. Quality > quantity.',
      'Not matching chisel width to the joint — too wide distorts the mortise walls',
    ],
    toolsNeeded: [
      { tool: 'Bench chisel set (1/4", 1/2", 3/4", 1")', note: 'Narex for budget, Ashley Iles or Lie-Nielsen for premium.' },
      { tool: 'Mortise chisel (3/8" or 1/2")', note: 'One or two sizes cover most mortise work.' },
      { tool: 'Timber framing chisel (1.5" or 2")', note: 'For large-scale work. Barr or Two Cherries.' },
      { tool: 'Slick (2" to 3")', note: 'The signature timber framing tool. Used with hand pressure only.' },
    ],
    usedInJoints: ['mortise-tenon', 'dovetail', 'bridle-joint', 'dado', 'housed-joint'],
    relatedTechniques: ['paring', 'chopping', 'sharpening'],
  },
]

export default techniques

export const TECHNIQUE_CATEGORIES = {
  'foundational': { label: 'Foundational', description: 'Skills that underpin everything else' },
  'chisel-work': { label: 'Chisel Work', description: 'The core hand-tool skills' },
  'sawing': { label: 'Sawing', description: 'Cutting to a line' },
  'layout': { label: 'Layout', description: 'Measuring, marking, transferring' },
  'timber-frame': { label: 'Timber Frame', description: 'Skills specific to timber framing' },
}

export const TECHNIQUE_CATEGORY_ORDER = ['foundational', 'chisel-work', 'sawing', 'layout', 'timber-frame']

export function getTechniqueBySlug(slug) {
  return techniques.find(t => t.slug === slug)
}
