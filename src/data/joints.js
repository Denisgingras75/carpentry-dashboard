// Curated joint encyclopedia — practical knowledge, not Wikipedia.
// Difficulty: 1-5 (1 = first week, 5 = years of practice)
// Gap tolerance: what a good joint looks like for that type
// Videos: YouTube video IDs with titles and channel names

const joints = [
  {
    slug: 'mortise-tenon',
    name: 'Mortise & Tenon',
    category: 'timber-frame',
    difficulty: 3,
    videos: [
      { id: 'qS8Yz_95jgo', title: 'Perfect Mortise & Tenon Joints', channel: 'Paul Sellers' },
      { id: 'FN3d0fOBPgk', title: 'Mortise & Tenon Joint - The Basics', channel: 'Jonathan Katz-Moses' },
    ],
    summary: 'The backbone of timber framing. A tenon (tongue) fits into a mortise (pocket). When it\'s right, you feel it seat.',
    description: `The most important joint in woodworking and the bread and butter of timber framing. The tenon should slide into the mortise with firm hand pressure — not hammered, not sloppy. A well-cut M&T is the difference between a frame that stands for centuries and one that racks in a decade.

In timber framing, the mortise is typically cut with a chisel after drilling out the waste. The tenon is cut with a saw. The fit matters more than the method — some framers prefer to cut slightly tight and pare to fit. Others aim for dead-on from the saw.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Mortise walls not square — causes the tenon to bind on one side',
      'Tenon shoulders not flush — gap between pieces visible',
      'Mortise too deep or too shallow — tenon bottoms out or doesn\'t seat',
      'Not checking for twist — joint looks good flat but rocks in assembly',
      'Rushing the layout — a 1mm marking error becomes a 1mm gap',
    ],
    tips: [
      'Mark from the same face every time. Pick a reference face and never switch.',
      'Cut the mortise first, then fit the tenon to it. Easier to remove material from the tenon.',
      'Test fit often. Sneak up on the fit — you can\'t add wood back.',
      'In timber framing, drawbore the peg hole slightly offset to pull the joint tight.',
    ],
    bestWoods: ['White Oak', 'Douglas Fir', 'Eastern White Pine', 'Hemlock'],
    relatedJoints: ['bridle-joint', 'timber-frame-peg', 'housed-joint'],
    applications: ['Timber frames', 'Door frames', 'Table legs', 'Bed frames', 'Post and beam'],
    timberFrameNotes: 'The standard connection for posts to beams, beams to plates, and braces to frames. In traditional timber framing, the M&T is secured with a hardwood peg (typically white oak or locust) driven through a drawbored hole.',
  },
  {
    slug: 'dovetail',
    name: 'Dovetail',
    category: 'advanced',
    difficulty: 4,
    videos: [
      { id: 'OCYjoj6cfAo', title: 'Dovetails - A Beginner\'s Guide', channel: 'Rob Cosman' },
      { id: 'xxOERlGrqss', title: 'Hand Cut Dovetails - How To', channel: 'Matt Estlea' },
    ],
    summary: 'Interlocking wedge-shaped pins and tails. Mechanically locks against pull-apart forces. The joint that separates hobbyists from craftsmen.',
    description: `The dovetail is woodworking's signature joint — visible, beautiful, and structurally sound. The angled pins and tails create a mechanical interlock that resists being pulled apart. There's no cheating a dovetail; the quality of the cut is right there for everyone to see.

Hand-cut dovetails are cut tails-first or pins-first (a religious debate). What matters is consistency: every pin the same angle, every tail the same spacing, and shoulders that close tight.`,
    gapTolerance: { ideal: 0.2, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Inconsistent pin angles — pins should all match (typically 1:6 for softwood, 1:8 for hardwood)',
      'Sawing past the baseline — leaves visible marks on the finished joint',
      'Not knifing the baseline deep enough — wood tears instead of breaking clean',
      'Chopping waste too aggressively — splitting wood behind the baseline',
      'Half-pins too thin — they break during assembly',
    ],
    tips: [
      'Sharpen your saw and chisel before every session. Dull tools make bad dovetails.',
      'Use a marking gauge set from the thickness of the mating board. Don\'t measure — transfer.',
      'Cut to the waste side of the line. Always leave the line.',
      'For your first 20 dovetails, use poplar. It\'s soft, forgiving, and cheap.',
    ],
    bestWoods: ['Cherry', 'Walnut', 'White Oak', 'Maple', 'Poplar'],
    relatedJoints: ['box-joint', 'finger-joint'],
    applications: ['Drawer boxes', 'Blanket chests', 'Jewelry boxes', 'Case work', 'Decorative boxes'],
    timberFrameNotes: 'Sliding dovetails are used in timber framing for joining joists to summer beams. The dovetail shape prevents the joist from pulling away under load.',
  },
  {
    slug: 'box-joint',
    name: 'Box Joint',
    category: 'intermediate',
    difficulty: 2,
    videos: [
      { id: 'X3jNb0zITXU', title: 'Making Perfect Box Joints', channel: 'Jonathan Katz-Moses' },
    ],
    summary: 'Interlocking fingers of equal width. Strong, simple, looks great. The dovetail\'s easier cousin.',
    description: `Box joints (or finger joints) are the straightforward version of the dovetail. Instead of angled pins and tails, you cut straight-sided fingers that interlock. They don't resist pull-apart like dovetails, but they have massive glue surface area and look clean.

Usually cut with a jig on the table saw or router table, but cutting them by hand is great practice for saw control.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Fingers not equal width — usually a jig setup problem',
      'Too tight — joint won\'t close, or splits the wood when forced',
      'Too loose — gaps visible between fingers, weak glue joint',
      'Not alternating correctly — fingers should mesh, not stack',
    ],
    tips: [
      'Make a test joint in scrap before committing to your workpiece.',
      'Slightly tight is better than slightly loose — you can always sand.',
      'For hand-cut: use a chisel the exact width of your fingers.',
    ],
    bestWoods: ['Cherry', 'Maple', 'Walnut', 'Birch'],
    relatedJoints: ['dovetail', 'finger-joint'],
    applications: ['Boxes', 'Drawers', 'Small cabinets', 'Shop jigs'],
    timberFrameNotes: null,
  },
  {
    slug: 'bridle-joint',
    name: 'Bridle Joint',
    category: 'timber-frame',
    difficulty: 2,
    videos: [
      { id: '5bgg6DBBNTs', title: 'The Bridle Joint', channel: 'Paul Sellers' },
    ],
    summary: 'An open mortise and tenon — the slot goes all the way through. Fast to cut, surprisingly strong.',
    description: `Think of it as a mortise and tenon where the mortise is open on one end. The tenon slides in from the end grain. It's faster to cut than a closed mortise because you can saw the cheeks from the end, and it has nearly the same strength.

Used extensively in timber framing for knee braces and in furniture for frame corners.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Slot walls not parallel — tenon binds or has a sloppy fit',
      'Tenon too thin — wobbles in the slot',
      'Not cutting deep enough — tenon bottoms out before shoulders close',
    ],
    tips: [
      'Cut the open mortise (slot) first. Fit the tenon to it.',
      'Use a wide chisel to pare the slot walls flat.',
      'Great beginner joint — easier than a closed M&T but teaches the same skills.',
    ],
    bestWoods: ['White Oak', 'Douglas Fir', 'Ash', 'Maple'],
    relatedJoints: ['mortise-tenon', 'lap-joint'],
    applications: ['Knee braces', 'Frame corners', 'Gate frames', 'Trestle tables'],
    timberFrameNotes: 'Common for knee brace connections where the brace meets a post or beam at an angle. The open slot allows the brace to slide in during frame raising.',
  },
  {
    slug: 'lap-joint',
    name: 'Lap Joint',
    category: 'basic',
    difficulty: 1,
    videos: [
      { id: 'fkOgSb5BTxE', title: 'Half Lap Joint - Woodworking Basics', channel: 'Jonathan Katz-Moses' },
    ],
    summary: 'Remove half the thickness from each piece so they overlap flush. Simple, strong, great for learning.',
    description: `The lap joint is where most people start. Cut away half the thickness of each piece at the joint, and they nest together flush. Half-laps, cross-laps, and T-laps are all variations.

Don't underestimate it — a well-fitted lap joint with good glue surface is surprisingly strong. In timber framing, half-laps are used for plate connections and floor framing.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 2.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Cutting past half — joint won\'t sit flush',
      'Rough shoulder — visible gap at the seam line',
      'Not checking for flat — pieces should sit without rocking',
    ],
    tips: [
      'Use a depth stop on your saw or chisel. Going past half is the #1 mistake.',
      'Mark both pieces from the same reference face.',
      'Cross-laps are great practice for chisel work — lots of flat paring.',
    ],
    bestWoods: ['Eastern White Pine', 'Poplar', 'Douglas Fir', 'Cedar'],
    relatedJoints: ['bridle-joint', 'scarf-joint'],
    applications: ['Frames', 'Grid structures', 'Workbenches', 'Sawhorses', 'Plate connections'],
    timberFrameNotes: 'Half-lap joints are used for connecting plates at corners and for T-connections in floor framing. Simple but effective when pegged.',
  },
  {
    slug: 'tongue-groove',
    name: 'Tongue & Groove',
    category: 'intermediate',
    difficulty: 2,
    summary: 'One piece has a protruding tongue, the other has a matching groove. Aligns boards edge-to-edge.',
    description: `The tongue and groove keeps boards aligned and prevents cupping or separation. One board has a tongue milled on its edge; the mating board has a groove. When assembled, the surface is flush and the boards are locked in plane.

Usually cut with a router or table saw. Hand-cutting is possible but tedious for long boards.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Tongue too thick for groove — boards won\'t close',
      'Tongue too thin — wobbles in the groove, defeats the purpose',
      'Groove not centered — face surfaces won\'t be flush',
    ],
    tips: [
      'Cut the groove first (it\'s harder to adjust), then fit the tongue to it.',
      'Leave 1mm of depth clearance in the groove so the tongue doesn\'t bottom out.',
    ],
    bestWoods: ['Eastern White Pine', 'Cedar', 'Douglas Fir', 'Poplar'],
    relatedJoints: ['dado', 'rabbet', 'spline-joint'],
    applications: ['Flooring', 'Paneling', 'Cabinet backs', 'Tabletops'],
    timberFrameNotes: 'Used for infill panels between timber frame members and for tongue-and-groove flooring over timber frame floor systems.',
  },
  {
    slug: 'scarf-joint',
    name: 'Scarf Joint',
    category: 'timber-frame',
    difficulty: 4,
    videos: [
      { id: 'JXFGf9iXxao', title: 'Traditional Scarf Joints for Timber Framing', channel: 'Blackburn Tools' },
    ],
    summary: 'Joins two timbers end-to-end to make a longer one. The geometry transfers load across the splice.',
    description: `When your timber isn't long enough, you scarf it. Two pieces are cut at complementary angles (or steps) so they interlock and transfer the load across the splice. A good scarf is nearly as strong as solid timber.

There are many scarf variations: plain scarf, halved scarf, bladed scarf, and the traditional timber frame stop-splayed scarf with keys. Each trades complexity for strength.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Mating surfaces not flat — load transfer depends on full contact',
      'Angles not matching — leaves a gap under load',
      'Scarf too short — the longer the scarf, the stronger the joint',
      'Not accounting for wood movement — the joint opens up seasonally',
    ],
    tips: [
      'A scarf should be at least 3x the timber depth in length.',
      'Test fit dry before any pegs or bolts. The surfaces need to mate perfectly.',
      'In timber framing, scarfs are always over a post — never in free span.',
    ],
    bestWoods: ['White Oak', 'Douglas Fir', 'Hemlock', 'Eastern White Pine'],
    relatedJoints: ['lap-joint', 'finger-joint'],
    applications: ['Extending timbers', 'Plate connections', 'Sill beams', 'Repair work'],
    timberFrameNotes: 'Critical for connecting plates that span longer than available timber. The stop-splayed scarf with hardwood keys is the traditional choice. Always locate over a post for bearing support.',
  },
  {
    slug: 'dado',
    name: 'Dado',
    category: 'basic',
    difficulty: 1,
    summary: 'A flat-bottomed channel cut across the grain. Shelves sit in dados.',
    description: `A dado is a rectangular groove cut across the grain. The mating piece drops in, supported on three sides. It's the standard joint for shelving — strong, self-aligning, and simple.

Cut with a router, table saw with dado stack, or by hand with a saw and chisel. Stopped dados (where the groove doesn't go all the way across) look cleaner from the front.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Dado too wide — shelf wobbles or has visible gaps',
      'Dado not square to the edge — shelf sits crooked',
      'Too deep — weakens the case side (1/3 of thickness max)',
    ],
    tips: [
      'Use the actual shelf stock to set your dado width. Nominal sizes lie.',
      'A hand router (not electric) is the traditional tool and gives great control.',
    ],
    bestWoods: ['Maple', 'Cherry', 'Birch', 'Poplar'],
    relatedJoints: ['rabbet', 'tongue-groove', 'housed-joint'],
    applications: ['Bookshelves', 'Cabinet cases', 'Dividers'],
    timberFrameNotes: null,
  },
  {
    slug: 'rabbet',
    name: 'Rabbet',
    category: 'basic',
    difficulty: 1,
    summary: 'An L-shaped notch cut along the edge. Used for back panels and simple box construction.',
    description: `A rabbet is a step cut along the edge or end of a board. It creates an L-shaped recess where another piece sits. Simple, fast, and effective for case backs, drawer bottoms, and anywhere you need to recess a panel.

The rabbet is one of the first joints any woodworker learns, and one they never stop using.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Rabbet depth inconsistent — panel won\'t sit flush',
      'Tearout on cross-grain cuts — score the line with a knife first',
    ],
    tips: [
      'A rabbet plane (or shoulder plane) is the hand tool of choice.',
      'For cabinet backs: rabbet depth = panel thickness. The back sits flush.',
    ],
    bestWoods: ['Eastern White Pine', 'Poplar', 'Cedar', 'Cherry'],
    relatedJoints: ['dado', 'tongue-groove'],
    applications: ['Cabinet backs', 'Drawer bottoms', 'Window frames', 'Picture frames'],
    timberFrameNotes: null,
  },
  {
    slug: 'miter',
    name: 'Miter',
    category: 'basic',
    difficulty: 2,
    summary: 'Two pieces cut at matching angles (usually 45°) to form a corner. Hides end grain.',
    description: `The miter hides the end grain of both pieces behind angled cuts. Looks clean, professional, and is used everywhere from picture frames to crown molding. The challenge is accuracy — a miter that's off by even half a degree shows a visible gap.

By itself, a miter is weak (end grain to end grain). It's usually reinforced with splines, biscuits, or nails.`,
    gapTolerance: { ideal: 0.2, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Not exactly 45° — the gap opens on one side',
      'Not accounting for the material thickness in length calculations',
      'Trusting the miter saw\'s scale — always test with scrap first',
    ],
    tips: [
      'A shooting board with a miter fence is the secret weapon for hand-tool miters.',
      'Dry fit every miter before glue. No surprises at assembly.',
      'For strength, add a spline across the miter — transforms a weak joint into a strong one.',
    ],
    bestWoods: ['Cherry', 'Walnut', 'Maple', 'White Oak'],
    relatedJoints: ['spline-joint', 'butt-joint'],
    applications: ['Picture frames', 'Trim work', 'Box corners', 'Crown molding'],
    timberFrameNotes: null,
  },
  {
    slug: 'butt-joint',
    name: 'Butt Joint',
    category: 'basic',
    difficulty: 1,
    summary: 'Two pieces butted together. The simplest joint — and the weakest. Every woodworker starts here.',
    description: `Two pieces of wood butted together and fastened. No shaping, no interlocking — just wood meeting wood. It's the weakest joint because you're often gluing end grain to face grain, which doesn't hold well.

That said, with screws, dowels, or biscuits to reinforce it, a butt joint is perfectly functional for plenty of applications. Don't be a snob about it.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'End not square — joint has a visible gap',
      'Relying on glue alone — end grain glue joints are weak',
    ],
    tips: [
      'Always reinforce with fasteners, dowels, or biscuits.',
      'A hand plane on the end grain gives a better surface than a saw.',
    ],
    bestWoods: ['Eastern White Pine', 'Poplar', 'Cedar'],
    relatedJoints: ['miter', 'dowel-joint', 'biscuit-joint'],
    applications: ['Construction framing', 'Simple shelving', 'Rough work'],
    timberFrameNotes: null,
  },
  {
    slug: 'biscuit-joint',
    name: 'Biscuit Joint',
    category: 'basic',
    difficulty: 1,
    summary: 'A compressed wood wafer in matching slots. Quick alignment for panels and miters.',
    description: `Biscuit joiners cut a small crescent-shaped slot in each piece. A compressed beech biscuit is inserted with glue — it swells and locks the pieces together. Great for alignment, okay for strength.

The biscuit joiner is one of the most forgiving power tools. It's hard to make a bad biscuit joint, which is exactly the point.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Slot too close to the edge — the biscuit shows through',
      'Not enough biscuits — use more than you think you need for long joints',
    ],
    tips: [
      'Size 20 biscuits for most work. Size 10 for narrow stock.',
      'The biscuit joint is about alignment, not strength. The glue surface is what holds.',
    ],
    bestWoods: ['Any — biscuits work in all species'],
    relatedJoints: ['dowel-joint', 'butt-joint', 'spline-joint'],
    applications: ['Panel glue-ups', 'Miter reinforcement', 'Face frames', 'Tabletops'],
    timberFrameNotes: null,
  },
  {
    slug: 'dowel-joint',
    name: 'Dowel Joint',
    category: 'basic',
    difficulty: 2,
    summary: 'Round pegs in round holes. Aligns and strengthens a butt joint. The IKEA method, done properly.',
    description: `Drill matching holes in two pieces, insert glued dowels, clamp. It's a reinforced butt joint with decent strength and good alignment. The challenge is getting the holes to line up — dowel centers or a jig are essential.

Commercial furniture uses dowels everywhere because they're fast and reliable with CNC drilling. By hand, they require patience and precision.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Holes not aligned — pieces won\'t assemble or sit crooked',
      'Holes too deep or too shallow — dowel bottoms out or sticks proud',
      'Using smooth dowels — fluted dowels grip better and let air/glue escape',
    ],
    tips: [
      'Use a doweling jig. Freehand drilling never works.',
      'Fluted dowels, not smooth. The flutes channel glue and let air escape.',
      'Chamfer the dowel ends so they start easily.',
    ],
    bestWoods: ['Any hardwood', 'Cherry', 'Maple', 'Walnut'],
    relatedJoints: ['biscuit-joint', 'butt-joint', 'mortise-tenon'],
    applications: ['Furniture joints', 'Panel alignment', 'Edge-to-edge joints', 'Frame construction'],
    timberFrameNotes: null,
  },
  {
    slug: 'spline-joint',
    name: 'Spline Joint',
    category: 'intermediate',
    difficulty: 2,
    summary: 'A thin strip of wood in matching grooves. Reinforces miters and edge joints.',
    description: `A spline is a thin piece of wood (or plywood) that sits in grooves cut in both mating surfaces. It adds alignment, glue surface, and mechanical strength. Most commonly used to reinforce miter joints, where it transforms a weak joint into a strong one.

Splines can be hidden (inside the joint) or visible (decorative, often in contrasting wood).`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 0.8 },
    gapUnit: 'mm',
    commonMistakes: [
      'Spline too loose in the groove — doesn\'t add strength',
      'Spline grain running the wrong direction — should cross the joint line',
      'Groove too deep — weakens the workpiece',
    ],
    tips: [
      'Orient the spline grain perpendicular to the joint line for strength.',
      'Contrasting wood splines in miters look incredible — walnut in maple, cherry in oak.',
      'Plywood splines are stable and consistent if aesthetics don\'t matter.',
    ],
    bestWoods: ['Walnut', 'Cherry', 'Maple', 'Contrasting species for decoration'],
    relatedJoints: ['miter', 'biscuit-joint', 'tongue-groove'],
    applications: ['Miter reinforcement', 'Edge joints', 'Decorative accents', 'Box corners'],
    timberFrameNotes: null,
  },
  {
    slug: 'finger-joint',
    name: 'Finger Joint',
    category: 'intermediate',
    difficulty: 3,
    summary: 'Long, thin interlocking fingers for end-to-end joining. Massive glue surface.',
    description: `Like a box joint but oriented for end-to-end joining. Long, thin fingers mesh together creating enormous glue surface area. Used commercially to join short boards into longer ones (look at trim molding — it's full of finger joints).

Hand-cutting finger joints is an exercise in precision — each finger must be identical.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Fingers not uniform — some tight, some loose',
      'Not enough fingers — more is stronger',
    ],
    tips: [
      'A dedicated finger joint bit on the router table makes this joint trivial.',
      'For hand-cutting: make a template and trace every finger from it.',
    ],
    bestWoods: ['Poplar', 'Eastern White Pine', 'Maple'],
    relatedJoints: ['box-joint', 'scarf-joint'],
    applications: ['Trim and molding', 'Extending boards', 'Laminations'],
    timberFrameNotes: null,
  },
  {
    slug: 'housed-joint',
    name: 'Housed Joint',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'One timber sits in a shallow pocket cut in another. Distributes load across the bearing surface.',
    description: `A housed joint is a shallow recess (housing) cut into a timber to receive the end of another timber. The housing distributes the load across a wider area than a simple bearing joint. Common in timber framing for joist-to-beam connections.

The depth is typically 1/2" to 1" — enough to prevent lateral movement but not enough to weaken the supporting timber.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 2.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Housing too deep — weakens the beam',
      'Housing bottom not flat — joist rocks',
      'Not accounting for shrinkage — housing gets loose as wood dries',
    ],
    tips: [
      'Pare the housing bottom flat with a wide chisel. Check with a straight edge.',
      'In green timber framing, cut the housing slightly tight — it\'ll shrink.',
    ],
    bestWoods: ['White Oak', 'Douglas Fir', 'Hemlock', 'Eastern White Pine'],
    relatedJoints: ['dado', 'mortise-tenon'],
    applications: ['Joist-to-beam connections', 'Stair treads', 'Shelf supports'],
    timberFrameNotes: 'The standard joist-to-beam connection in timber framing. Often combined with a small tenon for lateral resistance. The housing prevents the joist from rolling under load.',
  },
  {
    slug: 'timber-frame-peg',
    name: 'Timber Frame Peg',
    category: 'timber-frame',
    difficulty: 3,
    videos: [
      { id: 'YCZ-qRcV6jE', title: 'Drawboring Explained', channel: 'Wood By Wright' },
    ],
    summary: 'The hardwood peg that locks a timber frame joint. Drawboring pulls everything tight.',
    description: `Not just a fastener — the wooden peg is what holds a timber frame together. Traditionally riven (split) from straight-grained white oak or black locust, the peg is driven through a drawbored hole that pulls the tenon tight into the mortise.

Drawboring means the peg hole in the tenon is offset slightly toward the shoulder — when the tapered peg is driven through, it pulls the tenon home. This is what gives timber frames their legendary tightness.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Peg not tapered — should start slightly pointed for easy entry',
      'Drawbore offset too much — splits the tenon or breaks the peg',
      'Using sawn pegs instead of riven — sawn pegs break along grain runout',
      'Peg too tight — splits the timber. Too loose — doesn\'t draw the joint',
      'Driving with a steel hammer — use a wooden mallet to avoid mushrooming the end',
    ],
    tips: [
      'Rive your pegs from straight-grained white oak or locust. Never saw them.',
      '1/16" to 3/32" drawbore offset is typical. Less for softwood, more for hardwood.',
      'Taper the first inch of the peg. Round the corners. It should start easy.',
      'Drive until the sound changes — it goes from hollow to solid when the peg seats.',
    ],
    bestWoods: ['White Oak', 'Black Locust'],
    relatedJoints: ['mortise-tenon', 'bridle-joint'],
    applications: ['Timber frame assembly', 'Securing mortise and tenon joints'],
    timberFrameNotes: 'The quintessential timber frame fastener. Pegs should be a harder wood than the frame (oak pegs in pine frames). Standard sizes: 1" for major connections, 3/4" for braces. Always drawbore for maximum tightness.',
  },
  {
    slug: 'sliding-dovetail',
    name: 'Sliding Dovetail',
    category: 'timber-frame',
    difficulty: 4,
    summary: 'A dovetail-shaped tenon slides into a matching tapered groove. Locks mechanically against pull-out.',
    description: `The sliding dovetail is a hybrid — part dado, part dovetail. One piece has a dovetail-shaped tongue that slides into a matching tapered groove in the other. Once assembled, the joint can't pull apart perpendicular to the slide direction.

In timber framing, sliding dovetails connect joists to summer beams. The dovetail shape means the joist can't lift out of the beam even without pegs. In furniture, they're used for shelves, table stretchers, and anywhere you need a self-locking joint.

The challenge is fitting the taper precisely — too tight and it jams halfway in, too loose and it wobbles. Cut the socket first, then sneak up on the dovetail.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Socket walls not consistent angle — dovetail binds or has gaps',
      'Dovetail too tight — jams partway in and you can\'t get it out without damage',
      'Not tapering slightly toward the back — full-length contact causes too much friction on long joints',
      'Cutting the dovetail first — cut the socket first, then fit the dovetail to it',
    ],
    tips: [
      'For long sliding dovetails, taper the socket slightly (tighter at the front, looser at the back). The joint slides easy and locks tight.',
      'Test the fit with a short scrap dovetail before committing.',
      'Wax the mating surfaces for easier assembly — especially in hardwoods.',
      'A router plane is invaluable for getting the socket depth consistent.',
    ],
    bestWoods: ['White Oak', 'Cherry', 'Maple', 'Douglas Fir'],
    relatedJoints: ['dovetail', 'dado', 'housed-joint'],
    applications: ['Joist-to-beam connections', 'Shelf support', 'Table stretchers', 'Drawer dividers'],
    timberFrameNotes: 'The traditional connection for joists to carrying beams (summer beams) in timber framing. The dovetail prevents uplift under live loads. Often used in combination with a housing for bearing support.',
  },
  {
    slug: 'half-blind-dovetail',
    name: 'Half-Blind Dovetail',
    category: 'advanced',
    difficulty: 4,
    summary: 'Dovetails visible from one side only. The classic drawer front joint.',
    description: `A half-blind dovetail is a dovetail that doesn't go all the way through one of the pieces. From the front, you see solid wood. From the side, you see the dovetail. This is THE joint for drawer fronts — the mechanical strength of a dovetail without showing end grain on the front face.

Harder to cut than through dovetails because you're working in a blind socket. The chisel work requires more precision since you can't see both sides while fitting.`,
    gapTolerance: { ideal: 0.2, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Socket not cleaned out fully — dovetail won\'t seat all the way',
      'Leaving the socket too shallow — exposes the dovetail end on the face',
      'Pins too tight — splits the socket wall when driven home',
      'Not marking the socket depth accurately — socket walls end up uneven',
    ],
    tips: [
      'Master through dovetails first. Half-blinds build on those skills.',
      'Use a chisel exactly the width of your socket to clean the corners.',
      'Leave 3/16" to 1/4" of face material on the pin board.',
      'A bevel-edge chisel makes cleaning the blind corners much easier.',
    ],
    bestWoods: ['Cherry', 'Walnut', 'Maple', 'White Oak'],
    relatedJoints: ['dovetail', 'box-joint'],
    applications: ['Drawer fronts', 'Jewelry boxes', 'High-end casework'],
    timberFrameNotes: null,
  },
  {
    slug: 'through-dovetail',
    name: 'Through Dovetail',
    category: 'advanced',
    difficulty: 4,
    summary: 'Dovetails visible from both sides. The purest expression of the joint — nowhere to hide.',
    description: `The through dovetail (or "full dovetail") goes all the way through both pieces, showing the interlocking pins and tails from both sides. It's the most honest joint in woodworking — every flaw is visible, every fit is on display.

This is the dovetail that gets photographed, shared, and judged. It's the joint woodworkers practice obsessively because cutting a tight through dovetail in hardwood is a genuine skill milestone.`,
    gapTolerance: { ideal: 0.2, good: 0.5, acceptable: 0.8 },
    gapUnit: 'mm',
    commonMistakes: [
      'Sawing past the baseline — the most visible mistake possible',
      'Inconsistent spacing — pins should be evenly spaced or intentionally graduated',
      'Tails too thin — fragile and prone to breaking during assembly',
      'Not knifing the baseline deep enough — wood tears instead of cutting clean',
    ],
    tips: [
      'Layout is everything. Take twice as long on layout and half as long cutting.',
      'For hand-cut: cut tails first in softwood, pins first in hardwood. Or just pick one method and own it.',
      'A fret saw or coping saw for removing waste between pins saves enormous chisel time.',
      'Your first 50 through dovetails will be mediocre. That\'s normal. Joint #51 is when it clicks.',
    ],
    bestWoods: ['Walnut', 'Cherry', 'Poplar', 'White Oak'],
    relatedJoints: ['half-blind-dovetail', 'dovetail', 'box-joint'],
    applications: ['Blanket chests', 'Tool chests', 'Boxes', 'Case pieces', 'Decorative joinery'],
    timberFrameNotes: null,
  },
  {
    slug: 'wedged-through-tenon',
    name: 'Wedged Through Tenon',
    category: 'timber-frame',
    difficulty: 4,
    summary: 'A through tenon locked with wedges that spread the end. Mechanically unbreakable. Visually striking.',
    description: `The tenon passes all the way through the mortise and protrudes on the other side. Wedges are driven into saw kerfs in the tenon end, spreading it wider than the mortise so it can never pull back through. The result is a joint that's both structurally permanent and visually dramatic — the protruding tenon end with contrasting wedges is a design feature.

This is the joint you see on Arts & Crafts furniture, Shaker tables, and Japanese timber frames. It announces that the builder cares about both structure and beauty.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Saw kerfs for wedges too close to the edge — tenon splits instead of spreading',
      'Wedges too thick — splits the tenon before it spreads properly',
      'Mortise not slightly flared on the exit side — wedges can\'t spread the tenon',
      'Not leaving enough tenon protruding — need at least 1/4" for wedges',
    ],
    tips: [
      'Flare the mortise slightly on the exit side (fox wedging uses the same principle but blind).',
      'Use contrasting wood for the wedges — walnut wedges in an oak tenon look incredible.',
      'Cut two saw kerfs per tenon, spaced 1/3 from each edge.',
      'Apply glue to the wedges, not the tenon. You want the wedges permanent, but the tenon needs to slide in dry first.',
    ],
    bestWoods: ['White Oak', 'Cherry', 'Walnut', 'Maple'],
    relatedJoints: ['mortise-tenon', 'tusk-tenon', 'timber-frame-peg'],
    applications: ['Trestle tables', 'Workbenches', 'Timber frames', 'Arts & Crafts furniture', 'Japanese joinery'],
    timberFrameNotes: 'Common in Japanese timber framing (where the through tenon is a celebrated design element) and in Western frames for trestle and workbench construction. The wedges replace or supplement drawbored pegs.',
  },
  {
    slug: 'tusk-tenon',
    name: 'Tusk Tenon',
    category: 'timber-frame',
    difficulty: 4,
    summary: 'A through tenon locked with a removable wedge (tusk). Knockdown furniture before IKEA existed.',
    description: `The tusk tenon is a through tenon with a tapered hole on the protruding end. A wedge-shaped "tusk" is driven through the hole, locking the joint tight. The genius: pull the tusk out and the joint disassembles cleanly. It's knockdown joinery from the medieval era.

Used for trestle tables, bed frames, and any structure that needs to come apart for moving. Gustav Stickley used tusk tenons as a signature element of Craftsman furniture.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Tusk hole too close to the shoulder — tenon breaks under tension',
      'Tusk angle too steep — the tusk loosens over time',
      'Not tapering the tusk correctly — should tighten progressively as driven',
      'Tenon not long enough — need room for the mortise thickness plus the tusk hole plus an inch',
    ],
    tips: [
      'The tusk hole should start at least 1/4" past the outside of the mortise.',
      'Angle the tusk hole slightly (not perpendicular to the tenon) so the tusk pulls the shoulder tight.',
      'Make the tusk from a harder, contrasting wood. It\'s both functional and beautiful.',
      'Chamfer all exposed edges of the tenon and tusk — it signals intentional craftsmanship.',
    ],
    bestWoods: ['White Oak', 'Walnut', 'Cherry', 'Ash'],
    relatedJoints: ['wedged-through-tenon', 'mortise-tenon'],
    applications: ['Trestle tables', 'Bed frames', 'Knockdown furniture', 'Craftsman furniture', 'Medieval furniture'],
    timberFrameNotes: 'Used in timber framing for temporary or knockdown structures, and as a celebrated design element in exposed frames. The tusk is traditionally tapered from a hardwood like oak or walnut.',
  },
  {
    slug: 'birds-mouth',
    name: 'Bird\'s Mouth',
    category: 'timber-frame',
    difficulty: 2,
    summary: 'A V-shaped notch in a rafter that sits over a wall plate. Every roof starts here.',
    description: `The bird's mouth (or birdsmouth) is a notch cut in a rafter where it meets the top plate of a wall. The notch has two cuts: a "seat cut" (horizontal, sits on the plate) and a "plumb cut" (vertical, tight against the plate). Together they create a stable bearing surface that resists both gravity and lateral forces.

Every rafter in conventional framing has a bird's mouth. In timber framing, the equivalent joint is often a housed mortise and tenon, but the bird's mouth is still used for simpler roof systems.`,
    gapTolerance: { ideal: 1.0, good: 2.0, acceptable: 3.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Seat cut not level — rafter doesn\'t bear evenly on the plate',
      'Cutting too deep — weakens the rafter (never more than 1/3 of rafter depth)',
      'Plumb cut not plumb — gap between rafter and plate edge',
      'Not accounting for roof pitch when marking the cuts',
    ],
    tips: [
      'Use a speed square to mark the plumb and seat cuts based on your roof pitch.',
      'Cut one rafter perfectly, then use it as a pattern for the rest.',
      'The seat cut should bear on the full width of the plate. No overhang.',
      'Maximum depth: 1/3 of the rafter depth. Deeper weakens the rafter.',
    ],
    bestWoods: ['Douglas Fir', 'Eastern White Pine', 'Hemlock', 'Cedar'],
    relatedJoints: ['housed-joint', 'lap-joint'],
    applications: ['Rafter-to-plate connections', 'Roof framing', 'Pergolas', 'Porch roofs'],
    timberFrameNotes: 'In traditional timber framing, the bird\'s mouth is replaced by a mortise and tenon or a housed joint at the rafter-to-plate connection. But for hybrid frames and simpler roof systems, the bird\'s mouth is still the fastest, most reliable option.',
  },
  {
    slug: 'keyed-scarf',
    name: 'Keyed Scarf',
    category: 'timber-frame',
    difficulty: 5,
    summary: 'A scarf joint locked with hardwood keys. The master-level timber frame splice.',
    description: `The keyed scarf (also called stop-splayed scarf with keys) is the most sophisticated timber frame splice joint. Two timbers are cut with complementary angled faces, steps, and pockets for hardwood keys. When assembled with the keys driven home, the joint transfers compression, tension, and shear loads across the splice.

This is the joint that separates apprentice timber framers from journeymen. The geometry is complex — every surface must mate precisely, and the keys must pull the joint tight without splitting the timber. It takes planning, patience, and sharp tools.`,
    gapTolerance: { ideal: 0.5, good: 1.0, acceptable: 1.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Mating surfaces not coplanar — load transfer is compromised',
      'Key pockets not aligned — keys bind or don\'t pull the joint tight',
      'Not enough bearing surface on the step — the scarf moves under load',
      'Keys too tight — splits the timber. Keys too loose — joint racks',
      'Cutting the splay angle wrong — the geometry cascades errors',
    ],
    tips: [
      'Full-size layout on plywood before touching the timber. This joint does not forgive sloppy layout.',
      'Cut the step surfaces first — they\'re the bearing and alignment reference for everything else.',
      'Keys should be hardwood (oak or locust) and slightly tapered.',
      'Always locate a scarf joint over a post or bearing point. Never in free span.',
    ],
    bestWoods: ['White Oak', 'Douglas Fir', 'Hemlock'],
    relatedJoints: ['scarf-joint', 'mortise-tenon', 'timber-frame-peg'],
    applications: ['Plate splices', 'Sill beam extensions', 'Timber frame repair', 'Long-span structures'],
    timberFrameNotes: 'The gold standard for plate and sill splices in traditional timber framing. The stop-splayed form with opposing keys resists all load conditions. This joint is often the "journeyman test" in timber framing guilds — cutting a perfect keyed scarf proves you understand the craft at a fundamental level.',
  },
  {
    slug: 'haunched-tenon',
    name: 'Haunched Tenon',
    category: 'intermediate',
    difficulty: 3,
    summary: 'A tenon with a stepped shoulder that fills a groove. Prevents racking in frame-and-panel.',
    description: `The haunched tenon has a small step (the haunch) at the top of the tenon that fills the groove in the stile of a frame-and-panel assembly. Without the haunch, the groove would be visible at the end of the stile.

It's the standard joint for frame-and-panel doors, where the stiles have a groove to hold the panel. The haunch fills the groove end while the tenon provides the structural connection.`,
    gapTolerance: { ideal: 0.3, good: 0.5, acceptable: 1.0 },
    gapUnit: 'mm',
    commonMistakes: [
      'Haunch too deep — weakens the stile end',
      'Haunch doesn\'t fill the groove cleanly — visible gap at the end',
      'Tenon shoulders not flush — the frame doesn\'t close flat',
    ],
    tips: [
      'The haunch depth should match the groove depth. Simple as that.',
      'Cut the tenon and haunch from a single shoulder — cleaner than cutting separately.',
      'This joint is essential for any frame-and-panel work. Master it before building doors.',
    ],
    bestWoods: ['Cherry', 'White Oak', 'Maple', 'Walnut'],
    relatedJoints: ['mortise-tenon', 'bridle-joint'],
    applications: ['Frame-and-panel doors', 'Cabinet doors', 'Lid frames', 'Wainscoting'],
    timberFrameNotes: null,
  },
  {
    slug: 'mitered-dovetail',
    name: 'Mitered Dovetail',
    category: 'advanced',
    difficulty: 5,
    summary: 'A dovetail hidden behind mitered faces. The invisible join — maximum skill, zero visibility.',
    description: `The mitered dovetail (or full-blind mitered dovetail) combines the strength of a dovetail with the clean appearance of a miter. From the outside, you see two mitered surfaces meeting at 45°. Inside, hidden dovetails hold everything together.

This is one of the most difficult joints in hand woodworking. You're cutting dovetails that you can barely see into material that you can barely access. It requires supreme chisel control and meticulous layout. Furniture makers who can cut clean mitered dovetails are operating at the highest level.`,
    gapTolerance: { ideal: 0.2, good: 0.3, acceptable: 0.5 },
    gapUnit: 'mm',
    commonMistakes: [
      'Miter face not perfectly 45° — shows a gap line on the outside',
      'Internal dovetails misaligned — joint won\'t close',
      'Removing too much material from the miter face — dovetail shows through',
      'Rushing layout — this joint demands absolute precision',
    ],
    tips: [
      'Build up to this: through dovetails → half-blind → mitered. Don\'t jump ahead.',
      'Use a shooting board to get the miters dead-on before cutting any joinery.',
      'Practice in poplar first. Many times.',
      'This joint exists to prove mastery. If you can cut it cleanly in hardwood, you can cut anything.',
    ],
    bestWoods: ['Cherry', 'Walnut', 'Maple'],
    relatedJoints: ['dovetail', 'half-blind-dovetail', 'miter'],
    applications: ['High-end boxes', 'Jewelry boxes', 'Display cases', 'Prestige furniture'],
    timberFrameNotes: null,
  },
]

export default joints

export const JOINT_CATEGORIES = {
  'timber-frame': { label: 'Timber Frame', description: 'The connections that hold frames together' },
  'advanced': { label: 'Advanced', description: 'Joints that take real skill to cut well' },
  'intermediate': { label: 'Intermediate', description: 'Building on the basics' },
  'basic': { label: 'Basic', description: 'Where every woodworker starts' },
}

export const CATEGORY_ORDER = ['timber-frame', 'advanced', 'intermediate', 'basic']

export function getJointBySlug(slug) {
  return joints.find(j => j.slug === slug)
}

export function getJointsByCategory(category) {
  return joints.filter(j => j.category === category)
}
