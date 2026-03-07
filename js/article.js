document.addEventListener('DOMContentLoaded', () => {
    const ARTICLES = {
        'memory-defragmentation': {
            title: 'Memory Defragmentation with Two Pointers',
            domain: 'Operating Systems',
            readTime: '5 min read',
            paragraphs: [
                'Move Zeroes is a compact version of how memory compaction works in operating systems. Valid data blocks are moved left together, and empty space is grouped on the right. This keeps active memory contiguous and faster to scan.',
                'The two-pointer pattern maps directly to a compactor. The read pointer scans blocks, and the write pointer marks the next valid destination. When the reader sees non-empty data, we write it at the writer position and move both forward.',
                'The key engineering takeaway is not just O(n) time, but stable ordering with in-place updates. That same idea appears in stream compaction, log cleanup, and heap memory maintenance.'
            ],
            links: [
                { href: 'problem.html?id=move-zeroes', icon: 'fa-solid fa-code', label: 'Open Related Problem' },
                { href: 'problems.html', icon: 'fa-solid fa-list-check', label: 'Browse Problems' }
            ]
        },
        'rate-limiter-patterns': {
            title: 'Rate Limiter Patterns for Reliable APIs',
            domain: 'Backend APIs',
            readTime: '6 min read',
            paragraphs: [
                'Rate limiting protects systems from sudden bursts and abuse. Instead of accepting all requests, the service enforces a policy per user, token, or IP to keep latency and availability stable.',
                'Fixed window counters are simple and fast, but can allow boundary spikes. Sliding window logs improve fairness by checking recent history. Token bucket models allow controlled bursts while maintaining a long-term request budget.',
                'In production, rate limiting is part of reliability engineering: it preserves downstream services, keeps noisy clients isolated, and gives predictable performance during traffic peaks.'
            ],
            links: [
                { href: 'problems.html', icon: 'fa-solid fa-list-check', label: 'Browse Problems' }
            ]
        },
        'load-balancing': {
            title: 'Load Balancing as Scheduling Strategy',
            domain: 'Distributed Systems',
            readTime: '6 min read',
            paragraphs: [
                'Load balancing distributes incoming requests across multiple servers so no single instance overloads while others stay idle. In algorithm terms, this is resource scheduling under changing demand.',
                'Round robin gives equal distribution under uniform workloads. Least connections adapts better for uneven task durations. Weighted strategies account for hardware differences across nodes.',
                'Production balancing also needs health checks, timeout handling, and failover behavior. Scheduling logic alone is not enough unless the router can detect unhealthy nodes quickly.'
            ],
            links: [
                { href: 'problems.html', icon: 'fa-solid fa-list-check', label: 'Browse Problems' }
            ]
        },
        'query-optimization': {
            title: 'Query Optimization and Index Thinking',
            domain: 'Database Engineering',
            readTime: '7 min read',
            paragraphs: [
                'Query optimization is the practice of reducing data scanned per request. The same logic appears in DSA when replacing linear scans with indexed or tree-based lookups.',
                'Indexes trade write cost and storage for faster reads. Composite indexes help with multi-column filters, while covering indexes can avoid extra table fetches for common query shapes.',
                'The deeper skill is reasoning about workload patterns. You choose structures based on read/write ratio, selectivity, and latency budgets, not just asymptotic complexity.'
            ],
            links: [
                { href: 'problems.html', icon: 'fa-solid fa-list-check', label: 'Browse Problems' }
            ]
        }
    };

    const articleId = new URLSearchParams(window.location.search).get('id');
    const article = articleId ? ARTICLES[articleId] : null;

    const shell = document.getElementById('article-shell');
    const notFound = document.getElementById('article-not-found');

    if (!article) {
        shell.style.display = 'none';
        notFound.style.display = 'block';
        return;
    }

    document.title = `${article.title} | Semicolon Read`;
    const metaDescription = document.getElementById('article-meta-description');
    if (metaDescription) {
        metaDescription.setAttribute('content', article.paragraphs[0] || metaDescription.content);
    }

    const domainEl = document.getElementById('article-domain');
    const timeEl = document.getElementById('article-time');
    const titleEl = document.getElementById('article-title');
    const bodyEl = document.getElementById('article-body');
    const ctaRow = document.getElementById('article-cta-row');

    domainEl.textContent = article.domain;
    timeEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${article.readTime}`;
    titleEl.textContent = article.title;
    bodyEl.innerHTML = article.paragraphs.map(text => `<p>${text}</p>`).join('');
    ctaRow.innerHTML = article.links
        .map(
            link => `<a href="${link.href}" class="article-link-btn"><i class="${link.icon}"></i> ${link.label}</a>`
        )
        .join('');
});
