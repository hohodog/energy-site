export const technologyPages = {
  supercapacitor: {
    theme: 'super',
    eyebrow: 'Advanced Supercapacitor Solutions',
    title: 'Supercapacitors',
    lead:
      'Ultra-high power, million-cycle durability, and instant response for rail transit, grid services, UPS ride-through, and AI data center power events.',
    metrics: [
      { value: '10-15 kW/kg', label: 'Power density', detail: 'Deck-highlighted burst power range for EDLC cells.' },
      { value: '<=10 ms', label: 'Response time', detail: 'Built for millisecond-grade load and frequency events.' },
      { value: '-40C to 70C', label: 'Operating window', detail: 'Supports harsh outdoor and industrial environments.' },
      { value: '>1M / >100k', label: 'Cycle life', detail: 'EDLC can exceed 1 million cycles; hybrid routes exceed 100,000.' },
    ],
    overview: {
      title: 'Physical Energy Storage With Fast Power Delivery',
      text:
        'The source deck frames supercapacitors as the bridge between traditional capacitors and batteries. Because energy is stored through physical ion adsorption at the electrode-electrolyte interface rather than chemical reaction, the system can charge extremely fast, respond almost instantly, and maintain performance over very high cycle counts.',
    },
    highlights: {
      title: 'What The Source Deck Emphasizes',
      items: [
        {
          title: 'Bridge Technology',
          text: 'The deck positions supercapacitors between conventional capacitors and batteries, filling the gap where peak power matters more than long discharge duration.',
        },
        {
          title: 'EDLC + Hybrid Routes',
          text: 'It separates maximum-power EDLC products from higher-energy hybrid capacitor products so buyers can match the right architecture to the application.',
        },
        {
          title: 'Hybrid Energy Storage Systems',
          text: 'One of the clearest themes in the deck is pairing supercapacitors with batteries in HESS designs to combine burst power with baseline energy capacity.',
        },
      ],
    },
    primaryFigure: {
      title: 'Power When You Need It Most',
      text:
        'The comparison slide is less about replacing batteries outright and more about clarifying roles. Supercapacitors dominate in transient events, repeated cycling, and fast charge acceptance, while batteries remain the main energy reservoir in longer-duration discharge scenarios.',
      image: '/technology/supercapacitor/comparison.png',
      alt: 'Supercapacitor versus battery comparison from the source deck',
    },
    routes: {
      title: 'Technology Routes',
      items: [
        {
          name: 'Electric Double-Layer Capacitors',
          tag: 'EDLC',
          body:
            'Activated-carbon electrodes with organic electrolyte. This is the maximum-power route in the deck, built for rapid bursts, fastest charge acceptance, and the longest cycle life.',
        },
        {
          name: 'Hybrid Capacitors',
          tag: 'HC',
          body:
            'Combines supercapacitor and battery behavior. The deck presents this route as a higher-energy option than EDLC while still keeping much faster response than standard lithium-ion.',
        },
      ],
    },
    comparison: {
      title: 'Supercapacitors Vs. Conventional Battery Roles',
      leftTitle: 'Supercapacitors',
      rightTitle: 'Batteries',
      rows: [
        {
          label: 'Storage mechanism',
          left: 'Physical ion adsorption at the interface',
          right: 'Electrochemical reaction inside the cell',
        },
        {
          label: 'Core strength',
          left: 'Peak power, fast charging, and repeated cycling',
          right: 'Sustained energy delivery over longer discharge windows',
        },
        {
          label: 'Cycle behavior',
          left: 'Very low degradation over >100,000 cycles; EDLC exceeds 1 million',
          right: 'Capacity fade grows more visible under repeated deep cycling',
        },
        {
          label: 'Best system role',
          left: 'Pulse-power layer or hybrid partner in HESS',
          right: 'Primary energy reservoir for longer-duration output',
        },
        {
          label: 'Source-deck use cases',
          left: 'Rail braking recovery, grid frequency regulation, UPS, AIDC',
          right: 'Baseline storage and mainstream energy supply duties',
        },
      ],
    },
    products: {
      title: 'Product Series In The Deck',
      items: [
        {
          name: 'Cylindrical supercapacitor cell',
          specs: ['100F / 300F / 1000F / 3000F', '2.7V / 3.0V', 'Ultra-low ESR <= 0.14 mOhm'],
          description: 'Core cell platform positioned for very high power density and strong manufacturing consistency.',
        },
        {
          name: 'Supercapacitor module',
          specs: ['16V / 48V / 160V', '16.6F / 83F / 165F', 'Integrated active voltage balancing'],
          description: 'Module products shown as plug-and-play solutions for vehicles, grid equipment, and backup systems.',
        },
        {
          name: 'Hybrid capacitor cell',
          specs: ['3.8V platform', '40-110 Wh/kg', 'Higher energy than standard EDLC'],
          description: 'Presented as the route for buyers who need more usable energy without giving up fast-response behavior.',
        },
      ],
    },
    applications: {
      title: 'Real-World Application Scenarios',
      items: [
        {
          name: 'Grid frequency regulation',
          description: 'Injects or absorbs power in milliseconds to stabilize grid frequency and support intermittent renewable integration.',
        },
        {
          name: 'Backup power, UPS, and start-stop',
          description: 'Covers short-duration ride-through and repeated high-power events where long battery dwell time is less important than reliable instant response.',
        },
        {
          name: 'Rail transit and heavy-duty vehicles',
          description: 'Captures regenerative braking energy, supports acceleration peaks, reduces energy consumption, and helps stabilize catenary voltage.',
        },
        {
          name: 'AI data centers',
          description: 'Handles millisecond server-load fluctuations during backup transitions while supporting higher-density rack deployment.',
        },
      ],
      featureImage: '/technology/supercapacitor/applications.jpeg',
      featureAlt: 'Supercapacitor application scenarios from the source deck',
    },
    buyerFit: {
      title: 'Best-Fit Buyers',
      items: [
        'Integrators building fast-response power support, power-quality, or ride-through systems',
        'Transit, port, and heavy-duty vehicle projects evaluating regenerative energy capture',
        'UPS and AI data center teams comparing capacitor-based ride-through with battery-only schemes',
        'Buyers who need cell, module, or hybrid capacitor options from Chinese suppliers',
      ],
    },
    sourcingSupport: {
      title: 'How We Help On The Sourcing Side',
      items: [
        {
          title: 'Architecture Filtering',
          text: 'We help separate EDLC, module, and hybrid capacitor routes based on pulse profile, duty cycle, and integration constraints.',
        },
        {
          title: 'Supplier Matching',
          text: 'We connect the inquiry to Chinese manufacturers whose product form and maturity fit the project stage.',
        },
        {
          title: 'Commercial Follow-Through',
          text: 'We support the first step around sample logic, MOQ, documentation, and application discussion.',
        },
      ],
    },
    cta: {
      title: 'Need a supercapacitor route for rail, UPS, grid support, or hybrid power architecture?',
      text: 'Send the target application, expected pulse profile, and preferred format and we will guide the next supplier conversation.',
    },
  },
  sodium: {
    theme: 'sodium',
    eyebrow: 'Sodium-ion Battery Solutions',
    title: 'Sodium-ion Batteries',
    lead:
      'Wide-temperature, cost-effective, resource-abundant battery chemistry for stationary storage, telecom backup, low-speed mobility, and resilient supply-chain planning.',
    metrics: [
      { value: '100-140 Wh/kg', label: 'Energy density', detail: 'Deck range for mainstream stationary-storage positioning.' },
      { value: '2C+', label: 'Charge capability', detail: 'Fast-response pathway highlighted in the source material.' },
      { value: '-40C to 70C', label: 'Operating window', detail: 'Designed for cold-region and outdoor deployment.' },
      { value: '>8,000', label: 'Cycle life', detail: 'Polyanionic routes in the deck reach 8,000-10,000 cycles.' },
    ],
    overview: {
      title: 'Proven Chemistry, More Secure Supply',
      text:
        'The PPT presents sodium-ion as a practical alternative to lithium-ion for stationary use. It follows a familiar battery architecture but replaces lithium with sodium as the charge carrier, which the deck describes as 1000 times more abundant. That translates into lower material pressure, easier line conversion, and a more resilient sourcing story.',
    },
    highlights: {
      title: 'What The Source Deck Emphasizes',
      items: [
        {
          title: 'Resource Abundance',
          text: 'Sodium is described as 1000x more abundant than lithium, making the chemistry attractive where supply concentration and long-term cost stability matter.',
        },
        {
          title: 'Line Compatibility',
          text: 'The deck highlights strong process similarity with lithium-ion cathode manufacturing, which lowers the barrier to scaling and factory conversion.',
        },
        {
          title: 'Three Pathways',
          text: 'Layered oxides, polyanionic compounds, and Prussian blue analogs are each positioned for different mixes of maturity, safety, rate performance, and LCOS.',
        },
      ],
    },
    routes: {
      title: 'Technical Pathways',
      items: [
        {
          name: 'Layered Oxides',
          tag: 'Commercially mature',
          body:
            'Well-balanced performance with manufacturing processes that stay close to existing lithium-ion lines. The deck recommends this route for commercial and industrial storage plus low-speed EVs.',
        },
        {
          name: 'Polyanionic Compounds',
          tag: 'Recommended solution',
          body:
            'Presented as the safety-first, ultra-long-life route with high thermal and structural stability and attractive LCOS for grid-scale storage.',
        },
        {
          name: 'Prussian Blue Analogs',
          tag: 'High-rate route',
          body:
            'Optimized for fast charging and strong power capability. The deck links this route to data center UPS backup power and grid frequency regulation.',
        },
      ],
    },
    comparison: {
      title: 'Sodium-ion Vs. Lithium-ion For Stationary Storage',
      leftTitle: 'Sodium-ion batteries',
      rightTitle: 'Lithium-ion batteries',
      rows: [
        {
          label: 'Resource base',
          left: '6th most abundant in Earth’s crust and widely available',
          right: 'More limited and concentrated raw-material supply',
        },
        {
          label: 'Cost logic',
          left: 'Uses lower-cost materials and aluminum foils; compatible with existing Li-ion lines',
          right: 'More exposed to lithium price volatility',
        },
        {
          label: 'Low-temperature behavior',
          left: 'Capacity retention >= 80% at -40C',
          right: 'Significant degradation below -20C',
        },
        {
          label: 'Safety and logistics',
          left: 'Safe to transport at 0V with high thermal stability',
          right: 'Requires stricter BMS control and carries higher thermal-runaway risk',
        },
        {
          label: 'Best-fit markets',
          left: 'Grid storage, telecom backup, and low-speed EVs',
          right: 'High-performance EVs and consumer electronics',
        },
      ],
    },
    products: {
      title: 'Scalable Form Factors',
      items: [
        {
          name: 'Cylindrical sodium-ion cell',
          specs: ['14 Ah', '1.5-3.4 V window', '90 Wh/kg', '3,000 cycles at 0.5C to 80% SOH'],
          description: 'Shown for two-wheelers, power tools, emergency lighting, and start-stop systems.',
        },
        {
          name: 'Prismatic sodium-ion cell',
          specs: ['160 Ah', '1.5-3.4 V window', '105 Wh/kg', '8,000 cycles at 0.5C to 70% SOH'],
          description: 'Positioned for energy storage, forklifts, golf carts, and communication backup power.',
        },
        {
          name: 'Outdoor all-in-one cabinet system',
          specs: ['115 kWh', '-40C to 60C', '0.5P / 0.5P', '5P48S configuration'],
          description: 'Packaged system for commercial and industrial storage plus grid frequency regulation.',
        },
      ],
    },
    applications: {
      title: 'Deployed Where Reliability Matters Most',
      items: [
        {
          name: 'Residential energy storage',
          description: 'Stores solar energy for home use, provides outage backup, and helps reduce electricity bills.',
          image: '/technology/sodium/residential.jpeg',
        },
        {
          name: 'C&I peak shaving',
          description: 'Charges during low-price periods and discharges at peak times to reduce commercial electricity costs.',
          image: '/technology/sodium/ci-peak.jpeg',
        },
        {
          name: 'Renewable grid integration',
          description: 'Smooths wind and solar output, shifts excess generation to peak hours, and improves grid stability.',
          image: '/technology/sodium/grid.jpeg',
        },
        {
          name: 'Telecom base stations',
          description: 'Provides reliable remote backup power in extreme temperatures with limited maintenance demand.',
          image: '/technology/sodium/telecom.jpeg',
        },
      ],
    },
    buyerFit: {
      title: 'Best-Fit Buyers',
      items: [
        'ESS integrators looking for a lithium alternative with better cost-stability logic',
        'Battery pack factories exploring lower-cost stationary-storage chemistry routes',
        'Telecom, remote backup, and cold-region projects where wide-temperature performance matters',
        'Buyers evaluating sodium-ion pilots before moving into larger-volume programs',
      ],
    },
    sourcingSupport: {
      title: 'Why Buyers Use Us For Sodium-ion',
      items: [
        {
          title: 'Supplier Shortlisting',
          text: 'We help identify which sodium-ion factories and form factors match the target system direction.',
        },
        {
          title: 'Application Matching',
          text: 'We narrow the route by use case, cost logic, operating temperature, and scaling expectations.',
        },
        {
          title: 'Cross-Border Coordination',
          text: 'We support the first round of communication, material review, and buyer-supplier handoff.',
        },
      ],
    },
    cta: {
      title: 'Looking for sodium-ion supply for storage, telecom, or a pilot battery program?',
      text: 'Share the application, target format, and target market and we will suggest the right sourcing path.',
    },
  },
  solid: {
    theme: 'solid',
    eyebrow: 'Solid-State Battery Systems',
    title: 'Solid-State Batteries',
    lead:
      'Higher energy density, stronger intrinsic safety, and wide-temperature potential for premium EV, UPS, aerospace, and high-end electronics programs.',
    metrics: [
      { value: '>=400 Wh/kg', label: 'Quasi-solid density', detail: 'The deck positions quasi-solid cells above the legacy 300 Wh/kg ceiling.' },
      { value: '>6,000', label: 'Hybrid cycle life', detail: 'Hybrid semi-solid products target long-life stationary and UPS use.' },
      { value: '-40C to 70C', label: 'Temperature target', detail: 'Wide-temperature operation is a recurring claim across the deck.' },
      { value: '2027+', label: 'Sulfide scaling', detail: 'The sulfide route is framed as a later industrialization target.' },
    ],
    overview: {
      title: 'The Next-Generation Power Standard',
      text:
        'The solid-state deck is built around three headline promises: energy density beyond legacy liquid lithium-ion, intrinsic safety, and better operation across extreme temperatures. It presents solid-state as a technology transition rather than a single chemistry, moving from semi-solid and quasi-solid products toward all-solid-state architectures.',
    },
    highlights: {
      title: 'What The Source Deck Emphasizes',
      items: [
        {
          title: 'Beyond The 300 Wh/kg Ceiling',
          text: 'The first slide anchors the value story on surpassing legacy liquid-system energy-density limits, especially in quasi-solid formats.',
        },
        {
          title: 'Three Electrolyte Routes',
          text: 'Polymer, oxide, and sulfide electrolytes are treated as distinct technical paths with different maturity, interface, and manufacturing tradeoffs.',
        },
        {
          title: 'Commercial Bridge Products',
          text: 'The deck does not wait for full all-solid-state commercialization. It already frames quasi-solid and hybrid semi-solid products as practical buyer entry points.',
        },
      ],
    },
    primaryFigure: {
      title: 'Technology Evolution Path',
      text:
        'The source material shows a staged move from liquid lithium-ion toward semi-solid, quasi-solid, and then all-solid-state batteries. That framing matters because buyers are not choosing between only “today” and “future”; they are also choosing which bridge product maturity makes sense right now.',
      image: '/technology/solid/evolution.png',
      alt: 'Solid-state battery technology evolution path',
    },
    routes: {
      title: 'Solid Electrolyte Material Routes',
      items: [
        {
          name: 'Polymer Electrolytes',
          tag: 'High maturity',
          body:
            'Best processability, good flexibility, and strong interface contact. The tradeoff in the deck is lower room-temperature ionic conductivity and a narrower electrochemical stability window.',
        },
        {
          name: 'Oxide Electrolytes',
          tag: 'Medium maturity',
          body:
            'Presented as thermally stable and highly safe, but harder to densify and thinner-film manufacturing remains costlier because of rigid interfaces.',
        },
        {
          name: 'Sulfide Electrolytes',
          tag: '2027+ target',
          body:
            'Shown as the highest-conductivity route with excellent ductility, while moisture sensitivity, H2S risk, and manufacturing cost remain the key barriers.',
        },
      ],
    },
    comparison: {
      title: 'Solid-State Vs. Legacy Liquid Lithium-ion',
      leftTitle: 'Solid-state battery',
      rightTitle: 'Legacy liquid battery',
      rows: [
        {
          label: 'Energy density',
          left: 'Quasi-solid route in the deck reaches >= 400 Wh/kg and aims beyond the legacy 300 Wh/kg ceiling',
          right: 'Lower ceiling in conventional liquid architectures',
        },
        {
          label: 'Safety direction',
          left: 'Positioned around intrinsic safety, puncture tolerance, and non-flammable system logic',
          right: 'Liquid electrolyte increases thermal-runaway concern',
        },
        {
          label: 'Temperature potential',
          left: 'Framed for reliable operation from extreme cold to high heat',
          right: 'More limited harsh-environment tolerance',
        },
        {
          label: 'Architecture',
          left: 'Solid electrolyte plus route-specific interface engineering and compact stacking',
          right: 'Separator plus liquid electrolyte system',
        },
        {
          label: 'Strategic use',
          left: 'Premium EVs, UPS, aerospace, and advanced consumer electronics',
          right: 'Mainstream applications already served by conventional Li-ion',
        },
      ],
      figureImage: '/technology/solid/comparison.png',
      figureAlt: 'Comparison of liquid and all-solid-state lithium-ion batteries',
    },
    products: {
      title: 'Product Portfolio In The Deck',
      items: [
        {
          name: 'Quasi-solid-state battery',
          specs: ['2.8 V - 4.5 V', '0.1 Ah - 50 Ah', '>=400 Wh/kg', '>1,000 cycles'],
          description: 'Positioned for high-end consumer electronics, electric vehicles, and aerospace programs.',
        },
        {
          name: 'Hybrid semi-solid-state battery',
          specs: ['2.5 V - 3.65 V', '>50 Ah', '>=170 Wh/kg', '>6,000 cycles'],
          description: 'The deck links this route to energy storage systems and UPS infrastructure.',
        },
      ],
    },
    applications: {
      title: 'Strategic Application Scenarios',
      items: [
        {
          name: 'Premium electric vehicles',
          description: 'Targets 1000 km+ range ambitions while using higher density and intrinsic safety to simplify pack-level cooling.',
          image: '/technology/solid/ev.png',
        },
        {
          name: 'Data center backup power',
          description: 'Uses long cycle life and non-flammable characteristics for dense, zero-maintenance UPS environments.',
          image: '/technology/solid/datacenter.png',
        },
        {
          name: 'Aerospace and defense',
          description: 'Matches extreme power-to-weight demands and dependable operation from -40C to +70C.',
          image: '/technology/solid/aerospace.png',
        },
        {
          name: 'High-end consumer electronics',
          description: 'Uses compact stacking and flexible form factors to extend runtime inside minimal device footprints.',
          image: '/technology/solid/consumer.png',
        },
      ],
    },
    buyerFit: {
      title: 'Best-Fit Buyers',
      items: [
        'Teams exploring advanced battery concepts for premium or differentiated products',
        'Projects comparing hybrid, quasi-solid, and future all-solid-state routes',
        'Buyers in aerospace, premium mobility, UPS, or high-end electronics evaluation',
        'Companies that need a practical bridge into Chinese solid-state suppliers',
      ],
    },
    sourcingSupport: {
      title: 'How We Support Solid-State Sourcing',
      items: [
        {
          title: 'Route Positioning',
          text: 'We help clarify whether the project is better aligned with hybrid, quasi-solid, or later-stage solid-state routes.',
        },
        {
          title: 'Supplier Introduction',
          text: 'We connect relevant Chinese suppliers based on maturity, form factor, and commercial readiness.',
        },
        {
          title: 'Expectation Alignment',
          text: 'We help frame realistic timelines, technical questions, and early-stage commercial communication.',
        },
      ],
    },
    cta: {
      title: 'Evaluating solid-state routes for a premium product or future battery platform?',
      text: 'Tell us the application, target maturity, and expected format and we will direct you to the right discussion.',
    },
  },
}
