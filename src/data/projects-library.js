// 100 curated project plans — from joinery practice to timber frames.
// Each project links to joints, techniques, and wood species.

const projects = [
  // ─────────────────────────────────────────────
  // JOINERY PRACTICE (12 projects)
  // ─────────────────────────────────────────────
  {
    slug: 'mortise-tenon-practice',
    name: 'Mortise & Tenon Practice Joint',
    category: 'joinery-practice',
    difficulty: 2,
    summary: 'Learn the foundation of all wood joinery by cutting a clean mortise and tenon in scrap stock.',
    description: `The mortise and tenon is the joint that holds the world together. Timber frames, doors, tables, chairs — nearly every piece of serious woodwork relies on some version of this joint. Before you build anything ambitious, you need to be able to cut one cleanly and consistently.

This practice piece uses a single board ripped into two parts. You'll lay out and chop a through mortise, then saw and pare a tenon to fit. The goal isn't speed — it's a piston fit with no gaps at the shoulders. Work slowly, check often, and learn to read the grain as you chop.

Once you can cut this joint with confidence, you're ready for real furniture work. Save your practice pieces and date them. You'll be amazed at how much you improve in just a few weeks of steady practice.`,
    estimatedTime: '2-3 hours',
    skills: ['marking-layout', 'chopping', 'paring', 'sawing-to-a-line', 'sharpening'],
    joints: ['mortise-tenon'],
    woods: ['poplar', 'eastern-white-pine', 'douglas-fir'],
    materials: [
      '1 board, 3/4" x 4" x 18" (softwood or poplar)',
      'Wood glue (for final assembly test)'
    ],
    tools: [
      'Mortise chisel (1/4" or 3/8")',
      'Bench chisels',
      'Crosscut saw or backsaw',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Workbench with vise'
    ],
    steps: [
      'Mill your stock flat and square. Rip the board into two pieces — one for the mortise, one for the tenon.',
      'Set your marking gauge to the chisel width and scribe the mortise walls on both faces of the mortise piece.',
      'Mark the mortise length with a knife and square. Stay at least 1" from the end to avoid blowout.',
      'Chop the mortise from the center outward, working halfway from each face. Clear waste frequently.',
      'Pare the walls clean and check for square with a small try square.',
      'Mark the tenon shoulders with a knife line all around the tenon piece. Set the gauge to match the mortise.',
      'Saw the tenon cheeks down to the shoulder line, staying on the waste side.',
      'Saw the shoulders cleanly — this is the visible line, so accuracy matters most here.',
      'Test-fit the joint. Pare the cheeks if needed for a snug sliding fit.',
      'When satisfied, glue and clamp. Check for square under clamp pressure.'
    ],
    tips: [
      'Sharpen your mortise chisel before you start — dull tools make ragged walls.',
      'Always knife your layout lines. Pencil lines are too thick for joinery.',
      'If the tenon is too tight, pare a whisker off the cheeks. Never force it with a mallet.'
    ],
    relatedProjects: ['bridle-joint-practice', 'through-dovetail-practice', 'farmhouse-table']
  },
  {
    slug: 'dovetail-practice',
    name: 'Through Dovetail Practice Joint',
    category: 'joinery-practice',
    difficulty: 3,
    summary: 'Cut your first set of through dovetails by hand — the benchmark joint for any hand-tool woodworker.',
    description: `Dovetails are the joint everyone wants to learn, and for good reason. A well-cut dovetail is strong, beautiful, and proof that you can handle a saw and chisel. But nobody cuts perfect dovetails on the first try. This practice piece is about building the muscle memory.

You'll work with two short boards and cut a simple three-tail joint. Tails first or pins first — pick a method and stick with it for now. The key is accurate sawing to a line and clean paring of the waste. Every cut teaches you something about grain direction and tool control.

Don't chase perfection on your first attempt. Cut ten of these over a few weeks. By the fifth one, you'll start to feel the rhythm. By the tenth, you'll wonder why you ever thought they were hard.`,
    estimatedTime: '3-4 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'sharpening'],
    joints: ['through-dovetail'],
    woods: ['poplar', 'eastern-white-pine', 'cherry'],
    materials: [
      '2 boards, 1/2" x 4" x 6" (soft hardwood ideal)',
      'Scrap backer board to prevent blowout'
    ],
    tools: [
      'Dovetail saw',
      'Bench chisels (1/4", 1/2", 3/4")',
      'Coping saw or fret saw',
      'Dovetail marker or sliding bevel',
      'Marking gauge',
      'Marking knife',
      'Mallet',
      'Workbench with vise'
    ],
    steps: [
      'Mill both boards flat, square, and to identical width. Mark face sides and ends.',
      'Set your marking gauge to the board thickness and scribe the baseline on both pieces, all faces.',
      'Lay out the tails on the end grain — three tails with even spacing works well for practice.',
      'Saw the tail cuts down to the baseline. Keep the saw kerf on the waste side of the line.',
      'Remove the bulk of the waste between tails with a coping saw, staying 1/16" from the baseline.',
      'Chop to the baseline from both faces. Pare the walls flat and square.',
      'Transfer the tails to the pin board using a marking knife. Accuracy here is everything.',
      'Saw the pin cuts and remove waste the same way. Pare clean.',
      'Test-fit the joint. It should go together with hand pressure or light mallet taps.',
      'If gaps appear, note what went wrong. Adjust your technique on the next attempt.'
    ],
    tips: [
      'Use a bright light behind the joint when transferring — shadows show exactly where to mark.',
      'Let the saw do the cutting. A death grip on the handle causes wandering cuts.',
      'Practice on poplar before moving to hardwoods. It pares cleanly and forgives small errors.',
      'Mark your waste areas with X\'s so you never saw on the wrong side of a line.'
    ],
    relatedProjects: ['half-blind-dovetail-practice', 'dovetail-box', 'keepsake-box']
  },
  {
    slug: 'box-joint-practice',
    name: 'Box Joint Practice Joint',
    category: 'joinery-practice',
    difficulty: 2,
    summary: 'Cut interlocking box joints (finger joints) by hand — a strong, decorative corner joint for boxes and drawers.',
    description: `Box joints are the dovetail's workmanlike cousin. They don't have the flashy angles, but they're just as strong and a lot easier to cut consistently. The equal-width fingers interlock perfectly when done right, and the glue surface is enormous.

This practice focuses on hand-cut box joints using a backsaw and chisel. You'll work with two short boards and cut matching fingers that mesh together. The key is consistent spacing — once you nail the layout, the cutting is straightforward repetition.

Box joints look fantastic in contrasting woods. Once you've got the technique down, you'll reach for this joint every time you build a box, drawer, or small cabinet. It's honest joinery that does its job without pretense.`,
    estimatedTime: '2-3 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout'],
    joints: ['box-joint'],
    woods: ['poplar', 'cherry', 'hard-maple'],
    materials: [
      '2 boards, 1/2" x 4" x 6"',
      'Scrap backer board'
    ],
    tools: [
      'Backsaw or dovetail saw',
      'Bench chisels (matching finger width)',
      'Combination square',
      'Marking gauge',
      'Marking knife',
      'Mallet',
      'Workbench with vise'
    ],
    steps: [
      'Mill both boards to identical thickness and width. Square the ends precisely.',
      'Set your marking gauge to the board thickness and scribe baselines on all faces of both pieces.',
      'Decide on finger width (1/4" to 3/8" works well). Lay out the fingers evenly across the end grain.',
      'Mark the mating piece so the fingers offset — where one board has a finger, the other has a gap.',
      'Saw all the cuts down to the baseline on both pieces. Stay on the waste side.',
      'Chop out the waste between fingers. Work from both faces to prevent blowout.',
      'Pare the walls clean and check for flatness. The fingers should be consistent in thickness.',
      'Test-fit. The joint should slide together with firm hand pressure.'
    ],
    tips: [
      'Use a spacer block the width of your fingers to speed up layout and keep spacing consistent.',
      'Contrasting woods like walnut and maple make box joints a real showpiece.',
      'A thin shim of veneer can tighten a slightly loose finger if needed.'
    ],
    relatedProjects: ['dovetail-practice', 'pencil-box', 'keepsake-box']
  },
  {
    slug: 'lap-joint-practice',
    name: 'Lap Joint Practice Joint',
    category: 'joinery-practice',
    difficulty: 1,
    summary: 'Master the half-lap joint — one of the simplest and most useful joints in all of woodworking.',
    description: `The half-lap is where most woodworkers should start. It's simple, strong, and teaches the fundamental skills of sawing to a line and chopping to a depth. If you can cut a clean half-lap, you understand the basics of every joint that follows.

You'll cut matching laps in two pieces so they cross flush. The secret is accurate depth — both laps must be exactly half the stock thickness. Use a marking gauge set once and applied to both pieces. Then it's just careful sawing and clean chisel work.

This joint shows up everywhere: workbenches, sawhorses, frames, and simple furniture. It's not glamorous, but a tight half-lap is a satisfying thing. Start here, build confidence, then move on to mortise and tenon work.`,
    estimatedTime: '1-2 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout'],
    joints: ['lap-joint'],
    woods: ['eastern-white-pine', 'poplar', 'douglas-fir'],
    materials: [
      '2 boards, 3/4" x 3" x 12"',
      'Wood glue'
    ],
    tools: [
      'Backsaw or crosscut saw',
      'Bench chisels (3/4" and 1")',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Router plane (optional, for cleaning up)'
    ],
    steps: [
      'Mill both pieces flat and to identical thickness. Mark face sides.',
      'Set your marking gauge to exactly half the stock thickness.',
      'Mark the width of the lap on each piece — it should match the width of the mating board.',
      'Scribe the depth line with the marking gauge on both edges and the end of each piece.',
      'Saw the shoulder lines down to the depth gauge line. Make a few extra relief cuts in the waste.',
      'Chop out the waste with a wide chisel, working from both edges toward the center.',
      'Clean the bottom of the lap flat. A router plane is ideal here, but careful chisel work does the job.',
      'Test-fit. The pieces should cross flush on both faces with no rocking.'
    ],
    tips: [
      'Set the marking gauge once and use it on both pieces — this guarantees a flush joint.',
      'Relief cuts in the waste area make chopping much faster and cleaner.',
      'A router plane is worth its weight in gold for lap joints and dadoes.'
    ],
    relatedProjects: ['bridle-joint-practice', 'sawhorses', 'bench-hook']
  },
  {
    slug: 'bridle-joint-practice',
    name: 'Bridle Joint Practice Joint',
    category: 'joinery-practice',
    difficulty: 2,
    summary: 'Cut an open mortise and tenon (bridle joint) — a visible joint that teaches precision sawing on both pieces.',
    description: `The bridle joint is an open mortise and tenon — the slot is cut all the way through one piece, and the tenon slides in from the end. It's a beautiful joint when done well because both parts of the joint are visible. There's nowhere to hide sloppy work.

This practice piece teaches you to saw two parallel cheeks accurately. The mortise piece gets two cheek cuts with waste removed between them. The tenon piece gets the same two cheek cuts but waste is removed from the outside. If your sawing is consistent, the joint will fit perfectly.

Bridle joints are commonly used in frame construction, light table bases, and Arts and Crafts furniture. Once you're comfortable with the bridle, you'll find it's faster to cut than a traditional mortise and tenon for many applications.`,
    estimatedTime: '2-3 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'sharpening'],
    joints: ['bridle-joint'],
    woods: ['poplar', 'cherry', 'ash'],
    materials: [
      '2 boards, 3/4" x 2-1/2" x 8"',
      'Wood glue'
    ],
    tools: [
      'Backsaw or tenon saw',
      'Bench chisels (1/4", 1/2")',
      'Coping saw',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Workbench with vise'
    ],
    steps: [
      'Mill both pieces flat and square. Mark face sides and face edges.',
      'Set a marking gauge to 1/3 of the stock thickness. Scribe both cheek lines on all faces of both pieces.',
      'On the mortise piece, mark the depth of the slot (equal to the width of the mating piece).',
      'Saw the two cheek cuts on the mortise piece down to the depth line. Remove waste with a coping saw.',
      'Pare the inside walls of the mortise flat and square.',
      'On the tenon piece, saw the two cheek cuts. Remove the outer waste.',
      'Pare the tenon cheeks flat. Check thickness against the mortise width.',
      'Test-fit. The tenon should slide into the mortise with a firm push — no gaps, no forcing.'
    ],
    tips: [
      'Dividing stock into exact thirds is tricky. Use a wheel marking gauge if you have one, or set dividers.',
      'Saw on the waste side and pare to the line — you can always remove more, never add back.',
      'Clamp a scrap block behind the mortise piece to prevent blowout when chopping.'
    ],
    relatedProjects: ['mortise-tenon-practice', 'lap-joint-practice', 'basic-stool']
  },
  {
    slug: 'through-dovetail-practice',
    name: 'Through Dovetail Corner Practice',
    category: 'joinery-practice',
    difficulty: 3,
    summary: 'Build a complete four-corner dovetailed frame to practice consistent, repeatable dovetail joints.',
    description: `Cutting one set of dovetails is a start. Cutting four matching corners that all fit together into a frame — that's where real skill lives. This practice project takes you beyond the single joint and into the discipline of batch work.

You'll cut four boards to identical length and width, then dovetail all four corners. The challenge is consistency — every corner must match, every baseline must be accurate, and every tail must be the same angle. You'll develop a rhythm: mark, saw, chop, transfer, repeat.

This is the practice piece that separates casual hobbyists from committed hand-tool woodworkers. When all four corners pull together tight and the frame sits flat, you'll know you've earned your dovetails. Keep this piece on your shop wall as a benchmark.`,
    estimatedTime: '6-8 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'sharpening'],
    joints: ['through-dovetail'],
    woods: ['poplar', 'cherry', 'eastern-white-pine'],
    materials: [
      '4 boards, 1/2" x 3" x 8"',
      'Wood glue',
      'Scrap backer boards'
    ],
    tools: [
      'Dovetail saw',
      'Bench chisels (1/4", 3/8", 1/2")',
      'Coping saw',
      'Dovetail marker',
      'Marking gauge',
      'Marking knife',
      'Mallet',
      'Clamps (4 minimum)',
      'Workbench with vise'
    ],
    steps: [
      'Mill all four boards to identical dimensions. Number the corners and mark mating edges.',
      'Set your marking gauge to the board thickness and scribe all baselines at once — consistency starts here.',
      'Lay out the tails on all four tail boards identically. Use a template or spacer to keep them even.',
      'Saw all tail cuts. Develop a rhythm — same grip, same angle, same number of strokes.',
      'Remove waste and pare all tail boards. Line them up side by side to compare.',
      'Transfer tails to pin boards one corner at a time. Mark carefully and saw the pins.',
      'Test-fit each corner individually. Adjust and pare as needed.',
      'Dry-assemble the entire frame. Check for square and flat.',
      'Glue up one pair of opposite corners first, then close the frame. Check for square under clamp pressure.',
      'When dry, clean up with a sharp block plane. Admire your work.'
    ],
    tips: [
      'Number your corners (1-2, 2-3, 3-4, 4-1) so you never mix up mating pieces.',
      'Cut all the tails first in batch, then all the pins. Batching builds consistency.',
      'A thin coat of paste wax on your saw plate helps it glide through the cut.',
      'Glue up in stages — trying to glue all four corners at once is a recipe for panic.'
    ],
    relatedProjects: ['dovetail-practice', 'dovetail-box', 'blanket-chest']
  },
  {
    slug: 'half-blind-dovetail-practice',
    name: 'Half-Blind Dovetail Practice Joint',
    category: 'joinery-practice',
    difficulty: 4,
    summary: 'Cut half-blind dovetails — the classic drawer joint that hides the joinery on one face.',
    description: `Half-blind dovetails are the traditional drawer joint. The pins are only partially cut, so the joint is invisible from the front of the drawer. It's a more demanding joint than the through dovetail because you're chopping into a socket rather than through the full thickness.

The challenge here is the blind socket. You can't saw all the way through, so you need to chop and pare waste from a confined space. Your chisels must be razor sharp, and your mallet control needs to be precise. Undercutting the baseline slightly helps the joint pull up tight.

Every serious woodworker needs this joint in their repertoire. It's the mark of quality in drawer construction and shows up in everything from Chippendale highboys to Shaker blanket chests. Take your time with this one — it rewards patience.`,
    estimatedTime: '4-5 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'sharpening'],
    joints: ['half-blind-dovetail'],
    woods: ['poplar', 'cherry', 'hard-maple'],
    materials: [
      '2 boards: 1/2" x 4" x 6" (drawer side) and 3/4" x 4" x 6" (drawer front)',
      'Scrap backer board'
    ],
    tools: [
      'Dovetail saw',
      'Bench chisels (1/4", 3/8", 1/2")',
      'Dovetail marker or sliding bevel',
      'Marking gauge',
      'Marking knife',
      'Mallet',
      'Small router plane (optional)',
      'Workbench with vise'
    ],
    steps: [
      'Mill both boards flat and square. The pin board (drawer front) should be thicker than the tail board.',
      'Set two marking gauges — one for the depth of the socket (drawer side thickness), one for the lap (remaining front thickness).',
      'Lay out and cut the tails on the thinner board, same as through dovetails.',
      'Transfer the tails to the end grain of the pin board. Mark the socket depth on the inside face.',
      'Saw the pin cuts down to the socket depth line. Tilt the board in the vise for angled cuts.',
      'Remove waste from the sockets using a chisel and mallet. Work from the end grain toward the baseline.',
      'Pare the socket bottoms flat. A small router plane helps achieve consistent depth.',
      'Test-fit. The tails should seat fully into the sockets with the shoulder tight against the front face.',
      'Adjust fit by paring pin walls or socket bottoms as needed.'
    ],
    tips: [
      'Keep the lap at least 3/16" thick — too thin and it will crumble during chopping.',
      'Slightly undercut the tail baseline so the outer edge pulls tight.',
      'A fishtail chisel is incredibly useful for cleaning socket corners.',
      'Practice on pine first, then move to hardwood once your technique is solid.'
    ],
    relatedProjects: ['dovetail-practice', 'through-dovetail-practice', 'blanket-chest']
  },
  {
    slug: 'sliding-dovetail-practice',
    name: 'Sliding Dovetail Practice Joint',
    category: 'joinery-practice',
    difficulty: 3,
    summary: 'Cut a sliding dovetail — a strong, elegant joint for shelves, dividers, and table breadboard ends.',
    description: `The sliding dovetail is one of the most useful joints you'll ever learn. It creates a mechanical lock that resists pulling apart in one direction while still allowing the joint to slide together during assembly. It's the go-to joint for shelving, cabinet dividers, and breadboard ends.

You'll cut a dovetail-shaped groove (the socket) in one board and a matching dovetail-shaped tongue on the end of another. The joint slides together from one edge and locks tight. The challenge is matching the angles — the socket and tongue must mirror each other exactly.

This joint replaced nails and screws in fine cabinet work for centuries. A well-cut sliding dovetail in a bookcase shelf will hold weight indefinitely without any glue or fasteners. It's engineering and craft in one beautiful package.`,
    estimatedTime: '3-4 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'hand-planing'],
    joints: ['sliding-dovetail'],
    woods: ['poplar', 'cherry', 'hard-maple'],
    materials: [
      '2 boards: 3/4" x 6" x 12" (socket board) and 3/4" x 6" x 8" (tongue board)',
      'Scrap wood for testing angle cuts'
    ],
    tools: [
      'Backsaw or dovetail saw',
      'Bench chisels (1/4", 1/2")',
      'Router plane',
      'Marking gauge',
      'Sliding bevel set to dovetail angle',
      'Marking knife',
      'Mallet',
      'Shoulder plane (optional)',
      'Workbench with vise'
    ],
    steps: [
      'Mill both boards flat and square. Mark the socket location on the wider board.',
      'Set a sliding bevel to your dovetail angle (about 1:6 for hardwood, 1:8 for softwood).',
      'Knife the socket walls on the face of the board using the sliding bevel as a guide.',
      'Saw the angled socket walls carefully. The saw must follow the angle consistently along the full length.',
      'Remove waste between the socket walls with a chisel and router plane. Aim for a flat, consistent bottom.',
      'Mark the tongue on the end of the second board to match the socket width and depth.',
      'Saw and pare the tongue to shape. Use a shoulder plane to fine-tune the fit.',
      'Slide the joint together from one end. It should be snug but movable without a mallet.',
      'If it binds, check for high spots and pare them down. A slightly tapered fit (tighter at the back) is traditional.'
    ],
    tips: [
      'Make the tongue a hair thicker than the socket and creep up on the fit by paring.',
      'A slightly tapered socket (tighter at the back) makes assembly easier and locks tighter.',
      'Use winding sticks to check the socket bottom for twist.'
    ],
    relatedProjects: ['dado-rabbet-practice', 'bookshelf', 'nightstand']
  },
  {
    slug: 'miter-practice',
    name: 'Miter Joint Practice',
    category: 'joinery-practice',
    difficulty: 2,
    summary: 'Cut and fit a perfect 45-degree miter joint — the invisible corner used in frames, boxes, and trim.',
    description: `The miter joint hides the end grain entirely, making it the cleanest-looking corner joint in woodworking. Picture frames, box lids, and furniture trim all depend on tight miters. The problem? A miter joint has almost no long-grain glue surface, so fit and reinforcement both matter.

This practice focuses on cutting accurate 45-degree angles and shooting them perfect with a hand plane. You'll learn to use a shooting board — an essential shop appliance for miter work. The difference between a good miter and a great one is measured in thousandths of an inch.

Miters expose every imperfection. If your saw cut is 44.5 degrees instead of 45, you'll see a gap. If the lengths don't match perfectly, the joint won't close. This is precision practice, and it pays off every time you build a frame or fit trim.`,
    estimatedTime: '1-2 hours',
    skills: ['sawing-to-a-line', 'hand-planing', 'marking-layout', 'sharpening'],
    joints: ['miter'],
    woods: ['cherry', 'hard-maple', 'black-walnut'],
    materials: [
      '2 boards, 3/4" x 2" x 10"',
      'Sandpaper (220 grit) for final fitting'
    ],
    tools: [
      'Backsaw or miter saw',
      'Shooting board with miter fence',
      'Block plane or jack plane (for shooting)',
      'Combination square',
      'Marking knife',
      'Miter square (45-degree)',
      'Workbench'
    ],
    steps: [
      'Mill both pieces flat, square, and to identical width and thickness.',
      'Mark 45-degree cut lines with a miter square and marking knife on all visible faces.',
      'Saw the miters carefully on the waste side of the line. Get as close as you can.',
      'Set up your shooting board with the miter fence. Shoot the first piece to a perfect 45 degrees.',
      'Shoot the second piece. Check the angle with a reliable miter square.',
      'Hold both pieces together to check the fit. Light should not pass through the joint line.',
      'If there are gaps, take one more pass on the shooting board. Adjust only one piece at a time.',
      'When satisfied, try clamping with a band clamp or tape to simulate glue-up pressure.'
    ],
    tips: [
      'A shooting board is nearly mandatory for hand-cut miters. Build one before you attempt this.',
      'Check both pieces against the same miter square — if it reads 45 on both, they add up to 90.',
      'For real projects, reinforce miters with splines, keys, or dowels — glue alone is weak on end grain.'
    ],
    relatedProjects: ['picture-frame', 'keepsake-box', 'shooting-board']
  },
  {
    slug: 'dado-rabbet-practice',
    name: 'Dado & Rabbet Practice Joint',
    category: 'joinery-practice',
    difficulty: 1,
    summary: 'Cut dadoes and rabbets by hand — the essential shelf and case joints used in every bookcase and cabinet.',
    description: `Dadoes and rabbets are the bread and butter of case construction. A dado is a channel cut across the grain; a rabbet is a step cut along the edge. Together, they build bookcases, cabinets, drawers, and just about every box you'll ever make.

This practice piece teaches you to cut both joints by hand using a backsaw and router plane. The router plane is the hero tool here — it lets you cut a flat-bottomed channel to a precise, consistent depth. Once you can cut a clean dado that fits the shelf stock snugly, you're ready to build real casework.

These joints are straightforward but unforgiving of sloppiness. A dado that's too wide wobbles. A rabbet that's too deep weakens the board. Practice reading your tools and trusting your layout, and these joints will serve you for a lifetime.`,
    estimatedTime: '1-2 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout'],
    joints: ['dado', 'rabbet'],
    woods: ['eastern-white-pine', 'poplar', 'douglas-fir'],
    materials: [
      '2 boards, 3/4" x 6" x 12"',
      'Scrap stock for shelf test pieces'
    ],
    tools: [
      'Backsaw or crosscut saw',
      'Router plane',
      'Bench chisels (1/2", 3/4")',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Workbench with vise'
    ],
    steps: [
      'Mill your boards flat and square. One board gets the dado, the other gets the rabbet.',
      'For the dado: knife two parallel lines across the board, spaced to match the shelf stock thickness.',
      'Saw both dado walls down to your target depth (typically 1/4" to 1/3" of the board thickness).',
      'Remove the bulk of the waste with a chisel. Work carefully to avoid going below depth.',
      'Clean the dado bottom flat and to final depth with a router plane. This is where the tool earns its keep.',
      'For the rabbet: knife a shoulder line on the face and a depth line on the edge.',
      'Saw the shoulder line down to depth. Then saw or plane away the waste from the edge.',
      'Clean the rabbet shoulder and cheek with a chisel or rabbet plane.',
      'Test-fit shelf stock in the dado and a panel in the rabbet. Both should fit snugly without force.'
    ],
    tips: [
      'A router plane is essential for consistent dado depth. If you don\'t have one, it should be your next tool purchase.',
      'Score the dado walls deeply with a knife before sawing — it severs the wood fibers and prevents tearout.',
      'For rabbets, a rabbet plane (also called a rebate plane) makes quick work of long edges.'
    ],
    relatedProjects: ['sliding-dovetail-practice', 'bookshelf', 'floating-shelf']
  },
  {
    slug: 'scarf-joint-practice',
    name: 'Scarf Joint Practice',
    category: 'joinery-practice',
    difficulty: 3,
    summary: 'Cut a traditional scarf joint to splice two boards into a longer timber — a fundamental technique in timber framing.',
    description: `The scarf joint solves one of the oldest problems in woodworking: making a long beam from shorter stock. Timber framers have used scarf joints for centuries to create continuous sill beams, ridge poles, and plate timbers that exceed the length of available lumber.

You'll cut a simple halved scarf and then progress to a keyed version with a locking wedge. The joint works by creating a long diagonal glue surface that resists both tension and compression. The key (or wedge) adds a mechanical lock that holds the joint even if the glue fails.

This is a joint that connects you to centuries of building tradition. The same joint holding together medieval English barns can hold together your timber-frame shed or pergola. It teaches patience, accurate layout, and the importance of flat reference surfaces.`,
    estimatedTime: '3-4 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'hand-planing'],
    joints: ['scarf-joint', 'keyed-scarf'],
    woods: ['douglas-fir', 'eastern-white-pine', 'white-oak'],
    materials: [
      '2 boards, 1-1/2" x 3-1/2" x 24" (dimensional lumber is fine)',
      'Hardwood wedge stock for the key',
      'Wood glue'
    ],
    tools: [
      'Handsaw (crosscut and rip)',
      'Bench chisels (1/2", 3/4", 1")',
      'Hand plane (jack or jointer)',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Clamps',
      'Workbench with vise'
    ],
    steps: [
      'Mill both pieces flat and square. The mating faces must be true — check with a straightedge.',
      'Lay out the scarf on both pieces. A 1:4 slope is standard — for 3-1/2" stock, the scarf is 14" long.',
      'Knife the layout lines on all four faces. Mark waste clearly.',
      'Saw along the scarf angle on both pieces. Stay on the waste side.',
      'Plane or pare the scarf faces flat. They must mate without rocking.',
      'For the keyed version: lay out a mortise through both halves that aligns when assembled.',
      'Chop the key mortise through the assembled joint. Make it slightly tapered.',
      'Rip and shape a hardwood key (wedge) to fit the mortise with a light taper.',
      'Assemble the joint, apply glue to the scarf faces, and drive the key home.',
      'Check the assembled timber for straightness. A good scarf should be nearly invisible.'
    ],
    tips: [
      'The scarf faces must be dead flat. Check with winding sticks and a long straightedge.',
      'Make the key from a harder wood than the beam — oak keys in pine beams is traditional.',
      'A longer scarf ratio (1:5 or 1:6) is stronger but uses more material.'
    ],
    relatedProjects: ['timber-peg-practice', 'roubo-workbench', 'sawhorses']
  },
  {
    slug: 'timber-peg-practice',
    name: 'Timber Frame Peg Practice',
    category: 'joinery-practice',
    difficulty: 3,
    summary: 'Learn to rive, shape, and drive timber pegs — the original fastener that holds timber frames together.',
    description: `Before screws, before nails, there were wooden pegs. Timber framers call them trunnels (tree nails), and they've held buildings together for millennia. A well-made peg is riven from straight-grained stock, shaped octagonal, and driven through a drawbored hole that pulls the joint tight as it seats.

This practice covers the complete process: riving blanks from a billet, shaping pegs on a shaving horse or in a vise, boring the holes, offsetting them for drawboring, and driving the pegs home. Drawboring is the key technique — by offsetting the peg hole in the tenon slightly toward the shoulder, the peg draws the joint tight as it's driven.

There's something deeply satisfying about locking a joint with a peg you made yourself. No glue, no metal — just wood holding wood. This is the technique that connects modern timber framers to the medieval craft tradition.`,
    estimatedTime: '3-4 hours',
    skills: ['peg-riving', 'boring-drilling', 'drawboring', 'marking-layout', 'choosing-the-right-chisel'],
    joints: ['timber-frame-peg', 'mortise-tenon'],
    woods: ['white-oak', 'hickory', 'hard-maple'],
    materials: [
      'Oak or hickory billet, 2" x 2" x 12" (straight grain, rift-sawn ideal)',
      '2 pieces of framing lumber for a test mortise-tenon joint (2x4 or 2x6)',
      'Wood glue (for the test M&T only — pegs don\'t get glue)'
    ],
    tools: [
      'Froe and froe club (or heavy chisel for riving)',
      'Drawknife or spokeshave',
      'Brace and bit (3/4" or 7/8")',
      'Auger or drill with brad-point bit',
      'Mallet or commander (heavy wooden mallet)',
      'Bench chisels',
      'Marking gauge',
      'Combination square',
      'Shaving horse or vise'
    ],
    steps: [
      'Select a straight-grained billet of oak or hickory. The grain must run the full length without runout.',
      'Rive the billet into square blanks using a froe or heavy chisel. Follow the grain — don\'t cut across it.',
      'Shape each blank into an octagon using a drawknife or spokeshave. Work toward a slight taper at the leading end.',
      'Cut a practice mortise and tenon in the framing lumber. Make it a good fit.',
      'Bore through the mortise cheeks with the brace and bit. Keep the bit square to the face.',
      'Assemble the joint and mark the hole location through onto the tenon. Remove the tenon.',
      'Offset the tenon hole 1/16" to 1/8" toward the shoulder — this is the drawbore offset.',
      'Reassemble the joint. Drive a peg through. It should pull the tenon shoulder tight as it passes through the offset hole.',
      'Trim the peg flush on both sides with a flush-cut saw or chisel.',
      'Test the joint — it should be rock solid with no movement, no glue, and no metal.'
    ],
    tips: [
      'Riven pegs are dramatically stronger than sawn pegs because the grain runs continuously.',
      'The drawbore offset should be small — 1/16" is enough. Too much and you\'ll shear the peg.',
      'Dry your pegs in a warm oven or near a woodstove. Dry pegs driven into green timber swell and lock forever.',
      'Always chamfer the leading end of the peg so it finds the offset hole easily.'
    ],
    relatedProjects: ['scarf-joint-practice', 'mortise-tenon-practice', 'roubo-workbench']
  },

  // ─────────────────────────────────────────────
  // SHOP ESSENTIALS (10 projects)
  // ─────────────────────────────────────────────
  {
    slug: 'roubo-workbench',
    name: 'Roubo Workbench',
    category: 'shop-essentials',
    difficulty: 5,
    summary: 'Build the workbench that builds everything else — a massive split-top Roubo that will last generations.',
    description: `The workbench is the single most important tool in any hand-tool shop. Without a good bench, nothing else works properly. The Roubo design, refined over centuries, gives you a thick, heavy top that absorbs mallet blows, a leg vise for face work, and a tail vise or planing stop for edge work.

This is a serious build. The top is laminated from thick hardwood — beech, maple, or ash — glued and flattened into a slab that weighs well over a hundred pounds. The base uses heavy through-tenon joinery with wedged tenons and drawbored pegs. Every joint in this bench is a lesson in timber framing technique.

Plan on this bench taking several weekends. But once it's done, you have the foundation for every project that follows. A good Roubo bench doesn't wear out — it gets better with age. The top develops a patina, the vise breaks in, and the bench becomes an extension of your hands.`,
    estimatedTime: '60-80 hours',
    skills: ['hand-planing', 'chopping', 'boring-drilling', 'drawboring', 'marking-layout', 'sawing-to-a-line', 'sharpening'],
    joints: ['mortise-tenon', 'wedged-through-tenon', 'timber-frame-peg', 'tongue-groove'],
    woods: ['hard-maple', 'beech', 'ash', 'white-oak'],
    materials: [
      '100+ board feet of 8/4 or 12/4 hardwood for the top',
      '40+ board feet of 8/4 hardwood for the base',
      'Leg vise hardware (vise screw and parallel guide)',
      'Tail vise hardware or wagon vise kit',
      'Bench dogs (3/4" round, wood or brass)',
      'Wood glue (large quantity)',
      'Finish: Danish oil or boiled linseed oil'
    ],
    tools: [
      'Jack plane, jointer plane, smoothing plane',
      'Mortise chisels (3/8", 1/2")',
      'Bench chisels (full set)',
      'Handsaw (crosscut and rip)',
      'Brace and bit set',
      'Drawknife',
      'Marking gauge',
      'Winding sticks',
      'Clamps (many — pipe clamps, bar clamps, F-clamps)',
      'Mallet',
      'Large combination square or framing square'
    ],
    steps: [
      'Design your bench to fit your height — top surface should be at wrist height with arms hanging straight.',
      'Mill and laminate the top slab in sections. Glue up 3-4 boards at a time, then join the sections.',
      'Flatten the top with traversing cuts from a jack plane, then a jointer plane for final flatness.',
      'Cut the split in the center (for a split-top Roubo) to accept a crochet or planing stop.',
      'Mill the leg stock to dimension. These should be at least 3-1/2" x 3-1/2" in section.',
      'Cut the through mortises in the top for the legs. Chop carefully — these are visible.',
      'Cut tenons on the leg tops to fit the mortises. Fit, wedge, and drawbore each one.',
      'Cut and fit the stretchers between the legs using through-tenon joinery.',
      'Install the leg vise and tail vise according to your hardware kit instructions.',
      'Final-flatten the top, chamfer all edges, and apply a generous coat of oil.'
    ],
    tips: [
      'Don\'t agonize over wood species. Maple, beech, ash, and even construction-grade Douglas fir all make good benches.',
      'Make the bench heavier than you think you need. Weight equals stability. Add a tool tray if needed for mass.',
      'Flatten the top before installing vises — a twisted top throws everything off.',
      'Apply oil liberally but skip varnish or poly. You want the top to grip, not slide.'
    ],
    relatedProjects: ['sawhorses', 'mallet', 'tool-tote']
  },
  {
    slug: 'sawhorses',
    name: 'Sturdy Sawhorses (Pair)',
    category: 'shop-essentials',
    difficulty: 2,
    summary: 'Build a pair of knock-down sawhorses using traditional joinery — the most-used shop furniture you will ever own.',
    description: `Good sawhorses are the unsung heroes of every shop. They hold lumber for sawing, support assemblies during glue-up, become an outfeed table, and serve as a temporary workbench in a pinch. A well-built pair will last decades and take serious abuse.

These sawhorses use a simple I-beam design with splayed legs joined to a beam with compound-angle through tenons. The splay gives stability, and the through tenons mean no hardware. You can knock them apart for storage or toss them in a truck for a job site.

Build these early in your woodworking journey. They teach compound angles, through-tenon layout, and practical construction. And you'll use them on literally every project that follows. Make two — sawhorses always work in pairs.`,
    estimatedTime: '6-8 hours (pair)',
    skills: ['sawing-to-a-line', 'chopping', 'marking-layout', 'boring-drilling'],
    joints: ['mortise-tenon', 'wedged-through-tenon'],
    woods: ['douglas-fir', 'yellow-pine', 'spruce', 'eastern-white-pine'],
    materials: [
      '2x6 x 8\' for the beams (2 pieces)',
      '2x4 x 8\' for the legs (4 pieces)',
      '1x4 x 6\' for cross braces (2 pieces)',
      'Hardwood wedge stock',
      'No glue or hardware needed'
    ],
    tools: [
      'Handsaw (crosscut)',
      'Mortise chisel (1-1/2" or matching leg width)',
      'Bench chisels',
      'Sliding bevel (set to splay angle)',
      'Marking gauge',
      'Combination square',
      'Mallet',
      'Pencil and tape measure'
    ],
    steps: [
      'Decide on your sawhorse height — 24" is standard, but match your working style.',
      'Cut the beams to length. Mark through-mortise locations for four legs on each beam.',
      'Set your sliding bevel to the splay angle (typically 15-20 degrees) and lay out the mortises.',
      'Chop the compound-angle mortises through the beam. These are angled in two directions.',
      'Cut the legs to length with matching compound angles on the top ends (tenon shoulders).',
      'Cut the tenons on the leg tops to fit the mortises. The shoulders must seat cleanly.',
      'Dry-fit each leg. Mark and cut wedge slots in the tenon ends.',
      'Assemble the sawhorses and drive hardwood wedges to lock the tenons.',
      'Cut and nail cross braces between the legs for lateral stability.',
      'Trim protruding tenons and wedges flush. Chamfer all sharp edges.'
    ],
    tips: [
      'Use construction lumber. Sawhorses don\'t need fancy wood — they need to be tough and cheap.',
      'Make the tenons a hair oversize and trim to fit. It\'s easier than re-cutting undersized tenons.',
      'A 15-degree splay angle is a good compromise between stability and footprint.'
    ],
    relatedProjects: ['roubo-workbench', 'lap-joint-practice', 'mallet']
  },
  {
    slug: 'tool-tote',
    name: 'Traditional Tool Tote',
    category: 'shop-essentials',
    difficulty: 2,
    summary: 'Build a classic carpenter\'s tool tote with a center handle — keeps your essential hand tools organized and portable.',
    description: `The tool tote is a woodworker's grab-and-go kit. Toss in your layout tools, a few chisels, a block plane, and a hammer, and you're ready to work anywhere. This traditional design has been used by carpenters and joiners for centuries because it works perfectly.

The build uses a simple nailed or dadoed box with a tall center divider that doubles as the handle. The divider keeps tools from piling together, and the open top means you can see and grab what you need instantly. It's honest, practical design with zero wasted motion.

This is an ideal early project because it teaches basic box construction while producing something you'll actually use every day. Build it from scraps or cheap pine, customize the size for your tools, and don't overthink the finish — it's a shop tool, not furniture.`,
    estimatedTime: '4-5 hours',
    skills: ['sawing-to-a-line', 'marking-layout', 'hand-planing', 'boring-drilling'],
    joints: ['dado', 'rabbet', 'butt-joint'],
    woods: ['eastern-white-pine', 'poplar', 'douglas-fir'],
    materials: [
      '1x8 x 6\' for sides and bottom',
      '1x10 x 2\' for end pieces with handle cutout',
      'Cut nails or wood screws (optional)',
      'Wood glue',
      'Finish: boiled linseed oil or paint'
    ],
    tools: [
      'Backsaw or crosscut saw',
      'Bench chisels (1/2", 3/4")',
      'Block plane',
      'Coping saw (for handle cutout)',
      'Marking gauge',
      'Combination square',
      'Hammer or mallet',
      'Drill and bit (for handle hole)',
      'Clamps'
    ],
    steps: [
      'Determine the size based on your tools. A 6" wide x 16" long x 8" tall box works for most kits.',
      'Cut the bottom, two sides, and two ends to dimension. The ends are the tallest pieces.',
      'Lay out the handle cutout in the end pieces — an elongated slot with rounded ends.',
      'Bore holes at each end of the handle slot, then connect them with a coping saw.',
      'Cut dadoes in the end pieces to receive the bottom board (optional — butt joints with nails work too).',
      'Cut rabbets on the side pieces if using rabbet-and-nail construction.',
      'Assemble the bottom to the end pieces first. Check for square.',
      'Attach the side pieces. Nail or screw through the sides into the end piece edges.',
      'If using a center divider, cut it to fit and glue it in place.',
      'Chamfer all top edges and the handle cutout for comfort. Apply finish.'
    ],
    tips: [
      'Size the handle slot to fit your hand comfortably — test it with a scrap before cutting the real pieces.',
      'A center divider makes the tote much more useful. Put layout tools on one side, cutting tools on the other.',
      'Nail a scrap of leather or canvas across the bottom to cushion tools and prevent rattling.'
    ],
    relatedProjects: ['chisel-rack', 'dado-rabbet-practice', 'bench-hook']
  },
  {
    slug: 'shooting-board',
    name: 'Shooting Board',
    category: 'shop-essentials',
    difficulty: 1,
    summary: 'Build a simple shooting board for trimming end grain perfectly square or at 45 degrees with a hand plane.',
    description: `A shooting board is a jig that holds your workpiece while you run a hand plane along a reference track to trim the end grain dead square. It's one of those shop appliances that seems almost too simple to bother making — until you use one and wonder how you ever worked without it.

The concept is straightforward: a flat base, a fence set exactly 90 degrees (or 45 degrees for miters) to the plane track, and a stop to hold the workpiece. The plane rides on its side along the lower platform while the blade trims the workpiece on the upper platform.

Build this from stable sheet goods or quartersawn hardwood. The only thing that matters is that the fence is dead square to the track and the base is flat. Once you have a shooting board, every crosscut and miter in your shop gets better instantly.`,
    estimatedTime: '2-3 hours',
    skills: ['hand-planing', 'marking-layout', 'sawing-to-a-line'],
    joints: ['butt-joint'],
    woods: ['hard-maple', 'beech', 'cherry'],
    materials: [
      '3/4" plywood or MDF, 8" x 24" (base)',
      '1/2" plywood or MDF, 8" x 24" (upper platform)',
      'Hardwood strip for the fence, 1" x 2" x 8"',
      'Hardwood strip for the stop, 1/2" x 1" x 8"',
      'Wood glue',
      'Paste wax for the track surface'
    ],
    tools: [
      'Jack plane or #5 hand plane (the shooting plane)',
      'Block plane (for trimming the jig)',
      'Combination square',
      'Marking knife',
      'Clamps',
      'Drill and countersink bit'
    ],
    steps: [
      'Cut the base and upper platform to size. The upper platform is the same length but narrower.',
      'Glue the upper platform to the base, offset to one side. The exposed base becomes the plane track.',
      'Ensure the step between the two layers is clean and straight — this is where the plane blade meets the work.',
      'Cut and attach the fence at exactly 90 degrees to the plane track edge. Check with your most accurate square.',
      'Attach a thin stop at the end of the upper platform to keep workpieces from sliding.',
      'Apply paste wax to the track surface so the plane slides smoothly.',
      'Test with a scrap piece. The planed end should be perfectly square to the face and edge.',
      'For a miter attachment, make a second fence at 45 degrees that hooks over the main fence.'
    ],
    tips: [
      'Use the most accurate square you own to set the fence. Everything downstream depends on this angle.',
      'Wax the track liberally. A plane that sticks and stutters produces a poor surface.',
      'Make the base from stable material — plywood or MDF won\'t move. Solid wood can warp over time.',
      'A dedicated shooting plane (low-angle jack or #51) is ideal but any sharp bench plane works.'
    ],
    relatedProjects: ['miter-practice', 'picture-frame', 'bench-hook']
  },
  {
    slug: 'bench-hook',
    name: 'Bench Hook',
    category: 'shop-essentials',
    difficulty: 1,
    summary: 'Build a bench hook in under an hour — the simplest and most useful jig for crosscutting small stock by hand.',
    description: `The bench hook is the first shop appliance every hand-tool woodworker should make. It hooks over the front edge of your bench, provides a flat reference surface, and gives you a fence to butt your workpiece against while you saw. It takes thirty minutes to build and you'll use it every single day.

The design is dead simple: a flat board with a cleat on the bottom front edge (the hook) and a fence on the top back edge (the stop). The hook grabs your bench edge, the stop holds your workpiece, and your sawing hand is free because the whole thing is self-locating.

Make several in different sizes. Keep one for rough crosscutting, one for clean joinery cuts, and one dedicated for chisel work (with a sacrificial top you can replace). They're so quick to build there's no reason not to have a stack of them.`,
    estimatedTime: '30 minutes - 1 hour',
    skills: ['sawing-to-a-line', 'marking-layout'],
    joints: ['butt-joint'],
    woods: ['eastern-white-pine', 'poplar', 'douglas-fir'],
    materials: [
      '3/4" x 9" x 12" board (base)',
      '3/4" x 1-1/2" x 9" strip (hook cleat)',
      '3/4" x 1-1/2" x 9" strip (fence)',
      'Wood glue',
      'A few wood screws or cut nails (optional)'
    ],
    tools: [
      'Backsaw or crosscut saw',
      'Combination square',
      'Drill (if using screws)',
      'Clamps'
    ],
    steps: [
      'Cut the base to size — roughly 9" wide x 12" long from 3/4" stock.',
      'Cut two strips for the hook cleat and fence. Both should span the full width of the base.',
      'Glue and clamp (or screw) the hook cleat to the bottom of one end, flush with the edge.',
      'Glue and clamp the fence to the top of the opposite end, flush with the edge.',
      'When dry, check that the hook hangs over your bench edge and the fence stands upright.',
      'Chamfer the top edges of the fence for comfort. Wax the base if desired.'
    ],
    tips: [
      'The hook and fence must be on opposite ends AND opposite faces. Think about it before you glue.',
      'Make the base from cheap softwood — you\'ll saw into it. That\'s what it\'s for.',
      'Build three: one for sawing, one for chiseling, one with a 45-degree fence for miters.'
    ],
    relatedProjects: ['shooting-board', 'miter-box', 'tool-tote']
  },
  {
    slug: 'mallet',
    name: 'Joiner\'s Mallet',
    category: 'shop-essentials',
    difficulty: 2,
    summary: 'Turn a single billet into a traditional joiner\'s mallet with a tapered through-mortise that locks the handle tight.',
    description: `A good mallet is an extension of your arm. The joiner's mallet has a wide, flat head that delivers square blows to chisel handles without the shock and damage of a steel hammer. The tapered handle seats into a tapered mortise — the harder you swing, the tighter it locks.

This project is traditionally made from a single species: the head from a dense hardwood like beech or maple, the handle from the same or similar wood. The magic is in the tapered mortise. Cut it slightly smaller at the bottom than the top, shape the handle tenon to match, and the head can never fly off. No glue, no wedges, no hardware.

Every woodworker should make their own mallet. It's a rite of passage. The one you make will feel better in your hand than any you can buy, because you'll shape the handle to fit your grip and weight the head to suit your work.`,
    estimatedTime: '3-4 hours',
    skills: ['chopping', 'paring', 'hand-planing', 'marking-layout', 'sawing-to-a-line'],
    joints: ['mortise-tenon'],
    woods: ['hard-maple', 'beech', 'white-oak', 'hickory'],
    materials: [
      'Head blank: 3" x 3" x 5" hardwood (beech or maple ideal)',
      'Handle blank: 1-1/4" x 1-1/4" x 14" hardwood',
      'No glue or hardware needed'
    ],
    tools: [
      'Mortise chisel (sized to handle width)',
      'Bench chisels (1/2", 3/4")',
      'Backsaw',
      'Hand plane (jack or block)',
      'Rasp or spokeshave (for handle shaping)',
      'Marking gauge',
      'Combination square',
      'Mallet (yes, you need a mallet to make a mallet — borrow one or use a hammer with a wood block)'
    ],
    steps: [
      'Select dense, straight-grained hardwood for the head. The grain should run parallel to the striking faces.',
      'Square up the head blank to final dimensions. Angle the faces slightly (about 5 degrees) so they\'re not parallel — this helps deliver square blows at a natural swing angle.',
      'Lay out the through-mortise centered on the head. The mortise tapers — wider at the top, narrower at the bottom.',
      'Chop the mortise from both faces, meeting in the middle. Clean the taper with a wide chisel.',
      'Shape the handle blank round or octagonal with a plane, rasp, or spokeshave.',
      'Cut the handle tenon to fit the mortise. It should taper to match — tight at the bottom, clearance at the top.',
      'Slide the handle into the mortise from the bottom. It should seat firmly with a few inches of handle protruding through the top.',
      'Trim the protruding handle flush with the top of the head.',
      'Test the mallet. Drive a chisel with it. Adjust the handle length and head weight to your preference.',
      'Apply oil or wax to the head faces. Leave the handle bare for grip.'
    ],
    tips: [
      'The taper is what makes this design work. Too little taper and the head loosens. Too much and it splits.',
      'Beech is the traditional mallet wood. It\'s dense, shock-resistant, and relatively inexpensive.',
      'Shape the handle to your hand — oval or octagonal cross-sections are more comfortable than round.',
      'The head weight should feel comfortable after 30 minutes of chopping. 16-20 oz is a good range for joinery work.'
    ],
    relatedProjects: ['roubo-workbench', 'mortise-tenon-practice', 'timber-peg-practice']
  },
  {
    slug: 'winding-sticks',
    name: 'Winding Sticks',
    category: 'shop-essentials',
    difficulty: 1,
    summary: 'Make a pair of precision winding sticks for checking boards and surfaces for twist — an essential shop reference tool.',
    description: `Winding sticks are two straight sticks you place across a board and sight along to detect twist (also called wind). They amplify any twist so your eye can see it. This is how woodworkers have checked for flat surfaces since before metal planes existed.

The sticks must be straight, parallel, and identical in height. That's it. The only embellishment that matters is making one stick from a contrasting wood so you can see the alignment more easily. Dark walnut against light maple works perfectly.

These are so simple that many woodworkers never bother making a proper pair — and then struggle to flatten every board because they can't see the twist. Make these once, make them well, and they'll improve every piece of work that passes through your shop.`,
    estimatedTime: '1-2 hours',
    skills: ['hand-planing', 'marking-layout', 'sawing-to-a-line'],
    joints: [],
    woods: ['hard-maple', 'black-walnut', 'cherry'],
    materials: [
      '2 boards, 3/4" x 2" x 20" (one light wood, one dark)',
      'Finish: shellac or lacquer for stability'
    ],
    tools: [
      'Jack plane or jointer plane',
      'Block plane',
      'Combination square',
      'Marking gauge',
      'Marking knife',
      'Workbench with vise'
    ],
    steps: [
      'Select stable, quartersawn stock if possible. The sticks must stay straight over time.',
      'Mill both sticks to identical width and thickness. Precision matters — use your best plane.',
      'Joint one edge of each stick dead straight. Check with a reliable straightedge.',
      'Rip the other edge parallel and plane it smooth. Both sticks must be the same height everywhere.',
      'Square both ends cleanly. Some woodworkers add a slight upward point at each end for easier sighting.',
      'Apply a few coats of shellac for moisture resistance. This prevents seasonal movement.',
      'Test them on a known-flat surface. Sight across the top edges — they should align perfectly.'
    ],
    tips: [
      'Contrasting woods aren\'t just decorative — they make twist dramatically easier to see.',
      'Longer sticks detect twist better. 18-24" is ideal for most bench work.',
      'Store them hanging on a wall or in a dedicated slot — never stack things on top of them.',
      'Quartersawn wood is critical. Flatsawn sticks will cup and become useless within a season.'
    ],
    relatedProjects: ['roubo-workbench', 'shooting-board', 'marking-gauge']
  },
  {
    slug: 'marking-gauge',
    name: 'Wooden Marking Gauge',
    category: 'shop-essentials',
    difficulty: 2,
    summary: 'Build a traditional wooden marking gauge with a wedge-locked fence — a precision layout tool you will use on every project.',
    description: `The marking gauge scribes a line parallel to an edge at a set distance. It's used for layout on nearly every joint: mortise walls, tenon cheeks, dovetail baselines, rabbet depths. A good gauge must hold its setting firmly and scribe a clean, thin line.

This build uses the traditional design: a hardwood beam that slides through a mortise in the fence block. A wedge locks the fence at any position along the beam. The marking pin (or knife) is set into the end of the beam. The whole thing fits in your hand like it was grown there.

Commercial marking gauges work fine, but a shop-made one teaches you about the tool in a way that buying one never will. You'll understand the geometry, feel the action, and customize the pin angle for your preferred scribing technique.`,
    estimatedTime: '3-4 hours',
    skills: ['chopping', 'paring', 'hand-planing', 'marking-layout', 'boring-drilling'],
    joints: ['mortise-tenon'],
    woods: ['beech', 'hard-maple', 'cherry', 'black-walnut'],
    materials: [
      'Beam: 3/8" x 3/4" x 10" hardwood',
      'Fence block: 1-1/2" x 2-1/2" x 3" hardwood',
      'Wedge: small piece of hardwood',
      'Marking pin: cut nail, brad, or small screw (sharpened to a point)',
      'Finish: boiled linseed oil or wax'
    ],
    tools: [
      'Mortise chisel (3/8" or matching beam width)',
      'Bench chisels (1/4", 1/2")',
      'Block plane',
      'Small drill bit (for pin hole)',
      'Marking knife',
      'Small file or sharpening stone (for the pin)',
      'Mallet',
      'Workbench with vise'
    ],
    steps: [
      'Mill the beam to final dimension. It must be consistent in thickness along its full length.',
      'Square up the fence block. The reference face must be dead flat — this rides against your workpiece edge.',
      'Chop or bore the mortise through the fence block to fit the beam. The beam should slide smoothly but without slop.',
      'Cut the wedge mortise in the fence block at an angle that intersects the beam mortise.',
      'Shape and fit the wedge. When tapped in, it should lock the beam firmly. When tapped out, the beam should slide freely.',
      'Bore a small hole in the end of the beam for the marking pin. Angle it slightly toward the fence.',
      'Set and sharpen the pin. A cut nail filed to a knife edge works well — it scores across the grain cleanly.',
      'Test the gauge on scrap. Adjust the pin angle and sharpness until it scribes a clean, consistent line.',
      'Apply oil or wax to the beam and fence. The beam should slide smoothly.'
    ],
    tips: [
      'The pin should be sharpened to a knife edge, not a point. A knife edge severs fibers cleanly; a point tears them.',
      'Make the beam mortise just slightly oversize (a few thousandths) — this is what the wedge takes up.',
      'Beech is the traditional gauge wood. It wears smooth without becoming slippery.'
    ],
    relatedProjects: ['winding-sticks', 'roubo-workbench', 'mortise-tenon-practice']
  },
  {
    slug: 'miter-box',
    name: 'Wooden Miter Box',
    category: 'shop-essentials',
    difficulty: 1,
    summary: 'Build a simple hardwood miter box for accurate 90-degree and 45-degree cuts with a backsaw.',
    description: `A miter box guides your backsaw for precise crosscuts and 45-degree miter cuts. It's just a three-sided channel with saw kerfs cut at fixed angles, but it transforms the accuracy of your hand-sawing overnight. Every trim carpenter carried one before power miter saws existed.

The build is straightforward: two tall sides and a base, joined with screws or nails. The saw kerfs are the critical part — they must be cut precisely at 90 and 45 degrees, and they must be perfectly vertical. Take your time with the initial cuts, because every cut you make in this box for years to come will follow those kerfs.

Hardwood sides last longer because the saw kerfs stay tight. Softwood works but the kerfs widen with use and accuracy degrades. Build it from maple or oak and it'll serve you for a decade of clean cuts.`,
    estimatedTime: '1-2 hours',
    skills: ['sawing-to-a-line', 'marking-layout'],
    joints: ['butt-joint'],
    woods: ['hard-maple', 'white-oak', 'beech'],
    materials: [
      '2 boards, 3/4" x 3" x 16" (sides)',
      '1 board, 3/4" x 4" x 16" (base)',
      'Wood screws or cut nails',
      'Wood glue'
    ],
    tools: [
      'Backsaw (the same saw you\'ll use with the miter box)',
      'Combination square',
      'Miter square (45-degree)',
      'Marking knife',
      'Drill and countersink (if using screws)',
      'Clamps'
    ],
    steps: [
      'Mill all three pieces flat and square. The sides must be identical in height and length.',
      'Assemble the channel — sides glued and screwed to the base, standing upright. Check for square.',
      'When the glue is dry, mark the 90-degree kerf location precisely on both sides using a square and knife.',
      'Saw the 90-degree kerf through both sides simultaneously. Use light, careful strokes to start.',
      'Mark and saw the 45-degree kerfs (left and right) the same way. Use a miter square for layout.',
      'Test each kerf with a scrap piece. The cut ends should read true against your squares.',
      'Chamfer the top edges of the sides and smooth any rough spots.'
    ],
    tips: [
      'The initial kerf cuts define the accuracy of every future cut. Measure twice, cut once — literally.',
      'Clamp the miter box to your bench or sawhorse when using it. It must not move.',
      'When kerfs wear loose after heavy use, glue thin veneer shims into them to restore accuracy.'
    ],
    relatedProjects: ['bench-hook', 'shooting-board', 'picture-frame']
  },
  {
    slug: 'chisel-rack',
    name: 'Wall-Mounted Chisel Rack',
    category: 'shop-essentials',
    difficulty: 1,
    summary: 'Build a simple chisel rack that keeps your chisels organized, accessible, and protected edge-up on the wall.',
    description: `Chisels tossed in a drawer bang into each other and dull their edges. Chisels stored in a rack stay sharp, stay organized, and are always within arm's reach. This is one of those small shop projects that pays dividends every single day.

This rack uses a simple design: a hardwood board with angled slots that hold each chisel by the blade, edge up and handles hanging down. The slots are sized to each chisel width, and the board mounts to the wall at a slight angle so gravity keeps the chisels seated.

Build it to fit your specific chisel set. Measure each blade width, add 1/32" for clearance, and space the slots evenly. Label each slot if you like — the point is that every chisel has a home and you can see at a glance if one is missing.`,
    estimatedTime: '2-3 hours',
    skills: ['sawing-to-a-line', 'chopping', 'marking-layout', 'boring-drilling'],
    joints: ['dado'],
    woods: ['hard-maple', 'cherry', 'white-oak'],
    materials: [
      '1 board, 3/4" x 4" x 18" (or sized to your chisel collection)',
      '1 board, 3/4" x 2" x 18" (back support strip)',
      'Wall mounting screws',
      'Finish: shellac or oil'
    ],
    tools: [
      'Backsaw',
      'Bench chisels (to cut the slots — using chisels to make a chisel rack is poetic)',
      'Drill and bits',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet'
    ],
    steps: [
      'Measure each chisel blade width. Add 1/32" for clearance to each measurement.',
      'Lay out the slot positions on the board, evenly spaced, with about 1/2" between slots.',
      'Mark the slot depth — about 1" deep is enough to hold the chisels securely.',
      'Saw the sides of each slot to depth. Multiple saw kerfs within wide slots speed up waste removal.',
      'Chop out the waste between the saw cuts. Clean the slot bottoms flat.',
      'Test-fit each chisel in its slot. It should slide in and out smoothly without rattling.',
      'Attach the back support strip to create the wall-mounting angle (about 10-15 degrees from vertical).',
      'Mount to a wall stud with screws. Hang your chisels and admire the organization.'
    ],
    tips: [
      'Arrange chisels in width order — smallest on the left, largest on the right. You\'ll find them by feel.',
      'A shallow rabbet at the top of each slot prevents chisels from sliding forward off the rack.',
      'Mount the rack at eye level near your workbench. The best tool storage is the storage you actually use.'
    ],
    relatedProjects: ['tool-tote', 'bench-hook', 'dado-rabbet-practice']
  },

  // ─────────────────────────────────────────────
  // SMALL PROJECTS (18 projects)
  // ─────────────────────────────────────────────
  {
    slug: 'end-grain-cutting-board',
    name: 'End-Grain Cutting Board',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a durable end-grain cutting board that is gentle on knives and beautiful on the counter.',
    description: `An end-grain cutting board is one of the best first projects you can make. It's practical, it makes a great gift, and it teaches you about wood movement, grain orientation, and glue-up technique. The end grain presentation is also self-healing — knife edges push between the fibers rather than slicing across them.

The process involves gluing strips of hardwood into a slab, crosscutting that slab into strips, rotating them 90 degrees so the end grain faces up, and gluing them together again. It's a double glue-up that sounds complicated but is really just patience and good clamping technique.

Use tight-grained hardwoods that are food-safe: maple, walnut, cherry. Avoid open-pored woods like oak (they harbor bacteria) and anything with toxic properties. Finish with mineral oil or a food-safe cutting board oil — never use a film finish that will crack and peel under kitchen use.`,
    estimatedTime: '6-8 hours (plus drying time)',
    skills: ['hand-planing', 'sawing-to-a-line', 'marking-layout', 'sharpening'],
    joints: ['butt-joint'],
    woods: ['hard-maple', 'black-walnut', 'cherry'],
    materials: [
      '6-8 board feet of 8/4 hardwood (maple, walnut, cherry, or a mix)',
      'Wood glue (food-safe, Type II or III)',
      'Mineral oil or cutting board finish',
      'Rubber bumper feet (optional)'
    ],
    tools: [
      'Jack plane and smoothing plane',
      'Crosscut saw or backsaw',
      'Clamps (pipe clamps or parallel clamps — at least 4)',
      'Combination square',
      'Marking gauge',
      'Card scraper',
      'Sandpaper (120, 180, 220 grit)'
    ],
    steps: [
      'Mill your hardwood to consistent thickness — 1-1/2" to 2" works well for the first glue-up.',
      'Joint one edge of each piece dead straight. Arrange for color contrast if using mixed species.',
      'Glue and clamp the strips into a slab. Alternate clamps above and below to keep the panel flat.',
      'After the glue cures, flatten both faces with a jack plane. Get the slab to a consistent thickness.',
      'Crosscut the slab into strips 1-1/4" to 1-1/2" wide.',
      'Rotate each strip 90 degrees so the end grain faces up. Arrange the pattern you want.',
      'Glue and clamp the end-grain strips into the final board. Use cauls to keep everything flat.',
      'After curing, flatten the end-grain faces. A sharp smoothing plane or card scraper works best here.',
      'Round over the edges with a block plane and sandpaper. Apply multiple coats of mineral oil.'
    ],
    tips: [
      'End grain is brutal on plane blades. Sharpen frequently and take light cuts.',
      'Don\'t use red oak — the open pores are unsanitary for food contact.',
      'Let the board dry between oil coats. Three coats minimum, applied over three days.',
      'Rubber feet on the bottom prevent the board from sliding during use.'
    ],
    relatedProjects: ['edge-grain-cutting-board', 'serving-tray', 'knife-block']
  },
  {
    slug: 'edge-grain-cutting-board',
    name: 'Edge-Grain Cutting Board',
    category: 'small-projects',
    difficulty: 1,
    summary: 'Glue up a simple edge-grain cutting board — an ideal first project that teaches panel glue-ups and flattening.',
    description: `The edge-grain cutting board is the simplest version of the cutting board — just strips of hardwood glued edge to edge into a panel, then flattened and finished. It's less durable than end-grain (the knife cuts across the fibers rather than between them), but it's faster to build and still makes a beautiful, functional kitchen piece.

This is a perfect first-ever woodworking project. It teaches you to joint edges, manage a glue-up, flatten a panel, and apply a food-safe finish. Every one of those skills transfers directly to furniture work. And at the end, you have something useful instead of a practice piece gathering dust.

Choose tight-grained hardwoods and alternate species for visual interest. A maple board with walnut stripes is classic for a reason. Keep it 3/4" to 1" thick — too thin and it warps, too thick and it's heavy.`,
    estimatedTime: '3-4 hours (plus drying time)',
    skills: ['hand-planing', 'marking-layout', 'sawing-to-a-line'],
    joints: ['butt-joint'],
    woods: ['hard-maple', 'black-walnut', 'cherry'],
    materials: [
      '3-4 board feet of 4/4 hardwood',
      'Wood glue (food-safe)',
      'Mineral oil or cutting board finish'
    ],
    tools: [
      'Jack plane or jointer plane',
      'Block plane',
      'Clamps (3-4 pipe or bar clamps)',
      'Combination square',
      'Marking gauge',
      'Sandpaper (150, 220 grit)'
    ],
    steps: [
      'Rip your stock into strips 1-1/2" to 2" wide. Alternate species for a striped pattern.',
      'Joint one edge of each strip. Test the joint by holding two pieces together — no light should pass through.',
      'Dry-fit the entire panel. Check for gaps and adjust as needed.',
      'Apply glue to all mating edges. Work quickly — you have about 10 minutes of open time.',
      'Clamp the panel. Use cauls above and below to keep the board flat. Alternate clamp pressure evenly.',
      'After 24 hours, remove clamps and scrape off dried glue squeeze-out.',
      'Flatten both faces with a jack plane. Work diagonal to the grain first, then with the grain.',
      'Cut to final dimensions, round the edges with a block plane, and sand to 220 grit.',
      'Apply generous coats of mineral oil. Let each coat soak in before the next.'
    ],
    tips: [
      'Joint mating edges as a pair — clamp both strips together in the vise and plane them at the same time. Any angle error cancels out.',
      'Use way less glue than you think. A thin, even film beats puddles of squeeze-out.',
      'Let the board acclimatize to your kitchen humidity for a week before using it.'
    ],
    relatedProjects: ['end-grain-cutting-board', 'serving-tray', 'floating-shelf']
  },
  {
    slug: 'wooden-spoon',
    name: 'Carved Wooden Spoon',
    category: 'small-projects',
    difficulty: 1,
    summary: 'Carve a cooking spoon from a single piece of hardwood — a meditative project that teaches grain reading and tool control.',
    description: `Spoon carving strips woodworking down to its essence: you, a piece of wood, and a sharp edge. There's no joinery, no glue-up, no complex layout. Just reading the grain and removing everything that isn't a spoon. It's the oldest form of woodworking and one of the most satisfying.

Start with a blank split from green wood if you can — it carves much easier than dried stock. Cherry, birch, and walnut all make beautiful, food-safe spoons. Rough out the profile with a hatchet or bandsaw, shape the outside with a knife or spokeshave, and hollow the bowl with a hook knife or gouge.

Every spoon you carve teaches you something about grain direction, edge geometry, and the way different species behave under a blade. Carve ten spoons and your chisel work on every other project will improve. It's practice disguised as a finished product.`,
    estimatedTime: '2-3 hours',
    skills: ['paring', 'sharpening', 'choosing-the-right-chisel'],
    joints: [],
    woods: ['cherry', 'black-walnut', 'hard-maple', 'birch'],
    materials: [
      '1 blank, 2" x 2" x 12" (green wood ideal, dried works too)',
      'Food-safe finish: mineral oil, walnut oil, or beeswax blend'
    ],
    tools: [
      'Carving knife (sloyd knife)',
      'Hook knife or spoon gouge',
      'Hatchet or drawknife (for roughing)',
      'Spokeshave (optional)',
      'Sandpaper (180, 220 grit — optional, some carvers prefer knife-finished)',
      'Leather strop'
    ],
    steps: [
      'Select a blank with straight grain. If using green wood, split it from a log rather than sawing.',
      'Draw the spoon profile on the face of the blank — handle, neck, and bowl outline.',
      'Rough out the profile with a hatchet, coping saw, or bandsaw. Stay 1/4" outside your lines.',
      'Shape the handle and neck with a carving knife. Work with the grain — always cut downhill.',
      'Hollow the bowl with a hook knife or spoon gouge. Start shallow and deepen gradually.',
      'Refine the outside shape. Blend the bowl into the handle with smooth, flowing curves.',
      'Thin the bowl walls to an even thickness — about 3/16" for a cooking spoon.',
      'Sand lightly or leave knife-finished. Apply food-safe oil and let it cure.'
    ],
    tips: [
      'Green wood is dramatically easier to carve than dried. If you have access to fresh cherry or birch, use it.',
      'Keep your knife scary sharp. Strop every 10-15 minutes of carving.',
      'Grain direction changes around curves. Read the grain constantly and adjust your cut direction.',
      'Carve outdoors when possible. The shavings smell incredible and cleanup is effortless.'
    ],
    relatedProjects: ['end-grain-cutting-board', 'serving-tray', 'candle-holder']
  },
  {
    slug: 'pencil-box',
    name: 'Pencil Box',
    category: 'small-projects',
    difficulty: 1,
    summary: 'Build a small lidded pencil box using basic box joints — a great intro to box-making and simple hardware.',
    description: `A pencil box is the ideal first box project. It's small enough to complete in an afternoon, teaches you the fundamentals of box construction, and produces something genuinely useful. This version uses simple box joints at the corners and a sliding lid.

The sliding lid is the clever part — a groove plowed in the inside of both long sides captures a thin panel that slides in and out. No hinges, no hardware, no fuss. It's an ancient design that works as well today as it did in a medieval scribe's workshop.

Use this project to practice your box joints before moving on to dovetailed boxes. The tolerances are more forgiving, the pieces are small enough to re-make quickly if something goes wrong, and the finished box makes a thoughtful gift for anyone who keeps pencils, pens, or small tools on a desk.`,
    estimatedTime: '3-4 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout'],
    joints: ['box-joint', 'dado'],
    woods: ['cherry', 'hard-maple', 'black-walnut'],
    materials: [
      '1/4" x 3" x 30" hardwood (sides and ends)',
      '1/4" x 2-1/2" x 9" hardwood or plywood (sliding lid)',
      '1/4" x 2-1/2" x 9" hardwood (bottom panel)',
      'Wood glue'
    ],
    tools: [
      'Dovetail saw or backsaw',
      'Bench chisels (1/8", 1/4")',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Small clamps',
      'Block plane',
      'Plow plane or router plane (for lid groove)'
    ],
    steps: [
      'Mill all stock to consistent thickness — 1/4" for a delicate box.',
      'Cut the four sides to length. The two long sides and two short ends must pair exactly.',
      'Lay out and cut box joints on all four corners. Keep the fingers even and consistent.',
      'Plow a groove in both long sides and one short end for the sliding lid. The groove depth is about 1/8".',
      'Cut the bottom panel to fit inside the box. It sits in a groove or is simply glued to the bottom edges.',
      'Cut the sliding lid panel to fit the lid grooves with just enough clearance to slide freely.',
      'Dry-fit the entire box. The lid must slide in during assembly — it gets captured by the grooves.',
      'Glue and clamp the box joints. Do not glue the lid — it must remain free to slide.',
      'When dry, plane the joints flush and sand lightly. Apply finish.'
    ],
    tips: [
      'The lid groove must be cut before assembly — you can\'t plow it after the box is glued.',
      'Leave one short end without a lid groove so the lid can slide in and out from that end.',
      'A finger notch carved into the lid panel makes it easy to slide open.'
    ],
    relatedProjects: ['box-joint-practice', 'keepsake-box', 'dovetail-box']
  },
  {
    slug: 'keepsake-box',
    name: 'Keepsake Box',
    category: 'small-projects',
    difficulty: 3,
    summary: 'Build a fine keepsake box with mitered corners, a hinged lid, and a lined interior — a true gift-worthy project.',
    description: `A keepsake box is where craft meets sentiment. This is the box you build for someone you care about — for jewelry, letters, small treasures. The joinery, the wood selection, the finish, the lining — everything about it says you took the time to make something worth keeping.

This design uses mitered corners reinforced with splines for strength. The lid is sawn from the assembled box (so the grain wraps continuously around all four sides), then hinged with small brass hinges. The interior is lined with felt or leather. It's a complete study in fine box-making.

Take your time with this one. Choose beautiful wood — a single board of figured walnut or curly cherry elevates the entire piece. Cut your miters on a shooting board, fit the splines tight, and polish the finish until it glows. This box will outlast you.`,
    estimatedTime: '10-14 hours',
    skills: ['sawing-to-a-line', 'hand-planing', 'paring', 'marking-layout', 'sharpening'],
    joints: ['miter', 'butt-joint'],
    woods: ['black-walnut', 'cherry', 'hard-maple', 'mahogany'],
    materials: [
      '2-3 board feet of 4/4 figured hardwood',
      '1/4" hardwood for bottom panel',
      'Contrasting wood for splines (thin strips)',
      'Small brass hinges (pair)',
      'Felt or leather for interior lining',
      'Wood glue',
      'Finish: shellac, lacquer, or hand-rubbed oil and wax'
    ],
    tools: [
      'Backsaw or miter saw',
      'Shooting board with miter fence',
      'Block plane',
      'Bench chisels (1/4", 1/2")',
      'Marking gauge',
      'Marking knife',
      'Small clamps and band clamp',
      'Drill and small bits (for hinge mortises)',
      'Card scraper',
      'Sandpaper (180, 220, 320 grit)'
    ],
    steps: [
      'Select a single board with continuous grain. Resaw or rip it so the grain wraps around all four sides.',
      'Mill the sides to consistent thickness (3/8" to 1/2"). Cut to length with matching miters.',
      'Shoot all miters on a shooting board. Test-fit all four corners — they must close without gaps.',
      'Cut a groove in all four sides for the bottom panel. A plow plane or router plane works well.',
      'Glue the box with a band clamp or tape. Insert the bottom panel (unglued) during assembly.',
      'After the glue cures, cut spline slots across each miter joint on the table saw or with a backsaw and jig.',
      'Glue and insert contrasting-wood splines. Trim flush when dry.',
      'Saw the lid from the box on all four sides, keeping the kerf thin and consistent.',
      'Mortise for the hinges on the lid and box back. Install the hinges with small brass screws.',
      'Line the interior with felt. Apply your chosen finish to the exterior — multiple thin coats, rubbed between each.'
    ],
    tips: [
      'Resawing one board into four sides gives you continuous grain wrap — the mark of a fine box.',
      'Use a thin-kerf saw when separating the lid to minimize the gap between lid and body.',
      'Apply finish before installing the lining. Finish looks terrible on felt.',
      'Small brass hinges require precise mortising. Use a sharp chisel and work slowly.'
    ],
    relatedProjects: ['miter-practice', 'dovetail-box', 'pencil-box']
  },
  {
    slug: 'dovetail-box',
    name: 'Dovetail Box',
    category: 'small-projects',
    difficulty: 3,
    summary: 'Build a handsome dovetailed box that showcases your joinery skills and teaches complete box-building technique.',
    description: `The dovetail box is the quintessential hand-tool project. Four corners of hand-cut dovetails, a fitted bottom, and a clean lid. When you build one of these, you're joining a tradition that stretches back centuries. And unlike a practice joint sitting on a shelf, this is something you'll use.

This box uses through dovetails at all four corners. The bottom panel floats in a groove to allow for seasonal wood movement. The lid can be hinged, sliding, or simply fitted — choose the style that matches the box's purpose. A jewelry box wants hinges; a desk box might want a sliding lid.

Pick your best wood and your sharpest tools for this project. Dovetail boxes are honest — every joint is visible, every surface is exposed. There's no paint or padding to cover mistakes. What you cut is what you get, and that's the whole point.`,
    estimatedTime: '8-10 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'sharpening', 'hand-planing'],
    joints: ['through-dovetail', 'dado'],
    woods: ['cherry', 'black-walnut', 'white-oak', 'hard-maple'],
    materials: [
      '2-3 board feet of 4/4 hardwood',
      '1/4" hardwood or plywood for bottom panel',
      'Small brass hinges (optional)',
      'Wood glue',
      'Finish: oil, shellac, or lacquer'
    ],
    tools: [
      'Dovetail saw',
      'Bench chisels (1/4", 3/8", 1/2")',
      'Coping saw',
      'Dovetail marker',
      'Marking gauge',
      'Marking knife',
      'Mallet',
      'Block plane',
      'Plow plane or router plane (for bottom groove)',
      'Clamps and band clamp',
      'Card scraper'
    ],
    steps: [
      'Mill your stock to consistent thickness. Aim for 3/8" to 1/2" for a box of this size.',
      'Cut all four sides to length. Mark mating corners clearly — they must stay in order.',
      'Set your marking gauge to the stock thickness and scribe baselines on all pieces.',
      'Cut through dovetails on all four corners. Work in pairs — front/back and sides.',
      'Plow a groove for the bottom panel on all four inside faces, positioned above the bottom dovetail.',
      'Cut the bottom panel to fit inside the grooves with 1/16" clearance for expansion.',
      'Dry-fit the entire box with the bottom panel captured. Check for square.',
      'Glue the dovetails and assemble. The bottom panel floats — do not glue it.',
      'When dry, plane the dovetails flush. Saw the lid from the box or fit a separate lid panel.',
      'Apply finish. A hand-rubbed oil and wax finish lets the dovetails shine.'
    ],
    tips: [
      'Cut all your tails first in batch, then transfer to pin boards. Consistency comes from rhythm.',
      'The bottom panel groove hides inside the lowest dovetail — plan your dovetail spacing to accommodate it.',
      'Apply masking tape inside the box around the joint areas to catch glue squeeze-out in confined spaces.',
      'A card scraper is your best friend for finishing end grain on dovetail joints.'
    ],
    relatedProjects: ['through-dovetail-practice', 'keepsake-box', 'blanket-chest']
  },
  {
    slug: 'wall-shelf',
    name: 'Simple Wall Shelf',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a wall shelf with bracket supports and a backboard — practical storage that uses dado and rabbet joinery.',
    description: `A wall shelf is one of the most practical things you can build. Everyone needs more shelf space, and a hand-built shelf from real hardwood puts mass-produced particle board to shame. This design uses a shelf board housed in dadoes cut into shaped bracket supports, with a backboard for rigidity.

The bracket supports can be as simple or as ornate as you like — a plain angled brace works fine, but a scrolled bracket adds visual interest. The key structural element is the dado joint where the shelf meets the brackets. This provides a solid mechanical connection that doesn't depend on screws alone.

Build this from a single board of consistent stock. Match the grain across the shelf and brackets for a cohesive look. Mount it with screws into studs and it'll hold books, plants, bottles, or whatever else needs a home off the floor.`,
    estimatedTime: '4-6 hours',
    skills: ['sawing-to-a-line', 'chopping', 'marking-layout', 'hand-planing', 'boring-drilling'],
    joints: ['dado', 'rabbet', 'butt-joint'],
    woods: ['cherry', 'white-oak', 'hard-maple', 'black-walnut'],
    materials: [
      '1 board, 3/4" x 6" x 30" (shelf)',
      '2 boards, 3/4" x 6" x 8" (bracket supports)',
      '1 board, 1/2" x 4" x 30" (backboard)',
      'Wood screws (for wall mounting)',
      'Wood glue',
      'Finish: oil, shellac, or polyurethane'
    ],
    tools: [
      'Backsaw or crosscut saw',
      'Coping saw (for bracket shaping)',
      'Bench chisels (1/2", 3/4")',
      'Router plane',
      'Block plane',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Drill and countersink bit'
    ],
    steps: [
      'Mill all stock to final thickness. The shelf and brackets should be the same thickness.',
      'Design and cut the bracket profile. Draw it on the wood, then cut with a coping saw.',
      'Smooth the bracket curves with a rasp, file, or sandpaper. Both brackets must match.',
      'Cut dadoes in the brackets to receive the shelf board. The dados should be 1/4" to 3/8" deep.',
      'Cut a rabbet along the back edge of the shelf to receive the backboard.',
      'Fit the shelf into the bracket dadoes. It should seat firmly without forcing.',
      'Attach the backboard to the shelf and brackets with glue and small screws.',
      'Drill mounting holes through the backboard for wall screws.',
      'Apply finish to all surfaces. Mount to wall studs with appropriate screws.'
    ],
    tips: [
      'Always mount shelves into wall studs, not just drywall anchors. Real wood shelves are heavy and will hold heavy things.',
      'Use a level when mounting. Nothing looks worse than a crooked shelf in an otherwise square room.',
      'A wider shelf (8-10") can use three brackets instead of two for books and heavy items.'
    ],
    relatedProjects: ['floating-shelf', 'dado-rabbet-practice', 'bookshelf']
  },
  {
    slug: 'picture-frame',
    name: 'Mitered Picture Frame',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a hand-cut mitered picture frame with a rabbeted back for glass and artwork.',
    description: `A hand-built picture frame is one of the most appreciated gifts you can make. It wraps something meaningful — a photo, a drawing, a print — in wood you chose and shaped with your own hands. The joinery is simple (four miters), but the execution demands precision.

The frame stock gets a rabbet on the back to hold the glass, mat, artwork, and backing. The miters must close tightly with no gaps — this is where your shooting board earns its keep. Reinforcement comes from glue plus small brads, splines, or dowels across the miter joint.

Choose wood that complements the artwork. Dark walnut frames a watercolor beautifully. Light maple sets off a black-and-white photograph. The profile of the frame stock — flat, rounded, chamfered — is another design decision that changes the character of the finished piece.`,
    estimatedTime: '3-5 hours',
    skills: ['sawing-to-a-line', 'hand-planing', 'marking-layout', 'paring'],
    joints: ['miter', 'rabbet'],
    woods: ['black-walnut', 'cherry', 'hard-maple', 'white-oak'],
    materials: [
      '4 feet of frame stock, 3/4" x 1-1/2" (or milled from wider board)',
      'Picture glass or acrylic, cut to size',
      'Mat board (optional)',
      'Backing board (cardboard or thin plywood)',
      'Glazier points or turn buttons',
      'Wood glue',
      'Finish: oil, shellac, wax, or paint'
    ],
    tools: [
      'Backsaw or miter saw',
      'Shooting board with miter fence',
      'Block plane or jack plane',
      'Rabbet plane or router plane',
      'Marking gauge',
      'Miter square',
      'Marking knife',
      'Band clamp or corner clamps',
      'Small drill and bits'
    ],
    steps: [
      'Determine your frame size based on the artwork. Measure the glass, not the mat.',
      'Mill your frame stock to profile — cut the face shape you want (flat, rounded, chamfered).',
      'Cut the rabbet along the back inside edge, deep enough for glass + mat + art + backing.',
      'Miter-cut all four pieces to length. Remember: measure the inside of the rabbet for the artwork size.',
      'Shoot all eight miter surfaces on your shooting board. Each pair must total exactly 90 degrees.',
      'Dry-fit the frame with a band clamp. Check that all four corners close tight and the frame is square.',
      'Glue and clamp. Check for square immediately — once the glue sets, it\'s permanent.',
      'When dry, reinforce each corner with small brads, splines, or dowels driven across the joint.',
      'Apply finish. Install glass, mat, artwork, and backing. Secure with glazier points.'
    ],
    tips: [
      'A band clamp applies even pressure to all four miters simultaneously — it\'s the best clamp for frames.',
      'Measure for miters from the inside of the rabbet, not the outside of the frame. This is the most common mistake.',
      'Drill pilot holes for brads to prevent splitting near the miter corners.',
      'Hang the frame with picture wire, not a sawtooth hanger — wire is more adjustable and secure.'
    ],
    relatedProjects: ['miter-practice', 'shooting-board', 'keepsake-box']
  },
  {
    slug: 'serving-tray',
    name: 'Serving Tray',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a hardwood serving tray with raised sides and integrated handles — a beautiful and functional kitchen piece.',
    description: `A well-made serving tray gets used constantly — breakfast in bed, carrying drinks to the porch, holding a charcuterie spread for guests. This one uses a solid panel base with raised sides attached via rabbet joints. Handles are cut directly into the end pieces for a clean, integrated look.

The base panel is glued up from strips of hardwood, just like a cutting board. The sides are attached with rabbets and glue, standing about 1" to 1-1/2" tall. The end pieces get handle cutouts shaped with a coping saw and smoothed with a rasp. It's a complete box-making exercise at a manageable scale.

This makes an exceptional gift project. Choose contrasting woods for the base panel, shape the handles comfortably, and apply a food-safe finish. The recipient will reach for it every day.`,
    estimatedTime: '5-7 hours',
    skills: ['hand-planing', 'sawing-to-a-line', 'marking-layout', 'paring'],
    joints: ['rabbet', 'butt-joint'],
    woods: ['cherry', 'hard-maple', 'black-walnut'],
    materials: [
      '3-4 board feet of 4/4 hardwood for the base panel',
      '1/2" x 1-1/2" x 40" hardwood for the sides',
      'Wood glue (food-safe)',
      'Food-safe finish: mineral oil, cutting board wax, or salad bowl finish'
    ],
    tools: [
      'Jack plane',
      'Block plane',
      'Backsaw',
      'Coping saw (for handle cutouts)',
      'Rabbet plane or router plane',
      'Marking gauge',
      'Combination square',
      'Rasp and file',
      'Clamps',
      'Sandpaper (150, 220 grit)'
    ],
    steps: [
      'Glue up the base panel from strips. Alternate grain direction for stability. Aim for about 10" x 16".',
      'Flatten the base with a jack plane after the glue cures. Get both faces smooth.',
      'Cut the four side pieces to length. The end pieces are wider to accommodate handle cutouts.',
      'Cut rabbets on the bottom inside edge of all four sides to receive the base panel.',
      'Mark and cut the handle openings in the end pieces — elongated ovals, roughly 1" x 4".',
      'Smooth the handle cutouts with a rasp and sandpaper. Round all edges for comfort.',
      'Glue the sides to the base, trapping the base in the rabbets. Clamp evenly.',
      'When dry, flush up all joints with a block plane. Round over all exposed edges.',
      'Sand to 220 grit and apply multiple coats of food-safe finish.'
    ],
    tips: [
      'Make the handle cutouts large enough for adult hands — test with your own grip before final shaping.',
      'Round the handle edges generously. Sharp edges on a loaded tray are unpleasant.',
      'Cork or rubber feet on the bottom prevent sliding and protect table surfaces.',
      'A slightly concave base (hollowed a few thousandths) prevents rocking on flat surfaces.'
    ],
    relatedProjects: ['end-grain-cutting-board', 'edge-grain-cutting-board', 'wooden-spoon']
  },
  {
    slug: 'phone-stand',
    name: 'Phone Stand',
    category: 'small-projects',
    difficulty: 1,
    summary: 'Build a compact hardwood phone stand from a single block — a quick project that makes a great desk accessory or gift.',
    description: `A phone stand is one of those projects you can finish in a couple of hours and use immediately. It's essentially a shaped block of hardwood with a groove to hold your phone at a comfortable viewing angle. Simple, practical, and a chance to work with nice wood on a small scale.

The design is minimal: a wedge-shaped block with a groove cut across the top face to cradle the phone. The angle should prop the screen at about 60-70 degrees for comfortable viewing. A channel routed in the back can accommodate a charging cable so the phone can charge while displayed.

This is a perfect "use your offcuts" project. That leftover chunk of walnut from a bigger build? It's a phone stand. Choose dense hardwood so the stand has enough weight to stay put when you tap the screen.`,
    estimatedTime: '1-2 hours',
    skills: ['sawing-to-a-line', 'hand-planing', 'paring'],
    joints: [],
    woods: ['black-walnut', 'cherry', 'hard-maple', 'white-oak'],
    materials: [
      '1 block, 1-1/2" x 3" x 5" hardwood',
      'Finish: oil or wax',
      'Felt or cork for the bottom (optional)'
    ],
    tools: [
      'Backsaw',
      'Bench chisels (1/4", 1/2")',
      'Block plane',
      'Rasp or file',
      'Marking gauge',
      'Combination square',
      'Sandpaper (150, 220 grit)'
    ],
    steps: [
      'Select a dense hardwood offcut. Heavy wood makes a more stable stand.',
      'Decide on the viewing angle — 60-70 degrees from horizontal works for most phones.',
      'Shape the block with the angled face. Cut the angle with a backsaw and plane smooth.',
      'Mark and cut the phone groove across the angled face. It should be 1/4" wide and 3/8" deep.',
      'If desired, route a channel in the back for a charging cable.',
      'Round over all edges and corners with a block plane and sandpaper.',
      'Sand to 220 grit and apply oil or wax finish.',
      'Attach felt or cork to the bottom to prevent sliding and protect desk surfaces.'
    ],
    tips: [
      'Test the angle with your actual phone before committing to the final cut.',
      'The phone groove needs a slight backward lean so the phone doesn\'t tip forward.',
      'A heavy wood like white oak or walnut resists tipping when you tap the screen.'
    ],
    relatedProjects: ['candle-holder', 'pencil-box', 'wooden-spoon']
  },
  {
    slug: 'plant-stand',
    name: 'Plant Stand',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a tapered-leg plant stand using mortise and tenon joinery — a perfect small furniture project.',
    description: `A plant stand is a miniature table, and building one teaches you everything about table construction at a manageable scale. Four legs, four apron rails, and a top — the same structure as a dining table, just smaller. It's the ideal project for practicing mortise and tenon joinery in a real application.

The legs are tapered on the two inside faces, which gives the stand a graceful look without sacrificing strength. The apron rails connect to the legs with stub mortise and tenon joints — the backbone of all frame-and-panel construction. The top can be a solid board, a glued-up panel, or even a tiled surface.

Build a few of these in different heights and you've got a coordinated set for a room full of plants. They're also excellent "practice runs" before tackling a full-size table. The joinery is identical — just smaller.`,
    estimatedTime: '6-8 hours',
    skills: ['marking-layout', 'chopping', 'paring', 'sawing-to-a-line', 'hand-planing'],
    joints: ['mortise-tenon'],
    woods: ['cherry', 'white-oak', 'hard-maple', 'black-walnut'],
    materials: [
      '4 legs: 1-1/4" x 1-1/4" x 24" hardwood',
      '4 apron rails: 3/4" x 3" x 10" hardwood',
      '1 top: 3/4" x 10" x 10" hardwood (or glued panel)',
      'Wood glue',
      'Finish: oil, shellac, or polyurethane'
    ],
    tools: [
      'Mortise chisel (1/4" or 5/16")',
      'Bench chisels',
      'Backsaw or tenon saw',
      'Jack plane',
      'Block plane',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Clamps (4 bar clamps minimum)'
    ],
    steps: [
      'Mill the leg stock square. All four legs must be identical in cross-section.',
      'Lay out the mortises on the legs. Each leg gets two mortises on adjacent faces for the apron rails.',
      'Chop all eight mortises. Work from both faces and keep the walls clean.',
      'Cut tenons on all four apron rails to fit the mortises. Aim for a snug piston fit.',
      'Taper the legs on the two inside faces. Start the taper below the apron and take it to the foot.',
      'Dry-fit the entire base assembly. Check for square and flat.',
      'Glue and clamp the base in stages — two opposite sides first, then the other two.',
      'Prepare the top panel. Attach it to the base with screws through pocket holes or buttons.',
      'Apply finish. Sand between coats for a smooth surface.'
    ],
    tips: [
      'Taper only the inside faces of the legs. The outside faces stay straight and parallel to each other.',
      'Orient the tenons so they don\'t collide inside the leg where two rails meet at a corner.',
      'Use a waterproof finish if the stand will be near plants that get watered regularly.',
      'A 24" stand height works for floor-level plants. Adjust to suit your space and plant size.'
    ],
    relatedProjects: ['mortise-tenon-practice', 'shaker-side-table', 'nightstand']
  },
  {
    slug: 'candle-holder',
    name: 'Turned-Style Candle Holder',
    category: 'small-projects',
    difficulty: 1,
    summary: 'Shape a simple candle holder from a single block of hardwood — no lathe required, just chisels and rasps.',
    description: `You don't need a lathe to make a beautiful candle holder. This project uses a block of hardwood shaped with chisels, rasps, and sandpaper into a simple pedestal form. A shallow hole bored in the top holds a taper candle. It's a quick project that produces something elegant.

The design is intentionally minimal — a squared base transitioning into a faceted or rounded column, topped with a shallow cup for the candle. The shaping is done by chamfering the block progressively, taking it from square to octagonal to roughly round. It's hand-shaping at its most satisfying.

Make a matched set of three in different heights for a table centerpiece. Use the same wood species for a coordinated look, or mix species for contrast. These make wonderful hostess gifts and sell well at craft fairs.`,
    estimatedTime: '1-2 hours',
    skills: ['paring', 'sharpening', 'choosing-the-right-chisel'],
    joints: [],
    woods: ['cherry', 'black-walnut', 'hard-maple', 'white-oak'],
    materials: [
      '1 block, 2" x 2" x 6" hardwood (per holder)',
      'Finish: oil or beeswax',
      'Felt pad for bottom (optional)'
    ],
    tools: [
      'Bench chisels (1/2", 3/4")',
      'Rasp (coarse and fine)',
      'Block plane',
      'Forstner bit or spade bit (sized to candle base)',
      'Drill or brace',
      'Sandpaper (120, 180, 220 grit)',
      'Marking gauge'
    ],
    steps: [
      'Select a dense hardwood block. Square it up on all faces.',
      'Mark the candle socket centered on the top face.',
      'Bore the candle socket with a Forstner bit — about 3/4" diameter and 1/2" deep for a standard taper.',
      'Mark the transition point where the square base becomes the column.',
      'Chamfer the column section from square to octagonal with a block plane.',
      'Continue chamfering from octagonal to roughly round using a rasp.',
      'Blend the transition between base and column with smooth curves.',
      'Sand progressively from 120 to 220 grit. Apply oil or wax finish.',
      'Add a felt pad to the bottom to protect table surfaces.'
    ],
    tips: [
      'A Forstner bit makes a cleaner, flatter-bottomed socket than a spade bit.',
      'Test the socket depth with an actual candle before finishing. Too shallow and the candle wobbles.',
      'Beeswax finish is thematically perfect and smells great on warm wood near a lit candle.'
    ],
    relatedProjects: ['wooden-spoon', 'phone-stand', 'pencil-box']
  },
  {
    slug: 'coat-rack',
    name: 'Shaker-Style Peg Coat Rack',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a wall-mounted coat rack with turned or whittled pegs set into a shaped rail — classic Shaker utility.',
    description: `The Shaker peg rail is one of the most iconic pieces of American woodworking. A simple rail with turned pegs, mounted at chair-rail height around a room, and suddenly everything has a place — coats, hats, chairs, brooms, baskets. It's storage as philosophy: a place for everything, everything in its place.

This build uses a shaped hardwood rail with pegs set into bored holes at even intervals. You can turn the pegs on a lathe, whittle them by hand, or buy ready-made Shaker pegs. The rail gets a decorative profile on the front edge — a simple bead or chamfer is traditional.

Mount the rail to wall studs with countersunk screws hidden behind the pegs. A single 36" rail with five pegs is enough for an entryway. Run a full rail around a mudroom and you'll wonder how you ever lived without it.`,
    estimatedTime: '4-5 hours',
    skills: ['boring-drilling', 'hand-planing', 'marking-layout', 'paring'],
    joints: ['dowel-joint'],
    woods: ['cherry', 'hard-maple', 'white-oak', 'ash'],
    materials: [
      '1 rail board, 3/4" x 3-1/2" x 36" hardwood',
      '5 pegs: 3/8" x 3-1/2" (turned, whittled, or purchased)',
      'Wood glue',
      'Wall screws (3" or longer, for studs)',
      'Finish: oil, shellac, or paint'
    ],
    tools: [
      'Brace and bit or drill with 3/8" brad-point bit',
      'Block plane or hand plane',
      'Bench chisels (for chamfering)',
      'Carving knife or spokeshave (if whittling pegs)',
      'Marking gauge',
      'Combination square',
      'Tape measure',
      'Level (for mounting)',
      'Sandpaper (180, 220 grit)'
    ],
    steps: [
      'Mill the rail board flat and to final width. Shape the front profile — a chamfer or bead along the top edge.',
      'Lay out the peg hole locations evenly along the rail. Center them vertically.',
      'Bore the peg holes at a slight upward angle (about 5 degrees). This tips the peg up so things don\'t slide off.',
      'If making pegs by hand: whittle or turn 5 pegs from straight-grained hardwood. Each should have a 3/8" tenon.',
      'Test-fit each peg in its hole. The fit should be snug with light mallet pressure.',
      'Glue the pegs into the rail. Wipe excess glue immediately.',
      'Drill and countersink mounting holes between the pegs — position them behind where the pegs hide the hardware.',
      'Apply finish to the entire assembly.',
      'Mount to wall studs with a level. Use long screws for a secure hold.'
    ],
    tips: [
      'The slight upward angle on the pegs is critical — horizontal pegs let coats slide off.',
      'Cherry pegs in a maple rail (or vice versa) provides a subtle contrast that looks sharp.',
      'Traditional Shaker peg rails were mounted at "chair rail height" — about 52-54" from the floor.',
      'If mounting in a kitchen or mudroom, use a waterproof finish. Wet coats drip.'
    ],
    relatedProjects: ['wall-shelf', 'floating-shelf', 'boring-drilling']
  },
  {
    slug: 'knife-block',
    name: 'Slotted Knife Block',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a countertop knife block from laminated hardwood with custom-sized slots for your specific knives.',
    description: `A custom knife block holds your knives exactly right because you build it around the knives you actually own. No universal slots that are too wide for your paring knife and too narrow for your cleaver. Every slot fits its knife perfectly, and the block sits on your counter looking like it belongs.

The construction uses a lamination technique: you glue up a stack of boards with spacers between them that create the slots. The spacer thickness determines the slot width, and you control the depth by how far down the spacers extend. It's a clever approach that produces clean, consistent slots without any difficult internal cutting.

Choose a dense hardwood that complements your kitchen. Walnut is a classic choice — dark, handsome, and heavy enough to stay put when you pull a knife. End the slots about 1" from the bottom so the knife tips don't push through.`,
    estimatedTime: '5-7 hours (plus drying time)',
    skills: ['hand-planing', 'sawing-to-a-line', 'marking-layout'],
    joints: ['butt-joint'],
    woods: ['black-walnut', 'hard-maple', 'cherry'],
    materials: [
      '6-8 boards, 3/4" x 3" x 10" hardwood',
      'Spacer material: thin plywood, cardboard, or veneer (various thicknesses to match knife widths)',
      'Wood glue',
      'Rubber feet for the bottom',
      'Finish: mineral oil or cutting board finish (food-safe)'
    ],
    tools: [
      'Jack plane or jointer plane',
      'Block plane',
      'Backsaw',
      'Clamps (4-6 bar clamps)',
      'Combination square',
      'Marking gauge',
      'Sandpaper (120, 180, 220 grit)'
    ],
    steps: [
      'Measure each knife blade — width and length. Plan your slot layout on paper first.',
      'Mill all boards to identical thickness and joint the mating faces dead flat.',
      'Cut spacers from thin stock (plywood, veneer, or cardboard) to match each knife blade thickness plus 1/16" clearance.',
      'Cut spacers to shape — they define where the slot starts and stops. Leave 1" of solid wood at the bottom.',
      'Dry-clamp the entire assembly with spacers in position. Test-fit each knife in its slot.',
      'Glue and clamp the lamination. Apply glue to the board faces only — not the spacers.',
      'After curing, scrape and plane the exterior faces flat and smooth.',
      'Shape the block: taper the top at an angle, round the edges, create the profile you want.',
      'Sand to 220 grit. Apply food-safe mineral oil finish. Attach rubber feet.'
    ],
    tips: [
      'Measure your knives carefully and add 1/16" clearance. Tight slots dull knife edges.',
      'The block should tilt back slightly — either shape it or add taller feet in the back.',
      'Use cardboard spacers for prototyping the slot layout before committing to the final lamination.',
      'Leave the inside of the slots unfinished — raw wood grips the blade and prevents sliding.'
    ],
    relatedProjects: ['end-grain-cutting-board', 'edge-grain-cutting-board', 'serving-tray']
  },
  {
    slug: 'shoe-rack',
    name: 'Shoe Rack',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a simple two-tier shoe rack with dowel rails and mortised legs — keeps the entryway organized.',
    description: `A shoe rack brings order to the entryway chaos of boots, sneakers, and sandals piled by the door. This design uses four legs with dowel rails spanning between them at two heights. Shoes rest on the dowels with airflow underneath, so they dry out instead of getting musty.

The joinery is straightforward: round dowel rails set into bored holes in the legs. It's the same joint used in Windsor chairs and ladders — a round tenon in a round mortise. The trick is boring the holes at consistent depth and keeping them parallel so the rails sit level.

This is an excellent project for practicing your boring technique. You'll drill multiple holes that all need to be the same depth and angle. A brace and bit gives you more control than a power drill for this kind of work, and the results speak for themselves.`,
    estimatedTime: '4-6 hours',
    skills: ['boring-drilling', 'marking-layout', 'sawing-to-a-line', 'hand-planing'],
    joints: ['dowel-joint'],
    woods: ['white-oak', 'ash', 'hard-maple', 'cherry'],
    materials: [
      '4 legs: 1-1/2" x 1-1/2" x 16" hardwood',
      '6 dowel rails: 3/4" diameter x 28" hardwood dowels',
      'Wood glue',
      'Finish: oil or polyurethane'
    ],
    tools: [
      'Brace and bit with 3/4" auger bit (or drill press)',
      'Backsaw',
      'Block plane',
      'Marking gauge',
      'Combination square',
      'Tape measure',
      'Mallet',
      'Clamps',
      'Sandpaper (150, 220 grit)'
    ],
    steps: [
      'Mill the leg stock square. All four legs must be identical in length and cross-section.',
      'Lay out the dowel hole locations on the legs. Three dowels per tier, two tiers, on two faces of each leg.',
      'Bore all dowel holes to a consistent depth (about 3/4" deep). Use a depth stop on your bit.',
      'Cut all dowel rails to identical length. The exposed length plus two tenon depths should match your desired rack width.',
      'Test-fit the entire assembly dry. All rails should seat fully and the rack should sit flat.',
      'Glue and assemble one side frame first (two legs with three rails each at both tier heights).',
      'When the first side is dry, connect it to the second side with the remaining rails.',
      'Check for square and flat. Adjust before the glue sets.',
      'Plane or sand any squeeze-out. Apply a durable finish — shoe racks take abuse.'
    ],
    tips: [
      'Bore all holes on the same face before rotating the leg. This keeps your angles consistent.',
      'A depth stop on your auger bit is essential — inconsistent hole depth means wobbly rails.',
      'Use a durable finish like polyurethane or spar varnish. Wet shoes and boots are tough on bare wood.',
      'Size the rack to fit your entryway first, then decide on shoe capacity. A rack that doesn\'t fit doesn\'t get used.'
    ],
    relatedProjects: ['coat-rack', 'plant-stand', 'step-stool']
  },
  {
    slug: 'step-stool',
    name: 'Step Stool',
    category: 'small-projects',
    difficulty: 3,
    summary: 'Build a sturdy step stool with splayed legs and through-tenon joinery — safe enough for daily kitchen use.',
    description: `A step stool is one of the most-used items in any household. Reaching the top shelf, changing a lightbulb, helping kids reach the sink — a solid step stool earns its place within the first week. This design uses splayed legs through-tenoned into a thick top for rock-solid stability.

The splayed legs are the key to this stool's stability. They angle outward in two directions, creating a wide footprint that resists tipping. The compound-angle through tenons are the trickiest part of the build — the mortises must match the splay angle precisely, or the legs won't seat properly.

Build this from hard maple or white oak — species that can take a beating without denting or splitting. The top should be at least 1-1/4" thick for strength and to provide enough mortise depth. A well-built step stool will handle 300 pounds without complaint and last for generations.`,
    estimatedTime: '6-8 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling'],
    joints: ['wedged-through-tenon', 'mortise-tenon'],
    woods: ['hard-maple', 'white-oak', 'ash', 'hickory'],
    materials: [
      '1 top: 1-1/4" x 10" x 14" hardwood (or glued-up panel)',
      '4 legs: 1-1/4" x 1-1/4" x 12" hardwood',
      '2 stretchers: 3/4" x 2" x 12" hardwood',
      'Hardwood wedge stock',
      'Wood glue',
      'Finish: oil or polyurethane'
    ],
    tools: [
      'Mortise chisel',
      'Bench chisels (1/2", 3/4")',
      'Backsaw or tenon saw',
      'Jack plane',
      'Block plane',
      'Sliding bevel',
      'Marking gauge',
      'Combination square',
      'Mallet',
      'Brace and bit (for stretcher mortises)',
      'Clamps'
    ],
    steps: [
      'Prepare the top — glue up a panel if needed and flatten it to at least 1-1/4" thick.',
      'Decide on the leg splay angle — 10-12 degrees is a good balance of stability and aesthetics.',
      'Lay out the four through-mortises on the top. These must match the compound splay angle.',
      'Chop the mortises carefully at the correct angle. Use a sliding bevel as a visual reference.',
      'Shape the legs and cut matching compound-angle tenons on the tops.',
      'Lay out and cut mortises in the legs for the stretchers that connect opposing legs.',
      'Cut tenons on the stretchers. These are simple right-angle tenons.',
      'Dry-fit the entire assembly. The stool should sit flat on all four legs without rocking.',
      'Glue the stretchers to the legs first. Then glue the leg assemblies into the top.',
      'Drive hardwood wedges into the tenon ends on top. Trim flush when dry. Apply finish.'
    ],
    tips: [
      'Compound angles are confusing. Make a full-size drawing or mock-up before cutting mortises.',
      'The wedges on top should run perpendicular to the grain of the top — this prevents splitting.',
      'Test the stool on a known-flat surface. Four legs on an uneven floor will always rock.',
      'Round over the top edges generously. Bare shins will thank you.'
    ],
    relatedProjects: ['basic-stool', 'sawhorses', 'mortise-tenon-practice']
  },
  {
    slug: 'wine-rack',
    name: 'Wine Rack',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a countertop wine rack using interlocking lap joints — holds six bottles and shows off the joinery.',
    description: `This wine rack uses a classic interlocking grid design: two sets of boards with matching half-lap notches that slide together to form a stable lattice. Each diamond-shaped cell cradles a wine bottle. It's clever engineering that looks complicated but is really just careful repetition of one simple joint.

The half-lap notches are cut at matching intervals on each board. One set is notched from the top, the other from the bottom. When they interlock, the grid stands rigid without any glue or fasteners. The joints themselves are the structure.

This project is a masterclass in batch production. You'll cut the same joint over and over, developing rhythm and consistency. Every notch must be the same width and depth, or the grid won't assemble cleanly. It's the kind of precise repetition that builds real skill.`,
    estimatedTime: '4-5 hours',
    skills: ['sawing-to-a-line', 'chopping', 'marking-layout'],
    joints: ['lap-joint'],
    woods: ['cherry', 'white-oak', 'hard-maple', 'black-walnut'],
    materials: [
      '6-8 boards, 1/2" x 4" x 18" hardwood (quantity depends on rack size)',
      'Finish: oil, shellac, or lacquer',
      'No glue or hardware needed'
    ],
    tools: [
      'Backsaw',
      'Bench chisels (1/2")',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Sandpaper (180, 220 grit)'
    ],
    steps: [
      'Determine rack size. A 3x2 grid holds 6 bottles and requires 5 boards (3 vertical, 2 horizontal).',
      'Mill all boards to identical thickness and width. Consistency is critical for a tight-fitting grid.',
      'Lay out the notch positions on all boards. Use one board as a master template and transfer marks.',
      'Set your marking gauge to half the board width — this is the notch depth.',
      'Saw the notch walls on all boards. Batch-cut for consistency.',
      'Chop out the waste between the saw cuts. The notch width must match the board thickness exactly.',
      'Test-fit two boards together. The notch should slide together with firm hand pressure and sit flush.',
      'Assemble the entire grid. All notches interlock simultaneously.',
      'Sand any rough spots and apply finish. The rack holds together by friction alone.'
    ],
    tips: [
      'Cut all notches just slightly tight — you can always pare a whisker off, but you can\'t add wood back.',
      'Label each board and notch position during dry-fitting so reassembly goes smoothly.',
      'The diamond cells should be sized for standard 750ml wine bottles — about 3-1/2" across.',
      'A drop of wax in each notch prevents squeaking when bottles are added or removed.'
    ],
    relatedProjects: ['lap-joint-practice', 'shoe-rack', 'knife-block']
  },
  {
    slug: 'floating-shelf',
    name: 'Floating Shelf',
    category: 'small-projects',
    difficulty: 2,
    summary: 'Build a hollow floating shelf with hidden French cleat mounting — appears to defy gravity on your wall.',
    description: `A floating shelf has no visible brackets or supports — it appears to grow right out of the wall. The secret is a French cleat or hidden mounting bracket concealed inside a hollow shelf. The shelf is actually a thin-walled box that slides over the mounting hardware and looks solid from every angle.

Construction is a two-part process: build the mounting cleat that screws into the wall studs, then build the hollow shelf that wraps around it. The shelf is a torsion box — a rigid, lightweight structure made from a thin skin over an internal frame. It's the same engineering used in aircraft wings and modern doors.

This project teaches you to think about hidden structure. The skill of creating something that looks effortless while concealing the engineering beneath is at the heart of fine woodworking. Everyone who sees this shelf will ask how it stays up.`,
    estimatedTime: '4-6 hours',
    skills: ['sawing-to-a-line', 'marking-layout', 'hand-planing', 'boring-drilling'],
    joints: ['rabbet', 'dado', 'butt-joint'],
    woods: ['white-oak', 'black-walnut', 'cherry', 'hard-maple'],
    materials: [
      '1/2" x 8" x 30" hardwood (top and bottom skins)',
      '3/4" x 2" x 28" hardwood (internal frame pieces)',
      '3/4" x 2" x 30" hardwood (French cleat, ripped at 45 degrees)',
      'Wall screws (3" or longer for studs)',
      'Wood glue',
      'Finish: oil, shellac, or polyurethane'
    ],
    tools: [
      'Backsaw or crosscut saw',
      'Block plane',
      'Bench chisels (1/2")',
      'Router plane (for dados)',
      'Marking gauge',
      'Combination square',
      'Drill and countersink',
      'Level',
      'Clamps',
      'Sandpaper (180, 220 grit)'
    ],
    steps: [
      'Rip the French cleat stock at 45 degrees. One half mounts to the wall, the other attaches to the shelf.',
      'Mount the wall cleat to studs with long screws. Use a level — this determines if the shelf is straight.',
      'Build the internal shelf frame — a rectangular skeleton that fits over the wall cleat.',
      'Attach the shelf\'s mating cleat to the back of the internal frame.',
      'Glue the top skin to the frame. Let it overhang the front and sides to hide the construction.',
      'Glue the bottom skin to the frame. The front edge should meet the top skin cleanly.',
      'Apply solid hardwood edge banding to the front and sides to conceal the plywood edges.',
      'Plane and sand all edges flush. The shelf should look like a solid block of wood.',
      'Apply finish. Slide the shelf onto the wall cleat to install.'
    ],
    tips: [
      'The French cleat angle must match on both pieces — cut them from the same board at the same time.',
      'Keep the shelf depth under 10" unless you add extra wall support. Deep floating shelves sag under weight.',
      'Solid hardwood edge banding is worth the effort. It\'s the difference between a real shelf and an IKEA hack.',
      'Always mount into studs. Drywall anchors will pull out under load — it\'s not a matter of if, but when.'
    ],
    relatedProjects: ['wall-shelf', 'dado-rabbet-practice', 'bookshelf']
  },

  // ─────────────────────────────────────────────
  // FURNITURE (first 10 of 20)
  // ─────────────────────────────────────────────
  {
    slug: 'farmhouse-table',
    name: 'Farmhouse Dining Table',
    category: 'furniture',
    difficulty: 4,
    summary: 'Build a solid hardwood farmhouse table with a thick plank top, breadboard ends, and a trestle or apron base.',
    description: `The farmhouse table is the centerpiece of a home. Families gather around it, meals are shared on it, homework gets done on it, and it takes the abuse of daily life without complaint. Building one from solid hardwood is a serious undertaking, but the result is a piece of furniture that will serve your family for generations.

This design uses a thick slab top — either a single wide board or a glued-up panel from narrower stock — with breadboard ends to keep it flat across the seasons. The base can be a traditional four-leg apron frame or a trestle design with stretcher and through-wedged tenons. Both are beautiful; choose based on your style and legroom preferences.

The joinery is substantial. The breadboard ends use tongue-and-groove or sliding dovetails with elongated screw holes that allow the top to expand and contract. The base uses heavy mortise and tenon joints, often drawbored. This is the project where all your practice joints come together into something real.`,
    estimatedTime: '40-60 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'drawboring', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'breadboard-end', 'tongue-groove', 'drawbored', 'wedged-through-tenon'],
    woods: ['white-oak', 'cherry', 'hard-maple', 'black-walnut', 'ash'],
    materials: [
      '40-50 board feet of 8/4 hardwood for the top',
      '20-30 board feet of 8/4 hardwood for the base',
      'Hardwood pegs for drawboring',
      'Tabletop fastener buttons or figure-8 clips',
      'Wood glue',
      'Finish: oil and wax, or polyurethane for durability'
    ],
    tools: [
      'Jack plane, jointer plane, smoothing plane',
      'Mortise chisel (3/8", 1/2")',
      'Bench chisels (full set)',
      'Tenon saw and crosscut saw',
      'Brace and bit set',
      'Marking gauge',
      'Combination square and framing square',
      'Marking knife',
      'Mallet',
      'Pipe clamps (at least 6)',
      'Bar clamps',
      'Winding sticks',
      'Card scraper'
    ],
    steps: [
      'Design your table dimensions. A standard dining table is 30" tall, 36-40" wide, and 72-96" long.',
      'Mill and glue up the top panel. Joint mating edges carefully and clamp with alternating pressure.',
      'Flatten the top with a jack plane (traversing cuts) and jointer plane (with-the-grain passes).',
      'Cut the breadboard end tongues on the top and matching grooves in the breadboard pieces.',
      'Attach the breadboard ends with centered pegs and elongated slots that allow seasonal movement.',
      'Mill the leg stock and cut all mortises. Four legs need two mortises each for apron rails.',
      'Cut tenons on all apron rails. Fit each one individually — no two joints are identical.',
      'Dry-fit the base and check for square and matching diagonals.',
      'Glue and drawbore the base joints. Assemble in stages — two end frames first, then connect.',
      'Attach the top to the base using tabletop buttons or figure-8 clips — never glue the top to the apron.'
    ],
    tips: [
      'Never glue the top directly to the base. The top must be free to expand and contract across its width.',
      'Breadboard ends look great but must allow movement. Elongated screw holes or slotted pegs are essential.',
      'Flatten the top before finishing. Even 1/32" of twist is visible at table length.',
      'A quartersawn top moves less across the seasons — worth the premium for a table this important.'
    ],
    relatedProjects: ['shaker-side-table', 'dining-bench', 'roubo-workbench']
  },
  {
    slug: 'shaker-side-table',
    name: 'Shaker Side Table',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build an elegant Shaker-style side table with tapered legs, a dovetailed drawer, and a simple overhanging top.',
    description: `The Shaker side table is a masterclass in restraint. No ornament, no excess, nothing that doesn't serve a purpose — and yet it's one of the most beautiful forms in American furniture. The proportions do all the work: slim tapered legs, a delicate apron, and a top that overhangs just enough to cast a thin shadow line.

This build includes a single dovetailed drawer, which adds a layer of complexity and teaches you drawer construction. The drawer front uses half-blind dovetails (so the joinery is hidden from the front), the back uses through dovetails, and the bottom floats in a groove. It's the same drawer construction used in fine furniture for centuries.

Take your time with the proportions. A side table lives or dies on its visual balance. The legs should feel light but not spindly. The apron should feel present but not heavy. The top should float above it all. When the proportions are right, the table looks effortless.`,
    estimatedTime: '25-35 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing', 'sharpening'],
    joints: ['mortise-tenon', 'half-blind-dovetail', 'through-dovetail', 'dado'],
    woods: ['cherry', 'hard-maple', 'black-walnut', 'white-oak'],
    materials: [
      '8-10 board feet of 4/4 hardwood for top, aprons, and drawer',
      '4 board feet of 8/4 hardwood for legs',
      '2 board feet of 4/4 secondary wood for drawer sides and back (poplar is traditional)',
      '1/4" plywood or solid wood for drawer bottom',
      'Wooden drawer runners',
      'Drawer pull or knob',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: oil and wax, shellac, or lacquer'
    ],
    tools: [
      'Mortise chisel (1/4")',
      'Bench chisels (full set)',
      'Dovetail saw',
      'Backsaw or tenon saw',
      'Coping saw',
      'Jack plane, block plane, smoothing plane',
      'Plow plane or router plane',
      'Marking gauge',
      'Combination square',
      'Dovetail marker',
      'Marking knife',
      'Mallet',
      'Clamps',
      'Card scraper'
    ],
    steps: [
      'Design the table proportions on paper first. Standard side table: 26" tall, 18" x 24" top.',
      'Mill the leg stock. Cut the legs square, then taper the two inside faces below the apron.',
      'Cut all eight mortises in the legs (two per leg). Keep them at least 1/2" from the outside face.',
      'Cut tenons on all four apron rails. The front apron is narrower to accommodate the drawer opening.',
      'Build the drawer guides and runners. These attach to the inside of the side aprons.',
      'Dry-fit the base and check for square, flat, and matching diagonals.',
      'Glue and clamp the base in stages. Attach drawer guides before the second glue-up.',
      'Build the drawer: half-blind dovetails at the front, through dovetails at the back, grooved bottom.',
      'Fit the drawer to its opening. It should slide smoothly with minimal side play.',
      'Prepare the top, attach with buttons, and apply your chosen finish.'
    ],
    tips: [
      'Shaker furniture relies entirely on proportion. Study original pieces before designing your own.',
      'Cherry darkens beautifully with age and sunlight — a cherry Shaker table is a living piece.',
      'The drawer must be fitted after the base is assembled. Table construction always shifts slightly during glue-up.',
      'Use a secondary wood (poplar, pine) for drawer sides. It\'s traditional, saves money, and actually works better.'
    ],
    relatedProjects: ['farmhouse-table', 'nightstand', 'half-blind-dovetail-practice']
  },
  {
    slug: 'hall-table',
    name: 'Hall Table (Console Table)',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build a narrow hall table with clean lines and mortise-and-tenon joinery — perfect for entryways and narrow spaces.',
    description: `A hall table sits against a wall in an entryway, hallway, or living room. It's typically narrow (10-14" deep) and long (36-48"), providing a surface for keys, mail, a lamp, or decorative items. The narrow depth makes it ideal for tight spaces where a full table won't fit.

The construction is similar to a dining table but lighter. Four legs, four apron rails, and a top — all connected with mortise and tenon joints. Because the table is narrow, the end aprons are short, which means the short-grain glue surface in those joints matters. Consider adding corner blocks or angled braces for extra rigidity.

This is an excellent project for practicing the complete table-building process at a smaller, more manageable scale. The skills transfer directly to dining tables, desks, and larger casework. And a well-made hall table makes a strong impression in the first room guests see when they enter your home.`,
    estimatedTime: '15-20 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing'],
    joints: ['mortise-tenon', 'haunched-tenon'],
    woods: ['cherry', 'white-oak', 'black-walnut', 'hard-maple'],
    materials: [
      '6-8 board feet of 4/4 hardwood for top and aprons',
      '4 board feet of 8/4 hardwood for legs',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: oil, shellac, or polyurethane'
    ],
    tools: [
      'Mortise chisel (1/4" or 5/16")',
      'Bench chisels',
      'Backsaw or tenon saw',
      'Jack plane, smoothing plane',
      'Block plane',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Clamps (bar clamps, at least 4)',
      'Card scraper'
    ],
    steps: [
      'Design the table: 30-32" tall, 12" deep, 42" long is a classic hall table proportion.',
      'Mill the legs and cut them to length. Taper the two inside faces if desired.',
      'Lay out and chop the mortises. Each leg gets two mortises on adjacent faces.',
      'Cut tenons on all four aprons. Use haunched tenons on the top rails for added strength.',
      'Dry-fit the entire base. Check for square, flat feet, and level top.',
      'Glue up in stages: two end assemblies first, then connect with the long aprons.',
      'Glue up and flatten the top panel. Overhang the front and ends by 3/4" to 1".',
      'Attach the top with buttons or figure-8 clips. Do not glue the top.',
      'Apply finish. Multiple thin coats rubbed smooth between applications.'
    ],
    tips: [
      'A narrow table is more prone to racking (side-to-side wobble). Consider adding a lower shelf or stretchers.',
      'Haunched tenons resist twisting forces better than plain tenons — important for narrow frames.',
      'Cherry and walnut are the classic choices. Both develop rich patinas over time.',
      'Keep the top thickness under 7/8" for a hall table. A thick top looks clunky on a narrow piece.'
    ],
    relatedProjects: ['shaker-side-table', 'farmhouse-table', 'nightstand']
  },
  {
    slug: 'tv-console',
    name: 'TV Console / Media Cabinet',
    category: 'furniture',
    difficulty: 4,
    summary: 'Build a low media console with frame-and-panel doors and adjustable shelves — real furniture with real joinery.',
    description: `A TV console is a substantial casework project that combines frame-and-panel construction, case joinery, door hanging, and shelf fitting into one piece. It's the kind of project that teaches you to think like a cabinetmaker — everything must work together, and the sequence of operations matters as much as the individual joints.

The case uses dado and rabbet joinery for the top, bottom, and fixed dividers. The doors are traditional frame-and-panel construction with mortise-and-tenon frames holding floating panels. Adjustable shelves rest on pins in a series of holes drilled in the case sides. It's a complete education in cabinet construction.

Plan the interior around your equipment. Measure your receiver, game console, cable box — whatever goes inside. Allow ventilation space and plan for cable management. A beautiful cabinet that cooks your electronics is a failure, no matter how perfect the dovetails are.`,
    estimatedTime: '30-45 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'dado', 'rabbet', 'tongue-groove', 'haunched-tenon'],
    woods: ['cherry', 'white-oak', 'black-walnut', 'hard-maple'],
    materials: [
      '30-40 board feet of 4/4 hardwood for case, doors, and top',
      '8-10 board feet of 4/4 secondary wood for internal parts',
      '1/4" plywood for door panels and case back',
      'Shelf pins (brass or steel)',
      'Door hinges (butt hinges or European concealed)',
      'Door catches or magnetic latches',
      'Door pulls or knobs',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: lacquer, shellac, or oil and wax'
    ],
    tools: [
      'Mortise chisel (1/4")',
      'Bench chisels (full set)',
      'Backsaw and tenon saw',
      'Plow plane or router plane',
      'Jack plane, smoothing plane',
      'Block plane',
      'Router plane (for dadoes)',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Brace and bit (for shelf pin holes)',
      'Mallet',
      'Clamps (many)',
      'Card scraper'
    ],
    steps: [
      'Design the console around your equipment. Typical dimensions: 18-20" tall, 18" deep, 48-60" wide.',
      'Mill case sides, top, bottom, and any fixed dividers. Cut dadoes for the fixed shelves and bottom.',
      'Cut rabbets in the case sides for the back panel.',
      'Drill shelf pin holes in the case sides using a drilling jig for consistent spacing.',
      'Assemble the case carcase. Check for square and flat — everything depends on a square case.',
      'Build the door frames using mortise and tenon joints. Cut panel grooves in the inside edges.',
      'Fit the floating panels in the door frames. The panels must not be glued — they need to move.',
      'Hang the doors in the case openings. Mortise for the hinges carefully.',
      'Build and fit the adjustable shelves. They should slide in and out easily.',
      'Prepare and attach the top. Apply finish to all components.'
    ],
    tips: [
      'Build the case first, then fit the doors to the actual openings. Never build doors to the drawings — build them to the reality.',
      'Drill ventilation holes in the back panel or leave the back partially open. Electronics generate heat.',
      'A shelf-pin drilling jig (a strip of hardboard with pre-drilled holes) ensures perfectly aligned shelf holes.',
      'Frame-and-panel doors look best with the grain running vertically. Match grain across multiple doors if possible.'
    ],
    relatedProjects: ['bookshelf', 'blanket-chest', 'farmhouse-table']
  },
  {
    slug: 'dining-bench',
    name: 'Dining Bench',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build a solid dining bench with through-tenon trestle base — seats three comfortably and pairs with a farmhouse table.',
    description: `A dining bench is a farmhouse table's natural companion. Where chairs create individual stations, a bench creates community — people sit closer, pass dishes easier, and kids can squeeze in at the end. A well-built bench is also structurally simpler than a chair, making it a more approachable furniture project.

This design uses a trestle base: two shaped end supports connected by a long stretcher, with through-tenons locked by wedges or keys. The top is a thick slab that sits on the trestle base, attached with buttons to allow seasonal movement. The result is a bench that's strong enough for three adults and beautiful enough for a dining room.

The trestle design has survived centuries because it works. The wide feet provide stability, the stretcher prevents racking, and the through-wedged tenons are a visible declaration of craftsmanship. Build this bench to match your farmhouse table and you have a coordinated set that will serve your family for decades.`,
    estimatedTime: '15-20 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing', 'drawboring'],
    joints: ['wedged-through-tenon', 'tusk-tenon', 'mortise-tenon'],
    woods: ['white-oak', 'cherry', 'ash', 'hard-maple'],
    materials: [
      '10-12 board feet of 8/4 hardwood for the top',
      '6-8 board feet of 8/4 hardwood for the trestle base',
      'Hardwood wedge stock',
      'Tabletop fastener buttons',
      'Wood glue (for the top panel only — the base is wedge-locked)',
      'Finish: oil and wax, or polyurethane'
    ],
    tools: [
      'Jack plane, jointer plane',
      'Mortise chisel (1/2" or 5/8")',
      'Bench chisels (full set)',
      'Tenon saw and crosscut saw',
      'Brace and bit',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps (for top glue-up)',
      'Card scraper',
      'Winding sticks'
    ],
    steps: [
      'Design the bench to match your table height minus the thickness of a cushion (if using). Typical bench height: 17-18".',
      'Glue up and flatten the top slab. A bench top should be at least 1-1/4" thick and 11-12" wide.',
      'Design and cut the trestle end supports. Shape them with a coping saw — traditional profiles include a gentle arch at the bottom.',
      'Cut the through-mortises in the trestle ends for the stretcher tenons.',
      'Cut the stretcher to length with through-tenons on both ends. Add keyholes for tusk tenons if using that design.',
      'Cut the tusk keys from dense hardwood. They should taper gently for a self-locking fit.',
      'Dry-fit the trestle base. The stretcher should pull the two end supports firmly together when the tusks are driven.',
      'Cut mortises or slots in the top of the trestle ends for tabletop buttons.',
      'Attach the top with buttons. The top must be free to move side to side.',
      'Drive the tusk tenon keys tight. Apply finish to all components.'
    ],
    tips: [
      'Match the bench wood, height, and finish to your dining table for a coordinated look.',
      'Tusk tenons are better than wedged tenons for a bench — they can be disassembled for moving.',
      'The bench top overhangs the base by 1-2" on each end. This gives visual lightness and prevents bruised thighs.',
      'Round over the top edges generously. A sharp-edged bench is uncomfortable after an hour of sitting.'
    ],
    relatedProjects: ['farmhouse-table', 'basic-stool', 'roubo-workbench']
  },
  {
    slug: 'bookshelf',
    name: 'Freestanding Bookshelf',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build a solid hardwood bookshelf with dado-jointed shelves and a face frame — classic casework that stores what matters most.',
    description: `A bookshelf is one of the most satisfying furniture projects because it goes into service immediately and stays in service for decades. Fill it with books, photos, and objects that matter to you, and it becomes the backdrop to your life. This version uses traditional casework construction: dado-jointed shelves, a face frame, and a plywood or solid-wood back for racking resistance.

The case sides have dadoes cut across their inside faces to receive the fixed shelves. These dados provide both alignment and mechanical strength — the shelves can't sag or shift because they're captured in the grooves. Additional shelves can be made adjustable using shelf pins in a column of holes.

Pay attention to shelf span and thickness. A 36" span of 3/4" wood will sag under a full load of books within a year. Either shorten the span, thicken the shelves, or add a center divider. This is engineering, not aesthetics — sagging shelves are the mark of a poorly designed bookcase.`,
    estimatedTime: '20-30 hours',
    skills: ['sawing-to-a-line', 'chopping', 'hand-planing', 'marking-layout', 'boring-drilling', 'paring'],
    joints: ['dado', 'rabbet', 'mortise-tenon', 'tongue-groove'],
    woods: ['cherry', 'white-oak', 'hard-maple', 'black-walnut', 'ash'],
    materials: [
      '25-35 board feet of 4/4 hardwood for case sides, shelves, and face frame',
      '1/4" plywood for the back panel',
      'Shelf pins (for adjustable shelves)',
      'Wood glue',
      'Finish: shellac, lacquer, or oil and wax'
    ],
    tools: [
      'Backsaw and crosscut saw',
      'Router plane (essential for dadoes)',
      'Bench chisels (1/2", 3/4")',
      'Jack plane, smoothing plane',
      'Block plane',
      'Plow plane (for rabbets)',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Brace and bit (for shelf pin holes)',
      'Clamps (pipe clamps, bar clamps)',
      'Drill and countersink'
    ],
    steps: [
      'Design the bookshelf around your books. Standard shelves are 10-12" deep, with 10-12" between shelves.',
      'Mill the case sides and shelves. All pieces must be flat, square, and consistent in thickness.',
      'Cut dadoes in the case sides for each fixed shelf. A router plane guarantees consistent depth.',
      'Cut a rabbet in the back edges of the case sides for the back panel.',
      'Drill shelf pin holes in the case sides using a drilling jig. Space them 1-1/2" to 2" apart.',
      'Dry-fit the case. All shelves should seat fully in their dadoes and the case should be square.',
      'Build and attach the face frame using mortise and tenon joints. The face frame hides the dado and shelf pin edges.',
      'Glue and assemble the case. Check for square immediately — a bookcase must be square or it looks wrong.',
      'Attach the back panel with small nails or screws. The back provides most of the racking resistance.',
      'Build adjustable shelves to fit, apply finish, and load it up.'
    ],
    tips: [
      'Never span more than 32" without a center support. Books are heavier than people think.',
      'The back panel is structural. Don\'t skip it or use cardboard — use 1/4" plywood nailed into a rabbet.',
      'Shelf pin holes can be hidden behind the face frame if you plan the layout carefully.',
      'A slight crown (1/16" higher in the middle) in long shelves counteracts sag under load.'
    ],
    relatedProjects: ['sliding-dovetail-practice', 'dado-rabbet-practice', 'tv-console']
  },
  {
    slug: 'ladder-shelf',
    name: 'Ladder Shelf',
    category: 'furniture',
    difficulty: 2,
    summary: 'Build a leaning ladder shelf with angled sides and dowel-jointed shelves — open, airy storage for any room.',
    description: `A ladder shelf leans against a wall at an angle, with shelves that get progressively narrower as they go up. It's a modern-rustic design that provides open display storage with a light, airy footprint. No back panel, no doors, no heavy casework — just two angled uprights with shelves spanning between them.

The construction is simpler than a traditional bookshelf. The uprights lean at about 15 degrees from vertical, and the shelves are doweled or dadoed into the inside faces. Each shelf is a different depth — deepest at the bottom, shallowest at the top — which creates the ladder profile and keeps the whole assembly balanced.

This is an excellent project for learning to work with angles. The shelf dadoes must be cut perpendicular to the floor (not perpendicular to the uprights), which means each one is cut at a compound angle. It sounds tricky, but with careful layout it's perfectly manageable.`,
    estimatedTime: '8-12 hours',
    skills: ['sawing-to-a-line', 'marking-layout', 'hand-planing', 'boring-drilling', 'chopping'],
    joints: ['dado', 'dowel-joint', 'butt-joint'],
    woods: ['white-oak', 'cherry', 'ash', 'hard-maple'],
    materials: [
      '2 uprights: 3/4" x 3" x 66" hardwood',
      '4-5 shelves: 3/4" hardwood, varying depths (14" to 6")',
      'Rubber bumpers for wall contact and feet',
      'Wood glue',
      'Finish: oil, shellac, or polyurethane'
    ],
    tools: [
      'Backsaw',
      'Bench chisels (1/2", 3/4")',
      'Router plane',
      'Jack plane, block plane',
      'Marking gauge',
      'Sliding bevel',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Clamps',
      'Level'
    ],
    steps: [
      'Determine the lean angle — 10-15 degrees from vertical. Mark this on a story stick.',
      'Mill the two uprights to identical dimensions. Mark shelf locations on both simultaneously.',
      'Calculate the shelf dado angles — they must be level (perpendicular to plumb), not square to the uprights.',
      'Cut dadoes in both uprights for each shelf. Use a sliding bevel set to the correct angle.',
      'Mill each shelf to its width. Bottom shelf is widest (12-14"), top shelf is narrowest (5-6").',
      'Dry-fit the entire assembly leaning against a wall. Check that all shelves are level.',
      'Glue the shelves into the dadoes. Assemble flat on the floor, then tilt up against the wall.',
      'Attach rubber bumpers to the top of the uprights (wall contact) and bottom of the feet (floor protection).',
      'Apply finish. Lean the shelf against the wall at the designed angle.'
    ],
    tips: [
      'Cut both uprights at the same time — clamp them together and mark all shelf locations simultaneously.',
      'The bottom of the uprights should be cut at the lean angle so they sit flat on the floor.',
      'Don\'t overload the top shelves. Put heavy items (books, pots) on the bottom and light items (photos, plants) on top.',
      'A safety strap from the top of one upright to a wall anchor prevents tipping in homes with small children.'
    ],
    relatedProjects: ['bookshelf', 'floating-shelf', 'wall-shelf']
  },
  {
    slug: 'nightstand',
    name: 'Nightstand',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build a bedside nightstand with a dovetailed drawer and open shelf — a complete small cabinet project.',
    description: `A nightstand is a small cabinet that does real work: holds a lamp, a glass of water, a book, your phone, and whatever else you need within arm's reach of the pillow. This design features an open shelf below the tabletop and a dovetailed drawer in the apron — small enough to build in a long weekend, complex enough to teach you genuine cabinetmaking.

The frame-and-leg construction uses the same mortise-and-tenon structure as a table, but with the addition of a drawer pocket and an intermediate shelf. The drawer slides on wooden runners attached to the side aprons. It's the same construction used in Shaker and Federal-period furniture — proven over centuries.

Build a matching pair and you've furnished both sides of a bed with handmade furniture. Use the same wood species as your bed frame (or a complementary species) and the bedroom feels intentional and cohesive.`,
    estimatedTime: '20-25 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing', 'sharpening'],
    joints: ['mortise-tenon', 'half-blind-dovetail', 'through-dovetail', 'dado', 'sliding-dovetail'],
    woods: ['cherry', 'black-walnut', 'white-oak', 'hard-maple'],
    materials: [
      '6-8 board feet of 4/4 hardwood for top, aprons, and shelf',
      '3-4 board feet of 8/4 hardwood for legs',
      '2 board feet of 4/4 secondary wood (poplar or pine) for drawer sides and back',
      '1/4" plywood or solid wood for drawer bottom',
      'Wooden drawer runners and guides',
      'Drawer pull or knob',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: oil and wax, shellac, or lacquer'
    ],
    tools: [
      'Mortise chisel (1/4")',
      'Bench chisels (full set)',
      'Dovetail saw',
      'Backsaw or tenon saw',
      'Coping saw',
      'Jack plane, block plane, smoothing plane',
      'Plow plane or router plane',
      'Marking gauge',
      'Combination square',
      'Dovetail marker',
      'Marking knife',
      'Mallet',
      'Clamps',
      'Card scraper'
    ],
    steps: [
      'Design the nightstand: 24-26" tall, 16-18" wide, 14-16" deep. Adjust to match your bed height.',
      'Mill the legs and cut to length. Consider tapering the inside faces below the shelf.',
      'Cut all mortises in the legs for the apron rails and the intermediate shelf supports.',
      'Cut tenons on all apron rails. The front apron is divided to create the drawer opening.',
      'Cut dados or sliding dovetails in the side aprons for the intermediate shelf.',
      'Dry-fit the base and verify the drawer opening dimensions.',
      'Glue the base in stages. Install drawer guides and runners after the first stage.',
      'Build the drawer with half-blind dovetails at the front and through dovetails at the back.',
      'Fit the drawer to its opening. It should glide smoothly and close flush with the front apron.',
      'Prepare and attach the top with buttons. Cut and install the shelf. Apply finish.'
    ],
    tips: [
      'Build the nightstand in pairs if you need two. Batch-cutting the joinery is faster than building one at a time.',
      'The drawer should close flush with the front apron or set back 1/16" — never proud.',
      'A quartersawn top moves less across the seasons. Worth the extra cost for furniture near a window.',
      'Route a small notch in the back for phone charging cables. Your future self will thank you.'
    ],
    relatedProjects: ['shaker-side-table', 'hall-table', 'blanket-chest']
  },
  {
    slug: 'blanket-chest',
    name: 'Blanket Chest',
    category: 'furniture',
    difficulty: 4,
    summary: 'Build a six-board blanket chest with dovetailed corners, a hinged lid, and a till — a traditional storage piece with serious joinery.',
    description: `The blanket chest is one of the oldest furniture forms in the Western tradition. It's a big dovetailed box with a hinged lid, used to store blankets, quilts, linens, and whatever else needs to be tucked away. It sits at the foot of a bed or against a wall and doubles as a bench.

This build is essentially a large-scale dovetail box. The four sides are joined with through dovetails (or half-blind dovetails on the front), the bottom is a wide panel floating in grooves, and the lid is a solid slab attached with long hinges. Inside, a small till (a shallow box attached to one end) provides a tray for smaller items.

The scale of this project is what makes it challenging. Cutting dovetails in 18"-wide boards requires confidence and consistency. The lid must be flat and stay flat — a warped lid on a blanket chest is visible from across the room. Choose your stock carefully and let it acclimate before cutting.`,
    estimatedTime: '30-40 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'hand-planing', 'sharpening', 'boring-drilling'],
    joints: ['through-dovetail', 'half-blind-dovetail', 'tongue-groove', 'rabbet', 'dado'],
    woods: ['white-oak', 'cherry', 'eastern-white-pine', 'black-walnut'],
    materials: [
      '30-40 board feet of 4/4 or 5/4 hardwood for sides, bottom, and lid',
      'Long hinges (piano hinge or strap hinges)',
      'Lid support (chain or hinged stay to prevent slamming)',
      'Cedar strips for lining (optional — traditional for moth resistance)',
      'Wood glue',
      'Finish: oil and wax, milk paint (traditional), or shellac'
    ],
    tools: [
      'Dovetail saw',
      'Large bench chisels (1/2", 3/4", 1")',
      'Coping saw',
      'Jack plane, jointer plane, smoothing plane',
      'Plow plane (for bottom groove)',
      'Router plane',
      'Marking gauge',
      'Combination square',
      'Dovetail marker',
      'Marking knife',
      'Mallet',
      'Long pipe clamps',
      'Brace and bit (for hinge screws)',
      'Winding sticks',
      'Card scraper'
    ],
    steps: [
      'Design the chest: 18-20" tall, 18" deep, 36-42" long. Adjust to fit your space.',
      'Mill wide boards for the sides. If you must glue up panels, keep the glue lines away from dovetail locations.',
      'Cut through dovetails on all four corners. For a traditional look, cut large, widely spaced dovetails.',
      'Plow a groove in all four sides for the bottom panel. Position it above the lowest dovetail.',
      'Prepare the bottom panel — a wide glued-up panel or frame-and-panel construction.',
      'Dry-fit the entire chest with the bottom captured. Check for square and flat.',
      'Glue and assemble the chest. Work methodically — get one end seated before driving the other.',
      'Build the till: a shallow tray that hangs inside one end of the chest. Attach it with small cleats.',
      'Flatten and fit the lid. Attach it with long hinges. Install a lid stay to prevent slamming.',
      'Line the interior with cedar strips if desired. Apply finish to the exterior.'
    ],
    tips: [
      'A lid stay or chain is not optional if children are in the house. A heavy lid can injure small fingers.',
      'Large dovetails (3-4 per side) are traditional and faster to cut than many small ones. They also look more appropriate at this scale.',
      'Cedar lining is traditional for blanket chests — the oils repel moths and smell wonderful.',
      'Milk paint over pine is the traditional American finish for blanket chests. Oil over hardwood is the fine-furniture approach.'
    ],
    relatedProjects: ['through-dovetail-practice', 'dovetail-box', 'dining-bench']
  },
  {
    slug: 'basic-stool',
    name: 'Three-Legged Stool',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build a classic three-legged stool with turned or whittled legs set into a shaped seat — never wobbles, always sits flat.',
    description: `Three legs. That's the genius of this design. A three-legged stool can never wobble, no matter how uneven the floor. It's a mathematical certainty — three points always define a plane. Four-legged stools need a flat floor; three-legged stools just need a floor. Period.

This stool uses round legs drilled into a thick, shaped seat at compound angles that splay outward for stability. The legs can be turned on a lathe, shaved on a shaving horse, or whittled with a drawknife. The seat gets a shallow dish carved into the top for comfort — your body weight settles into the hollow and the stool feels like it was made for you.

The compound drilling angles are the crux of this build. Each leg hole must be bored at a specific splay angle and azimuth so the three legs land in a stable triangle. A sightline gauge or drilling guide helps, but ultimately you need to trust your eye and your brace. Windsor chairmakers have been boring these holes by feel for centuries.`,
    estimatedTime: '8-12 hours',
    skills: ['boring-drilling', 'hewing', 'hand-planing', 'paring', 'marking-layout', 'choosing-the-right-chisel'],
    joints: ['dowel-joint', 'wedged-through-tenon'],
    woods: ['hard-maple', 'white-oak', 'ash', 'hickory', 'cherry'],
    materials: [
      '1 seat blank: 2" x 12" x 12" hardwood (a round slab is ideal)',
      '3 leg blanks: 1-1/2" x 1-1/2" x 20" hardwood (riven or sawn)',
      'Hardwood wedge stock',
      'Wood glue (optional — wedges alone can hold)',
      'Finish: oil or wax'
    ],
    tools: [
      'Brace and bit (1" or 1-1/8" auger)',
      'Drawknife or spokeshave',
      'Adze or scorp (for seat carving — a gouge works too)',
      'Travisher (optional, for final seat shaping)',
      'Jack plane',
      'Carving gouge (1" sweep)',
      'Compass or dividers (for laying out leg positions)',
      'Sliding bevel',
      'Mallet',
      'Shaving horse or vise'
    ],
    steps: [
      'Prepare the seat blank — shape it round or oval. Thickness should be at least 1-3/4".',
      'Dish the seat top with an adze, scorp, or gouge. Create a shallow concave surface for comfort.',
      'Lay out the three leg positions on the bottom of the seat. Space them in an equilateral triangle.',
      'Set your splay angle — about 15-18 degrees outward from vertical. Use a sliding bevel as a reference.',
      'Bore the three leg holes through the seat at the splay angle. Sight from two directions to keep the angle true.',
      'Shape the three legs with a drawknife and spokeshave. Taper them from thick at the top to thinner at the foot.',
      'Fit each leg to its hole. The tenon should fit snugly with about 1/2" protruding through the top of the seat.',
      'Saw a wedge slot in the top of each leg tenon, perpendicular to the seat grain.',
      'Glue and assemble. Drive hardwood wedges into each tenon to lock the legs in place.',
      'Trim the tenons and wedges flush with the seat surface. Apply finish.'
    ],
    tips: [
      'Three legs never wobble. If the stool rocks, one leg is too long — trim it.',
      'Rive the legs from a straight-grained billet if possible. Riven legs are stronger than sawn.',
      'The wedge slot must be perpendicular to the seat grain. Parallel slots risk splitting the seat.',
      'A comfortable seat dish makes the difference between a stool you use and one you ignore. Carve it deep enough to feel.'
    ],
    relatedProjects: ['step-stool', 'dining-bench', 'timber-peg-practice']
  },
  {
    slug: 'coffee-table',
    name: 'Coffee Table',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build a low, proportioned coffee table with mortise and tenon joinery and a solid wood top.',
    description: `A coffee table sits at the center of your living room and takes daily punishment — feet, books, mugs, and the occasional elbow. It needs to be strong, stable, and low enough to reach from the couch. This design uses four legs joined by apron rails with traditional mortise and tenon joints.

The top can be a single wide board or a glued-up panel. Keep it between 16" and 18" tall — lower than you think looks right on paper. A shelf stretcher between the legs adds storage and rigidity. Finish with something durable; this piece sees more wear than most furniture in your home.`,
    estimatedTime: '20-30 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'sharpening'],
    joints: ['mortise-tenon', 'tongue-groove'],
    woods: ['white-oak', 'cherry', 'black-walnut', 'hard-maple'],
    materials: [
      '12-15 board feet of 4/4 hardwood for the top',
      '8-10 board feet of 4/4 hardwood for base and aprons',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: oil and wax or polyurethane'
    ],
    tools: [
      'Jack plane and smoothing plane',
      'Mortise chisel (1/4", 3/8")',
      'Bench chisels',
      'Tenon saw',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps',
      'Card scraper'
    ],
    steps: [
      'Design your dimensions — typical coffee table is 48" long, 24" wide, 17" tall.',
      'Mill and glue up the top panel. Joint edges carefully for invisible seams.',
      'Flatten the top with traversing cuts, then plane with the grain.',
      'Cut the four legs to length and mill them square.',
      'Lay out and chop two mortises in each leg for the apron rails.',
      'Cut tenons on all apron rails and fit each joint individually.',
      'Dry-fit the base, check for square, then glue and clamp in stages.',
      'Attach the top with tabletop buttons to allow seasonal movement.',
      'Sand or scrape smooth and apply your chosen finish.'
    ],
    tips: [
      'A coffee table lower than 18" feels more inviting — resist the urge to make it taller.',
      'Use tabletop buttons, never glue, to attach the top to the apron.',
      'Quartersawn stock moves less and resists cup rings better than flatsawn.'
    ],
    relatedProjects: ['shaker-side-table', 'farmhouse-table', 'hall-table']
  },
  {
    slug: 'writing-desk',
    name: 'Writing Desk',
    category: 'furniture',
    difficulty: 4,
    summary: 'A clean-lined writing desk with a drawer, tapered legs, and mortise and tenon joinery throughout.',
    description: `A proper writing desk is a quiet piece of furniture — it doesn't shout, it just works. This design uses four tapered legs joined by apron rails with a single drawer in the front apron. The top is a flat, smooth panel sized for comfortable writing.

The drawer is the real test of your skills. A well-fitted drawer slides smoothly on wooden runners with no slop and no binding. Use half-blind dovetails for the front and through dovetails for the back. The rest of the desk is straightforward mortise and tenon work. Keep the proportions light — this isn't a workbench.`,
    estimatedTime: '30-40 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'sharpening'],
    joints: ['mortise-tenon', 'half-blind-dovetail', 'through-dovetail', 'dado-rabbet'],
    woods: ['cherry', 'hard-maple', 'black-walnut', 'white-oak'],
    materials: [
      '15-20 board feet of 4/4 hardwood',
      '4 board feet of secondary wood for drawer sides and bottom',
      'Wooden drawer pulls or brass hardware',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: oil and wax'
    ],
    tools: [
      'Jack plane, jointer plane, smoothing plane',
      'Dovetail saw',
      'Tenon saw',
      'Mortise chisel (1/4", 3/8")',
      'Bench chisels (full set)',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Coping saw',
      'Pipe clamps'
    ],
    steps: [
      'Design the desk — typical dimensions are 48" wide, 24" deep, 30" tall.',
      'Mill all stock and glue up the top panel.',
      'Flatten and smooth the top.',
      'Taper the legs on two inside faces — start the taper below the apron.',
      'Cut mortises in each leg and tenons on all apron rails.',
      'Build the drawer box with half-blind dovetails at the front and through dovetails at the back.',
      'Fit the drawer bottom into a groove plowed in the drawer sides and front.',
      'Install wooden drawer runners on the inside of the side aprons.',
      'Assemble the base, attach the top with buttons, and fit the drawer.',
      'Apply finish — a smooth writing surface rewards extra care with the scraper.'
    ],
    tips: [
      'Wax the drawer runners and bottom edges for smooth action.',
      'Taper only the two inside faces of each leg — it keeps the outside corners crisp.',
      'Size the drawer with a paper-thickness gap on each side. Seasonal movement will close it.'
    ],
    relatedProjects: ['shaker-side-table', 'nightstand', 'half-blind-dovetail-practice']
  },
  {
    slug: 'kitchen-table',
    name: 'Kitchen Table',
    category: 'furniture',
    difficulty: 4,
    summary: 'A sturdy four-leg kitchen table built to handle daily meals, prep work, and years of hard use.',
    description: `The kitchen table works harder than any other piece of furniture in your home. It needs to handle hot pots, spilled liquids, knife marks, and the constant sliding of plates and cutting boards. Build it from dense hardwood with beefy joinery and a finish that can take a beating.

This design uses a four-leg apron frame with drawbored mortise and tenon joints. The top is a thick glued-up panel with breadboard ends to keep it flat. Unlike a dining room table, a kitchen table should feel like a workhorse — a little heavier, a little tougher, built to earn its scars.`,
    estimatedTime: '35-50 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'drawboring', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'breadboard-end'],
    woods: ['hard-maple', 'white-oak', 'ash', 'beech'],
    materials: [
      '35-45 board feet of 8/4 hardwood for the top',
      '15-20 board feet of 8/4 hardwood for legs and aprons',
      'Hardwood drawbore pegs',
      'Tabletop fastener buttons',
      'Wood glue',
      'Finish: polyurethane or catalyzed lacquer for durability'
    ],
    tools: [
      'Jack plane, jointer plane, smoothing plane',
      'Mortise chisel (3/8", 1/2")',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Brace and bit set',
      'Marking gauge',
      'Combination square and framing square',
      'Marking knife',
      'Mallet',
      'Pipe clamps (at least 6)',
      'Winding sticks'
    ],
    steps: [
      'Design your table for the space — standard kitchen tables run 30" tall, 36" wide, 60-72" long.',
      'Mill and glue up the top from 8/4 stock for a thick, substantial slab.',
      'Flatten the top with traversing jack plane passes, then jointer plane with the grain.',
      'Cut breadboard ends with tongue-and-groove and elongated peg holes for movement.',
      'Mill the legs square from 8/4 or laminated 4/4 stock.',
      'Chop mortises and cut tenons for all apron-to-leg joints.',
      'Drawbore each joint — offset the peg holes by 1/16" to pull the shoulders tight.',
      'Assemble the base in stages: end frames first, then long rails.',
      'Attach the top with buttons and apply a durable finish.',
      'Let the finish cure fully before putting the table to work.'
    ],
    tips: [
      'Use 8/4 stock for the top if you can get it — a thick top feels and sounds like real furniture.',
      'Maple and white oak handle kitchen abuse better than softer species.',
      'Drawboring makes this table bombproof — the pegs pull every joint tight without clamps.',
      'Apply at least three coats of finish on the top. Kitchens are hard on wood.'
    ],
    relatedProjects: ['farmhouse-table', 'dining-bench', 'mortise-tenon-practice']
  },
  {
    slug: 'rocking-chair',
    name: 'Rocking Chair',
    category: 'furniture',
    difficulty: 5,
    summary: 'A compound-angle challenge — build a traditional rocking chair with shaped seat, turned legs, and steam-bent rockers.',
    description: `The rocking chair is one of the hardest projects in woodworking because nothing about it is square. The legs splay at compound angles, the seat is carved, the back is bent or angled, and the rockers must be shaped to a smooth curve that balances the whole chair. Get any of these wrong and the chair rocks unevenly or feels uncomfortable.

Start with a proven plan — this isn't a project to design from scratch on your first attempt. The seat is carved from a thick plank, legs are turned or shaved to an octagonal profile, and the rockers are either steam-bent or band-sawn from thick stock. Expect to spend significant time fitting and adjusting. A good rocking chair is a lifetime piece.`,
    estimatedTime: '60-80 hours',
    skills: ['boring-drilling', 'hewing', 'hand-planing', 'paring', 'chopping', 'marking-layout', 'sawing-to-a-line', 'sharpening'],
    joints: ['mortise-tenon', 'wedged-through-tenon', 'round-tenon'],
    woods: ['white-oak', 'ash', 'hard-maple', 'hickory'],
    materials: [
      '2" thick hardwood plank for the seat (at least 18" x 18")',
      '15-20 board feet of hardwood for legs, spindles, and arms',
      '2 rocker blanks, 2" x 4" x 36" (steam-bendable species)',
      'Hardwood wedges',
      'Wood glue',
      'Finish: oil and wax'
    ],
    tools: [
      'Drawknife and spokeshave',
      'Adze or scorp (for seat carving)',
      'Brace and bit set with various sizes',
      'Sliding bevel',
      'Bench chisels',
      'Marking gauge',
      'Compass or dividers',
      'Mallet',
      'Steam box (if bending rockers)',
      'Shaving horse (ideal) or sturdy vise'
    ],
    steps: [
      'Study your plan carefully — note all compound angles before cutting anything.',
      'Carve the seat from a thick plank, hollowing the top for comfort.',
      'Lay out all leg and spindle hole positions on the seat bottom.',
      'Bore leg holes at the correct compound angles — sight from two directions.',
      'Shape the legs and spindles with a drawknife and spokeshave.',
      'Steam-bend the rockers over a form, or band-saw them from thick stock.',
      'Fit the legs into the seat and trim to equal length.',
      'Attach the rockers to the leg bottoms with through-tenons and wedges.',
      'Build and attach the backrest — spindles mortised into a bent or sawn crest rail.',
      'Fine-tune the rocker arc. The chair should rock smoothly without tipping.'
    ],
    tips: [
      'Build a full-size mock-up from pine first. Compound angles are unforgiving — mistakes in hardwood are expensive.',
      'White oak and ash steam-bend better than most species. Use straight-grained, green stock for the rockers.',
      'The rocker radius determines the feel. Too flat and it creeps forward; too curved and it lurches.',
      'Test-sit the chair before gluing. Adjust the seat angle and rocker balance while you still can.'
    ],
    relatedProjects: ['basic-stool', 'adirondack-chair', 'dining-chair']
  },
  {
    slug: 'adirondack-chair',
    name: 'Adirondack Chair',
    category: 'furniture',
    difficulty: 3,
    summary: 'Build the classic porch sitter — a wide-armed, reclined Adirondack chair from weather-resistant stock.',
    description: `The Adirondack chair is designed for one thing: sitting outside and doing absolutely nothing. The wide arms hold a drink, the reclined seat and angled back cradle you, and the whole thing can live outside in the weather if you build it from the right wood.

This design uses flat-sawn boards shaped to profile — no steam bending needed. The back slats fan slightly, the seat slats slope rearward, and the side profiles provide the geometry that makes everything work. Use cedar, white oak, or cypress for weather resistance. Skip the paint if you want it to silver naturally. This is a satisfying weekend build with no complex joinery.`,
    estimatedTime: '10-15 hours',
    skills: ['sawing-to-a-line', 'boring-drilling', 'marking-layout', 'sharpening'],
    joints: ['lap-joint', 'screw-joint'],
    woods: ['western-red-cedar', 'white-oak', 'cypress', 'teak'],
    materials: [
      '20-25 board feet of 4/4 or 5/4 weather-resistant lumber',
      'Stainless steel or galvanized screws',
      'Waterproof wood glue',
      'Exterior finish or leave unfinished to weather'
    ],
    tools: [
      'Crosscut saw',
      'Coping saw or jigsaw',
      'Brace and bit or drill',
      'Bench chisels',
      'Block plane',
      'Combination square',
      'Marking knife',
      'Clamps'
    ],
    steps: [
      'Cut the two side profiles from a full-size template — these define the seat angle and height.',
      'Cut the seat slats to length and round the front edges with a block plane.',
      'Attach the seat slats to the side profiles, spacing them about 1/4" apart for drainage.',
      'Cut the back slats and the curved top rail from your template.',
      'Attach the back slats to a lower cleat and the top rail. Fan them slightly for width.',
      'Mount the back assembly to the seat frame at the correct recline angle.',
      'Cut and attach the wide arms. They should overhang enough to hold a glass comfortably.',
      'Round all exposed edges with a block plane or sandpaper — splinters ruin the experience.',
      'Apply exterior finish or let the wood weather naturally.'
    ],
    tips: [
      'The side profiles are the most important cut. Get these right and everything else follows.',
      'Pre-drill all screw holes in cedar — it splits easily.',
      'Leave 1/4" gaps between slats so water drains and the wood can swell without buckling.'
    ],
    relatedProjects: ['garden-bench', 'deck-bench', 'outdoor-dining-table']
  },
  {
    slug: 'dresser',
    name: 'Dresser',
    category: 'furniture',
    difficulty: 5,
    summary: 'A full-size dresser with multiple dovetailed drawers — the ultimate test of repeatable, accurate joinery.',
    description: `A dresser is a project measured in drawers, and every drawer must slide smoothly, close flush, and align with its neighbors. This means cutting dozens of dovetails, fitting multiple runners, and building a carcass that stays square and true. It's a marathon, not a sprint.

The carcass uses dado-rabbet joints or dovetails at the corners, with dust panels between each drawer tier. The drawers themselves are joined with half-blind dovetails at the front and through dovetails at the back, riding on wooden runners. Build one drawer first and perfect the fit before committing to the rest.`,
    estimatedTime: '80-120 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'sharpening'],
    joints: ['half-blind-dovetail', 'through-dovetail', 'dado-rabbet', 'tongue-groove', 'mortise-tenon'],
    woods: ['cherry', 'black-walnut', 'white-oak', 'hard-maple'],
    materials: [
      '50-70 board feet of 4/4 primary hardwood',
      '20-30 board feet of secondary wood (poplar or pine for drawer sides)',
      '1/4" plywood or solid panels for drawer bottoms and dust panels',
      'Wooden drawer pulls or brass hardware',
      'Wood glue',
      'Finish: oil, lacquer, or shellac'
    ],
    tools: [
      'Jack plane, jointer plane, smoothing plane',
      'Dovetail saw',
      'Coping saw',
      'Bench chisels (full set)',
      'Mortise chisel',
      'Router plane (for dados)',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps and bar clamps',
      'Winding sticks'
    ],
    steps: [
      'Design the dresser — plan drawer heights, overall width, and depth on paper first.',
      'Mill all carcass stock and glue up the side panels and top.',
      'Cut the joinery for the carcass corners — dados or dovetails.',
      'Install dust panels or drawer dividers between each tier.',
      'Build the first drawer as a prototype — half-blind dovetails at the front, through dovetails at the back.',
      'Fit wooden runners and guides for the prototype drawer. Adjust until it slides perfectly.',
      'Build the remaining drawers, fitting each one to its opening individually.',
      'Attach the back panel with screws into a rabbet.',
      'Fit and attach the top.',
      'Apply finish and install hardware.'
    ],
    tips: [
      'Build one drawer first and live with the fit before cutting the rest. Mistakes multiply.',
      'Label every drawer and its opening — they are not interchangeable.',
      'Wax the runners and drawer bottoms for smooth, quiet operation.',
      'A router plane makes consistent dado depths much easier than chisels alone.'
    ],
    relatedProjects: ['blanket-chest', 'nightstand', 'half-blind-dovetail-practice']
  },
  {
    slug: 'entertainment-center',
    name: 'Entertainment Center',
    category: 'furniture',
    difficulty: 4,
    summary: 'A wide carcass piece with open shelves, a cabinet section, and clean lines to anchor your living room.',
    description: `An entertainment center is really a wide, low bookcase with a few tricks — cable management holes, adjustable shelves, and maybe a door or two to hide the clutter. The joinery is straightforward but the scale demands careful planning. A carcass this wide needs to be dead flat or it looks visibly wrong.

Use dado-rabbet joints for the fixed shelves and drill rows of holes for adjustable shelf pins. The face frame (if you use one) ties everything together visually. This is a good project for practicing carcass construction before tackling a dresser or built-in.`,
    estimatedTime: '30-45 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'sharpening'],
    joints: ['dado-rabbet', 'mortise-tenon', 'tongue-groove'],
    woods: ['white-oak', 'cherry', 'hard-maple', 'poplar'],
    materials: [
      '40-50 board feet of 4/4 hardwood',
      '1/4" plywood for back panel',
      'Shelf pins (brass or steel)',
      'Hinges if using doors',
      'Wood glue',
      'Finish: lacquer, shellac, or oil'
    ],
    tools: [
      'Jack plane, jointer plane',
      'Router plane',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Marking gauge',
      'Combination square and framing square',
      'Marking knife',
      'Brace and bit',
      'Pipe clamps and bar clamps',
      'Mallet'
    ],
    steps: [
      'Design the dimensions around your equipment and room. Plan for cable routing.',
      'Mill and glue up the side panels, top, and bottom.',
      'Cut dados in the side panels for fixed shelves.',
      'Drill shelf pin holes for adjustable shelves — use a drilling jig for consistency.',
      'Assemble the carcass — dado the fixed shelves into the sides, attach top and bottom.',
      'Build and attach the face frame with mortise and tenon joints.',
      'Cut and install the plywood back into a rabbet.',
      'Build doors if needed — a simple frame-and-panel construction works well.',
      'Drill cable management holes in the back or bottom where needed.',
      'Apply finish and install hardware.'
    ],
    tips: [
      'Use a drilling jig for shelf pin holes — freehand drilling always looks crooked.',
      'Plan cable management before assembly. Adding holes after the fact is awkward.',
      'A plywood back in a rabbet squares the whole carcass — take time to get it right.'
    ],
    relatedProjects: ['bookshelf', 'wall-shelf', 'blanket-chest']
  },
  {
    slug: 'murphy-bed-frame',
    name: 'Murphy Bed Frame',
    category: 'furniture',
    difficulty: 5,
    summary: 'A wall-mounted fold-up bed frame with a gas-spring mechanism — serious engineering wrapped in fine woodwork.',
    description: `A Murphy bed is half furniture, half mechanism. The visible face when folded must look like a clean cabinet or panel. When deployed, the frame must hold a mattress securely and feel rock-solid. The gas-spring hardware does the heavy lifting, but the wood frame and wall cabinet are entirely your responsibility.

Build the wall cabinet first — it anchors to studs and contains the pivot hardware. The bed frame hinges inside it and folds down on gas springs. Use a purchased mechanism kit and build the wood components to match its specifications exactly. Tolerances are tight — the frame must fold without binding.`,
    estimatedTime: '50-70 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling', 'chopping', 'paring', 'sharpening'],
    joints: ['mortise-tenon', 'dado-rabbet', 'lap-joint'],
    woods: ['hard-maple', 'white-oak', 'birch-plywood', 'poplar'],
    materials: [
      '3/4" hardwood plywood for cabinet and bed platform',
      '20-25 board feet of hardwood for face frame and trim',
      'Murphy bed gas-spring mechanism kit',
      'Lag bolts for wall mounting',
      'Wood glue and screws',
      'Finish: paint, lacquer, or oil'
    ],
    tools: [
      'Crosscut saw',
      'Tenon saw',
      'Bench chisels',
      'Brace and bit or power drill',
      'Combination square and framing square',
      'Level (4-foot minimum)',
      'Marking gauge',
      'Mallet',
      'Bar clamps',
      'Socket wrench set (for mechanism hardware)'
    ],
    steps: [
      'Choose and purchase the gas-spring mechanism first — build everything to its specs.',
      'Locate wall studs and plan the cabinet mounting position.',
      'Build the wall cabinet from plywood with a hardwood face frame.',
      'Mount the cabinet to the wall, level and plumb, lagged into studs.',
      'Build the bed frame platform to the mechanism specifications.',
      'Install the gas-spring pivots and test the folding action.',
      'Add the mattress retention system — straps or a shallow rail.',
      'Build and attach the decorative face panel that shows when the bed is folded.',
      'Test the full cycle repeatedly. Adjust gas-spring tension if needed.',
      'Apply finish to all visible surfaces.'
    ],
    tips: [
      'Buy the mechanism first and build to its dimensions. Never the other way around.',
      'Lag into studs — this holds hundreds of pounds. Drywall anchors will fail catastrophically.',
      'Test the fold action with the mattress in place before calling it done. Weight changes everything.',
      'Keep the face panel simple and flat. Ornate details can interfere with the fold.'
    ],
    relatedProjects: ['bookshelf', 'entertainment-center', 'built-in-bookcase']
  },
  {
    slug: 'dining-chair',
    name: 'Dining Chair',
    category: 'furniture',
    difficulty: 5,
    summary: 'Build a proper dining chair — compound angles, shaped seat, and joinery that handles years of racking stress.',
    description: `A dining chair endures more abuse than almost anything you can build. People lean back, shift sideways, drag it across the floor, and stand on it to change light bulbs. Every joint must be tight, every angle must be right, and the proportions must be comfortable for hours of sitting.

The back legs are the defining challenge — they're usually curved from a single piece, angling backward for the seat and then continuing up for the backrest. The front legs are straight and splayed slightly. All rails join the legs with mortise and tenon joints, often angled. Build a prototype from cheap wood before committing to your good stock.`,
    estimatedTime: '40-60 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'hand-planing', 'sharpening'],
    joints: ['mortise-tenon', 'angled-mortise-tenon', 'slip-joint'],
    woods: ['white-oak', 'hard-maple', 'cherry', 'ash', 'hickory'],
    materials: [
      '8-12 board feet of 8/4 hardwood (for back legs)',
      '6-8 board feet of 4/4 hardwood (for rails and front legs)',
      'Upholstery foam and fabric (if using a padded seat)',
      'Wood glue',
      'Finish: oil and wax'
    ],
    tools: [
      'Bandsaw pattern or templates for back legs',
      'Drawknife and spokeshave',
      'Mortise chisel (1/4", 3/8")',
      'Bench chisels',
      'Tenon saw',
      'Brace and bit',
      'Sliding bevel',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Bar clamps and band clamps'
    ],
    steps: [
      'Draw the side profile full-size on paper. Get the seat height (17-18"), angle, and back rake right.',
      'Make templates for the curved back legs from your drawing.',
      'Cut the back legs from 8/4 stock — the curve should come from the grain direction, not cross-grain.',
      'Mill the front legs and all rails.',
      'Cut the angled mortises in both back and front legs — use a sliding bevel to maintain angles.',
      'Cut tenons on all rails to fit their corresponding mortises.',
      'Dry-fit the entire chair and sit in it. Adjust seat height and back angle if needed.',
      'Glue up in stages — side frames first, then connect front and back.',
      'Shape and smooth all parts. Round edges where hands and legs contact the chair.',
      'Apply finish and add a seat — either a shaped wood panel or an upholstered drop-in seat.'
    ],
    tips: [
      'Build a prototype from pine or poplar first. You will make mistakes — make them in cheap wood.',
      'The back legs define the chair. Cut them from thick stock with the grain following the curve.',
      'Use a band clamp for final glue-up — it wraps the whole chair and pulls everything tight.',
      'If you build a set of four, cut all parts at once and jig everything for consistency.'
    ],
    relatedProjects: ['basic-stool', 'rocking-chair', 'bench-with-back']
  },
  {
    slug: 'bench-with-back',
    name: 'Bench with Back',
    category: 'furniture',
    difficulty: 3,
    summary: 'A solid hall or porch bench with a slatted backrest — comfortable seating with straightforward joinery.',
    description: `A bench with a back turns a simple seat into a place people actually want to sit. This design uses four legs, a thick plank seat, side aprons, and a backrest made from two or three horizontal slats held by rear posts that extend up from the back legs.

The joinery is all mortise and tenon — the same joints you've been practicing, just more of them. The back posts are the key structural element; they must be stout enough to handle someone leaning back hard. Use at least 2" square stock for the legs and size the mortises accordingly.`,
    estimatedTime: '15-25 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored'],
    woods: ['white-oak', 'ash', 'cherry', 'hard-maple'],
    materials: [
      '15-20 board feet of 8/4 hardwood',
      '5-8 board feet of 4/4 hardwood for slats and aprons',
      'Hardwood drawbore pegs',
      'Wood glue',
      'Finish: oil and wax or exterior finish if used outdoors'
    ],
    tools: [
      'Jack plane and smoothing plane',
      'Mortise chisel (3/8", 1/2")',
      'Bench chisels',
      'Tenon saw',
      'Brace and bit',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps'
    ],
    steps: [
      'Design the bench — 48-60" long, 18" seat height, back rising to 32-34" total.',
      'Mill the four legs. Rear legs are longer and extend upward to support the backrest.',
      'Cut mortises in all legs for seat aprons and stretchers.',
      'Cut mortises in the rear legs for the back slats.',
      'Cut tenons on all rails, aprons, and back slats.',
      'Mill and flatten the seat — either a single wide board or glued-up panel.',
      'Dry-fit the base and back, checking all angles and alignment.',
      'Glue and drawbore the joints. Assemble end frames first, then connect.',
      'Attach the seat with buttons or screws from below.',
      'Apply finish appropriate to the bench location — interior or exterior.'
    ],
    tips: [
      'The rear legs take all the leaning force. Use 2" square stock minimum.',
      'Angle the back slats about 5-10 degrees rearward for comfort.',
      'Drawboring the joints makes this bench nearly indestructible.',
      'If the bench will live outside, use white oak and an exterior finish.'
    ],
    relatedProjects: ['dining-bench', 'garden-bench', 'deck-bench']
  },
  // ─────────────────────────────────────────────
  // CARPENTRY (15 projects)
  // ─────────────────────────────────────────────
  {
    slug: 'stud-wall-framing',
    name: 'Stud Wall Framing',
    category: 'carpentry',
    difficulty: 2,
    summary: 'Frame a basic interior partition wall with studs, plates, and proper layout — the backbone of any building.',
    description: `Every building starts with a frame, and the stud wall is the most fundamental unit. Two plates (top and bottom) connected by vertical studs spaced 16" on center. It sounds simple, but doing it accurately matters — plumb walls, consistent stud spacing, and solid nailing determine how everything downstream fits.

Lay out the plates together on the floor, mark the stud positions, then cut and assemble the wall flat before tilting it up into position. Check for plumb and shim as needed. This is the project that teaches you to think in three dimensions and work to building tolerances.`,
    estimatedTime: '4-8 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling'],
    joints: ['butt-joint', 'lap-joint'],
    woods: ['douglas-fir', 'spruce', 'southern-yellow-pine'],
    materials: [
      '2x4 studs (quantity depends on wall length)',
      '2x4 lumber for top and bottom plates',
      '16d framing nails or 3" screws',
      'Construction adhesive (optional)'
    ],
    tools: [
      'Framing square',
      'Crosscut saw or circular saw',
      'Hammer or framing nailer',
      'Level (4-foot)',
      'Tape measure',
      'Chalk line',
      'Speed square',
      'Pencil'
    ],
    steps: [
      'Snap a chalk line on the floor to mark the wall location.',
      'Cut the top and bottom plates to length from straight 2x4 stock.',
      'Lay both plates side by side and mark stud positions at 16" on center.',
      'Cut all studs to the same length — wall height minus the thickness of both plates.',
      'Assemble the wall flat on the floor. Nail through the plates into the stud ends.',
      'Tilt the wall up into position and check for plumb with a 4-foot level.',
      'Shim the bottom plate if the floor is uneven.',
      'Secure the bottom plate to the floor and top plate to the ceiling joists.'
    ],
    tips: [
      'Always mark both plates together — this ensures stud alignment between top and bottom.',
      'Crown all studs the same direction before nailing. A bowed stud facing the wrong way creates a bump in the drywall.',
      'Check for plumb in both directions before fastening permanently.'
    ],
    relatedProjects: ['partition-wall', 'rough-opening-framing', 'hanging-a-door']
  },
  {
    slug: 'building-stairs',
    name: 'Building Stairs',
    category: 'carpentry',
    difficulty: 4,
    summary: 'Lay out and cut a straight-run staircase with proper rise, run, and housed or cut stringers.',
    description: `Stair building is where carpentry becomes math. The total rise divided by your target riser height gives the number of steps. The tread depth times the number of treads gives the total run. Every riser must be the same height — even a 1/4" difference is a trip hazard. The layout is everything.

Mark and cut your stringers with a framing square and stair gauges. Three stringers are standard for a 36" wide staircase. Cut your treads and risers to fit, then assemble from the bottom up. This is one of the most satisfying carpentry projects because a well-built staircase feels solid underfoot and looks beautiful.`,
    estimatedTime: '12-20 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling'],
    joints: ['dado-rabbet', 'butt-joint'],
    woods: ['douglas-fir', 'white-oak', 'hard-maple', 'southern-yellow-pine'],
    materials: [
      '2x12 lumber for stringers (3 pieces, length depends on rise and run)',
      '1" thick treads',
      '3/4" riser boards',
      'Construction screws and adhesive',
      'Metal stringer hangers for top connection'
    ],
    tools: [
      'Framing square with stair gauges',
      'Crosscut saw',
      'Circular saw (optional, for long cuts)',
      'Level (4-foot)',
      'Tape measure',
      'Pencil',
      'Hammer and nails or drill and screws',
      'Speed square'
    ],
    steps: [
      'Measure the total rise from finish floor to finish floor.',
      'Divide by your target riser height (7" to 7-3/4") to get the number of steps.',
      'Calculate exact rise per step and run per tread. All risers must be identical.',
      'Set stair gauges on your framing square at the rise and run dimensions.',
      'Lay out the first stringer, stepping the square along the board. Mark each tread and riser.',
      'Cut the stringer notches — saw to the line, finish the corners with a handsaw.',
      'Use the first stringer as a template for the remaining two.',
      'Install the stringers — hang from the upper floor and secure at the bottom.',
      'Install risers first, then treads, working from the bottom up.',
      'Check each tread for level as you go. Shim if needed.'
    ],
    tips: [
      'The code-compliant rule: rise + run should equal about 17" to 18". Too steep or too shallow and the stairs feel wrong.',
      'Always subtract the tread thickness from the bottom riser. Otherwise your first step will be taller than the rest.',
      'Cut stringers from straight, clear stock. Knots in a stringer are weak points.',
      'A squeaky stair means a loose connection. Use adhesive and screws, not just nails.'
    ],
    relatedProjects: ['deck-framing', 'porch-railing', 'subfloor-install']
  },
  {
    slug: 'hanging-a-door',
    name: 'Hanging a Door',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Fit and hang an interior door with mortised hinges, even reveals, and a smooth latch — the mark of a careful carpenter.',
    description: `Hanging a door well is one of those skills that separates rough work from craftsmanship. The door needs to fit its opening with even reveals on all sides, swing freely without binding, latch positively, and look straight when closed. Most of the work is in the fitting — trimming the door to the opening and mortising the hinges flush.

Hinge mortising is the key skill. A chisel and marking gauge are all you need. Set the door in the opening on shims, mark the hinge positions, then chop the mortises in both the door edge and the jamb. When the hinges seat flush, the door hangs true. Take your time with the fitting — a well-hung door is quiet testimony to your skill.`,
    estimatedTime: '3-5 hours',
    skills: ['chopping', 'paring', 'marking-layout', 'sawing-to-a-line', 'sharpening'],
    joints: ['hinge-mortise'],
    woods: ['douglas-fir', 'poplar', 'pine', 'white-oak'],
    materials: [
      'Interior door slab',
      '3 butt hinges (3-1/2" for interior doors)',
      'Passage or privacy lockset',
      'Shims',
      'Finish nails or screws for stop adjustment'
    ],
    tools: [
      'Bench chisels (3/4" and 1")',
      'Jack plane or block plane',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Drill and bits for lockset',
      'Utility knife',
      'Level',
      'Tape measure'
    ],
    steps: [
      'Check the opening for plumb and square. Note which side is hinge side.',
      'Trim the door to fit the opening with 1/8" reveal on the hinge side and top, 1/8" on the latch side.',
      'Mark the hinge positions on the door edge — 7" from the top, 11" from the bottom, center for the third.',
      'Score the hinge outlines with a marking knife on the door edge.',
      'Chop the hinge mortises with a chisel to the exact depth of the hinge leaf.',
      'Screw the hinges to the door.',
      'Set the door in the opening on shims and transfer the hinge positions to the jamb.',
      'Chop the jamb mortises and hang the door.',
      'Check the swing and reveals. Plane the edges if the door binds anywhere.',
      'Install the lockset and strike plate. Adjust the stop for a clean close.'
    ],
    tips: [
      'Mortise the hinges to exactly leaf thickness — too deep and the door binds at the hinge, too shallow and the latch side gaps.',
      'A sharp chisel makes hinge mortising easy. A dull one makes it miserable.',
      'Shim the bottom of the door to the right height while marking hinge positions on the jamb.',
      'If the door binds on the latch side when closed, the hinge mortises are too deep. Add a cardboard shim behind the hinge.'
    ],
    relatedProjects: ['stud-wall-framing', 'exterior-door-frame', 'baseboard-install']
  },
  {
    slug: 'deck-framing',
    name: 'Deck Framing',
    category: 'carpentry',
    difficulty: 4,
    summary: 'Frame a ground-level or raised deck with proper ledger, joists, beams, and post foundations.',
    description: `A deck is an outdoor room, and like any room, it starts with a solid frame. The ledger board bolts to the house, joists span from ledger to beam, beams sit on posts, and posts stand on footings. Every connection must be strong enough to carry the load of people, furniture, and snow.

The critical detail is the ledger connection — improperly flashed ledgers cause more water damage to houses than almost any other construction defect. Use proper flashing, lag bolts into the rim joist, and maintain a gap between the ledger and siding. After that, the joist layout and beam sizing are straightforward engineering.`,
    estimatedTime: '20-40 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling'],
    joints: ['joist-hanger', 'post-beam', 'ledger-connection'],
    woods: ['pressure-treated-pine', 'western-red-cedar', 'douglas-fir'],
    materials: [
      'Pressure-treated 2x8 or 2x10 for joists',
      'Pressure-treated 4x4 or 6x6 posts',
      'Double 2x beam or engineered beam',
      'Ledger board (same dimension as joists)',
      'Joist hangers, post caps, post bases',
      'Lag bolts and structural screws',
      'Concrete for footings',
      'Flashing tape and Z-flashing'
    ],
    tools: [
      'Framing square',
      'Level (4-foot) and string level',
      'Tape measure',
      'Chalk line',
      'Crosscut saw or circular saw',
      'Drill with long bits',
      'Socket wrench',
      'Post hole digger',
      'Speed square',
      'Line level and mason line'
    ],
    steps: [
      'Check local codes for setbacks, height limits, and footing requirements. Pull permits if needed.',
      'Install the ledger board with proper flashing and lag bolts into the house rim joist.',
      'Lay out footing locations and dig to below frost line.',
      'Pour footings and set post bases.',
      'Cut and install posts. Check plumb in both directions.',
      'Install beams on top of posts with proper post-beam connectors.',
      'Lay out and install joists at 16" on center with joist hangers at the ledger.',
      'Add blocking between joists at the beam and midspan.',
      'Install the deck boards — start at the house side and work outward.',
      'Add stairs and railings per code requirements.'
    ],
    tips: [
      'The ledger connection is the most important detail. Use proper flashing — water behind the ledger rots the house.',
      'Dig footings below the frost line or they will heave. Check local code for depth.',
      'Crown all joists the same direction — crown side up.',
      'Let pressure-treated wood dry for a few weeks before staining.'
    ],
    relatedProjects: ['building-stairs', 'porch-railing', 'deck-bench']
  },
  {
    slug: 'crown-molding-install',
    name: 'Crown Molding Installation',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Install crown molding with tight-fitting coped joints at inside corners and mitered outside corners.',
    description: `Crown molding transforms a room, but installing it well requires understanding the spring angle — crown sits at an angle between the wall and ceiling, not flat against either. Every joint must account for this angle. Inside corners are coped (one piece is profiled to fit against the other), not mitered, because walls are never perfectly square.

The technique is straightforward once you understand the geometry. Cut the first piece square into the corner. Miter the mating piece, then cope the profiled edge with a coping saw, following the molding contour. The coped piece fits tight against the square-cut piece regardless of the corner angle. Outside corners get standard miters.`,
    estimatedTime: '4-8 hours per room',
    skills: ['sawing-to-a-line', 'paring', 'marking-layout', 'sharpening'],
    joints: ['coped-joint', 'miter-joint'],
    woods: ['poplar', 'pine', 'mdf', 'white-oak'],
    materials: [
      'Crown molding (measure perimeter plus 20% for waste)',
      'Finish nails (2" and 1-1/2")',
      'Wood filler',
      'Caulk for ceiling and wall gaps',
      'Sandpaper (150, 220 grit)'
    ],
    tools: [
      'Coping saw',
      'Miter box or miter saw',
      'Hammer and nail set',
      'Pencil and tape measure',
      'Combination square',
      'Files and rasps for fine-tuning cope cuts',
      'Utility knife',
      'Ladder'
    ],
    steps: [
      'Measure the room perimeter and plan your installation sequence — start opposite the door.',
      'Identify the spring angle of your crown profile (most are 38 or 45 degrees).',
      'Cut and install the first piece with square cuts into both corners.',
      'Miter the next piece at 45 degrees, then cope the profiled edge with a coping saw.',
      'Back-cut the cope slightly so only the leading edge contacts the mating piece.',
      'Test-fit the coped joint. Fine-tune with files or a knife until it fits tight.',
      'Nail into the wall studs (bottom edge) and ceiling joists (top edge) where possible.',
      'Continue around the room, coping each inside corner and mitering outside corners.',
      'Fill nail holes with wood filler and caulk any gaps at the wall and ceiling.'
    ],
    tips: [
      'Cope inside corners, miter outside corners. Coped joints stay tight as the house moves; miters open up.',
      'Back-cut the cope at about 5 degrees so only the face edge makes contact.',
      'Paint the end grain before coping — it makes the profile line easier to follow with the saw.',
      'Spring the molding against a wall on the ground to check your angles before climbing the ladder.'
    ],
    relatedProjects: ['baseboard-install', 'window-trim', 'wainscoting']
  },
  {
    slug: 'rough-opening-framing',
    name: 'Rough Opening Framing',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Frame a rough opening for a window or door with proper header, jack studs, and cripples.',
    description: `Every window and door needs a rough opening — a framed hole in the wall that carries the load above it down to the foundation. The header spans the top of the opening, jack studs (trimmers) support the header ends, king studs flank the jacks, and cripple studs fill in above the header and below the sill.

Getting the sizing right matters. The rough opening should be 1/2" to 3/4" wider and taller than the window or door unit. The header must be sized for the span and the load above it. This is structural carpentry — every piece has a job, and skipping any of them weakens the wall.`,
    estimatedTime: '3-6 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling'],
    joints: ['butt-joint', 'lap-joint'],
    woods: ['douglas-fir', 'spruce', 'southern-yellow-pine'],
    materials: [
      '2x4 or 2x6 lumber for studs and plates',
      '2x header stock (doubled 2x8, 2x10, or 2x12 depending on span)',
      '1/2" plywood spacer for header',
      '16d framing nails or 3" screws'
    ],
    tools: [
      'Framing square',
      'Crosscut saw or circular saw',
      'Hammer or drill',
      'Level (4-foot)',
      'Tape measure',
      'Speed square',
      'Pencil'
    ],
    steps: [
      'Determine the rough opening size from the window or door manufacturer specs.',
      'Mark the rough opening location on the bottom plate.',
      'Install king studs at the outer edges of the opening.',
      'Build the header — two pieces of dimensional lumber with 1/2" plywood spacer, nailed together.',
      'Install jack studs inside the king studs, cut to support the header at the correct height.',
      'Set the header on the jack studs and nail through the king studs into the header ends.',
      'Install cripple studs above the header, maintaining 16" on center layout.',
      'For windows, install the sill plate between the jack studs at the correct height.',
      'Add cripple studs below the sill plate.'
    ],
    tips: [
      'Always check manufacturer specs for the rough opening size. Too tight and the unit won\'t fit; too loose and shimming becomes excessive.',
      'Size the header for the load. A non-bearing wall can use a flat 2x4 header; a bearing wall needs a proper engineered header.',
      'Jack studs carry the load — make sure they bear solidly on the bottom plate.'
    ],
    relatedProjects: ['stud-wall-framing', 'hanging-a-door', 'exterior-door-frame']
  },
  {
    slug: 'subfloor-install',
    name: 'Subfloor Installation',
    category: 'carpentry',
    difficulty: 2,
    summary: 'Install a tongue-and-groove plywood subfloor over floor joists — flat, glued, and squeak-free.',
    description: `The subfloor is the foundation for every finished floor in the house. It needs to be flat, well-fastened, and gap-free. Tongue-and-groove plywood sheets interlock at the edges and get glued and screwed to every joist they cross.

Stagger the joints so no four corners meet at one point, and leave a 1/8" expansion gap at the walls. Apply construction adhesive to the joists before setting each sheet — this is the single most effective thing you can do to prevent squeaky floors. A well-installed subfloor feels solid underfoot and stays quiet for decades.`,
    estimatedTime: '4-8 hours per room',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling'],
    joints: ['tongue-groove'],
    woods: ['plywood-subfloor', 'osb'],
    materials: [
      '3/4" tongue-and-groove plywood subfloor sheets',
      'Construction adhesive',
      '2" ring-shank nails or subfloor screws',
      'Wood shims for joist leveling'
    ],
    tools: [
      'Crosscut saw or circular saw',
      'Tape measure',
      'Chalk line',
      'Drill or screw gun',
      'Hammer (for tapping sheets together)',
      'Framing square',
      'Block plane (for tight tongue-and-groove fits)'
    ],
    steps: [
      'Check all joists for level and flatness. Shim or plane any high spots.',
      'Snap a chalk line along the first joist to ensure the first row is straight.',
      'Apply construction adhesive to the joists in the first row.',
      'Lay the first sheet with the groove side toward the wall. Leave 1/8" gap at the wall.',
      'Fasten with screws or nails every 6" along the edges and 12" in the field.',
      'Stagger the second row so end joints fall at least two joists away from the first row.',
      'Apply adhesive, engage the tongue-and-groove joint, and tap the sheet tight with a scrap block.',
      'Continue across the room, checking for flatness as you go.'
    ],
    tips: [
      'Construction adhesive is the secret to a squeak-free floor. Never skip it.',
      'Stagger joints by at least 4 feet. Aligned joints create weak lines in the floor.',
      'If a joist is high, plane it down. If it is low, shim it up. The subfloor can not fix framing problems.'
    ],
    relatedProjects: ['stud-wall-framing', 'building-stairs', 'baseboard-install']
  },
  {
    slug: 'partition-wall',
    name: 'Partition Wall with Door Opening',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Frame an interior partition wall with a door rough opening — combining wall framing and header work in one project.',
    description: `A partition wall divides one room into two, and most partition walls need at least one door opening. This project combines stud wall framing with rough opening construction — you will lay out plates, frame the wall with studs at 16" on center, and build a proper door opening with header, jack studs, and cripples.

Since partition walls are typically non-load-bearing, the header can be a flat 2x4, but building it properly teaches the technique you will need for bearing walls. Frame the wall flat on the floor, then tilt it up and fasten it in place. Check for plumb before you commit.`,
    estimatedTime: '6-10 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling'],
    joints: ['butt-joint', 'lap-joint'],
    woods: ['douglas-fir', 'spruce', 'southern-yellow-pine'],
    materials: [
      '2x4 studs for wall framing',
      '2x4 plates (top and bottom)',
      '2x4 or 2x6 for header',
      '16d nails or 3" screws',
      'Shims'
    ],
    tools: [
      'Framing square',
      'Crosscut saw or circular saw',
      'Hammer or drill',
      'Level (4-foot)',
      'Tape measure',
      'Chalk line',
      'Speed square',
      'Plumb bob or laser level'
    ],
    steps: [
      'Snap a chalk line on the floor for the wall location. Transfer to the ceiling with a plumb bob.',
      'Cut top and bottom plates to length. Lay them side by side and mark stud positions.',
      'Mark the door opening location — king studs, jack studs, and header position.',
      'Cut all studs, jacks, headers, and cripples to length.',
      'Assemble the wall flat on the floor. Nail through plates into studs.',
      'Build the door opening — king studs, jacks, header, and cripples.',
      'Tilt the wall up into position.',
      'Check for plumb and shim the bottom plate as needed.',
      'Secure to floor, ceiling, and adjoining walls.',
      'Cut out the bottom plate from the door opening.'
    ],
    tips: [
      'Frame the entire wall including the door opening before tilting it up.',
      'Cut the bottom plate out of the door opening after the wall is secured — it holds everything aligned during installation.',
      'A non-bearing wall header can be a flat 2x4 with cripples above — no need to oversize it.',
      'Check plumb in both directions. A wall can be plumb side-to-side but leaning front-to-back.'
    ],
    relatedProjects: ['stud-wall-framing', 'rough-opening-framing', 'hanging-a-door']
  },
  {
    slug: 'wainscoting',
    name: 'Wainscoting',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Install frame-and-panel wainscoting on an interior wall — classic trim carpentry that transforms a plain room.',
    description: `Wainscoting covers the lower third of a wall with framed panels, a cap rail on top, and baseboard at the floor. It protects the wall from chair backs and boot scuffs while adding architectural character that paint alone never achieves. The layout is the hardest part — panels must be evenly spaced and centered on the wall.

Build the frame from solid stock with stiles and rails joined by cope-and-stick or simple mortise and tenon joints. The panels float in grooves, free to expand and contract with the seasons. Install the assembled frames to the wall, then add the cap rail and baseboard to finish.`,
    estimatedTime: '15-25 hours per room',
    skills: ['marking-layout', 'sawing-to-a-line', 'paring', 'chopping', 'hand-planing', 'sharpening'],
    joints: ['mortise-tenon', 'tongue-groove', 'miter-joint'],
    woods: ['poplar', 'white-oak', 'pine', 'cherry'],
    materials: [
      '4/4 hardwood or paint-grade stock for stiles and rails',
      '1/4" to 1/2" solid panels or plywood',
      'Cap rail molding',
      'Baseboard',
      'Finish nails',
      'Wood glue',
      'Caulk and wood filler'
    ],
    tools: [
      'Jack plane',
      'Bench chisels',
      'Tenon saw',
      'Coping saw',
      'Marking gauge',
      'Combination square',
      'Level (4-foot)',
      'Mallet',
      'Tape measure',
      'Marking knife'
    ],
    steps: [
      'Measure the wall and decide on the wainscoting height — 32" to 36" is traditional.',
      'Divide the wall into evenly spaced panels. Adjust spacing so panels look balanced around doors and windows.',
      'Mill all stiles and rails. Plow grooves for the floating panels.',
      'Cut mortise and tenon joints where stiles meet rails.',
      'Fit the panels into the grooves — do not glue them. Panels must float.',
      'Assemble the panel frames, glue the joints, and clamp flat.',
      'Install the assembled frames to the wall with finish nails into studs.',
      'Add the cap rail across the top, mitered at corners.',
      'Install baseboard at the floor.',
      'Fill nail holes, caulk gaps, and apply finish.'
    ],
    tips: [
      'Lay out the panel spacing on paper first. Uneven panels look obviously wrong and there is no fixing it after installation.',
      'Let the panels float — gluing them in will cause cracks when the wood moves.',
      'Paint-grade wainscoting in poplar is half the cost of hardwood and looks identical once painted.',
      'Start from the most visible wall and work toward corners where small adjustments are less noticeable.'
    ],
    relatedProjects: ['crown-molding-install', 'baseboard-install', 'window-trim']
  },
  {
    slug: 'built-in-bookcase',
    name: 'Built-In Bookcase',
    category: 'carpentry',
    difficulty: 4,
    summary: 'Build a floor-to-ceiling bookcase fitted into an alcove or against a wall — part furniture, part architecture.',
    description: `A built-in bookcase looks like it grew from the walls. It fills its space exactly, with face frame stiles tight to the wall surface and crown molding running seamlessly into the ceiling. Unlike a freestanding bookshelf, every piece is scribed and trimmed to fit the room, which means no two built-ins are quite alike.

The carcass is typically plywood with a solid hardwood face frame. Fixed shelves are dadoed in for strength, adjustable shelves ride on pins. The face frame ties everything together visually and hides the plywood edges. Take your time scribing to the wall — gaps between the bookcase and the wall ruin the illusion.`,
    estimatedTime: '30-50 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'chopping', 'paring', 'hand-planing', 'boring-drilling', 'sharpening'],
    joints: ['dado-rabbet', 'mortise-tenon', 'tongue-groove'],
    woods: ['hard-maple', 'white-oak', 'cherry', 'poplar', 'birch-plywood'],
    materials: [
      '3/4" hardwood plywood for carcass',
      '20-30 board feet of 4/4 hardwood for face frame',
      '1/4" plywood for back panel',
      'Shelf pins (brass or steel)',
      'Crown molding and baseboard',
      'Wood glue and finish nails',
      'Finish: paint, lacquer, or oil'
    ],
    tools: [
      'Jack plane and block plane',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Router plane',
      'Marking gauge',
      'Combination square and framing square',
      'Level (4-foot)',
      'Brace and bit or drill',
      'Marking knife',
      'Mallet',
      'Bar clamps and pipe clamps'
    ],
    steps: [
      'Measure the space precisely — width, height, and depth at multiple points. Walls are never perfectly flat or plumb.',
      'Design the layout on paper — fixed shelf positions, adjustable shelf zones, and face frame dimensions.',
      'Build the plywood carcass boxes. Dado in the fixed shelves.',
      'Drill shelf pin holes for adjustable shelves using a drilling jig.',
      'Set the carcass in position and shim level and plumb.',
      'Scribe the face frame stiles to the wall contour and plane to fit.',
      'Attach the face frame to the carcass with glue and nails.',
      'Install crown molding at the ceiling and baseboard at the floor.',
      'Install the back panel.',
      'Apply finish and install adjustable shelves.'
    ],
    tips: [
      'Scribe to the wall, never assume it is flat. A compass set to the widest gap transfers the wall contour to the stile.',
      'Build the carcass 1/4" narrower than the space and let the face frame bridge the gap.',
      'Anchor the unit to wall studs. A loaded bookcase weighs hundreds of pounds.',
      'Use a drilling jig for shelf pin holes — consistent spacing makes adjustable shelves look professional.'
    ],
    relatedProjects: ['bookshelf', 'entertainment-center', 'closet-build-out']
  },
  {
    slug: 'closet-build-out',
    name: 'Closet Build-Out',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Turn a basic closet into an organized system with shelves, rods, drawers, and dividers built from plywood and solid stock.',
    description: `A well-organized closet is a simple box made useful. Vertical dividers create zones — hanging space for long and short garments, shelves for folded clothes, cubbies for shoes, and maybe a drawer or two. The construction is basic plywood carcass work, but the design requires careful measurement of what actually goes in the closet.

Build the system in sections that you can assemble inside the closet. Vertical panels anchor to the wall studs, shelves are fixed or adjustable, and rods hang at standard heights. Use melamine-coated plywood for a clean, easy-to-clean interior, or solid hardwood if the closet has no doors.`,
    estimatedTime: '12-20 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling', 'paring'],
    joints: ['dado-rabbet', 'butt-joint'],
    woods: ['birch-plywood', 'poplar', 'pine'],
    materials: [
      '3/4" plywood for shelves and dividers',
      '1/4" plywood for back panels (optional)',
      'Closet rod and supports',
      'Shelf pins for adjustable shelves',
      'Edge banding for exposed plywood edges',
      'Screws and finish nails',
      'Wood glue'
    ],
    tools: [
      'Crosscut saw or circular saw',
      'Bench chisels',
      'Brace and bit or drill',
      'Level (4-foot)',
      'Tape measure',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Clamps'
    ],
    steps: [
      'Empty the closet and measure the interior — width, depth, and height at multiple points.',
      'Inventory what goes in the closet. Measure hanging garments, shoe heights, and folded stack sizes.',
      'Design the layout on paper — allocate zones for long hang, short hang, shelves, and shoes.',
      'Cut the vertical divider panels from plywood.',
      'Cut dado joints or drill shelf pin holes in the dividers for fixed and adjustable shelves.',
      'Install the vertical dividers, anchored to the wall studs and floor.',
      'Install fixed shelves into dados and closet rods at the correct heights.',
      'Add adjustable shelves, shoe cubbies, or drawers as designed.',
      'Apply edge banding to all exposed plywood edges.',
      'Install any doors, hooks, or accessories.'
    ],
    tips: [
      'Measure the clothes, not the closet. A system designed for the space but not the contents is useless.',
      'Standard rod heights: 68" for long hang, 42" for short hang (with a second rod at 84").',
      'Edge banding transforms raw plywood into finished furniture. Iron it on before installation.',
      'Leave the back wall open if possible — it makes anchoring to studs easier and costs less.'
    ],
    relatedProjects: ['built-in-bookcase', 'bookshelf', 'entertainment-center']
  },
  {
    slug: 'baseboard-install',
    name: 'Baseboard Installation',
    category: 'carpentry',
    difficulty: 2,
    summary: 'Install baseboard molding with coped inside corners, mitered outside corners, and scarf joints on long runs.',
    description: `Baseboard covers the gap between the floor and the wall and takes a surprising amount of abuse from vacuum cleaners, mops, and feet. Installing it well means tight-fitting coped joints at inside corners, clean miters at outside corners, and scarf joints where boards meet on a long wall.

The technique mirrors crown molding but is simpler because baseboard sits flat against the wall. Cope inside corners, miter outside corners, and nail into the wall studs. Fill the nail holes, caulk the top edge to the wall, and paint or stain. A room with crisp baseboard looks finished; without it, the room looks incomplete.`,
    estimatedTime: '3-6 hours per room',
    skills: ['sawing-to-a-line', 'paring', 'marking-layout', 'sharpening'],
    joints: ['coped-joint', 'miter-joint', 'scarf-joint'],
    woods: ['poplar', 'pine', 'mdf', 'white-oak'],
    materials: [
      'Baseboard molding (measure perimeter plus 15% waste)',
      'Finish nails (2" and 1-1/2")',
      'Wood filler',
      'Caulk',
      'Sandpaper (150, 220 grit)'
    ],
    tools: [
      'Coping saw',
      'Miter box or miter saw',
      'Hammer and nail set',
      'Bench chisels',
      'Block plane',
      'Tape measure',
      'Combination square',
      'Files and rasps',
      'Pencil'
    ],
    steps: [
      'Measure the room perimeter and plan the installation order — start with the longest wall.',
      'Cut the first piece with square ends into inside corners.',
      'For the mating inside corner: miter at 45 degrees, then cope the profile with a coping saw.',
      'Test-fit the coped joint. Fine-tune with files or a chisel until the face edge fits tight.',
      'Nail into wall studs — one nail near the top, one near the bottom.',
      'For outside corners, miter both pieces at 45 degrees and glue the miter before nailing.',
      'For long walls, join boards with a scarf joint — overlapping 45-degree cuts that hide the seam.',
      'Fill nail holes with wood filler and caulk the top edge to the wall.'
    ],
    tips: [
      'Cope inside corners, miter outside corners. Always.',
      'Back-cut your copes slightly so only the front edge makes contact.',
      'On scarf joints, place the overlap so the seam faces away from the room entry — you will never see it.',
      'Caulk the top edge even if the fit is tight. Paint fills the caulk line and makes everything look seamless.'
    ],
    relatedProjects: ['crown-molding-install', 'window-trim', 'wainscoting']
  },
  {
    slug: 'window-trim',
    name: 'Window Trim',
    category: 'carpentry',
    difficulty: 2,
    summary: 'Case a window with stool, apron, and mitered or butted casing — clean lines that frame the view.',
    description: `Window trim is the picture frame for your view outside. The stool (the interior ledge) sits on the rough sill, the apron hangs below it, and the casing wraps the top and sides. How you join the casing corners — mitered or butted with head blocks — defines the style of the room.

Mitered casings look clean and modern. Butted casings with corner blocks look traditional and are more forgiving of walls that are out of square. Either way, the reveal between the casing and the jamb must be consistent — typically 3/16" to 1/4". A marking gauge set to the reveal makes this easy to scribe.`,
    estimatedTime: '2-4 hours per window',
    skills: ['sawing-to-a-line', 'paring', 'marking-layout', 'sharpening'],
    joints: ['miter-joint', 'butt-joint'],
    woods: ['poplar', 'pine', 'white-oak', 'cherry'],
    materials: [
      'Window casing stock',
      'Stool stock (5/4 x 4 or wider)',
      'Apron stock (matches casing profile)',
      'Finish nails (2" and 1-1/2")',
      'Wood filler and caulk'
    ],
    tools: [
      'Miter box or miter saw',
      'Block plane',
      'Bench chisels',
      'Coping saw',
      'Marking gauge',
      'Combination square',
      'Hammer and nail set',
      'Tape measure',
      'Pencil'
    ],
    steps: [
      'Measure the window opening and decide on the reveal — the setback of the casing from the jamb edge.',
      'Cut and fit the stool first. It extends past the casing width on each side by 1" and projects into the room.',
      'Notch the stool horns to fit around the wall surface and sit flat on the rough sill.',
      'Nail the stool in place, shimming underneath if the sill is not level.',
      'Cut the side casings to length, with the reveal marked on the jamb as a guide.',
      'Cut the head casing and miter the top corners (or butt against corner blocks).',
      'Nail the casings to both the jamb and the wall framing.',
      'Cut and install the apron under the stool, centered on the window.',
      'Fill nail holes and caulk where casing meets wall.'
    ],
    tips: [
      'Set a marking gauge to your reveal dimension and scribe a line around the jamb. This gives you a perfect reference for the casing edge.',
      'The stool is not a windowsill — it is trim that sits on top of the rough sill. Cut it to project past the casing.',
      'If miters open up, the wall is out of square. Adjust the miter angle or switch to butted casings with corner blocks.',
      'Return the apron ends — cut a small 45-degree return so the profile wraps back to the wall instead of showing end grain.'
    ],
    relatedProjects: ['crown-molding-install', 'baseboard-install', 'exterior-door-frame']
  },
  {
    slug: 'exterior-door-frame',
    name: 'Exterior Door Frame',
    category: 'carpentry',
    difficulty: 4,
    summary: 'Build and install a solid exterior door frame with weather-tight threshold, proper flashing, and rot-resistant materials.',
    description: `An exterior door frame takes everything an interior frame does and adds weather. Rain, wind, sun, and temperature swings all attack the frame, so material choices and flashing details matter as much as the joinery. Use rot-resistant species or pressure-treated stock, and flash every joint that could allow water behind the siding.

The frame consists of two side jambs and a head jamb, a hardwood or aluminum threshold at the bottom, and exterior casing with drip cap above. The threshold must slope outward for drainage and seal tight against the door bottom. Install the frame plumb and square, shim solidly, and weatherstrip every edge.`,
    estimatedTime: '8-12 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'chopping', 'paring', 'boring-drilling', 'sharpening'],
    joints: ['dado-rabbet', 'mortise-tenon', 'butt-joint'],
    woods: ['white-oak', 'western-red-cedar', 'cypress', 'pressure-treated-pine'],
    materials: [
      '5/4 or 6/4 rot-resistant lumber for jambs',
      'Hardwood or aluminum threshold',
      'Exterior casing',
      'Drip cap flashing',
      'Self-adhesive flashing membrane',
      'Weatherstripping',
      'Exterior-rated screws and nails',
      'Caulk (exterior grade)'
    ],
    tools: [
      'Jack plane and block plane',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Marking gauge',
      'Combination square',
      'Level (4-foot)',
      'Brace and bit or drill',
      'Marking knife',
      'Mallet',
      'Tape measure'
    ],
    steps: [
      'Measure the rough opening and the door slab. Confirm clearances for the frame, shims, and threshold.',
      'Mill the side jambs and head jamb from rot-resistant stock. Rabbet or dado the head jamb into the sides.',
      'Cut the threshold to width and length. Slope the top face slightly outward for drainage.',
      'Assemble the frame on a flat surface. Check for square by measuring diagonals.',
      'Flash the rough opening — apply self-adhesive membrane at the sill, sides, and head in shingle fashion.',
      'Set the frame in the opening on shims. Level the threshold, plumb the sides, and check diagonals again.',
      'Shim solidly behind the hinge locations and fasten through the jambs into the framing.',
      'Install the drip cap above the head casing and seal with flashing tape.',
      'Hang the door, install weatherstripping, and adjust the threshold for a tight seal.',
      'Apply exterior casing, caulk all joints, and apply exterior finish.'
    ],
    tips: [
      'Flash before you frame. Water behind an exterior door rots the framing and subfloor faster than almost anything.',
      'The threshold must slope outward. Even 1/8" of inward slope will pool water against the door bottom.',
      'Use rot-resistant wood — white oak, cedar, or cypress. Pine frames rot within a few years without constant maintenance.',
      'Test the weatherstripping with a dollar bill. Close the door on it — if you can pull it out easily, the seal is too loose.'
    ],
    relatedProjects: ['hanging-a-door', 'rough-opening-framing', 'porch-railing']
  },
  {
    slug: 'porch-railing',
    name: 'Porch Railing',
    category: 'carpentry',
    difficulty: 3,
    summary: 'Build a code-compliant porch railing with posts, top and bottom rails, and balusters — safe, sturdy, and handsome.',
    description: `A porch railing keeps people from falling off the edge and gives the porch its visual character. Code requires railings on any deck or porch more than 30 inches above grade, with balusters spaced no more than 4 inches apart and a minimum rail height of 36 inches (42 inches in some jurisdictions).

The posts anchor the system — they bolt through the rim joist or mount to the deck surface with structural hardware. The top rail caps the assembly, the bottom rail holds the baluster bottoms, and the balusters fill the space between. Use weather-resistant wood and exterior fasteners. A well-built railing feels solid when you lean on it.`,
    estimatedTime: '8-16 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'boring-drilling', 'chopping', 'paring', 'sharpening'],
    joints: ['mortise-tenon', 'lap-joint', 'butt-joint'],
    woods: ['western-red-cedar', 'white-oak', 'pressure-treated-pine', 'cypress'],
    materials: [
      '4x4 posts',
      '2x4 top and bottom rails',
      '2x2 balusters (quantity based on 4" max spacing)',
      'Post mounting hardware (bolts or structural screws)',
      'Stainless steel or galvanized screws',
      'Exterior wood glue',
      'Post caps (optional)',
      'Exterior finish'
    ],
    tools: [
      'Crosscut saw',
      'Tenon saw',
      'Bench chisels',
      'Brace and bit or drill',
      'Level (4-foot)',
      'Tape measure',
      'Combination square',
      'Socket wrench',
      'Marking knife',
      'Mallet'
    ],
    steps: [
      'Check local building code for rail height, baluster spacing, and post attachment requirements.',
      'Lay out post positions — typically at corners, stair tops, and every 6 to 8 feet along a run.',
      'Install posts with through-bolts or approved structural hardware. Posts must resist a 200-pound lateral load.',
      'Cut top and bottom rails to span between posts.',
      'Lay out baluster positions on both rails — 4" maximum clear space between balusters.',
      'Cut all balusters to equal length.',
      'Fasten balusters to top and bottom rails with screws or tenons.',
      'Install the assembled rail sections between the posts.',
      'Add a cap rail on top for a comfortable grip and finished appearance.',
      'Apply exterior finish to all surfaces.'
    ],
    tips: [
      'Check your local code before starting. Rail height and baluster spacing requirements vary.',
      'The 4-inch rule: a 4-inch sphere must not pass between balusters. Space them at 3-1/2" clear to account for wood shrinkage.',
      'Posts are structural. Bolt them through the rim joist or use approved post-mount hardware — never just screw or nail them.',
      'Cedar and white oak weather naturally. Pressure-treated pine needs stain or paint after it dries.'
    ],
    relatedProjects: ['deck-framing', 'building-stairs', 'fence-section']
  },
  // ─────────────────────────────────────────────
  // OUTDOOR & GARDEN (12 projects)
  // ─────────────────────────────────────────────
  {
    slug: 'raised-planter-box',
    name: 'Raised Planter Box',
    category: 'outdoor',
    difficulty: 1,
    summary: 'Build a simple raised planter from rot-resistant boards — no fancy joinery, just solid corners and good drainage.',
    description: `A raised planter puts your garden at a comfortable working height and keeps soil contained. The construction is about as basic as woodworking gets — four walls joined at the corners, sitting on the ground or on legs. Use cedar, cypress, or untreated hardwood for anything growing food.

Size the box for what you are growing — 12 inches deep for most vegetables, 18 inches for root crops. Drill drainage holes in the bottom or leave it open to the ground. Line the inside with landscape fabric to retain soil while allowing drainage. A couple of these boxes will transform a bare patio into a productive garden.`,
    estimatedTime: '3-5 hours',
    skills: ['sawing-to-a-line', 'boring-drilling', 'marking-layout'],
    joints: ['butt-joint', 'screw-joint'],
    woods: ['western-red-cedar', 'cypress', 'white-oak'],
    materials: [
      '1x8 or 1x10 cedar boards',
      '2x2 or 4x4 corner posts',
      'Stainless steel or galvanized screws',
      'Landscape fabric',
      'Exterior wood finish (optional)'
    ],
    tools: [
      'Crosscut saw',
      'Drill or brace and bit',
      'Tape measure',
      'Combination square',
      'Pencil'
    ],
    steps: [
      'Decide on dimensions based on your space and what you want to grow.',
      'Cut the side boards to length.',
      'Cut four corner posts to the height of the box.',
      'Screw the side boards to the corner posts, building two ends first, then attaching the long sides.',
      'Drill drainage holes in the bottom boards if using a closed bottom.',
      'Line the inside with landscape fabric.',
      'Set the planter in position and fill with soil.'
    ],
    tips: [
      'Never use pressure-treated wood for food gardens. The chemicals leach into the soil.',
      'Cedar lasts 10-15 years in ground contact without any treatment.',
      'Make the box narrow enough to reach the center from either side — 4 feet wide is the maximum for comfort.'
    ],
    relatedProjects: ['cold-frame', 'potting-bench', 'garden-bench']
  },
  {
    slug: 'garden-bench',
    name: 'Garden Bench',
    category: 'outdoor',
    difficulty: 3,
    summary: 'A sturdy outdoor bench with mortise and tenon joinery — built to sit in the weather and look better every year.',
    description: `A garden bench lives outside year-round, so every decision serves durability. The joinery must be tight because outdoor furniture racks harder than indoor pieces — wind, uneven ground, and people sitting down hard all stress the joints. Use through-tenons with wedges or drawbored mortise and tenon joints throughout.

White oak, cedar, or cypress are the right woods for this job. The seat can be a thick slab or individual slats with drainage gaps between them. Keep the design simple and the proportions generous — outdoor furniture should feel substantial. Apply an exterior oil or let the wood silver naturally.`,
    estimatedTime: '15-20 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'hand-planing', 'drawboring', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'wedged-through-tenon'],
    woods: ['white-oak', 'western-red-cedar', 'cypress', 'teak'],
    materials: [
      '20-25 board feet of 8/4 weather-resistant hardwood',
      'Hardwood wedges and drawbore pegs',
      'Waterproof wood glue (Titebond III or epoxy)',
      'Exterior oil finish or leave unfinished'
    ],
    tools: [
      'Jack plane and smoothing plane',
      'Mortise chisel (3/8", 1/2")',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Brace and bit',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps'
    ],
    steps: [
      'Design the bench — 48" to 60" long, 18" seat height, with stretchers for rigidity.',
      'Mill the legs from 8/4 stock. Shape the feet with a slight chamfer to prevent rot wicking.',
      'Cut mortises in the legs for the seat rails, aprons, and stretchers.',
      'Cut tenons on all horizontal members. Fit each joint individually.',
      'Mill the seat — either a thick slab or individual slats spaced 1/4" apart for drainage.',
      'Dry-fit the entire bench and check all joints under clamp pressure.',
      'Drawbore or wedge the joints. Assemble with waterproof glue.',
      'Attach the seat with buttons or screws from below.',
      'Chamfer all exposed edges to prevent splinters.',
      'Apply exterior oil finish or leave to weather naturally.'
    ],
    tips: [
      'Chamfer the feet bottoms — flat end grain wicks water and rots from the ground up.',
      'White oak is naturally rot-resistant and weathers to a beautiful silver-gray.',
      'Drawbored joints survive outdoors where glue-only joints fail. The mechanical lock holds even when adhesive degrades.',
      'Elevate the bench on stone feet or pads to keep the legs out of standing water.'
    ],
    relatedProjects: ['bench-with-back', 'deck-bench', 'adirondack-chair']
  },
  {
    slug: 'pergola',
    name: 'Pergola',
    category: 'outdoor',
    difficulty: 4,
    summary: 'Build a freestanding pergola with posts, beams, and rafters — an outdoor room defined by timber and shadow.',
    description: `A pergola creates shade and structure without walls. Four or more posts support beams, which carry rafters that cast striped shadows across the space below. The construction is straightforward post-and-beam work, but the scale demands solid foundations and beefy lumber.

Set the posts on concrete footings below the frost line. The beams span between posts and the rafters run perpendicular across the beams. Notched or lapped joints at the beam-to-post and rafter-to-beam connections add strength and visual detail. Shape the rafter tails to a profile that suits your taste — this is the decorative signature of the pergola.`,
    estimatedTime: '30-50 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'chopping', 'paring', 'boring-drilling', 'hewing', 'sharpening'],
    joints: ['lap-joint', 'mortise-tenon', 'notched-joint'],
    woods: ['western-red-cedar', 'white-oak', 'douglas-fir', 'pressure-treated-pine'],
    materials: [
      '6x6 posts (4 minimum)',
      '2x8 or 2x10 beams (doubled)',
      '2x6 rafters',
      'Post bases and beam hardware',
      'Concrete for footings',
      'Carriage bolts or structural screws',
      'Exterior finish (optional)'
    ],
    tools: [
      'Crosscut saw',
      'Tenon saw',
      'Bench chisels (wide)',
      'Brace and bit or drill',
      'Framing square',
      'Level (4-foot)',
      'Tape measure',
      'Chalk line',
      'Socket wrench',
      'Mallet',
      'Post hole digger'
    ],
    steps: [
      'Lay out the post positions. Check for square by measuring diagonals.',
      'Dig footings below the frost line and pour concrete. Set post bases.',
      'Cut posts to length and install them plumb in both directions.',
      'Build the beams — double 2x stock bolted together or solid timber.',
      'Notch or lap the beams onto the post tops and bolt through.',
      'Lay out the rafter positions on top of the beams at even spacing.',
      'Cut the rafter tail profiles — a decorative curve or angle at each end.',
      'Notch the rafters where they cross the beams for a positive seat.',
      'Install the rafters and fasten to the beams.',
      'Apply exterior finish or let the wood weather.'
    ],
    tips: [
      'Set the posts in concrete below the frost line or they will heave. Check local code for depth.',
      'Use a water level or laser to get all post tops at the same height.',
      'Shape the rafter tails before installation — it is much easier on the ground than on a ladder.',
      'A square pergola with equal overhangs on all sides looks most balanced. Measure the diagonals.'
    ],
    relatedProjects: ['arbor', 'garden-pavilion', 'deck-framing']
  },
  {
    slug: 'garden-gate',
    name: 'Garden Gate',
    category: 'outdoor',
    difficulty: 2,
    summary: 'Build a sturdy garden gate with a mortised frame and diagonal brace — the entry to your outdoor spaces.',
    description: `A garden gate is a small door with big demands. It swings open and closed hundreds of times a year, hangs from one side, and lives in the weather. The frame must be rigid enough to resist racking, which means a diagonal brace running from the bottom hinge side to the top latch side.

Build the frame from 2x stock with mortise and tenon joints at the corners. The diagonal brace fits between the rails and keeps the gate from sagging. Fill the frame with vertical boards, pickets, or slats depending on your style. Hang it on heavy-duty strap or T-hinges that can support the weight without drooping.`,
    estimatedTime: '6-10 hours',
    skills: ['sawing-to-a-line', 'chopping', 'paring', 'marking-layout', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'lap-joint'],
    woods: ['western-red-cedar', 'white-oak', 'cypress', 'pressure-treated-pine'],
    materials: [
      '2x4 lumber for frame',
      '1x4 or 1x6 boards for infill',
      'Heavy-duty strap or T-hinges',
      'Gate latch',
      'Stainless steel or galvanized screws',
      'Waterproof wood glue',
      'Exterior finish'
    ],
    tools: [
      'Tenon saw and crosscut saw',
      'Mortise chisel (3/8")',
      'Bench chisels',
      'Brace and bit or drill',
      'Marking gauge',
      'Combination square',
      'Mallet',
      'Tape measure',
      'Clamps'
    ],
    steps: [
      'Measure the opening between the gate posts. Size the gate 1/2" narrower for clearance.',
      'Cut the top rail, bottom rail, and two stiles from 2x stock.',
      'Cut mortise and tenon joints at all four corners of the frame.',
      'Measure and cut the diagonal brace — it runs from the bottom hinge corner to the top latch corner.',
      'Fit the brace between the rails with notched or lapped joints.',
      'Assemble the frame with waterproof glue. Clamp and check for square.',
      'Attach the infill boards — vertical pickets or tongue-and-groove boards.',
      'Mount the hinges to the gate first, then hang the gate on the post.',
      'Install the latch and adjust the swing.',
      'Apply exterior finish.'
    ],
    tips: [
      'The diagonal brace always runs from the bottom of the hinge side to the top of the latch side. Reversed, it accelerates the sag.',
      'Use three hinges on a heavy gate — the middle hinge prevents twist.',
      'Leave 1/4" clearance on each side so the gate swings freely even when the wood swells.',
      'Cedar gates weather to silver gray without finish and last decades.'
    ],
    relatedProjects: ['fence-section', 'arbor', 'raised-planter-box']
  },
  {
    slug: 'outdoor-dining-table',
    name: 'Outdoor Dining Table',
    category: 'outdoor',
    difficulty: 4,
    summary: 'Build a trestle-style outdoor dining table from weather-resistant stock — designed for meals under the sky.',
    description: `An outdoor dining table needs to handle rain, sun, food spills, and the constant movement of chairs. Build it from white oak, cedar, or teak with drawbored or wedged joinery that will hold up when glue inevitably weakens in the elements.

The trestle base gives this table stability without legs in the way of chairs. Two upright frames connect with a long stretcher through-tenoned and wedged at each end. The top is a thick slab or glued-up panel attached with buttons for seasonal movement. Build it heavier than you think — outdoor furniture needs mass to resist wind and rough handling.`,
    estimatedTime: '25-40 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'drawboring', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'wedged-through-tenon', 'drawbored', 'breadboard-end'],
    woods: ['white-oak', 'teak', 'western-red-cedar', 'cypress'],
    materials: [
      '30-40 board feet of 8/4 weather-resistant hardwood for the top',
      '15-20 board feet of 8/4 hardwood for the base',
      'Hardwood wedges and drawbore pegs',
      'Tabletop fastener buttons',
      'Waterproof wood glue (Titebond III or epoxy)',
      'Exterior oil finish'
    ],
    tools: [
      'Jack plane, jointer plane, smoothing plane',
      'Mortise chisel (3/8", 1/2")',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Brace and bit',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps',
      'Winding sticks'
    ],
    steps: [
      'Design the table for your space — standard outdoor dining is 30" tall, 36-40" wide, 72" long.',
      'Mill and glue up the top from 8/4 stock. Flatten with a jack plane.',
      'Build the two trestle uprights — a foot, a post, and an upper rail joined with through-tenons.',
      'Cut the long stretcher and through-tenon it into both trestle uprights.',
      'Wedge or drawbore all base joints for mechanical strength.',
      'Attach breadboard ends to the top if desired, with elongated peg holes for movement.',
      'Attach the top to the base with buttons.',
      'Chamfer all exposed edges and round the corners.',
      'Apply a generous coat of exterior oil to all surfaces.',
      'Refresh the finish every season to maintain protection.'
    ],
    tips: [
      'White oak and teak are naturally rot-resistant. They weather beautifully without finish, but oil extends their life.',
      'Through-tenons with wedges hold together mechanically — critical outdoors where glue fails over time.',
      'Build the top from quartersawn stock if possible. It moves less and resists cupping.',
      'Elevate the feet on stone pads or rubber bumpers to prevent ground contact rot.'
    ],
    relatedProjects: ['kitchen-table', 'garden-bench', 'deck-bench']
  },
  {
    slug: 'cold-frame',
    name: 'Cold Frame',
    category: 'outdoor',
    difficulty: 1,
    summary: 'Build a simple cold frame from cedar and an old window sash — extend your growing season by weeks.',
    description: `A cold frame is a bottomless box with a glass top that traps solar heat and protects plants from frost. It sits on the ground, angled toward the sun, and turns a patch of soil into a miniature greenhouse. Build the back wall taller than the front so the glass lid slopes toward the sun.

Use cedar for rot resistance and hinge an old window sash or a piece of polycarbonate on top. That is the entire project. Build it in an afternoon, set it over your seedlings, and start your garden weeks earlier than the neighbors. Simple construction, immediate payoff.`,
    estimatedTime: '2-4 hours',
    skills: ['sawing-to-a-line', 'boring-drilling', 'marking-layout'],
    joints: ['butt-joint', 'screw-joint'],
    woods: ['western-red-cedar', 'cypress'],
    materials: [
      '1x10 or 1x12 cedar boards',
      'Old window sash or polycarbonate panel',
      'Hinges (2)',
      'Galvanized screws',
      'Handle or knob for the lid'
    ],
    tools: [
      'Crosscut saw',
      'Drill or brace and bit',
      'Tape measure',
      'Combination square',
      'Pencil'
    ],
    steps: [
      'Size the box to match your window sash or polycarbonate panel.',
      'Cut the back wall about 6" taller than the front wall for solar angle.',
      'Cut the two side walls with an angled top edge running from back height to front height.',
      'Screw the four walls together at the corners.',
      'Hinge the window sash to the top of the back wall.',
      'Set the cold frame in position, angled south.',
      'Prop the lid open on warm days with a stick or automatic vent opener.'
    ],
    tips: [
      'Angle the cold frame due south for maximum sun exposure.',
      'Vent on sunny days or the interior temperature will cook your plants.',
      'An automatic vent opener (wax-piston type) costs a few dollars and saves your plants if you forget to vent.',
      'Paint the interior white to reflect light onto the plants from all sides.'
    ],
    relatedProjects: ['raised-planter-box', 'potting-bench', 'garden-gate']
  },
  {
    slug: 'firewood-rack',
    name: 'Firewood Rack',
    category: 'outdoor',
    difficulty: 1,
    summary: 'A simple firewood rack from framing lumber — keeps your wood off the ground, organized, and drying properly.',
    description: `Firewood stacked on the ground rots from the bottom and breeds insects. A simple rack lifts the stack off the soil and allows air to circulate under and through the pile. This design uses construction lumber for the frame and requires no complex joinery — just butt joints and screws.

Build two end frames connected by bottom rails. The end frames are A-shaped or rectangular, with uprights to keep the stack from toppling sideways. Size it for the amount of wood you burn — a full cord measures 4 feet by 4 feet by 8 feet. A half-cord rack is more practical for most homes.`,
    estimatedTime: '2-3 hours',
    skills: ['sawing-to-a-line', 'boring-drilling', 'marking-layout'],
    joints: ['butt-joint', 'screw-joint'],
    woods: ['pressure-treated-pine', 'douglas-fir', 'western-red-cedar'],
    materials: [
      '2x4 lumber for the frame',
      '4x4 posts for uprights (optional)',
      'Galvanized or stainless steel screws',
      'Exterior finish (optional)'
    ],
    tools: [
      'Crosscut saw',
      'Drill',
      'Tape measure',
      'Speed square',
      'Pencil'
    ],
    steps: [
      'Decide on the rack size based on your firewood needs.',
      'Cut two pairs of uprights from 2x4 or 4x4 stock.',
      'Cut bottom rails to span between the uprights.',
      'Build the two end frames by screwing the uprights to short cross pieces.',
      'Connect the end frames with the bottom rails.',
      'Add a few cross pieces on top of the bottom rails to support the wood stack.',
      'Set the rack on level ground, pavers, or gravel to keep it stable.'
    ],
    tips: [
      'Keep the rack at least 6" off the ground for airflow.',
      'Face the open side toward prevailing wind for faster drying.',
      'Stack firewood bark-side up in the top rows to shed rain.'
    ],
    relatedProjects: ['firewood-shelter', 'sawhorses', 'tool-tote']
  },
  {
    slug: 'potting-bench',
    name: 'Potting Bench',
    category: 'outdoor',
    difficulty: 2,
    summary: 'Build a working potting bench with a soil-resistant top, lower shelf, and tool storage — your garden workshop.',
    description: `A potting bench is a workbench for gardeners. It needs to handle soil, water, and general mess without complaint. The top should be at a comfortable standing height (34 to 36 inches), the surface should shed dirt easily, and there should be storage for pots, tools, and soil bags below.

Build the frame from cedar or pressure-treated stock with simple mortise and tenon or lap joints. The top can be slats with gaps for drainage or a solid surface with a galvanized sheet metal cover. Add hooks for hanging tools and a shelf below for pots. Keep it simple — this is a tool, not furniture.`,
    estimatedTime: '6-10 hours',
    skills: ['sawing-to-a-line', 'marking-layout', 'boring-drilling', 'chopping', 'paring'],
    joints: ['mortise-tenon', 'lap-joint', 'screw-joint'],
    woods: ['western-red-cedar', 'pressure-treated-pine', 'cypress'],
    materials: [
      '2x4 lumber for frame',
      '1x4 or 1x6 cedar for top and shelf',
      'Galvanized screws',
      'Hooks for tool storage',
      'Waterproof wood glue',
      'Exterior finish (optional)'
    ],
    tools: [
      'Crosscut saw',
      'Tenon saw',
      'Bench chisels',
      'Brace and bit or drill',
      'Marking gauge',
      'Combination square',
      'Mallet',
      'Tape measure',
      'Clamps'
    ],
    steps: [
      'Design the bench for your height — the top surface should be at a comfortable working height.',
      'Cut four legs from 2x4 stock.',
      'Cut rails for the top frame and lower shelf frame.',
      'Join the legs to the rails with mortise and tenon or lap joints.',
      'Assemble the base frame and check for square.',
      'Install the top slats with 1/4" gaps for drainage.',
      'Install the lower shelf slats.',
      'Add hooks, a small back shelf, or a pegboard for tool storage.',
      'Apply exterior finish or let cedar weather naturally.'
    ],
    tips: [
      'Slat the top with gaps so water and soil fall through rather than pooling.',
      'Make it at least 24" deep so you have room to work with large pots.',
      'Add a back shelf or pegboard for small tools — keeping them visible means you will actually use them.',
      'Position the bench near a water source if possible.'
    ],
    relatedProjects: ['raised-planter-box', 'garden-bench', 'sawhorses']
  },
  {
    slug: 'fence-section',
    name: 'Fence Section',
    category: 'outdoor',
    difficulty: 2,
    summary: 'Build a single fence section — posts, rails, and pickets or boards — the repeating unit of any fence.',
    description: `A fence is just one section repeated along a property line. Master the construction of a single section and you can build any length. The posts anchor in concrete below the frost line, two or three horizontal rails span between posts, and vertical boards or pickets attach to the rails.

Set the posts first and let the concrete cure. Then cut your rails to span between the posts and nail them to the post faces or set them into mortises. Finally, attach the pickets or boards. Use a spacer block for consistent gaps and a string line along the top for a straight picket line.`,
    estimatedTime: '4-6 hours per section',
    skills: ['sawing-to-a-line', 'boring-drilling', 'marking-layout'],
    joints: ['butt-joint', 'mortise-tenon', 'screw-joint'],
    woods: ['western-red-cedar', 'pressure-treated-pine', 'cypress', 'white-oak'],
    materials: [
      '4x4 posts (pressure-treated or rot-resistant)',
      '2x4 rails',
      '1x4 or 1x6 pickets or fence boards',
      'Concrete for post footings',
      'Galvanized nails or screws',
      'Post caps (optional)'
    ],
    tools: [
      'Crosscut saw',
      'Drill',
      'Post hole digger',
      'Level (4-foot)',
      'Tape measure',
      'String line',
      'Speed square',
      'Hammer',
      'Pencil'
    ],
    steps: [
      'Lay out the fence line with string and stakes. Mark post positions at 6 to 8 feet apart.',
      'Dig post holes below the frost line — typically 36" deep for a 6-foot fence.',
      'Set the corner and end posts first. Plumb in both directions and brace.',
      'Pour concrete around the posts and let it cure for at least 24 hours.',
      'Run a string line between the post tops to establish a straight, level line.',
      'Cut and install horizontal rails — top, bottom, and middle for fences over 4 feet.',
      'Start attaching pickets or boards from one end. Use a spacer block for consistent gaps.',
      'Keep a string line along the top to maintain a straight picket line.',
      'Install post caps and apply finish if desired.'
    ],
    tips: [
      'Set corner and end posts first, then use a string line to align the intermediate posts.',
      'Crown the post tops or install post caps — flat-cut post tops hold water and rot.',
      'A 4" spacer block between pickets gives a consistent look without measuring every board.',
      'Let pressure-treated wood dry for a few weeks before staining.'
    ],
    relatedProjects: ['garden-gate', 'porch-railing', 'arbor']
  },
  {
    slug: 'arbor',
    name: 'Arbor',
    category: 'outdoor',
    difficulty: 3,
    summary: 'Build a garden arbor with two post frames, an arched or flat top, and optional side lattice — a gateway for climbing plants.',
    description: `An arbor marks a transition — from yard to garden, from path to patio, from public to private. It is a pergola shrunk down to doorway size, with two post frames connected by overhead beams or an arch. Climbing plants eventually cover it and create a living tunnel of green.

The posts set in concrete footings, the overhead structure connects the two sides, and optional lattice panels on the sides give climbers something to grab. Keep the opening at least 4 feet wide and 7 feet tall at the center. Shape the overhead members to an arch if you want elegance, or keep them flat for simplicity.`,
    estimatedTime: '10-15 hours',
    skills: ['marking-layout', 'sawing-to-a-line', 'chopping', 'paring', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'lap-joint', 'notched-joint'],
    woods: ['western-red-cedar', 'white-oak', 'cypress', 'pressure-treated-pine'],
    materials: [
      '4x4 posts (4)',
      '2x6 or 2x8 for arch or header beams',
      '2x2 for lattice or cross pieces',
      'Concrete for footings',
      'Galvanized or stainless steel screws',
      'Exterior finish (optional)'
    ],
    tools: [
      'Crosscut saw',
      'Coping saw or jigsaw (for arch cuts)',
      'Tenon saw',
      'Bench chisels',
      'Brace and bit or drill',
      'Level (4-foot)',
      'Tape measure',
      'Combination square',
      'Mallet',
      'Post hole digger'
    ],
    steps: [
      'Lay out the four post positions. The opening should be at least 4 feet wide.',
      'Dig footings below the frost line and set posts in concrete.',
      'Plumb all four posts and brace until the concrete cures.',
      'Cut the header beams or arch pieces. For an arch, trace and cut matching curves from wide stock.',
      'Notch or lap the header beams onto the post tops.',
      'Add cross pieces or purlins across the top for visual interest and plant support.',
      'Build and install lattice panels on the sides if desired.',
      'Apply exterior finish or let the wood weather naturally.',
      'Plant climbing roses, clematis, or wisteria at the base of each post.'
    ],
    tips: [
      'For a curved arch, laminate thin strips bent over a form or band-saw the curve from wide stock.',
      'Set posts at least 2 feet deep in concrete for stability — deeper in windy areas.',
      'Lattice panels are easier to build flat on the ground and then attach to the posts.',
      'Choose your climbing plants before building — vigorous growers like wisteria need heavier construction.'
    ],
    relatedProjects: ['pergola', 'garden-gate', 'fence-section']
  },
  {
    slug: 'outdoor-bar',
    name: 'Outdoor Bar',
    category: 'outdoor',
    difficulty: 3,
    summary: 'Build a standing-height outdoor bar with a wide top, lower prep shelf, and weather-resistant construction.',
    description: `An outdoor bar is a gathering point for every cookout and party. Build it at standing height (42 inches) with a wide top that can hold drinks, plates, and a cutting board. The construction is similar to a workbench but with a finished appearance and weather-resistant materials.

The frame uses mortise and tenon or lap joints in cedar or white oak. The top can be a thick glued-up slab or butcher-block style lamination. Add a lower shelf for storage and hooks for towels or utensils. If you want to get fancy, add a small sink or bottle opener, but the basic structure is just a tall, sturdy table.`,
    estimatedTime: '15-25 hours',
    skills: ['hand-planing', 'chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'sharpening'],
    joints: ['mortise-tenon', 'lap-joint', 'tongue-groove'],
    woods: ['white-oak', 'western-red-cedar', 'teak', 'cypress'],
    materials: [
      '25-35 board feet of weather-resistant hardwood',
      'Stainless steel screws',
      'Waterproof wood glue',
      'Tabletop fastener buttons',
      'Exterior oil finish',
      'Bar rail molding (optional)'
    ],
    tools: [
      'Jack plane and smoothing plane',
      'Mortise chisel (3/8")',
      'Bench chisels',
      'Tenon saw and crosscut saw',
      'Brace and bit or drill',
      'Marking gauge',
      'Combination square',
      'Marking knife',
      'Mallet',
      'Pipe clamps'
    ],
    steps: [
      'Design the bar for your space — 42" tall, 24" deep, and as long as your patio allows.',
      'Mill the four legs from 8/4 stock.',
      'Cut mortises and tenons for the apron rails and any lower shelf supports.',
      'Assemble the base frame. Check for square and let the glue cure.',
      'Mill and glue up the bar top. Flatten with a jack plane.',
      'Add a bar rail or raised edge along the front to prevent spills from rolling off.',
      'Install a lower shelf for bottles and supplies.',
      'Attach the top with buttons to allow for wood movement.',
      'Chamfer all exposed edges.',
      'Apply several coats of exterior oil to all surfaces.'
    ],
    tips: [
      'Bar height is 42 inches — taller than a standard table. Size the stools accordingly.',
      'A raised bar rail along the front edge keeps drinks from sliding off.',
      'Apply exterior oil finish at least twice a season if the bar lives in the weather.',
      'White oak with an oil finish develops a rich patina outdoors that improves with age.'
    ],
    relatedProjects: ['outdoor-dining-table', 'potting-bench', 'garden-bench']
  },
  {
    slug: 'deck-bench',
    name: 'Deck Bench',
    category: 'outdoor',
    difficulty: 2,
    summary: 'A built-in deck bench that bolts to the deck framing — permanent seating that doubles as a railing.',
    description: `A deck bench built into the deck structure serves as both seating and a visual boundary. The supports bolt directly to the deck joists or rim joist, and the seat planks span between them. In many jurisdictions, a bench at the deck perimeter can serve as a railing if it meets height and strength requirements.

Keep the seat height at 17 to 18 inches and the depth at 15 to 18 inches. Use the same lumber as the deck surface for a unified look. The supports are the structural element — they must resist the weight of people sitting and leaning, so bolt them solidly to the framing below.`,
    estimatedTime: '4-8 hours',
    skills: ['sawing-to-a-line', 'boring-drilling', 'marking-layout'],
    joints: ['butt-joint', 'lap-joint', 'screw-joint'],
    woods: ['pressure-treated-pine', 'western-red-cedar', 'white-oak', 'ipe'],
    materials: [
      '2x4 or 2x6 for seat planks (matching deck boards)',
      '2x8 or 2x10 for supports',
      '4x4 posts if freestanding',
      'Carriage bolts for structural connections',
      'Galvanized or stainless steel screws',
      'Exterior finish'
    ],
    tools: [
      'Crosscut saw',
      'Drill with long bits',
      'Socket wrench',
      'Level',
      'Tape measure',
      'Speed square',
      'Pencil',
      'Clamps'
    ],
    steps: [
      'Design the bench to match your deck dimensions and code requirements.',
      'Cut the support brackets from 2x8 or 2x10 — shaped like an L or a triangular knee brace.',
      'Bolt the supports to the deck rim joist or joists at seat height.',
      'Space supports every 24 to 32 inches along the bench run.',
      'Cut seat planks to length and round the front edges.',
      'Screw the seat planks to the supports with 1/4" drainage gaps between boards.',
      'Add a back support if desired, angled slightly for comfort.',
      'Apply exterior finish to match the deck.'
    ],
    tips: [
      'Bolt the supports — screws alone are not strong enough for seating loads.',
      'Match the bench lumber to the deck boards for a unified look.',
      'Round the front edge of the seat planks generously. Sharp edges on shorts and bare legs are unpleasant.',
      'Check if your local code allows a bench to serve as a railing. If so, it must meet specific height and load requirements.'
    ],
    relatedProjects: ['deck-framing', 'garden-bench', 'adirondack-chair']
  },
  // ─────────────────────────────────────────────
  // TIMBER FRAME (13 projects)
  // ─────────────────────────────────────────────
  {
    slug: 'timber-frame-sawhorses',
    name: 'Timber Frame Sawhorses',
    category: 'timber-frame',
    difficulty: 2,
    summary: 'Build a pair of heavy-duty sawhorses with splayed legs and through-tenon joinery — your first timber frame project.',
    description: `These are not construction-site sawhorses. These are timber frame practice pieces — heavy, solid, and joined with real mortise and tenon joinery. Splayed legs pass through the beam with through-tenons and are wedged from the top. The result is a pair of sawhorses strong enough to support a timber while you work on it.

This is the ideal first timber frame project because the joinery is real but the stakes are low. You will practice laying out and cutting through-mortises, through-tenons, and wedged joints at compound angles — the same skills you need for posts, beams, and braces in larger work.`,
    estimatedTime: '8-12 hours per pair',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'hewing', 'sharpening'],
    joints: ['wedged-through-tenon', 'mortise-tenon'],
    woods: ['douglas-fir', 'white-oak', 'southern-yellow-pine', 'eastern-white-pine'],
    materials: [
      '4x6 or 6x6 beam for the top rail',
      '2x4 or 3x3 stock for legs',
      'Hardwood wedges',
      'Linseed oil (optional finish)'
    ],
    tools: [
      'Mortise chisel (1" or larger)',
      'Bench chisels',
      'Crosscut saw and tenon saw',
      'Brace and bit',
      'Framing square',
      'Sliding bevel',
      'Marking gauge',
      'Mallet',
      'Drawknife (optional, for shaping legs)',
      'Pencil and chalk line'
    ],
    steps: [
      'Mill or hew the top beam to finished dimensions. A 4x6 about 36 to 42 inches long works well.',
      'Lay out the four leg positions on the beam. Splay the legs about 15 degrees in both directions.',
      'Set the sliding bevel to the splay angle and transfer it to the beam for each mortise.',
      'Bore out the waste and chop the four through-mortises at the compound angles.',
      'Shape the legs — round, octagonal, or left square. Cut the through-tenons on the top ends.',
      'Test-fit each leg in its mortise. The tenon should protrude about 1 inch above the beam.',
      'Saw a wedge slot in the top of each tenon, perpendicular to the beam grain.',
      'Drive the legs home and hammer in the hardwood wedges to lock everything.',
      'Trim the tenon tops flush with the beam surface.',
      'Repeat for the second sawhorse.'
    ],
    tips: [
      'Splay the legs in both directions — front-to-back and side-to-side. This creates a wide, stable stance.',
      'Cut the wedge slot perpendicular to the beam grain so the wedge spreads the tenon across the grain, not with it.',
      'These are practice pieces — work slowly and learn from each joint. Speed comes with the next project.',
      'Wax the tenon before fitting. It makes assembly easier and allows disassembly later if needed.'
    ],
    relatedProjects: ['sawhorses', 'practice-bent', 'timber-frame-workbench']
  },
  {
    slug: 'practice-bent',
    name: 'Practice Bent',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'Lay out and raise a single timber frame bent — two posts, a tie beam, and knee braces — the essential unit of any frame.',
    description: `A bent is a single cross-section of a timber frame — two posts connected by a tie beam at the top, usually with diagonal knee braces for rigidity. Every timber frame building is a series of bents connected by wall plates and purlins. If you can build and raise one bent, you understand the fundamental process.

Build this practice bent from 4x6 or 6x6 timbers at a manageable scale — 8-foot posts with a 10 to 12-foot tie beam. Cut traditional mortise and tenon joints, drawbore the connections, and raise the assembled bent with a couple of friends and a pike pole. This is timber framing distilled to its essence.`,
    estimatedTime: '20-30 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint'],
    woods: ['douglas-fir', 'white-oak', 'eastern-hemlock', 'eastern-white-pine'],
    materials: [
      '2 posts: 6x6 x 8 feet',
      '1 tie beam: 6x8 x 12 feet',
      '4 knee braces: 3x4 x 30 inches',
      'Hardwood drawbore pegs (1" diameter, 12" long)',
      'Linseed oil finish (optional)'
    ],
    tools: [
      'Mortise chisel (1" and 1-1/2")',
      'Bench chisels (wide set)',
      'Crosscut saw (timber-sized)',
      'Tenon saw',
      'Brace and bit (1" auger)',
      'Framing square',
      'Marking gauge',
      'Chalk line',
      'Mallet (heavy, 3-pound head)',
      'Commander or beetle (for driving pegs)',
      'Drawbore pins'
    ],
    steps: [
      'Reference-face all timbers — mark the faces and edges that will be your layout reference.',
      'Lay out the tie beam — mark the post mortises and knee brace mortises on the beam.',
      'Lay out the posts — mark the tie beam tenon mortise and knee brace mortises.',
      'Cut all mortises. Bore out the waste with an auger and chop to the lines with a mortise chisel.',
      'Cut all tenons. Saw the cheeks, then pare to the shoulder lines.',
      'Cut the knee braces with tenons on both ends at the correct angle.',
      'Dry-fit the entire bent on the ground. Check every joint.',
      'Bore the drawbore holes — through the mortise member first, then offset 1/16" toward the shoulder in the tenon.',
      'Rive the pegs from straight-grained hardwood. Taper the tips.',
      'Assemble the bent and drive all drawbore pegs. Raise the bent with helpers.'
    ],
    tips: [
      'Reference-facing is the most important step. All measurements come from these faces — skip it and nothing will line up.',
      'Drawbore pegs pull the shoulders tight without clamps. The 1/16" offset is the key — more than that risks splitting.',
      'Rive your pegs from straight-grained oak or ash. They are stronger than sawn pegs and split the timber less.',
      'Raise the bent with at least two helpers and a pike pole. Practice the raise before committing to final assembly.'
    ],
    relatedProjects: ['timber-frame-sawhorses', 'tool-shed', 'king-post-truss']
  },
  {
    slug: 'tool-shed',
    name: 'Timber Frame Tool Shed',
    category: 'timber-frame',
    difficulty: 4,
    summary: 'Build a small timber frame shed with four bents, wall plates, rafters, and board-and-batten siding — your first real structure.',
    description: `A tool shed is the ideal first timber frame building. It is small enough to build without heavy equipment, large enough to be useful, and contains all the essential elements of timber frame construction — posts, beams, braces, plates, rafters, and enclosure. An 8x12-foot shed stores everything a workshop needs.

Four bents connected by wall plates form the skeleton. Common rafters span from plate to ridge. Board-and-batten siding and a metal or shingle roof complete the enclosure. Every joint is traditional mortise and tenon, drawbored with hardwood pegs. Build it with friends — the raising is half the fun.`,
    estimatedTime: '80-120 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint', 'birdsmouth'],
    woods: ['douglas-fir', 'eastern-white-pine', 'white-oak', 'eastern-hemlock'],
    materials: [
      'Posts: 6x6 timbers (8-10 pieces)',
      'Beams and plates: 6x8 timbers',
      'Knee braces: 3x4 stock',
      'Rafters: 4x6 or 2x6 stock',
      'Hardwood drawbore pegs',
      'Board-and-batten siding',
      'Metal roofing or shingles',
      'Concrete for footings'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2")',
      'Bench chisels (wide set)',
      'Crosscut saw (timber-sized)',
      'Tenon saw',
      'Brace and bit set',
      'Framing square and combination square',
      'Chalk line',
      'Level (4-foot)',
      'Mallet and commander',
      'Drawknife and slick',
      'Come-along or block and tackle (for raising)'
    ],
    steps: [
      'Design the shed and create a cut list for all timbers. Reference-face every piece.',
      'Lay out and cut all joints for the four bents — post mortises, beam tenons, brace joints.',
      'Dry-fit each bent on the ground and mark the drawbore holes.',
      'Bore and peg each bent. Stack them on the layout floor.',
      'Lay out and cut the wall plate joints — the plates connect the bents along the wall line.',
      'Raise the bents in sequence, bracing each one as it goes up.',
      'Install the wall plates between the bents.',
      'Cut and install the rafters with birdsmouth joints at the plates.',
      'Install roof sheathing, siding, and doors.',
      'Apply finish to exposed timbers if desired.'
    ],
    tips: [
      'Number every timber and joint during layout. In a structure this size, there are dozens of joints that look similar but are not interchangeable.',
      'Raise the bents with friends — a shed raising is a community event. Have enough pike poles and gin poles on hand.',
      'Board-and-batten siding is the traditional and easiest enclosure for a timber frame.',
      'Plan the door opening during layout. Adding it after framing means cutting through structural members.'
    ],
    relatedProjects: ['practice-bent', 'lean-to', 'small-barn']
  },
  {
    slug: 'lean-to',
    name: 'Lean-To Shelter',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'A single-slope timber frame lean-to for firewood, equipment, or open-air work — three walls and a shed roof.',
    description: `A lean-to is a timber frame reduced to its simplest useful form — a row of tall posts at the back, a row of short posts at the front, beams connecting them, and a single-slope roof. One side is open for access. It shelters firewood, garden equipment, or serves as an open-air workshop.

The construction uses the same joints as a full timber frame but with fewer bents and no complex roof geometry. The single slope simplifies the rafter work to a series of parallel cuts at the same angle. This is a great project between a practice bent and a full shed.`,
    estimatedTime: '40-60 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'birdsmouth'],
    woods: ['douglas-fir', 'eastern-white-pine', 'eastern-hemlock', 'white-oak'],
    materials: [
      '6x6 posts (6-8 pieces, two heights)',
      '6x8 beams and plates',
      '4x6 rafters',
      'Knee braces: 3x4 stock',
      'Hardwood drawbore pegs',
      'Metal roofing',
      'Concrete for footings'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2")',
      'Bench chisels',
      'Crosscut saw',
      'Tenon saw',
      'Brace and bit set',
      'Framing square',
      'Level (4-foot)',
      'Chalk line',
      'Mallet and commander',
      'Tape measure'
    ],
    steps: [
      'Design the lean-to — decide on the open side, roof pitch, and overall dimensions.',
      'Set footings for all posts. The back row is taller than the front row to create the roof slope.',
      'Cut and raise the posts. Plumb in both directions.',
      'Install the front plate and back plate on top of the post rows.',
      'Cut and install knee braces between posts and plates.',
      'Cut rafters with birdsmouth joints at the plates. Install at 24" on center.',
      'Install roof sheathing and metal roofing.',
      'Add back wall and side wall sheathing if desired.',
      'Apply finish to exposed timbers.'
    ],
    tips: [
      'Pitch the roof at least 3:12 for proper water shedding on metal roofing.',
      'The open side should face away from prevailing wind and weather.',
      'A lean-to attached to an existing building shares one wall — but make sure the ledger attachment is waterproofed.',
      'Use the same joint layout and reference-facing techniques as a full timber frame. Good habits start with small projects.'
    ],
    relatedProjects: ['practice-bent', 'firewood-shelter', 'tool-shed']
  },
  {
    slug: 'firewood-shelter',
    name: 'Timber Frame Firewood Shelter',
    category: 'timber-frame',
    difficulty: 2,
    summary: 'A small post-and-beam firewood shelter with a shed roof — keeps your wood dry and gives you timber frame practice.',
    description: `A firewood shelter is the simplest useful timber frame structure. Four posts, two beams, a few rafters, and a roof. The front is open for loading and unloading, the back and sides keep rain off the stack. Build it from rough-sawn 4x4 or 6x6 timbers with basic mortise and tenon joinery.

This project teaches you to work with real timbers at a scale where mistakes are affordable. The joinery is simple — four post-to-beam connections and a few rafter seats. If you can build this, you are ready for a lean-to or a practice bent.`,
    estimatedTime: '15-25 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'birdsmouth'],
    woods: ['douglas-fir', 'eastern-white-pine', 'eastern-hemlock'],
    materials: [
      '4x4 or 6x6 posts (4 pieces)',
      '4x6 beams (2 pieces)',
      '2x6 rafters',
      'Hardwood drawbore pegs',
      'Metal roofing panels',
      'Concrete or gravel for footings'
    ],
    tools: [
      'Mortise chisel (3/4" or 1")',
      'Bench chisels',
      'Crosscut saw',
      'Tenon saw',
      'Brace and bit',
      'Framing square',
      'Level (4-foot)',
      'Mallet',
      'Tape measure',
      'Pencil'
    ],
    steps: [
      'Design the shelter to hold the amount of firewood you burn in a season.',
      'Set four posts on concrete pads or packed gravel. The back posts are taller for roof slope.',
      'Cut mortises in the post tops for the beams.',
      'Cut tenons on the beams and fit them to the posts.',
      'Drawbore the beam-to-post joints.',
      'Cut and install rafters across the beams with birdsmouth joints.',
      'Install metal roofing on the rafters.',
      'Add a back wall of boards to block rain from the prevailing direction.',
      'Stack your firewood and enjoy dry fuel all winter.'
    ],
    tips: [
      'Keep the floor off the ground — a gravel pad or concrete block foundation prevents ground moisture from wicking into the wood stack.',
      'Leave the front completely open for airflow. Firewood dries faster with good ventilation.',
      'Size the shelter for one full season of firewood plus a little extra.',
      'This is practice for bigger timber frames — take the time to get the joints right.'
    ],
    relatedProjects: ['firewood-rack', 'lean-to', 'timber-frame-sawhorses']
  },
  {
    slug: 'timber-frame-workbench',
    name: 'Timber Frame Workbench',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'Build a massive workbench using timber frame joinery — through-tenons, drawbore pegs, and a slab top that will not move.',
    description: `A timber frame workbench is built the same way as a barn — heavy timbers, traditional joinery, and drawbore pegs instead of hardware. The result is a bench so heavy and rigid that it becomes a permanent fixture in your shop. It will not rack, it will not bounce, and it will outlive you.

The base uses 4x4 or 6x6 posts and beams joined with through-mortise and tenon joints, drawbored for permanent assembly. The top is a thick slab — glued-up hardwood or a heavy timber hewn flat. Add a leg vise and bench dog holes and you have a bench worthy of any work you put on it.`,
    estimatedTime: '30-50 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hand-planing', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'wedged-through-tenon'],
    woods: ['hard-maple', 'white-oak', 'douglas-fir', 'beech'],
    materials: [
      '4x4 or 6x6 timbers for base (posts, stretchers)',
      '40-60 board feet of 8/4 hardwood for the top (or a timber slab)',
      'Hardwood drawbore pegs',
      'Leg vise hardware',
      'Bench dog holdfast holes',
      'Linseed oil finish'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2")',
      'Bench chisels (wide set)',
      'Crosscut saw',
      'Tenon saw',
      'Brace and bit set',
      'Jack plane, jointer plane, smoothing plane',
      'Framing square',
      'Marking gauge',
      'Chalk line',
      'Mallet and commander',
      'Winding sticks',
      'Drawknife (for peg shaping)'
    ],
    steps: [
      'Design the bench for your height — the top surface should hit at your wrist with your arms at your sides.',
      'Mill or source the base timbers. Reference-face each piece.',
      'Lay out and cut through-mortises in the posts for the long stretchers and cross beams.',
      'Cut through-tenons on all horizontal members.',
      'Dry-fit the base. Check for flat and square.',
      'Bore drawbore holes and assemble the base with pegs.',
      'Mill and glue up the top from 8/4 hardwood. Flatten with traversing jack plane cuts.',
      'Bore bench dog holes and holdfast holes in the top.',
      'Set the top on the base and fasten with lag bolts from below or timber pegs.',
      'Install a leg vise and apply linseed oil to all surfaces.'
    ],
    tips: [
      'Mass is everything in a workbench. Heavier is always better. Do not try to make it light.',
      'Through-tenons with drawbore pegs make the base nearly indestructible and easily disassembled for moving.',
      'Flatten the top with a jack plane — do not sand it flat. A planed surface holds workpieces better.',
      'Rub linseed oil into the top and refresh it periodically. Never use polyurethane on a bench top — it builds up and gets slippery.'
    ],
    relatedProjects: ['roubo-workbench', 'timber-frame-sawhorses', 'practice-bent']
  },
  {
    slug: 'garden-pavilion',
    name: 'Garden Pavilion',
    category: 'timber-frame',
    difficulty: 4,
    summary: 'A four-post timber frame pavilion with a hip or gable roof — an open-air structure for dining, gathering, or quiet sitting.',
    description: `A garden pavilion is a pergola taken to its logical conclusion — a fully roofed open-air structure with timber frame joinery and real weather protection. Four to eight posts support a proper roof with rafters, purlins, and sheathing. The floor can be a stone patio, deck, or packed gravel.

The hip roof is more elegant but harder to frame. The gable roof is simpler and shows off the timber frame from the open ends. Either way, the joinery is traditional — mortise and tenon connections with drawbore pegs at every joint. Size it for your intended use: a 10x12-foot pavilion comfortably seats six for dinner.`,
    estimatedTime: '80-120 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint', 'birdsmouth', 'lap-joint'],
    woods: ['white-oak', 'douglas-fir', 'western-red-cedar', 'eastern-hemlock'],
    materials: [
      '6x6 or 8x8 posts (4-8 pieces)',
      '6x8 or 8x10 beams',
      '4x6 or 6x6 rafters',
      'Knee braces: 4x4 stock',
      'Hardwood drawbore pegs',
      'Purlins and roof sheathing',
      'Metal roofing or cedar shingles',
      'Concrete for footings'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2", 2")',
      'Bench chisels (wide set)',
      'Crosscut saw (timber-sized)',
      'Tenon saw',
      'Brace and bit set',
      'Framing square and combination square',
      'Chalk line',
      'Level (4-foot)',
      'Mallet and commander',
      'Slick and drawknife',
      'Come-along or block and tackle',
      'Tape measure'
    ],
    steps: [
      'Design the pavilion — decide on gable or hip roof, overall dimensions, and post layout.',
      'Pour footings below the frost line and set post bases.',
      'Reference-face all timbers and create a detailed layout for every joint.',
      'Cut all post joints — mortises for beams and knee braces.',
      'Cut all beam and plate joints — tenons at the ends, mortises for knee braces and rafters.',
      'Dry-fit each bent on the ground.',
      'Raise the posts and install the beams and plates.',
      'Install knee braces at all post-to-beam connections.',
      'Cut and install the rafters with birdsmouth joints at the plates.',
      'Install purlins, sheathing, and roofing.'
    ],
    tips: [
      'A gable roof is simpler to frame and shows off the timber structure from the open ends.',
      'Size the footings for the full wind and snow load — a pavilion with no walls catches wind from every direction.',
      'Raise the frame in stages: posts first, then beams, then braces, then rafters.',
      'A cedar shingle roof complements the timber frame aesthetic better than metal, but costs more and takes longer.'
    ],
    relatedProjects: ['pergola', 'tool-shed', 'small-barn']
  },
  {
    slug: 'small-barn',
    name: 'Small Barn',
    category: 'timber-frame',
    difficulty: 5,
    summary: 'Build a timber frame barn with a full bent system, purlin roof, and traditional enclosure — the culmination of your timber frame journey.',
    description: `A small barn is the project where everything you have learned comes together — layout, joinery, raising, roofing, and enclosure. The frame uses multiple bents connected by wall plates, with a purlin roof system and common rafters. A 16x24-foot barn provides genuine working space for a shop, livestock, or storage.

Plan this project carefully. The timber list is long, the joint count is high, and the raising requires a crew and rigging equipment. Number every timber, cut every joint precisely, and dry-fit everything before raising day. The reward is a building that will stand for a century or more, built by your own hands with joints that need no nails.`,
    estimatedTime: '200-400 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening', 'choosing-the-right-chisel'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint', 'birdsmouth', 'lap-joint', 'scarf-joint'],
    woods: ['white-oak', 'douglas-fir', 'eastern-hemlock', 'eastern-white-pine'],
    materials: [
      '8x8 posts and tie beams (quantity varies by design)',
      '6x8 wall plates and purlins',
      '4x6 or 6x6 rafters and knee braces',
      'Hardwood drawbore pegs (hundreds)',
      'Board-and-batten siding',
      'Roof sheathing and metal roofing or shingles',
      'Concrete for footings',
      'Foundation sills',
      'Barn door hardware'
    ],
    tools: [
      'Full mortise chisel set (3/4" to 2")',
      'Bench chisels (wide set)',
      'Timber crosscut saw',
      'Tenon saw',
      'Brace and bit set (multiple sizes)',
      'Framing square and combination square',
      'Chalk line and marking gauge',
      'Level (4-foot) and water level',
      'Mallet, commander, and beetle',
      'Slick, drawknife, and broadaxe',
      'Come-along, block and tackle, gin pole',
      'Pike poles (for raising)'
    ],
    steps: [
      'Create a complete set of drawings with every timber dimensioned and every joint detailed.',
      'Pour the foundation — concrete piers or a continuous footer with sill plate.',
      'Source and mill all timbers. Reference-face every piece and number them according to the plan.',
      'Lay out and cut all bent joints — post mortises, beam tenons, brace connections.',
      'Lay out and cut all wall plate and purlin joints.',
      'Dry-fit each bent completely on the layout floor.',
      'Bore all drawbore holes and rive pegs from straight-grained hardwood.',
      'Assemble and raise the bents in sequence with a crew and rigging.',
      'Install wall plates, purlins, and the ridge beam between the bents.',
      'Install rafters, roof sheathing, siding, and doors.'
    ],
    tips: [
      'Planning is everything. A barn has hundreds of joints. Number every timber, label every joint, and create assembly drawings before cutting.',
      'Host a barn raising with friends and community. This is a tradition for a reason — you need the hands, and the experience is unforgettable.',
      'Board-and-batten siding is the traditional and simplest enclosure. Vertical boards with battens over the seams.',
      'A well-built timber frame barn will outlast every stick-frame building around it. Take the time to do it right.'
    ],
    relatedProjects: ['tool-shed', 'garden-pavilion', 'timber-frame-cabin']
  },
  {
    slug: 'covered-bridge',
    name: 'Covered Bridge',
    category: 'timber-frame',
    difficulty: 5,
    summary: 'Build a timber frame covered bridge for a garden stream or dry creek — a showpiece of truss engineering and traditional joinery.',
    description: `A covered bridge is a truss structure that spans an opening and carries its own roof. Even a small garden bridge — 12 to 16 feet long — requires understanding how trusses distribute load. The roof protects the timber joints from weather, which is why covered bridges outlast open ones by decades.

This project uses a king post or queen post truss for the sides, with a deck of planks and a simple gable roof above. Size it for foot traffic, not vehicles. The beauty is in the exposed joinery — every joint visible, every timber shaped. Build it over a stream, a dry creek bed, or just as a garden feature.`,
    estimatedTime: '100-160 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'lap-joint', 'scarf-joint'],
    woods: ['white-oak', 'douglas-fir', 'eastern-hemlock'],
    materials: [
      '6x6 and 6x8 timbers for trusses and beams',
      '4x4 knee braces',
      '2x6 or 2x8 decking',
      'Hardwood drawbore pegs',
      'Roof sheathing and metal roofing',
      'Board siding',
      'Concrete abutments'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2")',
      'Bench chisels (wide set)',
      'Crosscut saw (timber-sized)',
      'Tenon saw',
      'Brace and bit set',
      'Framing square',
      'Level (4-foot)',
      'Chalk line',
      'Mallet and commander',
      'Slick and drawknife',
      'Come-along',
      'Tape measure'
    ],
    steps: [
      'Design the bridge span and choose a truss type — king post for short spans, queen post for longer ones.',
      'Build the concrete abutments on both banks. They must be level with each other.',
      'Reference-face all timbers and lay out every joint on the shop floor.',
      'Cut the two truss frames — bottom chord, top chord, king or queen posts, and diagonal members.',
      'Assemble both trusses on the ground and drawbore all joints.',
      'Set the trusses on the abutments and connect them with cross beams and floor joists.',
      'Install the deck planking across the floor joists.',
      'Frame the gable roof above the trusses — rafters, purlins, and ridge.',
      'Install roof sheathing and roofing material.',
      'Add side boards or siding to protect the trusses from weather.'
    ],
    tips: [
      'The roof protects the joints. A covered bridge lasts 100 years; an uncovered one rots in 20.',
      'Build the trusses on the ground and move them into position as complete units.',
      'Size the abutments for the load plus a generous safety margin. A bridge failure is dangerous.',
      'White oak is the best wood for bridge construction — it resists rot and is incredibly strong.'
    ],
    relatedProjects: ['king-post-truss', 'queen-post-truss', 'small-barn']
  },
  {
    slug: 'timber-frame-cabin',
    name: 'Timber Frame Cabin',
    category: 'timber-frame',
    difficulty: 5,
    summary: 'Design and build a small timber frame cabin — a full enclosure with foundation, frame, roof, and weatherproof shell.',
    description: `A timber frame cabin is a complete building — foundation, frame, enclosure, roof, and interior. A small cabin of 12x16 or 16x20 feet is achievable for a skilled amateur with a crew for the raising. The timber frame provides the structure; SIPs, straw bale, or conventional infill provides the insulation.

This is the most ambitious project in the library. It requires permits, engineering, foundation work, and months of joint cutting. But the result is a building that will stand for generations, with exposed timber joinery that modern construction cannot replicate. Plan exhaustively, cut precisely, and raise with your community.`,
    estimatedTime: '400-800 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening', 'choosing-the-right-chisel'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint', 'birdsmouth', 'lap-joint', 'scarf-joint'],
    woods: ['white-oak', 'douglas-fir', 'eastern-hemlock', 'eastern-white-pine'],
    materials: [
      '8x8 and 6x8 timbers (posts, beams, plates)',
      '6x6 and 4x6 rafters, purlins, and braces',
      'Hardwood drawbore pegs (many hundreds)',
      'SIPs or conventional wall infill',
      'Foundation materials (concrete, stone, or piers)',
      'Roof sheathing and roofing material',
      'Windows, doors, and trim',
      'Interior finish materials'
    ],
    tools: [
      'Full mortise chisel set',
      'Bench chisels (full set)',
      'Timber crosscut saw',
      'Tenon saw',
      'Brace and bit set (multiple sizes)',
      'Framing square, combination square',
      'Chalk line, marking gauge',
      'Level, water level, plumb bob',
      'Mallet, commander, beetle',
      'Slick, drawknife, broadaxe',
      'Come-along, block and tackle, gin pole',
      'Pike poles'
    ],
    steps: [
      'Design the cabin with professional input. Pull permits and get engineering approval for the frame.',
      'Build the foundation — piers, slab, or full basement depending on the site and code.',
      'Source, mill, and reference-face all timbers. Create a comprehensive numbering system.',
      'Cut all bent joints on the layout floor. There will be hundreds — stay organized.',
      'Cut all connecting timbers — wall plates, purlins, girts, and summer beams.',
      'Dry-fit every bent and every connection. Fix problems now, not during the raise.',
      'Raise the frame with a crew. This is a multi-day event requiring planning and rigging.',
      'Install the roof system — rafters, purlins, sheathing, and roofing.',
      'Enclose the walls with SIPs, straw bale, or conventional framing and insulation.',
      'Install windows, doors, interior partitions, and finishes.'
    ],
    tips: [
      'Get engineering review for the frame design. A cabin must meet building codes for structural loads, wind, and snow.',
      'The raising is the event of a lifetime. Plan it like a wedding — food, drinks, enough helpers, and proper rigging for safety.',
      'SIPs (Structural Insulated Panels) are the easiest way to enclose a timber frame. They install fast and insulate well.',
      'Budget for the enclosure and finishes separately from the frame. The frame is typically 30-40% of the total cost.'
    ],
    relatedProjects: ['small-barn', 'tool-shed', 'garden-pavilion']
  },
  {
    slug: 'king-post-truss',
    name: 'King Post Truss',
    category: 'timber-frame',
    difficulty: 3,
    summary: 'Build a single king post truss — the simplest triangulated roof structure in the timber frame tradition.',
    description: `The king post truss is the most basic truss form: a horizontal tie beam, two angled rafters meeting at a peak, and a single vertical king post connecting the peak to the center of the tie beam. The king post prevents the tie beam from sagging under load, and the triangle distributes the roof weight to the posts below.

Build a practice truss at bench scale or go full size for a shed or outbuilding. The joints are all variations of mortise and tenon — the rafter feet into the tie beam, the king post into the tie beam, and the rafters into the king post at the peak. Understanding this truss makes every roof structure that follows easier to grasp.`,
    estimatedTime: '15-25 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'birdsmouth', 'housed-joint'],
    woods: ['douglas-fir', 'white-oak', 'eastern-hemlock', 'eastern-white-pine'],
    materials: [
      '6x8 tie beam (1 piece, span length)',
      '4x6 or 6x6 rafters (2 pieces)',
      '6x6 king post (1 piece)',
      'Hardwood drawbore pegs',
      'Optional: metal strap at peak connection'
    ],
    tools: [
      'Mortise chisel (1", 1-1/2")',
      'Bench chisels',
      'Crosscut saw',
      'Tenon saw',
      'Brace and bit',
      'Framing square',
      'Sliding bevel',
      'Marking gauge',
      'Chalk line',
      'Mallet and commander',
      'Tape measure'
    ],
    steps: [
      'Determine the span and the desired roof pitch. Calculate the rafter length and king post height.',
      'Reference-face the tie beam. Mark the rafter seat positions and king post mortise at center.',
      'Cut the king post mortise in the tie beam.',
      'Cut the rafter seats — angled mortises or birdsmouth-style joints at the tie beam ends.',
      'Shape the king post. Cut the tenon at the bottom and the rafter connections at the top.',
      'Cut the rafters to length with the correct angles at both ends.',
      'Dry-fit the entire truss on the floor. Check that the peak meets cleanly.',
      'Bore drawbore holes at all connections.',
      'Assemble the truss with drawbore pegs.',
      'Raise the completed truss into position on the frame.'
    ],
    tips: [
      'The king post is in tension, not compression — it hangs the tie beam center from the peak. This is counterintuitive but critical to understanding how the truss works.',
      'Lay out the entire truss full-size on the floor before cutting any joints. Geometry errors compound fast in a truss.',
      'The rafter angle determines everything else. Set the pitch first and calculate all other dimensions from it.',
      'Build a scale model from scrap wood before committing to full-size timbers.'
    ],
    relatedProjects: ['queen-post-truss', 'practice-bent', 'tool-shed']
  },
  {
    slug: 'queen-post-truss',
    name: 'Queen Post Truss',
    category: 'timber-frame',
    difficulty: 4,
    summary: 'Build a queen post truss — two vertical posts creating a flat ceiling section within the roof triangle for wider spans.',
    description: `The queen post truss extends the king post concept with two vertical posts instead of one, creating a flat horizontal straining beam between them at the top. This allows wider spans and opens up usable space in the attic or loft between the queen posts. It is the standard truss for barns and larger outbuildings.

The additional members add complexity — the straining beam must resist the inward thrust of the rafters, and the queen posts must transfer the load cleanly to the tie beam. Each connection is a carefully fitted mortise and tenon joint. Build this after mastering the king post truss.`,
    estimatedTime: '25-40 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint', 'birdsmouth'],
    woods: ['white-oak', 'douglas-fir', 'eastern-hemlock', 'eastern-white-pine'],
    materials: [
      '8x8 or 6x8 tie beam (1 piece)',
      '6x6 queen posts (2 pieces)',
      '6x6 straining beam (1 piece)',
      '4x6 or 6x6 rafters (2 pieces)',
      'Hardwood drawbore pegs'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2")',
      'Bench chisels',
      'Crosscut saw (timber-sized)',
      'Tenon saw',
      'Brace and bit set',
      'Framing square',
      'Sliding bevel',
      'Marking gauge',
      'Chalk line',
      'Mallet and commander',
      'Tape measure'
    ],
    steps: [
      'Design the truss — determine the span, pitch, and queen post positions (typically at the third points).',
      'Reference-face the tie beam. Mark the queen post mortises and rafter seat positions.',
      'Cut the two queen post mortises in the tie beam.',
      'Cut the rafter seat joints at the tie beam ends.',
      'Shape the two queen posts with tenons at both top and bottom.',
      'Cut the straining beam with mortises for the queen post tops.',
      'Cut the rafters with the correct angles at all connection points.',
      'Dry-fit the entire truss on the layout floor. Verify all geometry.',
      'Bore drawbore holes and assemble with pegs.',
      'Raise the completed truss onto the frame.'
    ],
    tips: [
      'Place the queen posts at the third points of the span for optimal load distribution.',
      'The straining beam resists inward thrust — it must be stout enough to handle compression without buckling.',
      'Number every joint carefully. A queen post truss has more connections than a king post and they are easy to confuse.',
      'Build a scale model first. The geometry of the queen post truss is complex enough that a model will save you from expensive mistakes.'
    ],
    relatedProjects: ['king-post-truss', 'hammer-beam-bracket', 'small-barn']
  },
  {
    slug: 'hammer-beam-bracket',
    name: 'Hammer Beam Bracket',
    category: 'timber-frame',
    difficulty: 5,
    summary: 'Build a single hammer beam bracket assembly — the most dramatic and challenging roof structure in the timber frame tradition.',
    description: `The hammer beam is the cathedral ceiling of timber framing — a short horizontal beam projecting from the wall into the space, supported by an arched brace below and a vertical hammer post above that carries the rafter. It creates the illusion of a wider span than the timbers could achieve as simple rafters, and the visible structure is breathtaking.

This project builds a single bracket assembly as a practice piece or display — one hammer beam, its supporting brace, the hammer post above, and the rafter it carries. The joinery involves compound angles, curved braces, and joints under significant stress. Master this and you can build a hammer beam roof for a great hall.`,
    estimatedTime: '30-50 hours',
    skills: ['chopping', 'paring', 'sawing-to-a-line', 'marking-layout', 'boring-drilling', 'drawboring', 'peg-riving', 'hewing', 'sharpening', 'choosing-the-right-chisel'],
    joints: ['mortise-tenon', 'drawbored', 'housed-joint', 'lap-joint'],
    woods: ['white-oak', 'douglas-fir', 'eastern-hemlock'],
    materials: [
      '6x8 hammer beam (1 piece, about 4 feet)',
      '6x6 hammer post (1 piece)',
      '6x8 wall post section (for mounting)',
      '4x6 arched brace',
      '4x6 rafter section',
      'Hardwood drawbore pegs'
    ],
    tools: [
      'Mortise chisel set (1", 1-1/2")',
      'Bench chisels (full set)',
      'Crosscut saw',
      'Tenon saw',
      'Brace and bit set',
      'Framing square and sliding bevel',
      'Marking gauge',
      'Chalk line',
      'Drawknife or spokeshave (for shaping the arch)',
      'Mallet and commander',
      'Tape measure'
    ],
    steps: [
      'Study hammer beam geometry carefully. Draw the bracket full-size on the shop floor or a sheet of plywood.',
      'Reference-face all timbers and transfer the layout from the drawing.',
      'Cut the wall post section with mortises for the hammer beam and the arched brace.',
      'Shape the arched brace — band-saw or adze the curve, then smooth with a drawknife and spokeshave.',
      'Cut the hammer beam with mortises for the hammer post above and the arched brace below.',
      'Cut the hammer post with tenons at both ends — the bottom into the hammer beam, the top into the rafter.',
      'Cut the rafter section with a mortise for the hammer post.',
      'Dry-fit the entire assembly against the wall post. Check all angles and joints.',
      'Bore drawbore holes and assemble with pegs.',
      'Mount the completed bracket on a wall or display stand.'
    ],
    tips: [
      'The hammer beam works because the arched brace converts the outward thrust of the rafter into a downward force on the wall. Understand the physics before you cut.',
      'Shape the arch from a single piece of naturally curved wood if possible. The grain follows the curve and the brace is much stronger.',
      'This is a display-quality piece. Take extra time with the surface finish — chamfer the edges, smooth the faces, and oil the wood.',
      'A full hammer beam roof requires pairs of these brackets facing each other across the span. Build one perfect bracket before committing to a complete roof.'
    ],
    relatedProjects: ['king-post-truss', 'queen-post-truss', 'small-barn']
  },
]

export default projects

export const PROJECT_CATEGORIES = {
  'joinery-practice': { label: 'Joinery Practice', description: 'Dedicated exercises to level up specific joints' },
  'shop-essentials': { label: 'Shop Essentials', description: 'Build the tools that build everything else' },
  'small-projects': { label: 'Small Projects', description: 'Weekend builds that sharpen your skills' },
  'furniture': { label: 'Furniture', description: 'Tables, chairs, shelves, and storage' },
  'carpentry': { label: 'Carpentry', description: 'Walls, stairs, decks, and finish work' },
  'outdoor': { label: 'Outdoor & Garden', description: 'Built to weather the elements' },
  'timber-frame': { label: 'Timber Frame', description: 'Post and beam structures from small to grand' },
}

export const PROJECT_CATEGORY_ORDER = ['joinery-practice', 'shop-essentials', 'small-projects', 'furniture', 'carpentry', 'outdoor', 'timber-frame']

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}

export function getProjectsByCategory(cat) {
  return projects.filter(p => p.category === cat)
}
