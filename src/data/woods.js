// Curated wood species reference — practical knowledge for a timber framer.
// Hardness: Janka rating (lbf). Higher = harder.
// Workability: 1-5 (5 = joy to work, 1 = fight every cut)

const woods = [
  {
    slug: 'white-oak',
    name: 'White Oak',
    hardness: 1360,
    workability: 3,
    category: 'hardwood',
    summary: 'The king of timber framing. Rot-resistant, strong, beautiful. Worth the effort.',
    description: `White oak is the gold standard for timber framing and fine woodworking. Closed-cell grain makes it naturally rot-resistant — white oak timbers last centuries without treatment. It's heavy, hard, and not easy to work by hand, but the results are worth every drop of sweat.

On Martha's Vineyard, you'll find white oak in everything from old barn frames to ship keels. It takes a finish beautifully and ages to a warm honey color.`,
    grain: 'Straight, prominent rays (quarter-sawn shows dramatic ray fleck)',
    bestJoints: ['mortise-tenon', 'dovetail', 'timber-frame-peg', 'scarf-joint'],
    notes: [
      'Quarter-sawn white oak is the most dimensionally stable cut — worth the premium.',
      'Dulls tools faster than most species. Keep your chisels sharp.',
      'Don\'t use white oak pegs in white oak frames — too hard. Use locust.',
      'The tannic acid reacts with iron fasteners and turns black. Use stainless or bronze.',
    ],
    uses: ['Timber frames', 'Furniture', 'Flooring', 'Boat building', 'Barrels'],
  },
  {
    slug: 'red-oak',
    name: 'Red Oak',
    hardness: 1290,
    workability: 3,
    category: 'hardwood',
    summary: 'Similar to white oak but with open pores — not rot-resistant. Good for interior work.',
    description: `Red oak looks similar to white oak but has open cell pores, which means it absorbs water and will rot if exposed. Keep it indoors. It's slightly softer and easier to work than white oak, with a more pronounced grain pattern.

Common in furniture, flooring, and cabinetry. It's the workhorse hardwood of American woodworking.`,
    grain: 'Straight with prominent grain lines, less ray fleck than white oak',
    bestJoints: ['mortise-tenon', 'dovetail', 'dado', 'box-joint'],
    notes: [
      'NOT rot-resistant — don\'t use for exterior or ground contact.',
      'Takes stain unevenly because of the open pores. Use pre-stain conditioner.',
      'Good value — significantly cheaper than white oak.',
    ],
    uses: ['Furniture', 'Flooring', 'Cabinetry', 'Interior trim'],
  },
  {
    slug: 'eastern-white-pine',
    name: 'Eastern White Pine',
    hardness: 380,
    workability: 5,
    category: 'softwood',
    summary: 'The easiest wood to work by hand. Soft, forgiving, the perfect practice species.',
    description: `If you're learning joints, start with white pine. It's soft enough to pare with hand tools without fighting, cheap enough to waste without guilt, and available in wide, clear boards. Eastern white pine has been the standard building material in New England for 400 years.

In timber framing, white pine is used for everything from rafters to floor joists. It's not as strong as oak or fir, but it's lighter and easier to work — which matters when you're hand-cutting a frame.`,
    grain: 'Straight, even, minimal figure. Occasional knots in lower grades.',
    bestJoints: ['mortise-tenon', 'lap-joint', 'dado', 'rabbet', 'housed-joint'],
    notes: [
      'Softness is a feature for learning — your chisel cuts go exactly where you aim them.',
      'Dents easily. Not ideal for tabletops or high-traffic surfaces.',
      'Old-growth white pine (from salvage) is tighter-grained and much harder than new-growth.',
      'Takes paint well. Less good with clear finishes — the soft grain shows sanding marks.',
    ],
    uses: ['Practice stock', 'Timber frames', 'Trim', 'Paneling', 'Furniture', 'Carving'],
  },
  {
    slug: 'douglas-fir',
    name: 'Douglas Fir',
    hardness: 660,
    workability: 3,
    category: 'softwood',
    summary: 'The structural powerhouse. Straight, strong, and available in big timbers.',
    description: `Douglas fir is the standard for structural timber in North America. It's stiffer and stronger than pine, available in long straight lengths, and relatively easy to source in timber-frame dimensions. The grain is prominent with distinct growth rings.

The challenge with Doug fir is the grain — it can be splintery and the density varies between early and late wood, making hand work inconsistent. Sharp tools are non-negotiable.`,
    grain: 'Straight with prominent growth rings, distinct color difference between early and late wood',
    bestJoints: ['mortise-tenon', 'lap-joint', 'scarf-joint', 'housed-joint'],
    notes: [
      'Keep your chisels razor sharp — fir splinters when tools are dull.',
      'The growth ring density difference means your chisel wants to follow the grain. Pare carefully.',
      'Excellent strength-to-weight ratio for beams and rafters.',
      'Can cause splinters from hell. Sand any surface that gets touched.',
    ],
    uses: ['Timber frames', 'Structural beams', 'Decking', 'Plywood'],
  },
  {
    slug: 'walnut',
    name: 'Walnut',
    hardness: 1010,
    workability: 4,
    category: 'hardwood',
    summary: 'The luxury wood. Dark, warm, a dream to work. Makes everything look expensive.',
    description: `Black walnut is American woodworking royalty. The dark chocolate color, the smooth grain, the way it takes a finish — nothing else quite compares. It works beautifully with both hand and power tools, carves well, and machines to a glass-smooth surface.

Expensive but worth it for pieces that matter. Often used as accent wood in combination with lighter species.`,
    grain: 'Straight to slightly wavy, moderate figure, occasional cathedral grain',
    bestJoints: ['dovetail', 'mortise-tenon', 'miter', 'box-joint', 'spline-joint'],
    notes: [
      'One of the best woods for hand-cut dovetails — cuts clean, looks stunning.',
      'The sapwood is blonde — can be a design feature or a defect depending on intent.',
      'Expensive. Plan cuts carefully and use every scrap.',
      'Finishes beautifully with oil — Danish oil or walnut oil brings out the depth.',
    ],
    uses: ['Fine furniture', 'Dovetailed boxes', 'Gun stocks', 'Turning', 'Accent pieces'],
  },
  {
    slug: 'cherry',
    name: 'Cherry',
    hardness: 950,
    workability: 5,
    category: 'hardwood',
    summary: 'The woodworker\'s favorite. Machines like a dream, finishes like silk, ages beautifully.',
    description: `American cherry is the all-around favorite for furniture makers. It works easily with both hand and power tools, takes a beautiful finish, and ages from light salmon to deep reddish-brown over time (especially in sunlight). The aging is part of its character — a cherry piece looks better every year.

Moderately hard, stable, and consistent. If you want to make something beautiful without fighting the wood, cherry is the answer.`,
    grain: 'Straight, fine, even. Occasional small mineral streaks and gum pockets.',
    bestJoints: ['dovetail', 'mortise-tenon', 'miter', 'box-joint'],
    notes: [
      'Darkens dramatically with UV exposure. Put a fresh piece in the sun and check in a week.',
      'Burns easily with power tools — slow the feed rate and use sharp cutters.',
      'Shellac or oil brings out the best color. Polyurethane flattens it.',
      'Practice dovetails in cherry — it cuts clean and shows you exactly how your joint looks.',
    ],
    uses: ['Fine furniture', 'Cabinetry', 'Boxes', 'Turning', 'Musical instruments'],
  },
  {
    slug: 'maple',
    name: 'Maple',
    hardness: 1450,
    workability: 3,
    category: 'hardwood',
    summary: 'Hard, dense, and pale. Excellent for workbenches and cutting surfaces.',
    description: `Hard maple (sugar maple) is one of the hardest domestic hardwoods. Dense, closed-grain, and pale in color. It's the standard for workbench tops, cutting boards, and bowling lanes — anything that needs to take a beating.

The hardness makes it challenging for hand tools. Your chisels need to be genuinely sharp, and cuts require more force. But the results are precise because the wood doesn't compress easily.`,
    grain: 'Fine, close, often with figure (curly, birdseye, quilted)',
    bestJoints: ['dovetail', 'mortise-tenon', 'dado', 'box-joint'],
    notes: [
      'Figured maple (curly, birdseye) is stunning but tears out easily. Scrape, don\'t sand.',
      'Hard on tools — expect to sharpen more often than with softer species.',
      'Almost white when fresh, yellows slightly with age.',
      'Excellent for workbench tops — the hardness resists dents from tools and clamps.',
    ],
    uses: ['Workbenches', 'Cutting boards', 'Flooring', 'Furniture', 'Turning'],
  },
  {
    slug: 'ash',
    name: 'Ash',
    hardness: 1320,
    workability: 4,
    category: 'hardwood',
    summary: 'Flexible, tough, shock-resistant. The tool handle wood.',
    description: `White ash is tough and flexible — it absorbs shock instead of transmitting it, which is why it's been used for tool handles, baseball bats, and chair parts for centuries. The grain is open and prominent, similar to oak but lighter in color.

The emerald ash borer has devastated ash populations. Salvaged ash is increasingly available and worth using — it's a beautiful, underappreciated wood.`,
    grain: 'Straight, prominent ring-porous grain similar to oak',
    bestJoints: ['mortise-tenon', 'lap-joint', 'bridle-joint', 'dowel-joint'],
    notes: [
      'Great for steam bending — the flexibility is a feature.',
      'Open pores like red oak — fill before finishing for a smooth surface.',
      'Source salvaged ash when possible — emerald ash borer has limited supply.',
      'Excellent strength-to-weight ratio.',
    ],
    uses: ['Tool handles', 'Windsor chairs', 'Baseball bats', 'Bent laminations', 'Furniture'],
  },
  {
    slug: 'cedar',
    name: 'Cedar',
    hardness: 350,
    workability: 5,
    category: 'softwood',
    summary: 'Naturally rot-resistant and aromatic. Perfect for outdoor projects. Smells incredible.',
    description: `Western red cedar (and its eastern cousin, aromatic red cedar) is nature's outdoor wood. Naturally resistant to rot, insects, and weather without any treatment. Lightweight, easy to work, and it smells like a forest.

Soft and brittle — not a structural wood. But for anything that lives outside or needs to resist moisture, cedar is the first choice.`,
    grain: 'Straight, even, fine. Distinctive reddish-brown color with lighter sapwood.',
    bestJoints: ['rabbet', 'dado', 'butt-joint', 'tongue-groove'],
    notes: [
      'Too soft for most structural joints — use for non-load-bearing applications.',
      'The aromatic oils resist insects — great for closet lining and chests.',
      'Weathers to silver-gray if left unfinished outside. Beautiful either way.',
      'Don\'t use with iron fasteners — the tannins react and stain. Use stainless.',
    ],
    uses: ['Decks', 'Fences', 'Shingles', 'Closet lining', 'Outdoor furniture', 'Garden beds'],
  },
  {
    slug: 'poplar',
    name: 'Poplar',
    hardness: 540,
    workability: 5,
    category: 'hardwood',
    summary: 'Cheap, soft for a hardwood, easy to work. The best practice wood after pine.',
    description: `Tulip poplar is technically a hardwood but works like a softwood. It's cheap, widely available in wide clear boards, and cuts easily with hand tools. The grain is straight and consistent. Color ranges from cream to green to purple streaks.

Not a "fine furniture" wood, but excellent for practice joints, painted furniture, jigs, and anywhere appearance doesn't matter. Many woodworkers use poplar for drawer sides and internal parts.`,
    grain: 'Straight, fine, even. Occasional green and purple mineral streaks.',
    bestJoints: ['dovetail', 'mortise-tenon', 'dado', 'box-joint', 'lap-joint'],
    notes: [
      'The #1 recommendation for practice dovetails — cheap, cuts clean, forgiving.',
      'Takes paint beautifully. Takes clear finish poorly — the color is distracting.',
      'Surprisingly strong for its weight.',
      'The green/purple streaks fade to brown over time.',
    ],
    uses: ['Practice joints', 'Painted furniture', 'Drawer sides', 'Jigs', 'Moulding blanks'],
  },
  {
    slug: 'hickory',
    name: 'Hickory',
    hardness: 1820,
    workability: 2,
    category: 'hardwood',
    summary: 'The hardest common American hardwood. Brutal to work but incredibly tough.',
    description: `Hickory is absurdly hard and tough. It's the wood used for hammer handles, ladder rungs, and anything that needs to withstand repeated impact. The grain is distinctive — bold, sometimes wild, always dramatic.

Working hickory by hand is a workout. Power tools need to be sharp and set aggressively. But when you need something that simply won't break, nothing beats hickory.`,
    grain: 'Straight to interlocked, bold grain pattern, dramatic color contrast',
    bestJoints: ['mortise-tenon', 'dowel-joint'],
    notes: [
      'Will dull your tools fast. Sharpen before and during.',
      'Excellent for handles and mallets — absorbs shock without breaking.',
      'Difficult to glue — the density makes it slow to absorb.',
      'Smoked hickory has stunning color. Also smells amazing when cut.',
    ],
    uses: ['Tool handles', 'Mallets', 'Ladder rungs', 'Smoking wood', 'Flooring'],
  },
  {
    slug: 'hemlock',
    name: 'Hemlock',
    hardness: 500,
    workability: 4,
    category: 'softwood',
    summary: 'The affordable timber frame species. Straight, workable, easy on the chisel.',
    description: `Eastern hemlock is a common and affordable timber frame species in the Northeast. It's straight-grained, reasonably strong, and much easier to work by hand than oak or fir. The color is light with a slight pinkish tinge.

Not as durable as oak for exposed applications, but perfectly good for interior timber frames and structural work that stays dry. Many New England barns and houses stand on hemlock frames.`,
    grain: 'Straight, medium texture, occasional spiral grain',
    bestJoints: ['mortise-tenon', 'lap-joint', 'housed-joint', 'scarf-joint'],
    notes: [
      'Watch for ring shakes — radial cracks that follow the growth rings. Reject affected timbers.',
      'Easier on tools than oak or fir. Good for hand-cut frames.',
      'Not rot-resistant — keep it dry or treat exposed surfaces.',
      'Surprisingly heavy for a softwood when green. Season it if possible.',
    ],
    uses: ['Timber frames', 'Structural lumber', 'Framing', 'Crating'],
  },
  {
    slug: 'beech',
    name: 'Beech',
    hardness: 1300,
    workability: 3,
    category: 'hardwood',
    summary: 'The workbench wood of Europe. Hard, stable, wears smooth. Often overlooked.',
    description: `European and American beech is the traditional material for workbenches, plane bodies, and wooden hand tools. It's hard, stable, and wears to a glass-smooth surface with use. The grain is fine and unremarkable — beech doesn't call attention to itself.

Underappreciated in America (everyone wants walnut and cherry), but highly respected in the European woodworking tradition.`,
    grain: 'Fine, tight, even. Small ray fleck in quarter-sawn.',
    bestJoints: ['mortise-tenon', 'dovetail', 'dado'],
    notes: [
      'Moves a lot with humidity changes — not ideal for wide panels in dry climates.',
      'Excellent for workbench tops alongside maple.',
      'The traditional wood for wooden hand planes.',
      'Hard to find in wide boards — usually available in narrow stock.',
    ],
    uses: ['Workbenches', 'Hand planes', 'Chairs', 'Tool handles', 'Mallet heads'],
  },
  {
    slug: 'birch',
    name: 'Birch',
    hardness: 1260,
    workability: 4,
    category: 'hardwood',
    summary: 'Hard, pale, and consistent. The plywood species, but solid birch is great too.',
    description: `Yellow birch and white birch are workable hardwoods with a fine, even grain. Birch is probably best known as the face veneer on Baltic birch plywood — the gold standard for shop jigs and drawer boxes. But solid birch makes excellent furniture and turns beautifully.

Harder than cherry, softer than maple. A good middle-ground hardwood.`,
    grain: 'Fine, close, even. Occasional curly figure.',
    bestJoints: ['dovetail', 'box-joint', 'mortise-tenon', 'dado'],
    notes: [
      'Baltic birch plywood is the best material for jigs and shop fixtures.',
      'Solid birch takes stain unevenly — test first.',
      'Burns easily on the router table and table saw. Sharp bits and don\'t stop moving.',
    ],
    uses: ['Plywood', 'Furniture', 'Turning', 'Cabinet interiors', 'Dowels'],
  },
  {
    slug: 'mahogany',
    name: 'Mahogany',
    hardness: 900,
    workability: 5,
    category: 'hardwood',
    summary: 'The gentleman\'s wood. Works like butter, finishes like glass, costs accordingly.',
    description: `Genuine mahogany (Swietenia) is one of the finest furniture woods in the world. It works with hand tools like no other species — the grain is straight and interlocked in a way that resists splitting but doesn't fight the chisel. It finishes to a deep, warm reddish-brown that only improves with age.

Most "mahogany" sold today is African mahogany (Khaya) or Sapele — still excellent woods, just different from the original.`,
    grain: 'Straight to interlocked, medium texture, ribbon figure in quarter-sawn',
    bestJoints: ['dovetail', 'mortise-tenon', 'miter', 'box-joint'],
    notes: [
      'One of the best hand-tool woods ever. Carves and pares like warm butter.',
      'True mahogany is increasingly expensive and scarce. Sapele is a good substitute.',
      'Naturally resistant to rot — traditionally used for boats and outdoor furniture.',
      'Takes any finish well, but oil brings out the depth of color best.',
    ],
    uses: ['Fine furniture', 'Boat building', 'Musical instruments', 'Turning', 'Carving'],
  },
]

export default woods

export const WOOD_CATEGORIES = {
  'hardwood': { label: 'Hardwood', description: 'Deciduous trees — generally harder and denser' },
  'softwood': { label: 'Softwood', description: 'Coniferous trees — generally lighter and easier to work' },
}

export function getWoodBySlug(slug) {
  return woods.find(w => w.slug === slug)
}

export function getHardnessLabel(janka) {
  if (janka < 500) return 'Very Soft'
  if (janka < 800) return 'Soft'
  if (janka < 1100) return 'Medium'
  if (janka < 1400) return 'Hard'
  return 'Very Hard'
}

export function getWorkabilityLabel(rating) {
  const labels = ['', 'Difficult', 'Challenging', 'Moderate', 'Easy', 'Effortless']
  return labels[rating] || ''
}
