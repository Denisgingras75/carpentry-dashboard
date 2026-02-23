import { useState } from 'react'

const TABS = ['channels', 'books', 'tools', 'organizations']

const YOUTUBE_CHANNELS = [
  {
    name: 'Paul Sellers',
    handle: '@PaulSellersWoodwork',
    url: 'https://youtube.com/@PaulSellersWoodwork',
    description: 'The godfather of hand-tool woodworking on YouTube. Decades of experience, calm teaching style. His dovetail and mortise & tenon series are essential.',
    focus: ['Hand tools', 'Traditional joinery', 'Workbench builds'],
  },
  {
    name: 'Rob Cosman',
    handle: '@RobCosman',
    url: 'https://youtube.com/@RobCosman',
    description: 'Master dovetail cutter and hand-tool advocate. His "3-minute dovetail" videos are legendary. Excellent for learning precision hand-tool technique.',
    focus: ['Dovetails', 'Hand tools', 'Precision joinery'],
  },
  {
    name: 'Jonathan Katz-Moses',
    handle: '@JonathanKatzMoses',
    url: 'https://youtube.com/@JonathanKatzMoses',
    description: 'Clear, modern teaching style with a focus on joinery fundamentals. Great for beginners and intermediate woodworkers. Also makes excellent jigs.',
    focus: ['Joinery basics', 'Dovetails', 'Jig building'],
  },
  {
    name: 'Matt Estlea',
    handle: '@MattEstlea',
    url: 'https://youtube.com/@MattEstlea',
    description: 'British furniture maker with beautiful production quality. Detailed project builds that show every joint, every decision. Excellent hand-tool content.',
    focus: ['Fine furniture', 'Hand & power tools', 'Project builds'],
  },
  {
    name: 'Wood By Wright',
    handle: '@WoodByWright',
    url: 'https://youtube.com/@WoodByWright',
    description: 'James Wright does deep dives into hand-tool techniques and traditional joinery. Very thorough — he shows you what works and what doesn\'t.',
    focus: ['Hand tools', 'Traditional techniques', 'Joint breakdowns'],
  },
  {
    name: 'Essential Craftsman',
    handle: '@EssentialCraftsman',
    url: 'https://youtube.com/@EssentialCraftsman',
    description: 'Scott Wadsworth — a veteran builder who teaches construction, timber framing, and blacksmithing. The "Spec House" series is an education in building.',
    focus: ['Timber framing', 'Construction', 'Blacksmithing', 'Building science'],
  },
  {
    name: 'Timber Framers Guild',
    handle: '@TimberFramersGuild',
    url: 'https://youtube.com/@TimberFramersGuild',
    description: 'The official channel of the Timber Framers Guild. Frame raisings, joint demonstrations, and interviews with master framers.',
    focus: ['Timber framing', 'Frame raisings', 'Traditional joinery'],
  },
  {
    name: 'Stumpy Nubs',
    handle: '@StumpyNubs',
    url: 'https://youtube.com/@StumpyNubs',
    description: 'Tips, tricks, and tool reviews with a focus on practical shop advice. Good for shop setup, jig ideas, and power tool techniques.',
    focus: ['Shop tips', 'Tool reviews', 'Jigs & fixtures'],
  },
  {
    name: 'Frank Howarth',
    handle: '@FrankHowarth',
    url: 'https://youtube.com/@FrankHowarth',
    description: 'Architect-turned-woodworker with cinematic production. Stop-motion builds, creative designs. Inspiring more than instructional.',
    focus: ['Creative builds', 'Cinematography', 'Design thinking'],
  },
  {
    name: 'Ishitani Furniture',
    handle: '@IshitaniFurniture',
    url: 'https://youtube.com/@IshitaniFurniture',
    description: 'Japanese furniture maker. Almost no talking — just the sound of tools and wood. Mesmerizing craftsmanship. Watch when you need inspiration.',
    focus: ['Japanese joinery', 'Fine furniture', 'Meditative woodworking'],
  },
  {
    name: 'Blackburn Tools',
    handle: '@BlackburnTools',
    url: 'https://youtube.com/@BlackburnTools',
    description: 'Isaac Smith makes hand tools and teaches traditional joinery. Excellent for understanding the WHY behind joint design, not just the how.',
    focus: ['Hand tools', 'Tool making', 'Joinery theory'],
  },
]

const BOOKS = [
  {
    title: 'The Art of Joinery',
    author: 'Joseph Moxon (modern edition)',
    description: 'The oldest English-language woodworking book (1703). Still relevant. The fundamentals haven\'t changed.',
    category: 'Classic',
  },
  {
    title: 'A Timber Framer\'s Workshop',
    author: 'Steve Chappell',
    description: 'THE timber framing reference. Joint layouts, frame design, raising techniques. If you buy one book on timber framing, it\'s this one.',
    category: 'Timber Frame',
  },
  {
    title: 'Timber Frame Construction',
    author: 'Jack Sobon & Roger Schroeder',
    description: 'Practical guide to designing and building timber frames. More accessible than Chappell, great for getting started.',
    category: 'Timber Frame',
  },
  {
    title: 'Build a Classic Timber-Framed House',
    author: 'Jack Sobon',
    description: 'Step-by-step guide to building a complete timber frame house. Jack Sobon is a legend in the field.',
    category: 'Timber Frame',
  },
  {
    title: 'The Complete Japanese Joinery',
    author: 'Hideo Sato',
    description: 'Mind-bending joints from the Japanese tradition. Many apply directly to timber framing. The scarf joints alone are worth the price.',
    category: 'Joinery',
  },
  {
    title: 'The Joint Book',
    author: 'Terrie Noll',
    description: 'Visual encyclopedia of every woodworking joint you\'ll ever encounter. Great desktop reference.',
    category: 'Joinery',
  },
  {
    title: 'The Essential Woodworker',
    author: 'Robert Wearing',
    description: 'Concise, no-nonsense guide to hand-tool technique. Covers marking, sawing, planing, chiseling. Foundation skills.',
    category: 'Fundamentals',
  },
  {
    title: 'Workbenches: From Design & Theory to Construction & Use',
    author: 'Christopher Schwarz',
    description: 'Everything about the most important tool in your shop. Two bench designs that have stood the test of time.',
    category: 'Fundamentals',
  },
  {
    title: 'The Anarchist\'s Tool Chest',
    author: 'Christopher Schwarz',
    description: 'What hand tools you actually need (fewer than you think) and why. Opinionated, practical, liberating.',
    category: 'Fundamentals',
  },
  {
    title: 'Understanding Wood',
    author: 'R. Bruce Hoadley',
    description: 'The science of how wood works — grain, moisture, strength, movement. If you want to understand WHY joints work (and fail), read this.',
    category: 'Wood Science',
  },
  {
    title: 'With Saw, Plane and Chisel',
    author: 'Aldren Watson',
    description: 'Beautiful hand-drawn illustrations of traditional woodworking techniques. A joy to read and a great visual reference.',
    category: 'Classic',
  },
]

const TOOLS_ESSENTIAL = [
  {
    category: 'Layout & Marking',
    items: [
      { name: 'Marking gauge', note: 'The single most important layout tool. Wheel-type cuts cleaner than pin-type.' },
      { name: 'Combination square', note: 'Starrett or iGaging. Cheap ones aren\'t square, which defeats the purpose.' },
      { name: 'Marking knife', note: 'Spear point or wheel. Pencil lines are for rough work; knife lines are for joints.' },
      { name: 'Bevel gauge', note: 'For dovetail angles and any non-90° layout.' },
      { name: 'Speed square', note: 'For rafter cuts, bird\'s mouths, and rough framing layout.' },
    ],
  },
  {
    category: 'Chisels',
    items: [
      { name: 'Bench chisels (1/4", 1/2", 3/4", 1")', note: 'Start with these four sizes. Narex are great value. Ashley Iles or Lie-Nielsen when you\'re ready.' },
      { name: 'Mortise chisel (3/8" or 1/2")', note: 'Heavier than bench chisels — designed for lever and mallet work in mortises.' },
      { name: 'Corner chisel', note: 'For cleaning up mortise corners. Not essential but saves time on timber frame joints.' },
    ],
  },
  {
    category: 'Saws',
    items: [
      { name: 'Dovetail saw', note: 'Fine-tooth, rip-filed. Veritas or Japanese dozuki.' },
      { name: 'Tenon saw', note: 'Crosscut or rip-filed, 12-14 TPI. For tenon cheeks and shoulders.' },
      { name: 'Coping saw / Fret saw', note: 'For removing waste between dovetails. Saves enormous chisel time.' },
      { name: 'Timber framing slick', note: 'A large chisel (2-3") used with hand pressure for paring big surfaces. The signature timber framing tool.' },
    ],
  },
  {
    category: 'Sharpening',
    items: [
      { name: 'Sharpening stones (1000 / 6000 grit)', note: 'Japanese water stones or diamond plates. Dull tools make bad joints. Sharpen constantly.' },
      { name: 'Honing guide', note: 'Veritas Mk.II or Eclipse-style. Freehand is a skill, but guides give consistent results immediately.' },
      { name: 'Leather strop', note: 'Charged with green compound. A few strokes between cuts keeps the edge going.' },
    ],
  },
  {
    category: 'Timber Framing Specific',
    items: [
      { name: 'Timber framing chisel set (1.5", 2")', note: 'Longer and heavier than bench chisels. For chopping mortises in big timber.' },
      { name: 'Commander (large wooden mallet)', note: 'For driving timbers home during assembly. Hardwood head, long handle.' },
      { name: 'Drawbore pins', note: 'Metal pins for test-fitting joints. Pull the joint tight without committing pegs.' },
      { name: 'Peg riving tools (froe, shaving horse)', note: 'For making your own pegs from straight-grained oak or locust.' },
    ],
  },
]

const ORGANIZATIONS = [
  {
    name: 'Timber Framers Guild',
    url: 'https://www.tfguild.org',
    description: 'The main organization for timber framing in North America. Workshops, conferences, journal, and community. Worth joining.',
  },
  {
    name: 'Heartwood School',
    url: 'https://heartwoodschool.com',
    description: 'Timber framing school in Massachusetts. Hands-on courses from introductory to advanced. Close to MV.',
  },
  {
    name: 'North Bennet Street School',
    url: 'https://www.nbss.edu',
    description: 'Premier craft school in Boston. Furniture making, preservation carpentry, and other trades. Intensive programs.',
  },
  {
    name: 'The Woodwright\'s School',
    url: 'https://www.woodwrightschool.com',
    description: 'Roy Underhill\'s school in North Carolina. Traditional hand-tool woodworking immersion.',
  },
  {
    name: 'Fine Woodworking',
    url: 'https://www.finewoodworking.com',
    description: 'The magazine. Online archive has decades of joint techniques, project plans, and tool reviews.',
  },
  {
    name: 'Lost Art Press',
    url: 'https://lostartpress.com',
    description: 'Christopher Schwarz\'s publishing house. The best modern books on traditional woodworking.',
  },
]

export default function Resources() {
  const [tab, setTab] = useState('channels')

  return (
    <div className="p-4 max-w-2xl mx-auto w-full flex flex-col gap-5">
      <div>
        <h1
          className="font-display"
          style={{ fontSize: '1.75rem', color: 'var(--color-text-primary)', lineHeight: 1.2 }}
        >
          Resources
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          Curated channels, books, tools, and organizations
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map(t => (
          <button
            key={t}
            className={`chip${tab === t ? ' active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t === 'channels' ? 'YouTube' : t === 'books' ? 'Books' : t === 'tools' ? 'Essential Tools' : 'Schools & Orgs'}
          </button>
        ))}
      </div>

      {/* YouTube Channels */}
      {tab === 'channels' && (
        <div className="flex flex-col gap-3">
          {YOUTUBE_CHANNELS.map(ch => (
            <a
              key={ch.handle}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 flex flex-col gap-1.5"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{ch.name}</span>
                <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{ch.handle}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {ch.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {ch.focus.map(f => (
                  <span
                    key={f}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--color-accent-soft)', color: 'var(--color-accent)' }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Books */}
      {tab === 'books' && (
        <div className="flex flex-col gap-5">
          {['Timber Frame', 'Joinery', 'Fundamentals', 'Wood Science', 'Classic'].map(cat => {
            const catBooks = BOOKS.filter(b => b.category === cat)
            if (catBooks.length === 0) return null
            return (
              <div key={cat}>
                <h2
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                >
                  {cat}
                </h2>
                <div className="flex flex-col gap-2">
                  {catBooks.map(b => (
                    <div key={b.title} className="card-accent p-3">
                      <div className="font-medium text-sm">{b.title}</div>
                      <div className="text-xs" style={{ color: 'var(--color-accent)' }}>{b.author}</div>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Essential Tools */}
      {tab === 'tools' && (
        <div className="flex flex-col gap-5">
          {TOOLS_ESSENTIAL.map(cat => (
            <div key={cat.category}>
              <h2
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
              >
                {cat.category}
              </h2>
              <div className="card divide-y" style={{ borderColor: 'var(--color-border-light)' }}>
                {cat.items.map(item => (
                  <div key={item.name} className="p-3">
                    <div className="font-medium text-sm">{item.name}</div>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Organizations */}
      {tab === 'organizations' && (
        <div className="flex flex-col gap-3">
          {ORGANIZATIONS.map(org => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-accent p-4 flex flex-col gap-1"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{org.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {org.description}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
